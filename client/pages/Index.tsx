import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  ChevronRight,
  Layers3,
  MonitorSmartphone,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FadeIn } from "@/components/site/fade-in";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

const serviceIcons = [
  MonitorSmartphone,
  Layers3,
  Workflow,
  ChartNoAxesCombined,
  Sparkles,
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        centered ? "mx-auto text-center" : "",
      )}
    >
      <span
        className={cn(
          "inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]",
          inverted
            ? "border border-white/10 bg-white/5 text-brand-soft"
            : "border border-brand/15 bg-brand/5 text-brand-deep",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.9rem]",
          inverted ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-base leading-8 sm:text-lg sm:leading-9",
          inverted ? "text-slate-300" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { t, isRTL } = useLanguage();

  return (
    <div className="overflow-x-clip">
      <section
        id="home"
        className="relative isolate overflow-hidden bg-slate-950 px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-32 lg:pt-28"
      >
        <div className="absolute inset-0 bg-hero-radial opacity-90" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-[0.18]" />
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />

        <div className="container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <FadeIn className="max-w-2xl space-y-6 lg:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 shadow-panel sm:px-4 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-brand-soft" />
                {t.hero.badge}
              </div>

              <div className="space-y-5 sm:space-y-6">
                <h1 className={cn("text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.75rem]", !isRTL && "lg:max-w-[12ch]")}>
                  {t.hero.heading}
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Link
                  to="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-brand-soft hover:text-brand-deep sm:w-auto"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
                </Link>
                <Link
                  to="/#projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  {t.hero.ctaSecondary}
                  <MoveRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {t.hero.highlights.map((item, index) => (
                  <FadeIn
                    key={index}
                    delay={0.08 * index}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-panel"
                  >
                    <p className="text-sm font-medium leading-6 text-slate-200">
                      {item}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="relative lg:pt-2">
              <div className="rounded-[32px] border border-white/10 bg-white/10 p-5 shadow-panel backdrop-blur-xl sm:p-6">
                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5 sm:p-6 lg:p-7">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
                        {t.hero.cardTitle}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">
                        {t.hero.cardHeading}
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                      {t.hero.cardBadge}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {t.services.items.slice(0, 4).map((item, index) => {
                      const Icon = serviceIcons[index];

                      return (
                        <div
                          key={index}
                          className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/20 text-brand-soft">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="mt-4 text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {t.hero.engagementLabel}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          {t.hero.engagementText}
                        </p>
                      </div>
                      <Link
                        to="/#process"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-soft transition hover:text-white"
                      >
                        {t.hero.engagementLink}
                        <ChevronRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-24 px-4 sm:px-6">
        <div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />
          </FadeIn>

          <FadeIn delay={0.1} className="grid gap-5">
            <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                {t.about.practiceLabel}
              </p>
              <div className="mt-5 space-y-4">
                {t.about.pillars.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-brand/10 bg-brand-deep p-7 text-white shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
                {t.about.idealLabel}
              </p>
              <div className="mt-5 grid gap-3">
                {t.about.signals.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="services" className="section-shell scroll-mt-24 bg-slate-50 px-4 sm:px-6">
        <div className="container space-y-14">
          <FadeIn>
            <SectionHeading
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              description={t.services.description}
            />
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];

              return (
                <FadeIn
                  key={index}
                  delay={index * 0.06}
                  className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-panel"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell scroll-mt-24 px-4 sm:px-6">
        <div className="container space-y-14">
          <FadeIn>
            <SectionHeading
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              description={t.projects.description}
            />
          </FadeIn>

          <div className="grid gap-6 xl:grid-cols-3">
            {t.projects.items.map((project, index) => (
              <FadeIn
                key={index}
                delay={index * 0.08}
                className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                      {project.name}
                    </h3>
                  </div>
                  <div className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                    {t.projects.featured}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                  {project.summary}
                </p>

                <div className="mt-8 space-y-3">
                  {project.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                    >
                      <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                      <p className="text-sm leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell scroll-mt-24 bg-slate-950 px-4 text-white sm:px-6">
        <div className="container space-y-14">
          <FadeIn>
            <SectionHeading
              eyebrow={t.process.eyebrow}
              title={t.process.title}
              description={t.process.description}
              centered
              inverted
            />
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <FadeIn
                key={index}
                delay={index * 0.07}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-panel"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-lg font-semibold text-brand-soft">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-panel lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
                  {t.process.engagementLabel}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  {t.process.engagementText}
                </h3>
              </div>
              <Link
                to="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-soft hover:text-brand-deep sm:w-auto"
              >
                {t.process.engagementCta}
                <ArrowRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="why-us" className="section-shell scroll-mt-24 px-4 sm:px-6">
        <div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow={t.whyUs.eyebrow}
              title={t.whyUs.title}
              description={t.whyUs.description}
            />
          </FadeIn>

          <div className="grid gap-5">
            {t.whyUs.reasons.map((reason, index) => (
              <FadeIn
                key={index}
                delay={index * 0.06}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : (
                      <BadgeCheck className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-24 bg-slate-50 px-4 sm:px-6">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                {t.contact.tipsLabel}
              </p>
              <div className="mt-5 space-y-3">
                {t.contact.tips.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                  {t.contact.formTitle}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t.contact.formSubtitle}
                </p>
              </div>
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                {t.contact.formBadge}
              </div>
            </div>

            <form
              ref={formRef}
              className="mt-8 grid gap-5"
              onSubmit={async (event) => {
                event.preventDefault();
                setSubmitting(true);
                setErrorMsg("");
                const fd = new FormData(formRef.current!);
                const company = (fd.get("company") as string || "").trim();
                const message = (fd.get("message") as string || "").trim();
                const payload = {
                  name: (fd.get("name") as string || "").trim(),
                  email: (fd.get("email") as string || "").trim(),
                  subject: (fd.get("subject") as string || "").trim(),
                  message: company ? `[${company}] ${message}` : message,
                };
                try {
                  const res = await fetch("/api/contact/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  if (!res.ok) throw new Error(res.statusText);
                  setSubmitted(true);
                  formRef.current?.reset();
                } catch {
                  setErrorMsg(t.contact.errorText);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  {t.contact.labelName}
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder={t.contact.placeholderName}
                    className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  {t.contact.labelCompany}
                  <input
                    name="company"
                    type="text"
                    placeholder={t.contact.placeholderCompany}
                    className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  {t.contact.labelEmail}
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder={t.contact.placeholderEmail}
                    className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  {t.contact.labelProjectType}
                  <select name="subject" className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10">
                    {t.contact.projectTypes.map((type, index) => (
                      <option key={index}>{type}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                {t.contact.labelMessage}
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={t.contact.placeholderMessage}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className={cn("max-w-xl text-sm leading-7", errorMsg ? "text-red-600" : "text-slate-600")}>
                  {errorMsg || (submitted ? t.contact.submittedText : t.contact.defaultText)}
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:opacity-50 sm:w-auto"
                >
                  {submitting ? t.contact.sendingButton : t.contact.submitButton}
                  <ArrowRight className={cn("h-4 w-4", isRTL && "scale-x-[-1]")} />
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
