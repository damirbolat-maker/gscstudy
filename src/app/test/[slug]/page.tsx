import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestRunner from "@/components/test/TestRunner";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = await prisma.test.findUnique({ where: { slug } });
  return { title: test ? `${test.title} — тест уровня | GSC Study` : "Тест" };
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = await prisma.test.findUnique({
    where: { slug },
    include: {
      questions: {
        orderBy: { order: "asc" },
        include: { options: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!test || !test.published || test.questions.length === 0) notFound();

  // не передаём в браузер флаг правильного ответа
  const questions = test.questions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options.map((o) => ({ id: o.id, text: o.text })),
  }));

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background bg-dots">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <TestRunner
            slug={test.slug}
            title={test.title}
            description={test.description}
            timeLimit={test.timeLimit}
            questions={questions}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
