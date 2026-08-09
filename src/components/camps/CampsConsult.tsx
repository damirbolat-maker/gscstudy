"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

type Status = "idle" | "loading" | "success" | "error";

export default function CampsConsult() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    camp: "Лондон",
    age: "12–13 лет",
    city: "Алматы",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "camps-consult" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="consult"
      className="py-24 relative overflow-hidden bg-primary text-white scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-[#0d3f63] z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary opacity-30 blur-3xl mix-blend-screen z-0" />
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-bold text-sm tracking-wider uppercase mb-6 border border-white/20">
              Лето 2026
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Забронируйте место <br />
              <em className="text-secondary not-italic">заранее</em>
            </h2>
            <p className="text-xl text-primary-fixed mb-10 leading-relaxed">
              Расскажем про направления, покажем программу смены и условия,
              ответим на вопросы о безопасности и визе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-full hover:bg-white hover:text-primary transition-all"
                href={`tel:${site.phone.tel}`}
              >
                {site.phone.display}
              </a>
              <a
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white bg-whatsapp-green hover:bg-[#20bd5a] transition-all gap-2"
                href={`${site.whatsapp.link}?text=Здравствуйте!%20Интересует%20языковой%20лагерь`}
                target="_blank"
                rel="noopener"
              >
                <Icon name="chat" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-3xl transform rotate-3" />
            {status === "success" ? (
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative text-center">
                <div className="w-16 h-16 bg-clever-green/10 text-clever-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="check" className="text-3xl" />
                </div>
                <h3 className="text-3xl font-extrabold text-on-surface mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-on-surface-variant">
                  Менеджер свяжется с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative">
                <h3 className="text-3xl font-extrabold text-on-surface mb-2">
                  Заявка на лагерь
                </h3>
                <p className="text-on-surface-variant mb-8">
                  Менеджер свяжется с вами в ближайшее время.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-bold text-on-surface mb-2"
                        htmlFor="k-name"
                      >
                        Имя родителя
                      </label>
                      <input
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="k-name"
                        placeholder="Гульнара"
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-bold text-on-surface mb-2"
                        htmlFor="k-phone"
                      >
                        Телефон
                      </label>
                      <input
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="k-phone"
                        placeholder="+7 700 000 00 00"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-bold text-on-surface mb-2"
                        htmlFor="k-camp"
                      >
                        Направление
                      </label>
                      <select
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="k-camp"
                        value={form.camp}
                        onChange={(e) => setForm({ ...form, camp: e.target.value })}
                      >
                        <option>Лондон</option>
                        <option>Дубай</option>
                        <option>Торонто</option>
                        <option>Берлин</option>
                        <option>Ещё не решили</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-bold text-on-surface mb-2"
                        htmlFor="k-age"
                      >
                        Возраст ребёнка
                      </label>
                      <select
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="k-age"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                      >
                        <option>12–13 лет</option>
                        <option>14–15 лет</option>
                        <option>16–17 лет</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold text-on-surface mb-2"
                      htmlFor="k-city"
                    >
                      Город вылета
                    </label>
                    <select
                      className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                      id="k-city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    >
                      <option>Алматы</option>
                      <option>Астана</option>
                      <option>Другой город</option>
                    </select>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        className="h-5 w-5 rounded border-border-subtle text-primary focus:ring-primary cursor-pointer"
                        id="k-consent"
                        required
                        type="checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        className="font-medium text-on-surface-variant cursor-pointer"
                        htmlFor="k-consent"
                      >
                        Согласен(а) на обработку персональных данных в соответствии
                        с законом РК.
                      </label>
                    </div>
                  </div>
                  <button
                    className="w-full flex justify-center py-4 px-4 rounded-xl shadow-sm text-lg font-bold text-white bg-secondary hover:bg-[#8f0048] transition-all disabled:opacity-60"
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
      </div>
    </section>
  );
}
