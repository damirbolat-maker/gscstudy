import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "О нас — GSC Study",
  description:
    "GSC Study — образование без границ с 2011 года. 15 000+ студентов, центры в Алматы и Астане.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="О компании"
      title="Образование без границ с 2011 года"
      subtitle="15 лет на рынке, более 15 000 выпускников, центры в Алматы и Астане. Мы ведём студента от первого теста уровня до зачисления в университет."
    />
  );
}
