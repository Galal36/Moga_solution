import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function useSiteSections() {
  const { t } = useLanguage();
  return [
    { label: t.nav.about, to: "/#about" },
    { label: t.nav.services, to: "/#services" },
    { label: t.nav.projects, to: "/#projects" },
    { label: t.nav.process, to: "/#process" },
    { label: t.nav.whyUs, to: "/#why-us" },
    { label: t.nav.contact, to: "/#contact" },
  ];
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage, isRTL } = useLanguage();
  const siteSections = useSiteSections();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6",
          scrolled
            ? "border-slate-200/60 bg-white/90 shadow-soft"
            : "border-white/10 bg-slate-950/72 shadow-panel",
        )}
      >
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 text-sm font-semibold tracking-[0.22em] transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-white",
          )}
        >
          <span
            className={cn(
              "flex h-10 w-10 flex-none items-center justify-center rounded-full border text-base tracking-normal transition-colors duration-300",
              scrolled
                ? "border-brand/20 bg-brand/10 text-brand shadow-none"
                : "border-white/15 bg-white/10 shadow-glow",
            )}
          >
            M
          </span>
          <span className={cn("hidden leading-tight lg:block", isRTL ? "text-right" : "text-left")}>
            <span
              className={cn(
                "block text-[0.7rem] uppercase transition-colors duration-300",
                scrolled ? "text-slate-500" : "text-slate-300",
              )}
            >
              {t.header.logoSubtitle}
            </span>
            <span
              className={cn(
                "block text-sm transition-colors duration-300",
                scrolled ? "text-slate-900" : "text-white",
              )}
            >
              {t.header.logoName}
            </span>
          </span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border p-1 transition-colors duration-300 lg:flex xl:gap-2",
            scrolled
              ? "border-slate-200 bg-slate-100/80"
              : "border-white/10 bg-white/5",
          )}
        >
          {siteSections.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                scrolled
                  ? "text-slate-600 hover:bg-slate-200/80 hover:text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langToggle.ariaLabel}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition",
              scrolled
                ? "border-slate-200 bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-950"
                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
            )}
          >
            <Globe className="h-4 w-4" />
            {t.langToggle.label}
          </button>
          <Link
            to="/#contact"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5",
              scrolled
                ? "bg-brand text-white hover:bg-brand-deep"
                : "bg-white text-slate-950 hover:bg-brand-soft hover:text-brand-deep",
            )}
          >
            {t.header.cta}
            <ArrowUpRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langToggle.ariaLabel}
            className={cn(
              "inline-flex h-11 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition",
              scrolled
                ? "border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10",
            )}
          >
            <Globe className="h-4 w-4" />
            {t.langToggle.label}
          </button>
          <button
            type="button"
            aria-label={isOpen ? t.header.menuClose : t.header.menuOpen}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
              scrolled
                ? "border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10",
            )}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-slate-200/70 bg-white/95 p-4 shadow-soft backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {siteSections.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              {t.header.ctaMobile}
              <ArrowUpRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
