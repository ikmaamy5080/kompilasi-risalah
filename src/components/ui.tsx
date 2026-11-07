import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

export function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-dark shadow-sm",
    secondary: "bg-orange text-white hover:bg-orange-dark shadow-sm",
    outline: "border border-line bg-white text-ink hover:border-brand hover:text-brand-dark",
    ghost: "text-ink-soft hover:bg-brand-soft hover:text-brand-dark",
    lime: "bg-lime text-ink hover:bg-lime-dark font-semibold",
  }[variant];
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }[size];
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150",
    "focus-visible:outline-3 disabled:opacity-50 disabled:pointer-events-none",
    styles,
    sizes,
    className
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "lime" | "orange" | "outline";
  className?: string;
}) {
  const tones = {
    neutral: "bg-paper text-ink-soft border border-line",
    brand: "bg-brand-soft text-brand-dark",
    lime: "bg-lime text-ink",
    orange: "bg-orange/10 text-orange-dark",
    outline: "border border-line text-ink-soft",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones,
        className
      )}
    >
      {children}
    </span>
  );
}
