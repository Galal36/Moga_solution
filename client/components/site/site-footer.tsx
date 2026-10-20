import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

import { useSiteSections } from "./site-header";

export function SiteFooter() {
  const { t, isRTL } = useLanguage();
  const siteSections = useSiteSections();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.9fr_1fr] lg:gap-16">
          <div className="max-w-xl space-y-6">
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
            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${t.footer.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-soft" />
                <span>{t.footer.phoneLabel}:</span>
                <span className="font-semibold tracking-wide" dir="ltr">{t.footer.phone}</span>
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-soft" />
                <span>{t.footer.emailLabel}:</span>
                <span className="font-semibold tracking-wide" dir="ltr">{t.footer.email}</span>
              </a>
              <a
                href={`https://wa.me/2${t.footer.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-brand-soft" />
                <span>{t.footer.whatsappLabel}:</span>
                <span className="font-semibold tracking-wide" dir="ltr">{t.footer.whatsapp}</span>
              </a>
              <a
                href={t.footer.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.facebookLabel}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-brand-soft"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>{t.footer.facebookLabel}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.navigateLabel}
            </h3>
            <div className="mt-6 flex flex-col gap-3.5">
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

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.ctaLabel}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:leading-8">
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{t.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
