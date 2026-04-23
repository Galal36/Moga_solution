import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

import { useSiteSections } from "./site-header";

export function SiteFooter() {
  const { t, isRTL } = useLanguage();
  const siteSections = useSiteSections();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr_1fr]">
          <div className="max-w-xl space-y-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-base tracking-normal">
                M
              </span>
              <span>
                <span className="block text-[0.7rem] uppercase text-slate-400">
                  {t.footer.logoName}
                </span>
                <span className="block text-sm tracking-normal text-white">
                  {t.footer.tagline}
                </span>
              </span>
            </Link>
            <p className="text-sm leading-7 text-slate-400 sm:text-base">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.navigateLabel}
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {siteSections.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.ctaLabel}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {t.footer.ctaDescription}
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-soft hover:text-brand-deep"
            >
              {t.footer.ctaButton}
              <ArrowUpRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{t.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
