import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PAGE_SLUGS,
  PAGE_LABELS,
  getPageContentAll,
  type PageSlug,
} from "@/lib/page-content";
import PageContentForm from "@/components/admin/PageContentForm";

export const dynamic = "force-dynamic";

function isPageSlug(v: string): v is PageSlug {
  return (PAGE_SLUGS as readonly string[]).includes(v);
}

export default async function EditPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();

  const values = await getPageContentAll(slug);

  return (
    <div>
      <Link
        href="/admin/pages"
        className="inline-flex items-center gap-1 text-sm font-semibold text-on-surface-variant hover:text-primary mb-4"
      >
        ← Все страницы
      </Link>
      <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-6">
        {PAGE_LABELS[slug]}
      </h1>

      <PageContentForm slug={slug} values={values} />
    </div>
  );
}
