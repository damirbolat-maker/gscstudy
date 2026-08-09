"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LeadForm from "./LeadForm";

const slides = [
  {
    tag: { text: "GSC Study", accent: false },
    title: (
      <>
        Образование <br />
        <span className="text-primary">без границ</span>
      </>
    ),
    text: "Языковые курсы, подготовка к международным экзаменам и поступление в зарубежные университеты — от первого теста уровня до зачисления.",
    primary: { label: "Подобрать программу", href: "#consult", accent: false },
    secondary: { label: "Смотреть курсы", href: "/school" },
  },
  {
    tag: { text: "Набор 2026", accent: true },
    title: (
      <>
        Старт групп <br />
        <span className="text-secondary">каждый месяц</span>
      </>
    ),
    text: "Группы формируем по результатам теста уровня — от A1 до C2. До восьми человек, чтобы говорил каждый.",
    primary: { label: "Пройти тест уровня", href: "#consult", accent: true },
    secondary: { label: "Узнать расписание", href: "#consult" },
  },
  {
    tag: { text: "Приёмная кампания", accent: false },
    title: (
      <>
        Поступление в вузы <br />
        <span className="text-primary">25+ стран</span>
      </>
    ),
    text: "Подбираем университет под аттестат и бюджет, готовим документы и ведём до зачисления — UK, Германия, Канада, ОАЭ, США.",
    primary: { label: "Записаться на курсы", href: "#consult", accent: false },
    secondary: { label: "Консультация по поступлению", href: "#consult" },
  },
];

const features = [
  "Группы до восьми человек, индивидуально или онлайн",
  "Тест уровня и пробный урок — бесплатно",
  "Сопровождение до зачисления в университет",
];

const stats = [
  { value: "15 лет", label: "на рынке, с 2011 года" },
  { value: "15 000+", label: "студентов обучено" },
  { value: "7.0+", label: "средний балл IELTS" },
  { value: "25+", label: "стран поступления" },
  { value: "2", label: "центра: Алматы и Астана", extra: true },
];

export default function Hero() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section min-h-[90vh] flex items-center pt-24 pb-32 rounded-b-[3rem] shadow-sm">
      <div className="hero-blob w-[600px] h-[600px] top-0 left-[-200px]" />
      <div className="hero-blob w-[500px] h-[500px] bottom-0 right-[-100px] bg-secondary" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: slider */}
          <div className="lg:col-span-7">
            <div className="relative">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`hero-slide ${i === current ? "active" : ""}`}
                >
                  <span
                    className={`tag-pill ${
                      slide.tag.accent ? "text-secondary bg-secondary-fixed" : ""
                    }`}
                  >
                    {slide.tag.text}
                  </span>
                  <h1 className="text-5xl lg:text-[4rem] font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                    {slide.text}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={slide.primary.href}
                      className={`${
                        slide.primary.accent ? "btn-accent" : "btn-primary"
                      } px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl`}
                    >
                      {slide.primary.label}
                    </a>
                    <Link
                      href={slide.secondary.href}
                      className="btn-outline px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2 bg-white"
                    >
                      {slide.secondary.label}
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Slider dots */}
              <div className="flex items-center gap-3 mt-12">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Слайд ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`slider-dot ${i === current ? "active" : ""}`}
                  />
                ))}
              </div>

              {/* Features */}
              <ul className="mt-12 space-y-4 text-gray-600 font-medium">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl transform rotate-3 scale-105 blur-lg" />
            <LeadForm />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-24 pt-12 border-t border-gray-200/50">
          {stats.map((s) => (
            <div
              key={s.label}
              className={
                s.extra ? "col-span-2 md:col-span-4 lg:col-span-1 hidden lg:block" : ""
              }
            >
              <div className="text-4xl font-extrabold text-primary">
                {s.value}
              </div>
              <div className="text-base font-medium text-gray-600 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
