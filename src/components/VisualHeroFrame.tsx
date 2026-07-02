import type { ReactNode } from "react";

type Brand = "common" | "shijimiworks" | "youkai-steak";

type Props = {
  brand: Brand;
  children: ReactNode;
  media?: ReactNode;
  className?: string;
};

export function VisualHeroFrame({ brand, children, media, className = "" }: Props) {
  return (
    <div className={`brand-visual-shell brand-visual-${brand} ${className}`} data-brand={brand}>
      {media && <div className="ogp-hero-backdrop" aria-hidden="true">{media}</div>}
      <div className="brand-visual-overlay" aria-hidden="true" />
      <div className="brand-visual-content">{children}</div>
    </div>
  );
}
