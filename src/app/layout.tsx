import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "GSC Study — языковые курсы, IELTS и Digital SAT, поступление за рубеж | Казахстан",
  description:
    "GSC Study — образование без границ с 2011 года. Языковые курсы, подготовка к IELTS и Digital SAT, поступление в вузы Великобритании, Германии, Канады, ОАЭ и США. Офисы в Алматы и Астане.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="antialiased">
        <div className="fixed inset-0 z-[-1] dots-pattern pointer-events-none" />
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
