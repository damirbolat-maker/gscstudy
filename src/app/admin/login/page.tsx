"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { login } from "../actions";

function LoginForm() {
  const params = useSearchParams();
  const from = params.get("from") ?? "/admin/dashboard";
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form
      action={formAction}
      className="w-full max-w-sm bg-white rounded-2xl border border-border-subtle shadow-[0_10px_40px_rgba(19,86,133,0.08)] p-8"
    >
      <div className="mb-8 text-center">
        <div className="text-2xl font-extrabold text-primary tracking-tight">
          GSC Study
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
          Admin Console
        </div>
      </div>

      <input type="hidden" name="from" value={from} />

      <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="username">
        Логин
      </label>
      <input
        id="username"
        name="username"
        type="text"
        required
        autoComplete="username"
        className="w-full rounded-lg border-surface-variant/70 bg-surface-container-low px-4 py-3 mb-4 focus:border-primary focus:ring-primary focus:bg-white transition-colors"
        placeholder="admin"
      />

      <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="password">
        Пароль
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        className="w-full rounded-lg border-surface-variant/70 bg-surface-container-low px-4 py-3 mb-2 focus:border-primary focus:ring-primary focus:bg-white transition-colors"
        placeholder="••••••••"
      />

      {state?.error && (
        <p className="text-sm text-error mt-2">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full mt-6 bg-primary text-white font-semibold rounded-lg py-3 hover:bg-primary-container transition-colors disabled:opacity-60"
      >
        {pending ? "Вход…" : "Войти"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-background bg-dots flex items-center justify-center p-4">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
