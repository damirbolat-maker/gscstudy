import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "@/components/Logo";
import { getServerDict } from "@/lib/locale";
import { withLocale } from "@/i18n/config";

export default async function Footer() {
  const { locale, dict: t } = await getServerDict();
  const L = (p: string) => withLocale(locale, p);

  const programs = [
    { label: t.footer.links.langSchool, href: "/school" },
    { label: t.footer.links.ielts, href: "/exams" },
    { label: t.footer.links.sat, href: "/exams" },
    { label: t.footer.links.abroad, href: "/abroad" },
    { label: t.footer.links.camps, href: "/camps" },
  ];
  const company = [
    { label: t.footer.links.about, href: "/about" },
    { label: t.footer.links.centers, href: "/#offices" },
    { label: t.footer.links.reviews, href: "/#reviews" },
    { label: t.footer.links.langSchool, href: "/school" },
  ];

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 z-0 dots-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo href={L("/")} markSize="h-12 w-auto" textClass="text-2xl text-primary" />
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-4">
              <a
                href={site.instagram}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
                </svg>
              </a>
              <a
                href={site.whatsapp.link}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-whatsapp-green hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.21 1.385 4.94 1.386 5.4 0 9.796-4.396 9.798-9.796.001-2.617-1.018-5.077-2.868-6.928-1.851-1.851-4.311-2.87-6.928-2.871-5.4 0-9.796 4.396-9.798 9.796-.001 2.128.553 4.209 1.602 6.076l-1.05 3.828 3.922-1.028zm11.033-7.129c-.3-.15-1.771-.874-2.046-.974-.276-.1-.476-.15-.676.15s-.776.974-.951 1.174-.35.225-.65.075c-.3-.15-1.265-.467-2.41-1.485-.89-.793-1.49-1.773-1.665-2.073-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525-.676-1.625-.926-2.225c-.244-.583-.491-.503-.676-.513-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.231 5.127 4.531.716.311 1.274.496 1.708.635.72.229 1.375.196 1.893.118.578-.088 1.771-.724 2.021-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6">{t.footer.programs}</h4>
            <ul className="space-y-4">
              {programs.map((p, i) => (
                <li key={i}>
                  <Link href={L(p.href)} className="text-gray-600 hover:text-secondary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6">{t.footer.company}</h4>
            <ul className="space-y-4">
              {company.map((c, i) => (
                <li key={i}>
                  <Link href={L(c.href)} className="text-gray-600 hover:text-secondary transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6">{t.footer.contacts}</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  {t.footer.callCenter}
                </span>
                <a href={`tel:${site.phone.tel}`} className="text-gray-900 font-bold hover:text-secondary">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">WhatsApp</span>
                <a href={site.whatsapp.link} className="text-gray-900 font-bold hover:text-secondary">
                  {site.whatsapp.display}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">{t.footer.email}</span>
                <a href={`mailto:${site.email}`} className="text-gray-600 hover:text-secondary">
                  {site.email}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">{t.footer.hours}</span>
                <span className="text-gray-600 text-sm">{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">{t.footer.rights}</p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              {t.footer.offer}
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16 md:hidden" />

      <div className="absolute bottom-[-2rem] left-0 w-full pointer-events-none select-none opacity-[0.03] flex justify-center">
        <span className="text-[15vw] font-black whitespace-nowrap uppercase tracking-tighter text-primary">
          GSC STUDY
        </span>
      </div>
    </footer>
  );
}
