import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  markSize?: string; // напр. "h-9 w-9"
  textClass?: string; // класс для wordmark
  onDark?: boolean;
};

export default function Logo({
  href = "/",
  className = "",
  markSize = "h-9 w-9",
  textClass = "text-xl text-primary",
  onDark = false,
}: Props) {
  const content = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`${markSize} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}
        style={{
          background: "linear-gradient(135deg, #135685 0%, #2c7fbf 100%)",
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-[62%] h-[62%]"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
        </svg>
      </span>
      <span
        className={`font-extrabold tracking-tight leading-none ${
          onDark ? "text-white" : ""
        } ${textClass}`}
      >
        GSC Study
      </span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="GSC Study" className="inline-flex">
      {content}
    </Link>
  );
}
