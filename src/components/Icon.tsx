import type { SVGProps } from "react";

// Inline SVG icons (Feather/Lucide-style) replacing the Material Symbols font.
// Sized via 1em so existing text-* size classes keep working; color via currentColor.
const paths: Record<string, React.ReactNode> = {
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </>
  ),
  arrow_downward: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12l7 7 7-7" />
    </>
  ),
  chevron_right: <path d="M9 6l6 6-6 6" />,
  expand_more: <path d="M6 9l6 6 6-6" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  check: <path d="M20 6L9 17l-5-5" />,
  check_circle: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </>
  ),
  school: (
    <>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
    </>
  ),
  videocam: (
    <>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  payments: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  call: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  menu_book: (
    <>
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    </>
  ),
  hotel: (
    <>
      <path d="M3 18V7" />
      <path d="M3 10h16a2 2 0 0 1 2 2v6" />
      <path d="M3 15h18" />
      <path d="M7 10V8h6v2" />
    </>
  ),
  local_activity: (
    <path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z" />
  ),
  group: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  flight_takeoff: (
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </>
  ),
  health_and_safety: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  restaurant: (
    <>
      <path d="M4 3v6a2 2 0 0 0 4 0V3" />
      <path d="M6 9v12" />
      <path d="M16 3c-1.5 0-2.5 2.5-2.5 6s1 4 2.5 4v8" />
    </>
  ),
  lunch_dining: (
    <>
      <path d="M4 11a8 8 0 0 1 16 0z" />
      <path d="M3 15h18" />
      <path d="M5 19h14" />
    </>
  ),
  directions_walk: (
    <>
      <circle cx="13" cy="4" r="1.6" />
      <path d="M11 8l3 1.5 2 3.5" />
      <path d="M14 9.5l-1.5 5.5-2.5 5" />
      <path d="M12.5 15l3.5 1.5" />
    </>
  ),
  celebration: (
    <>
      <path d="M2 22l6-14 8 8z" />
      <path d="M14 4v2" />
      <path d="M18.5 3.5l-1.5 1.5" />
      <path d="M20 9h-2" />
    </>
  ),
  bedtime: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  workspace_premium: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </>
  ),
  calendar_month: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18M8 2v4M16 2v4" />
    </>
  ),
  location_city: (
    <>
      <path d="M4 21V8l5-3v3l5-3v4l6-2v14z" />
      <path d="M9 21v-3M14 21v-3" />
    </>
  ),
  public: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  verified: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  trending_up: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </>
  ),
  visibility: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  travel_explore: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M4 11h14M11 4a13 13 0 0 1 0 14 13 13 0 0 1 0-14z" />
      <path d="M21 21l-3.5-3.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
};

type Props = {
  name: keyof typeof paths | string;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "name">;

export default function Icon({ name, className, ...rest }: Props) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  );
}
