"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function saveTestMeta(
  testId: string,
  data: { title: string; description: string; timeLimit: number | null; published: boolean }
) {
  await prisma.test.update({
    where: { id: testId },
    data: {
      title: data.title,
      description: data.description || null,
      timeLimit: data.timeLimit,
      published: data.published,
    },
  });
  revalidatePath(`/admin/exams/${testId}`);
  revalidatePath("/admin/exams");
}

export async function addQuestion(testId: string) {
  const count = await prisma.question.count({ where: { testId } });
  await prisma.question.create({
    data: {
      testId,
      order: count,
      text: "Новый вопрос",
      options: {
        create: [
          { order: 0, text: "Вариант 1", correct: true },
          { order: 1, text: "Вариант 2" },
        ],
      },
    },
  });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function deleteQuestion(testId: string, questionId: string) {
  await prisma.question.delete({ where: { id: questionId } });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function saveQuestion(
  testId: string,
  questionId: string,
  text: string,
  options: { id: string; text: string }[],
  correctId: string
) {
  await prisma.question.update({ where: { id: questionId }, data: { text } });
  for (const o of options) {
    await prisma.option.update({
      where: { id: o.id },
      data: { text: o.text, correct: o.id === correctId },
    });
  }
  revalidatePath(`/admin/exams/${testId}`);
}

export async function addOption(testId: string, questionId: string) {
  const count = await prisma.option.count({ where: { questionId } });
  await prisma.option.create({
    data: { questionId, order: count, text: `Вариант ${count + 1}` },
  });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function deleteOption(testId: string, optionId: string) {
  await prisma.option.delete({ where: { id: optionId } });
  revalidatePath(`/admin/exams/${testId}`);
}
