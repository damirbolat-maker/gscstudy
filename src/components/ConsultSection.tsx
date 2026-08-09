"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string;
  courses?: string[];
  source?: string;
};

export default function ConsultSection({
  eyebrow = "Первый шаг",
  title = (
    <>
      Тест уровня и пробный урок — <br />
      <em className="text-secondary not-italic">бесплатно</em>
    </>
  ),
  text = "Определим уровень, подберём группу и формат, назовём стоимость. Без обязательств.",
  courses,
  source = "consult-section",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    course: courses?.[0] ?? "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", city: "", phone: "", email: "", course: courses?.[0] ?? "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="consult"
      className="py-[120px] relative overflow-hidden bg-primary text-white scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0d3f63] z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary opacity-30 blur-3xl mix-blend-screen z-0" />
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-label-caps text-label-caps tracking-wider uppercase mb-6 border border-white/20">
              {eyebrow}
            </span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              {title}
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed mb-10 leading-relaxed">
              {text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 font-button text-button rounded-xl hover:bg-white hover:text-primary transition-all"
                href={`tel:${site.phone.tel}`}
              >
                {site.phone.display}
              </a>
              <a
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl shadow-lg text-white bg-whatsapp-green hover:bg-[#20bd5a] transition-all gap-2 font-button text-button"
                href={`${site.whatsapp.link}?text=Здравствуйте!%20Хочу%20записаться`}
                target="_blank"
                rel="noopener"
              >
                <Icon name="chat" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-xl transform rotate-3" />
            {status === "success" ? (
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-2xl relative text-center">
                <div className="w-16 h-16 bg-clever-green/10 text-clever-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="check" className="text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  Заявка отправлена!
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Менеджер свяжется с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-2xl relative">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  Записаться на пробный урок
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Менеджер свяжется с вами в ближайшее время.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-label-caps text-[14px] text-primary mb-2"
                        htmlFor="s-name"
                      >
                        Имя
                      </label>
                      <input
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface text-[14px] focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="s-name"
                        placeholder="Айгерим"
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-caps text-[14px] text-primary mb-2"
                        htmlFor="s-city"
                      >
                        Город
                      </label>
                      <select
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface text-[14px] focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="s-city"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      >
                        <option value="">Выберите</option>
                        <option>Алматы</option>
                        <option>Астана</option>
                        <option>Другой город — онлайн</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-label-caps text-[14px] text-primary mb-2"
                        htmlFor="s-phone"
                      >
                        Телефон
                      </label>
                      <input
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface text-[14px] focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="s-phone"
                        placeholder="+7 700 000 00 00"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-caps text-[14px] text-primary mb-2"
                        htmlFor="s-email"
                      >
                        Email — необяз.
                      </label>
                      <input
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface text-[14px] focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="s-email"
                        placeholder="you@example.com"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  {courses && courses.length > 0 && (
                    <div>
                      <label
                        className="block font-label-caps text-[14px] text-primary mb-2"
                        htmlFor="s-course"
                      >
                        Курс
                      </label>
                      <select
                        className="w-full rounded-xl border-border-subtle bg-surface-container-low px-4 py-3 text-on-surface text-[14px] focus:border-primary focus:ring-primary focus:bg-white transition-colors"
                        id="s-course"
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                      >
                        {courses.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        className="h-5 w-5 rounded border-border-subtle text-primary focus:ring-primary cursor-pointer"
                        id="consent2"
                        required
                        type="checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        className="font-body-md text-[14px] text-on-surface-variant cursor-pointer"
                        htmlFor="consent2"
                      >
                        Согласен(а) на обработку персональных данных в соответствии
                        с законом РК.
                      </label>
                    </div>
                  </div>
                  <button
                    className="w-full flex justify-center py-4 px-4 rounded-xl font-button text-button text-white bg-secondary hover:bg-[#8f0048] shadow-cta hover:shadow-cta-hover transition-all disabled:opacity-60"
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
