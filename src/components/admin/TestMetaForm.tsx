"use client";

import { useState, useTransition } from "react";
import { saveTestMeta } from "@/app/admin/(panel)/exams/actions";

type Props = {
  testId: string;
  title: string;
  description: string;
  timeLimit: number | null;
  published: boolean;
};

export default function TestMetaForm(p: Props) {
  const [title, setTitle] = useState(p.title);
  const [description, setDescription] = useState(p.description);
  const [timeLimit, setTimeLimit] = useState<string>(
    p.timeLimit ? String(p.timeLimit) : ""
  );
  const [published, setPublished] = useState(p.published);
  const [pending, start] = useTransition();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    start(async () => {
      await saveTestMeta(p.testId, {
        title,
        description,
        timeLimit: timeLimit ? parseInt(timeLimit, 10) : null,
        published,
      });
      setSaved(true);
    });
  }

  return (
    <div className="bg-white border border-border-subtle rounded-xl p-6 mb-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1">Название</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border-border-subtle bg-surface-container-low px-4 py-2.5 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full rounded-lg border-border-subtle bg-surface-container-low px-4 py-2.5 focus:border-primary focus:ring-primary resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Время (мин)
          </label>
          <input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="w-full rounded-lg border-border-subtle bg-surface-container-low px-4 py-2.5 focus:border-primary focus:ring-primary"
          />
        </div>
        <label className="flex items-center gap-3 mt-6 cursor-pointer">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 rounded text-primary focus:ring-primary"
          />
          <span className="font-semibold">Опубликован</span>
        </label>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={save}
          disabled={pending}
          className="btn-primary px-6 py-2.5 rounded-lg font-semibold disabled:opacity-60"
        >
          {pending ? "Сохраняем…" : "Сохранить"}
        </button>
        {saved && !pending && (
          <span className="text-clever-green text-sm font-semibold">
            Сохранено ✓
          </span>
        )}
      </div>
    </div>
  );
}
