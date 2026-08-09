"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

type Status = "idle" | "loading" | "success" | "error";

const info = [
  { icon: "videocam", label: "Формат", value: "Zoom или встреча в центре" },
  { icon: "schedule", label: "Длительность", value: "около 45 минут" },
];

export default function AbroadConsult() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "Великобритания",
    level: "Foundation",
    year: "2026",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "abroad-consult" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="consult" className="py-24 bg-primary relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4">
            Первый шаг
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Разберём ваши шансы{" "}
            <span className="text-secondary bg-white px-2 rounded-lg">
              бесплатно
            </span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-lg">
            Посмотрим аттестат и баллы, назовём реалистичный список стран и вузов и
            скажем, чего не хватает.
          </p>
          <div className="space-y-6 mb-10">
            {info.map((it) => (
              <div key={it.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon name={it.icon} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-bold">
                    {it.label}
                  </div>
                  <div className="font-bold">{it.value}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="payments" className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-bold">
                  Стоимость
                </div>
                <div className="font-bold text-secondary bg-white px-2 rounded inline-block">
                  бесплатно
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              href={`tel:${site.phone.tel}`}
            >
              <Icon name="call" className="text-sm" />
              {site.phone.display}
            </a>
            <a
              className="bg-whatsapp-green text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-whatsapp-green/20"
              href={`${site.whatsapp.link}?text=Здравствуйте!%20Хочу%20поступить%20за%20рубеж`}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          {status === "success" ? (
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-2xl relative text-center">
              <div className="w-16 h-16 bg-clever-green/10 text-clever-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="check" className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-sm text-on-surface-variant">
                Менеджер свяжется с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-on-surface mb-2">
                Подобрать программу
              </h3>
              <p className="text-sm text-on-surface-variant mb-8">
                Менеджер свяжется с вами в ближайшее время.
              </p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2"
                      htmlFor="a-name"
                    >
                      Имя
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                      id="a-name"
                      placeholder="Айгерим"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2"
                      htmlFor="a-phone"
                    >
                      Телефон
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                      id="a-phone"
                      placeholder="+7 700 000 00 00"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2"
                      htmlFor="a-country"
                    >
                      Страна
                    </label>
                    <select
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                      id="a-country"
                      value={form.country}
                      onChange={(e) =>
                        setForm({ ...form, country: e.target.value })
                      }
                    >
                      <option>Великобритания</option>
                      <option>Германия</option>
                      <option>Канада</option>
                      <option>ОАЭ</option>
                      <option>США</option>
                      <option>Ещё не решил(а)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2"
                      htmlFor="a-level"
                    >
                      Уровень
                    </label>
                    <select
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                      id="a-level"
                      value={form.level}
                      onChange={(e) => setForm({ ...form, level: e.target.value })}
                    >
                      <option>Foundation</option>
                      <option>Bachelor</option>
                      <option>Pre-Master</option>
                      <option>Пока не знаю</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2"
                    htmlFor="a-year"
                  >
                    Год поступления
                  </label>
                  <select
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                    id="a-year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                  >
                    <option>2026</option>
                    <option>2027</option>
                    <option>Ещё не решил(а)</option>
                  </select>
                </div>
                <label className="flex items-start gap-3 cursor-pointer pt-2">
                  <input
                    className="mt-1 rounded text-primary focus:ring-primary border-border-subtle"
                    required
                    type="checkbox"
                  />
                  <span className="text-xs text-on-surface-variant leading-tight">
                    Согласен(а) на обработку персональных данных в соответствии с
                    законом РК.
                  </span>
                </label>
                <button
                  className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 mt-4 disabled:opacity-60"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Отправляем…" : "Отправить заявку"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-error text-center">
                    Что-то пошло не так. Попробуйте ещё раз или напишите в
                    WhatsApp.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
