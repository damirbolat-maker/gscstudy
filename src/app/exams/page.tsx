import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Экзамены — IELTS и Digital SAT | GSC Study",
  description:
    "Подготовка к IELTS и Digital SAT в GSC Study с пробными тестами и прогнозной оценкой до реального экзамена.",
};

export default function ExamsPage() {
  return (
    <PagePlaceholder
      eyebrow="Экзамены"
      title="Подготовка к IELTS и Digital SAT"
      subtitle="Пробные тесты и прогнозная оценка до реального экзамена. Средний балл наших студентов по IELTS — 7.0+."
    />
  );
}
