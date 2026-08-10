import { prisma } from "@/lib/prisma";
import CampForm from "@/components/admin/CampForm";
import AddCampButton from "@/components/admin/AddCampButton";
import { saveCamp, deleteCamp } from "./actions";

export const dynamic = "force-dynamic";

export default async function CampsAdminPage() {
  const camps = await prisma.camp.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">
            Лагеря
          </h1>
          <p className="text-on-surface-variant mt-1">
            Направления летних лагерей. Изменения сразу видны на странице сайта
            «Лагеря».
          </p>
        </div>
        <AddCampButton />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {camps.map((c) => (
          <CampForm
            key={c.id}
            camp={c}
            action={saveCamp.bind(null, c.id)}
            deleteAction={deleteCamp.bind(null, c.id)}
          />
        ))}
      </div>

      {camps.length === 0 && (
        <div className="bg-white border border-dashed border-outline-variant/60 rounded-2xl py-20 text-center text-on-surface-variant">
          Лагерей пока нет. Нажмите «Добавить лагерь».
        </div>
      )}
    </div>
  );
}
