import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Languages, Menu, Search, X, HeartPulse } from "lucide-react";
import { cn } from "../lib/cn";
import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../types";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/kategori", label: t.nav.categories },
    { to: "/risalah", label: t.nav.resources },
    { to: "/tentang", label: t.nav.about },
    { to: "/hubungi", label: t.nav.contact },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const langOptions: { value: Lang; label: string }[] = [
    { value: "ms", label: t.lang.ms },
    { value: "en", label: t.lang.en },
  ];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label={t.nav.homeAria}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-bold leading-tight text-ink sm:text-lg">
            {lang === "ms" ? "Kompilasi Risalah" : "Clinical Nutrition"}
            <br className="hidden sm:block" />
            {lang === "ms" ? "Pemakanan" : "Compendium"}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.mainNav}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-soft text-brand-dark"
                    : "text-ink-soft hover:bg-paper hover:text-ink"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-1 rounded-lg border border-line bg-paper p-0.5 sm:inline-flex"
            role="group"
            aria-label={t.lang.label}
          >
            <Languages className="ml-1.5 h-4 w-4 text-ink-soft" aria-hidden="true" />
            {langOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setLang(opt.value)}
                aria-pressed={lang === opt.value}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
                  lang === opt.value
                    ? "bg-brand text-white"
                    : "text-ink-soft hover:text-ink"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <Link
            to="/cari"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            aria-label={t.nav.searchAria}
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.nav.searchCta}</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-white px-4 pb-4 pt-2 lg:hidden"
          aria-label={t.nav.mobileNav}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive ? "bg-brand-soft text-brand-dark" : "text-ink-soft hover:bg-paper"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/cari"
            className="mt-2 flex items-center gap-2 rounded-lg bg-brand px-3 py-2.5 text-sm font-medium text-white"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {t.nav.mobileSearchCta}
          </Link>
          <div
            className="mt-3 inline-flex items-center gap-1 rounded-lg border border-line bg-paper p-0.5"
            role="group"
            aria-label={t.lang.label}
          >
            <Languages className="ml-1.5 h-4 w-4 text-ink-soft" aria-hidden="true" />
            {langOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setLang(opt.value)}
                aria-pressed={lang === opt.value}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-semibold transition-colors",
                  lang === opt.value
                    ? "bg-brand text-white"
                    : "text-ink-soft hover:text-ink"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
