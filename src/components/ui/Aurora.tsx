// Мягкий градиентный «aurora» фон для hero и секций.
// Ставится первым ребёнком секции с `position: relative; overflow: hidden`,
// контент оборачивается в элемент с `relative z-10`.

export default function Aurora({
  className = "",
  intensity = "normal",
}: {
  className?: string;
  intensity?: "subtle" | "normal" | "strong";
}) {
  const op =
    intensity === "subtle" ? "opacity-20" : intensity === "strong" ? "opacity-50" : "opacity-35";
  return (
    <div className={`aurora ${className}`} aria-hidden="true">
      <div
        className={`aurora__blob aurora__blob--primary ${op}`}
        style={{ width: "42rem", height: "42rem", top: "-14rem", left: "-10rem" }}
      />
      <div
        className={`aurora__blob aurora__blob--accent ${op}`}
        style={{ width: "38rem", height: "38rem", top: "-8rem", right: "-12rem" }}
      />
    </div>
  );
}
