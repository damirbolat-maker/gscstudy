import { getServerDict } from "@/lib/locale";

type Review = {
  text: string;
  author: string;
  course: string;
  accent: boolean;
};

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="card-premium card-spotlight p-8 w-80 flex-shrink-0 bg-white/95 backdrop-blur">
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="font-bold text-gray-900">{r.author}</div>
      <div
        className={`text-xs mt-1 ${r.accent ? "text-secondary" : "text-primary"}`}
      >
        {r.course}
      </div>
    </div>
  );
}

export default async function Reviews() {
  const { dict } = await getServerDict();
  const reviews = dict.reviews.items;
  return (
    <section
      id="reviews"
      className="py-24 bg-gray-layered overflow-hidden my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="tag-pill">{dict.reviews.eyebrow}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {dict.reviews.title}
          </h2>
        </div>
      </div>
      <div className="marquee-container mask-marquee w-full overflow-hidden">
        <div className="flex w-fit animate-marquee gap-6 py-4 px-4">
          <div className="flex gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={`a-${i}`} r={r} />
            ))}
          </div>
          <div className="flex gap-6" aria-hidden="true">
            {reviews.map((r, i) => (
              <ReviewCard key={`b-${i}`} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
