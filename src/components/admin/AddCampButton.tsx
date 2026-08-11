"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { createCamp } from "@/app/admin/(panel)/camps/actions";

export default function AddCampButton() {
  const [pending, start] = useTransition();
  const router = useRouter();
  return (
    <button
      onClick={() =>
        start(async () => {
          await createCamp();
          router.refresh();
        })
      }
      disabled={pending}
      className="btn-primary px-5 py-2.5 rounded-lg font-semibold inline-flex items-center gap-2 disabled:opacity-60"
    >
      <Icon name="add" /> {pending ? "Создаём…" : "Добавить лагерь"}
    </button>
  );
}
