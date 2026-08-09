"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", city: "", phone: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "hero-form" }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setForm({ name: "", city: "", phone: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-premium p-10 relative z-10 bg-white/95 backdrop-blur shadow-2xl text-center">
        <div className="w-16 h-16 bg-clever-green/10 text-clever-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8"
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
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
          Заявка отправлена!
        </h3>
        <p className="text-base text-gray-600">
          Менеджер свяжется с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <div className="card-premium p-10 relative z-10 bg-white/95 backdrop-blur shadow-2xl">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
        Записаться на пробный урок
      </h3>
      <p className="text-base text-gray-600 mb-8">
        Оставьте заявку — менеджер свяжется с вами в ближайшее время.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="h-name"
            >
              Имя
            </label>
            <input
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3"
              id="h-name"
              placeholder="Айгерим"
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="h-city"
            >
              Город
            </label>
            <select
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3"
              id="h-city"
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            >
              <option value="">Выберите</option>
              <option>Алматы</option>
              <option>Астана</option>
              <option>Онлайн</option>
            </select>
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="h-phone"
          >
            Телефон
          </label>
          <input
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3"
            id="h-phone"
            placeholder="+7 700 000 00 00"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="flex items-start pt-2">
          <div className="flex h-5 items-center">
            <input
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              id="h-consent"
              required
              type="checkbox"
            />
          </div>
          <div className="ml-3 text-sm text-gray-500">
            <label htmlFor="h-consent">
              Согласен(а) на обработку персональных данных.
            </label>
          </div>
        </div>
        <button
          className="w-full btn-accent py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl mt-6 transition-all disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Отправляем…" : "Записаться"}
        </button>
        {status === "error" && (
          <p className="text-sm text-error text-center">
            Что-то пошло не так. Попробуйте ещё раз или напишите в WhatsApp.
          </p>
        )}
        <div className="mt-6 text-center text-sm text-gray-500">
          Быстрее —{" "}
          <a
            className="text-whatsapp-green font-semibold hover:underline"
            href={site.whatsapp}
          >
            написать в WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
