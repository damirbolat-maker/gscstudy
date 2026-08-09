import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Языковые лагеря — GSC Study",
  description:
    "Языковые смены для школьников 12–17 лет с сопровождающим от GSC Study. Лето 2026.",
};

export default function CampsPage() {
  return (
    <PagePlaceholder
      eyebrow="Лагеря"
      title="Языковые лагеря для школьников"
      subtitle="Смены для ребят 12–17 лет с сопровождающим от GSC Study. Практика языка каждый день и культурная программа. Лето 2026."
    />
  );
}
