"use client";

import { useTransition } from "react";
import Icon from "@/components/Icon";
import { addQuestion } from "@/app/admin/(panel)/exams/actions";

export default function AddQuestionButton({ testId }: { testId: string }) {
  const [pending, start] = useTransition();
  return (
    <button
      onClick={() => start(() => addQuestion(testId))}
      disabled={pending}
      className="w-full py-4 border-2 border-dashed border-outline-variant/60 rounded-xl flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all font-semibold disabled:opacity-60"
    >
      <Icon name="add" /> {pending ? "Добавляем…" : "Добавить вопрос"}
    </button>
  );
}
