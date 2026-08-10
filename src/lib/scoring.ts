// Перевод результата теста в уровень/прогноз в зависимости от типа теста.

export function computeLevel(
  kind: string,
  score: number,
  total: number
): string {
  const pct = total > 0 ? (score / total) * 100 : 0;

  if (kind === "kids") {
    if (pct < 40) return "Starter (начальный)";
    if (pct < 70) return "Mover (средний)";
    return "Flyer (продвинутый)";
  }

  if (kind === "ielts") {
    // грубая оценка полосы 4.5–8.0
    const band = Math.round((4.5 + (pct / 100) * 3.5) * 2) / 2;
    return `≈ IELTS ${band.toFixed(1)}`;
  }

  if (kind === "sat") {
    // грубая оценка 400–1600, округление до 10
    const raw = 400 + (pct / 100) * 1200;
    const sat = Math.round(raw / 10) * 10;
    return `≈ SAT ${sat}`;
  }

  // CEFR для общего английского
  if (pct < 20) return "A1 (Beginner)";
  if (pct < 40) return "A2 (Elementary)";
  if (pct < 60) return "B1 (Intermediate)";
  if (pct < 75) return "B2 (Upper-Intermediate)";
  if (pct < 90) return "C1 (Advanced)";
  return "C2 (Proficiency)";
}
