import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  Laptop,
  PenLine,
  Search,
  Share2,
  Wifi,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FadeIn } from "@/components/site/fade-in";

const CV_MAX_SIZE = 3 * 1024 * 1024; // 3 ميجابايت
const CV_ACCEPT = ".pdf,.doc,.docx";

const tasks = [
  {
    icon: PenLine,
    title: "كتابة المقالات",
    description: "تحرير مقالات عربية واضحة وعالية الجودة لمختلف مشروعاتنا.",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث (SEO)",
    description: "تحسين محركات البحث لصفحات معيّنة لبعض مشروعاتنا.",
  },
  {
    icon: Share2,
    title: "محتوى وسائل التواصل الاجتماعي",
    description: "إنشاء محتوى جذّاب لمنصات التواصل الاجتماعي.",
  },
];

const requirements = [
  {
    icon: Laptop,
    text: "الإلمام بأساسيات الكمبيوتر فقط (الأساسيات فقط، لا حاجة لخبرة متقدمة).",
  },
  {
    icon: Wifi,
    text: "توافر اتصال بالإنترنت وجهاز كمبيوتر.",
  },
  {
    icon: Clock,
    text: "العمل 5 ساعات على الأقل يوميًا، أو إنجاز عدد محدّد من المقالات عالية الجودة — حتى قبل اكتمال الـ 5 ساعات.",
  },
];

export default function JobContentCreator() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div dir="rtl" lang="ar" className="bg-background text-right">
      {/* Hero — dark background extends up behind the fixed header so its text stays visible */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-36 text-white sm:px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              العودة إلى الصفحة الرئيسية
              <ArrowLeft className="h-4 w-4 scale-x-[-1]" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <span className="mt-8 inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-soft">
              وظيفة شاغرة · موجا
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              منشئ محتوى
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              نبحث في موجا عن منشئ محتوى موهوب للانضمام إلى فريقنا. تشمل المهام كتابة
              المقالات، وتحسين محركات البحث (SEO) لصفحات معيّنة لبعض مشروعاتنا،
              وإنشاء محتوى لمنصات التواصل الاجتماعي.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                <Banknote className="h-4 w-4 text-brand-soft" />
                رواتب تبدأ من 2500 جنيه مصري
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                <Globe2 className="h-4 w-4 text-brand-soft" />
                عمل عن بُعد بالكامل
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                <CalendarDays className="h-4 w-4 text-brand-soft" />
                الإجازات: الجمعة والسبت
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Details + form */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Details column */}
          <div className="space-y-10">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                  المهام والمسؤوليات
                </h2>
                <div className="mt-6 space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
                    >
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <task.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-900">
                          {task.title}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {task.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                  المتطلبات
                </h2>
                <div className="mt-6 space-y-3">
                  {requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                    >
                      <req.icon className="mt-0.5 h-5 w-5 flex-none text-brand" />
                      <p className="text-sm leading-7 text-slate-700">{req.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-6 w-6 text-emerald-600" />
                  <p className="text-base font-semibold text-emerald-800">
                    تفاصيل سريعة
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-emerald-900">
                  <li>• الراتب يبدأ من 2500 جنيه مصري.</li>
                  <li>• العمل عن بُعد بالكامل من أي مكان.</li>
                  <li>
                    • 5 ساعات يوميًا على الأقل، أو إنجاز عدد محدّد من المقالات عالية
                    الجودة.
                  </li>
                  <li>• الإجازات الأسبوعية يومي الجمعة والسبت.</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Application form */}
          <FadeIn delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                نموذج التقديم
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">
                قدِّم الآن على وظيفة منشئ محتوى
              </h3>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-emerald-50 px-6 py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                  <p className="text-lg font-semibold text-emerald-800">
                    تم استلام طلبك بنجاح!
                  </p>
                  <p className="text-sm leading-7 text-emerald-900">
                    شكرًا لتقديمك. سيقوم فريقنا بمراجعة طلبك والتواصل معك قريبًا.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="mt-6 grid gap-5"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    setErrorMsg("");

                    const fd = new FormData(formRef.current!);
                    const cv = fd.get("cv") as File | null;

                    if (!cv || cv.size === 0) {
                      setErrorMsg("الرجاء إرفاق سيرتك الذاتية.");
                      return;
                    }
                    if (cv.size > CV_MAX_SIZE) {
                      setErrorMsg("حجم الملف يجب ألا يتجاوز 3 ميجابايت.");
                      return;
                    }

                    setSubmitting(true);
                    try {
                      const res = await fetch("/api/jobs/content_creator/apply/", {
                        method: "POST",
                        body: fd,
                      });
                      if (!res.ok) {
                        let message = "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.";
                        try {
                          const data = await res.json();
                          const firstError =
                            data?.cv?.[0] ||
                            data?.name?.[0] ||
                            data?.phone?.[0] ||
                            data?.address?.[0] ||
                            data?.email?.[0] ||
                            data?.detail;
                          if (firstError) message = firstError;
                        } catch {
                          // keep default message
                        }
                        throw new Error(message);
                      }
                      setSubmitted(true);
                      formRef.current?.reset();
                      setFileName("");
                    } catch (err) {
                      setErrorMsg(
                        err instanceof Error
                          ? err.message
                          : "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.",
                      );
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    الاسم
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="اكتب اسمك الكامل"
                      className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    رقم الهاتف
                    <input
                      name="phone"
                      required
                      type="tel"
                      inputMode="tel"
                      placeholder="مثال: 01000000000"
                      className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    البريد الإلكتروني{" "}
                    <span className="text-slate-400">(اختياري)</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    العنوان
                    <input
                      name="address"
                      required
                      type="text"
                      placeholder="المحافظة / المدينة"
                      className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </label>

                  <div className="grid gap-2 text-sm font-medium text-slate-700">
                    السيرة الذاتية{" "}
                    <span className="text-slate-400">(PDF أو Word، بحد أقصى 3 ميجابايت)</span>
                    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-600 transition hover:border-brand hover:bg-white">
                      <span className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-brand" />
                        {fileName || "اختر ملف السيرة الذاتية"}
                      </span>
                      <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-deep">
                        تصفّح
                      </span>
                      <input
                        name="cv"
                        required
                        type="file"
                        accept={CV_ACCEPT}
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file && file.size > CV_MAX_SIZE) {
                            setErrorMsg("حجم الملف يجب ألا يتجاوز 3 ميجابايت.");
                            setFileName("");
                            e.target.value = "";
                            return;
                          }
                          setErrorMsg("");
                          setFileName(file ? file.name : "");
                        }}
                      />
                    </label>
                  </div>

                  {errorMsg ? (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm leading-7 text-red-600">
                      {errorMsg}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:opacity-50"
                  >
                    {submitting ? "جارٍ الإرسال..." : "إرسال الطلب"}
                  </button>

                  <p className="text-xs leading-6 text-slate-400">
                    بإرسالك الطلب فإنك توافق على تواصل فريق موجا معك بخصوص هذه الوظيفة.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
