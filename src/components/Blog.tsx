import Link from "next/link";

const posts = [
  {
    title: "Как подготовиться к IELTS за месяц",
    excerpt: "Секреты эффективной подготовки.",
    href: "#",
  },
  {
    title: "Топ-10 вузов Канады 2025",
    excerpt: "Где лучше всего учиться иностранцу.",
    href: "#",
  },
  {
    title: "Digital SAT: что нового?",
    excerpt: "Разбор изменений в экзамене.",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-24 bg-gray-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="tag-pill">Блог</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
              Полезные статьи
            </h2>
          </div>
          <Link
            href="#"
            className="text-primary font-bold hover:underline hidden md:block"
          >
            Все статьи →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="card-premium overflow-hidden bg-white/95 backdrop-blur block"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
