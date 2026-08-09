import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Языковая школа — GSC Study",
  description:
    "Английский от A1 до C2 и китайский язык в GSC Study. Общий, академический, деловой и детский форматы. Группы, индивидуально и онлайн.",
};

export default function SchoolPage() {
  return (
    <PagePlaceholder
      eyebrow="Языковая школа"
      title="Английский и китайский — от A1 до C2"
      subtitle="Общий, академический, деловой и детский форматы. Группы до восьми человек, индивидуально или онлайн."
    />
  );
}
