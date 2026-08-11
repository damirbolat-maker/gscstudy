"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/i18n/useLocale";
import { getSchoolDict } from "@/i18n/pages/school";

export default function SchoolPrograms() {
  const locale = useLocale();
  const t = getSchoolDict(locale);
  const courses = t.courses;
  const filters = t.filters;

  const [active, setActive] = useState<string>("all");

  const shown = courses.filter((c) => active === "all" || c.cat === active);

  return (
    <section
      id="programs-sec"
      className="py-[120px] bg-surface-container-low border-t border-border-subtle"
    >
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="tag-pill">
            {t.programs.eyebrow}
          </span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            {t.programs.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t.programs.text}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-6 py-2 rounded-full font-button text-sm border-2 transition-colors ${
                active === f.key
                  ? "border-primary bg-primary text-white"
                  : "border-primary/20 text-primary hover:border-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((c) => (
            <div
              key={c.title}
              className={`card-spotlight card-ring rounded-2xl p-8 flex flex-col ${
                c.highlight
                  ? "bg-secondary/5 border border-secondary/20 shadow-premium hover-lift"
                  : "card-premium"
              }`}
            >
              <div className="mb-6">
                <span
                  className={`inline-block px-3 py-1 rounded-md font-label-caps text-[11px] uppercase mb-4 ${
                    c.highlight
                      ? "bg-secondary text-white"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {c.tag}
                </span>
                <h3 className="font-headline-md text-[24px] text-primary mb-3">
                  {c.title}
                </h3>
                <p className="font-body-md text-on-surface-variant">{c.desc}</p>
              </div>
              <div className="space-y-3 mb-8 flex-1">
                {c.rows.map(([k, v]) => (
                  <div
                    key={k}
                    className={`flex justify-between border-b pb-2 ${
                      c.highlight ? "border-secondary/10" : "border-border-subtle"
                    }`}
                  >
                    <span className="text-sm text-on-surface-variant">{k}</span>
                    <b className="text-sm text-primary">{v}</b>
                  </div>
                ))}
              </div>
              <a
                className="link-underline inline-flex w-fit items-center text-secondary font-button group hover:text-[#8f0048] transition-colors"
                href="#consult"
              >
                {t.programs.signUp}
                <Icon
                  name="arrow_forward"
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
