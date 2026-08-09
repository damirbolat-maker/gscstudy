import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Поступление за рубеж — GSC Study",
  description:
    "Подбор университета, подготовка документов и сопровождение до зачисления в вузы 25+ стран: Великобритания, Германия, Канада, ОАЭ, США.",
};

export default function AbroadPage() {
  return (
    <PagePlaceholder
      eyebrow="За рубеж"
      title="Поступление в вузы 25+ стран"
      subtitle="Подбираем университет под аттестат и бюджет, готовим документы и ведём до зачисления — UK, Германия, Канада, ОАЭ, США."
    />
  );
}
