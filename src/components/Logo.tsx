import Link from "next/link";

// Фирменный герб GSC (щит + GSC + перекрещённые ключи), воссоздан по образцу.
export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      role="img"
      aria-label="GSC Study"
    >
      {/* щит */}
      <path
        d="M18 6 H82 a10 10 0 0 1 10 10 V62 C92 92 74 108 50 117 C26 108 8 92 8 62 V16 a10 10 0 0 1 10 -10 Z"
        fill="#175A8C"
      />
      {/* GSC */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="1"
        fill="#ffffff"
      >
        GSC
      </text>
      {/* перекрещённые ключи */}
      <g
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* левый ключ: кольцо сверху-слева → бородка снизу-справа */}
        <circle cx="40" cy="66" r="5" />
        <circle cx="36" cy="61.5" r="1.7" fill="#fff" stroke="none" />
        <circle cx="44" cy="61.5" r="1.7" fill="#fff" stroke="none" />
        <path d="M43.5 69.5 L61 99" />
        <path d="M56 96 L60.5 93.5" />
        <path d="M60 102 L65 99" />
        {/* правый ключ: кольцо сверху-справа → бородка снизу-слева */}
        <circle cx="60" cy="66" r="5" />
        <circle cx="56" cy="61.5" r="1.7" fill="#fff" stroke="none" />
        <circle cx="64" cy="61.5" r="1.7" fill="#fff" stroke="none" />
        <path d="M56.5 69.5 L39 99" />
        <path d="M44 96 L39.5 93.5" />
        <path d="M40 102 L35 99" />
        {/* узел в центре */}
        <circle cx="50" cy="83" r="2.6" fill="#175A8C" />
      </g>
    </svg>
  );
}

type Props = {
  href?: string | null;
  className?: string;
  markSize?: string;
  textClass?: string;
  onDark?: boolean;
  showText?: boolean;
};

export default function Logo({
  href = "/",
  className = "",
  markSize = "h-10 w-auto",
  textClass = "text-xl text-primary",
  onDark = false,
  showText = true,
}: Props) {
  const content = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markSize} />
      {showText && (
        <span
          className={`font-extrabold tracking-tight leading-none ${
            onDark ? "text-white" : ""
          } ${textClass}`}
        >
          GSC Study
        </span>
      )}
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="GSC Study" className="inline-flex">
      {content}
    </Link>
  );
}
