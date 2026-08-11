import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Icon from "@/components/Icon";
import TestMetaForm from "@/components/admin/TestMetaForm";
import QuestionEditor from "@/components/admin/QuestionEditor";
import AddQuestionButton from "@/components/admin/AddQuestionButton";
import BulkImport from "@/components/admin/BulkImport";

export const dynamic = "force-dynamic";

export default async function EditTestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const test = await prisma.test.findUnique({
    where: { id },
    include: {
      questions: {
        orderBy: { order: "asc" },
        include: { options: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!test) notFound();

  return (
    <div>
      <Link
        href="/admin/exams"
        className="inline-flex items-center gap-1 text-sm font-semibold text-on-surface-variant hover:text-primary mb-4"
      >
        ← Все тесты
      </Link>
      <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-6">
        {test.title}
      </h1>

      <TestMetaForm
        testId={test.id}
        title={test.title}
        description={test.description ?? ""}
        timeLimit={test.timeLimit}
        published={test.published}
      />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-on-surface">
          Вопросы ({test.questions.length})
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        {test.questions.map((q, i) => (
          <QuestionEditor
            key={q.id}
            testId={test.id}
            index={i}
            question={{
              id: q.id,
              text: q.text,
              options: q.options.map((o) => ({
                id: o.id,
                text: o.text,
                correct: o.correct,
              })),
            }}
          />
        ))}
      </div>

      <BulkImport testId={test.id} />

      <AddQuestionButton testId={test.id} />

      <p className="text-xs text-on-surface-variant mt-4 flex items-center gap-1">
        <Icon name="help" className="text-sm" />
        Отметьте кружком правильный вариант. Не забудьте «Сохранить вопрос».
      </p>
    </div>
  );
}
