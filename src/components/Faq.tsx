"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/useLocale";
import { getDictionary } from "@/i18n/dictionaries";

export default function Faq() {
  const locale = useLocale();
  const t = getDictionary(locale).faq;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 md:py-28 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm mb-0 rounded-b-none border-b-0"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t.title}
          </h2>
        </div>
        <div className="space-y-4">
          {t.items.map((item, i) => (
            <div
              key={i}
              className={`faq-item border-gray-200/60 ${active === i ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span>{item[0]}</span>
                <svg className="w-5 h-5 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </button>
              <div className="faq-answer">
                <p className="py-4 text-gray-700">{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
