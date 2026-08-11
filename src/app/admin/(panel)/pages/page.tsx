import Link from "next/link";
import Icon from "@/components/Icon";
import { PAGE_SLUGS, PAGE_LABELS } from "@/lib/page-content";

export const dynamic = "force-dynamic";

export default function PagesAdminPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">
          Страницы
        </h1>
        <p className="text-on-surface-variant mt-1">
          Переопределяйте текст героя (заголовок, подзаголовок, надпись) и
          SEO-мета (title, description) для каждой страницы отдельно по языкам
          (RU / KZ / EN). Пустые поля используют значения по умолчанию.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAGE_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={`/admin/pages/${slug}`}
            className="group bg-white border border-border-subtle rounded-xl p-6 flex flex-col hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-primary">
                {PAGE_LABELS[slug]}
              </h3>
              {slug === "home" && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-variant text-on-surface-variant">
                  только SEO
                </span>
              )}
            </div>
            <p className="text-sm text-on-surface-variant flex-1">
              /{slug === "home" ? "" : slug}
            </p>
            <div className="flex items-center justify-end mt-6 pt-4 border-t border-border-subtle text-sm">
              <span className="font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                Редактировать <Icon name="arrow_forward" className="text-sm" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
