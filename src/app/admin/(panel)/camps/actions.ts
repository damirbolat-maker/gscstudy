"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

function num(v: FormDataEntryValue | null): number | null {
  const s = String(v ?? "").trim();
  if (!s) return null;
  const n = parseInt(s, 10);
  return Number.isFinite(n) ? n : null;
}

export async function createCamp() {
  const count = await prisma.camp.count();
  const camp = await prisma.camp.create({
    data: { city: "Новый лагерь", country: "", order: count, published: false },
  });
  revalidatePath("/admin/camps");
  return camp.id;
}

export async function saveCamp(id: string, formData: FormData) {
  await prisma.camp.update({
    where: { id },
    data: {
      city: String(formData.get("city") ?? "").slice(0, 120),
      country: String(formData.get("country") ?? "").slice(0, 120),
      dates: String(formData.get("dates") ?? "") || null,
      ageRange: String(formData.get("ageRange") ?? "") || null,
      housing: String(formData.get("housing") ?? "") || null,
      seats: num(formData.get("seats")),
      price: String(formData.get("price") ?? "") || null,
      summary: String(formData.get("summary") ?? "") || null,
      order: num(formData.get("order")) ?? 0,
      published: formData.get("published") === "on",
    },
  });
  revalidatePath("/admin/camps");
  revalidatePath("/camps");
}

export async function deleteCamp(id: string) {
  await prisma.camp.delete({ where: { id } });
  revalidatePath("/admin/camps");
  revalidatePath("/camps");
}
