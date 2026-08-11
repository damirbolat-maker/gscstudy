import Link from "next/link";

// Официальный герб GSC (файл в /public/brand/gsc.png).
export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/gsc.png"
      alt="GSC Study"
      className={className}
      width={40}
      height={40}
    />
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
