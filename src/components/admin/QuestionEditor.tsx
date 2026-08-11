"use client";

import { useState, useTransition } from "react";
import Icon from "@/components/Icon";
import {
  saveQuestion,
  deleteQuestion,
  addOption,
  deleteOption,
} from "@/app/admin/(panel)/exams/actions";

type Option = { id: string; text: string; correct: boolean };
type Props = {
  testId: string;
  index: number;
  question: { id: string; text: string; options: Option[] };
};

export default function QuestionEditor({ testId, index, question }: Props) {
  const [text, setText] = useState(question.text);
  const [opts, setOpts] = useState(
    question.options.map((o) => ({ id: o.id, text: o.text }))
  );
  const [correctId, setCorrectId] = useState(
    question.options.find((o) => o.correct)?.id ?? question.options[0]?.id ?? ""
  );
  const [pending, start] = useTransition();
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white border border-border-subtle rounded-xl p-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-sm font-bold text-on-surface-variant mt-2">
          #{index + 1}
        </span>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setSaved(false);
          }}
          rows={2}
          className="flex-1 rounded-lg border-border-subtle bg-surface-container-low px-4 py-2.5 focus:border-primary focus:ring-primary resize-none font-medium"
        />
        <button
          onClick={() =>
            confirm("Удалить вопрос?") &&
            start(() => deleteQuestion(testId, question.id))
          }
          className="text-outline hover:text-error p-2"
          title="Удалить вопрос"
        >
          <Icon name="more_vert" />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        {opts.map((o) => (
          <div key={o.id} className="flex items-center gap-3">
            <input
              type="radio"
              name={`correct-${question.id}`}
              checked={correctId === o.id}
              onChange={() => {
                setCorrectId(o.id);
                setSaved(false);
              }}
              className="w-5 h-5 text-primary focus:ring-primary shrink-0"
              title="Правильный ответ"
            />
            <input
              value={o.text}
              onChange={(e) => {
                setOpts(opts.map((x) => (x.id === o.id ? { ...x, text: e.target.value } : x)));
                setSaved(false);
              }}
              className={`flex-1 rounded-lg px-4 py-2 border ${
                correctId === o.id
                  ? "border-clever-green/50 bg-clever-green/5"
                  : "border-border-subtle bg-surface-container-low"
              } focus:border-primary focus:ring-primary`}
            />
            {opts.length > 2 && (
              <button
                onClick={() =>
                  start(() => deleteOption(testId, o.id))
                }
                className="text-outline hover:text-error p-1"
                title="Удалить вариант"
              >
                <Icon name="add" className="rotate-45 text-lg" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setSaved(false);
            start(async () => {
              await saveQuestion(testId, question.id, text, opts, correctId);
              setSaved(true);
            });
          }}
          disabled={pending}
          className="btn-primary px-5 py-2 rounded-lg font-semibold text-sm disabled:opacity-60"
        >
          {pending ? "…" : "Сохранить вопрос"}
        </button>
        <button
          onClick={() => start(() => addOption(testId, question.id))}
          className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
        >
          <Icon name="add" className="text-sm" /> Вариант
        </button>
        {saved && !pending && (
          <span className="text-clever-green text-sm font-semibold">✓</span>
        )}
      </div>
    </div>
  );
}
