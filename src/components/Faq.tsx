"use client";

import { useState } from "react";

const faqs = [
  {
    q: "С какого возраста можно начать обучение?",
    a: "Мы принимаем детей с 6 лет на специальные детские программы.",
  },
  {
    q: "Сколько длится курс подготовки к IELTS?",
    a: "Стандартный курс длится 2-3 месяца в зависимости от вашего текущего уровня.",
  },
  {
    q: "Вы помогаете с визой?",
    a: "Да, мы оказываем полную визовую поддержку для наших студентов.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm mb-0 rounded-b-none border-b-0"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Частые вопросы
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item border-gray-200/60 ${
                active === i ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span>{item.q}</span>
                <svg
                  className="w-5 h-5 faq-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4v16m8-8H4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p className="py-4 text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
