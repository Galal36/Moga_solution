import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "@/i18n/language-context";

export default function NotFound() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="section-shell px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-soft sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-lg font-semibold text-brand">
            {t.notFound.code}
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-deep">
            {t.notFound.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950">
            {t.notFound.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            {t.notFound.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              {t.notFound.goHome}
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand-deep"
            >
              {t.notFound.goContact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
