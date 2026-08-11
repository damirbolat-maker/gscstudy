"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/useLocale";
import { getTestsDict } from "@/i18n/pages/tests";

type Option = { id: string; text: string };
type Question = { id: string; text: string; options: Option[] };

type Props = {
  slug: string;
  title: string;
  description?: string | null;
  timeLimit?: number | null;
  questions: Question[];
};

type Step = "intro" | "quiz" | "loading" | "done" | "error";

export default function TestRunner({
  slug,
  title,
  description,
  timeLimit,
  questions,
}: Props) {
  const t = getTestsDict(useLocale());
  const [step, setStep] = useState<Step>("intro");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; total: number; level: string } | null>(null);

  const total = questions.length;
  const q = questions[idx];
  const chosen = q ? answers[q.id] : undefined;
  const progress = Math.round((idx / total) * 100);

  async function submit(finalAnswers: Record<string, string>) {
    setStep("loading");
    try {
      const res = await fetch(`/api/tests/${slug}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, answers: finalAnswers }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      setResult({ score: data.score, total: data.total, level: data.level });
      setStep("done");
    } catch {
      setStep("error");
    }
  }

  function choose(optionId: string) {
    const next = { ...answers, [q.id]: optionId };
    setAnswers(next);
    // небольшая пауза и переход дальше
    setTimeout(() => {
      if (idx + 1 < total) setIdx(idx + 1);
      else submit(next);
    }, 220);
  }

  // ---------- INTRO ----------
  if (step === "intro") {
    return (
      <Card>
        <div className="text-center">
          <span className="tag-pill">{t.intro.eyebrow}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="text-gradient">{title}</span>
          </h1>
          {description && (
            <p className="text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Meta label={t.intro.metaQuestions} value={String(total)} />
          <Meta label={t.intro.metaTime} value={timeLimit ? `${timeLimit} ${t.intro.minutes}` : t.intro.noLimit} />
          <Meta label={t.intro.metaCost} value={t.intro.free} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep("quiz");
          }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label={t.intro.nameLabel}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder={t.intro.namePh}
              required
            />
            <Field
              label={t.intro.phoneLabel}
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              placeholder={t.intro.phonePh}
              type="tel"
              required
            />
          </div>
          <Field
            label={t.intro.emailLabel}
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            placeholder={t.intro.emailPh}
            type="email"
          />
          <label className="flex items-start gap-3 text-sm text-on-surface-variant pt-1">
            <input type="checkbox" required className="mt-1 rounded text-primary focus:ring-primary" />
            {t.intro.consent}
          </label>
          <button
            type="submit"
            className="btn-primary shimmer w-full py-4 rounded-xl font-bold text-lg mt-2"
          >
            {t.intro.startBtn}
          </button>
        </form>
      </Card>
    );
  }

  // ---------- QUIZ ----------
  if (step === "quiz" && q) {
    return (
      <Card>
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold text-on-surface-variant mb-2.5">
            <span>
              {t.quiz.question} {idx + 1} {t.quiz.of} {total}
            </span>
            <span className="number-gradient font-extrabold">{progress}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-8 leading-snug">
          {q.text}
        </h2>

        <div className="space-y-3">
          {q.options.map((o) => {
            const active = chosen === o.id;
            return (
              <button
                key={o.id}
                onClick={() => choose(o.id)}
                className={`group w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border-2 font-medium transition-all duration-200 ${
                  active
                    ? "border-primary bg-primary/5 text-primary shadow-premium"
                    : "border-border-subtle bg-surface hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-premium"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-border-subtle group-hover:border-primary/50"
                  }`}
                >
                  {active && <Icon name="check" className="text-base" />}
                </span>
                <span className="flex-1">{o.text}</span>
              </button>
            );
          })}
        </div>

        {idx > 0 && (
          <button
            onClick={() => setIdx(idx - 1)}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            {t.quiz.back}
          </button>
        )}
      </Card>
    );
  }

  // ---------- LOADING ----------
  if (step === "loading") {
    return (
      <Card>
        <div className="py-16 text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-on-surface-variant">{t.loading.text}</p>
        </div>
      </Card>
    );
  }

  // ---------- DONE ----------
  if (step === "done" && result) {
    return (
      <Card>
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-clever-green/10 text-clever-green flex items-center justify-center mx-auto mb-6 shadow-premium">
            <Icon name="check" className="text-3xl" />
          </div>
          <p className="text-on-surface-variant mb-4 text-sm uppercase tracking-wider font-semibold">{t.result.yourResult}</p>
          <div className="inline-flex items-center justify-center card-premium card-ring rounded-2xl bg-surface-container-lowest px-10 py-5 mb-5">
            <div className="text-4xl md:text-5xl font-extrabold number-gradient leading-none">
              {result.level}
            </div>
          </div>
          <p className="text-on-surface-variant mb-8">
            {t.result.correctAnswers}{" "}
            <b className="text-lg"><CountUp value={result.score} className="number-gradient font-extrabold" /></b>{" "}
            {t.result.of} {result.total}
          </p>
          <div className="glass-card rounded-xl p-5 text-sm text-on-surface-variant mb-8">
            {t.result.note}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${site.whatsapp.link}?text=${encodeURIComponent(
                `${t.result.waIntro}${title}${t.result.waResult}${result.level}`
              )}`}
              target="_blank"
              rel="noopener"
              className="btn-primary px-6 py-3 rounded-xl font-bold"
            >
              {t.result.waButton}
            </a>
            <Link href="/" className="btn-outline px-6 py-3 rounded-xl font-bold bg-white">
              {t.result.home}
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  // ---------- ERROR ----------
  return (
    <Card>
      <div className="py-12 text-center">
        <p className="text-error font-semibold mb-4">
          {t.error.text}
        </p>
        <button
          onClick={() => submit(answers)}
          className="btn-primary px-6 py-3 rounded-xl font-bold"
        >
          {t.error.retry}
        </button>
      </div>
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto card-premium card-ring rounded-2xl bg-white p-7 md:p-12 shadow-premium">
      {children}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-[6rem] rounded-xl border border-border-subtle bg-surface-container-low px-4 py-3 text-center">
      <div className="font-extrabold text-primary text-xl leading-none mb-1">{value}</div>
      <div className="text-[0.7rem] uppercase tracking-wider text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-on-surface mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-subtle bg-surface-container-low px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all"
      />
    </div>
  );
}
