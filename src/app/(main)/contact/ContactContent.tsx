"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const SUBJECT_OPTIONS = [
  { value: "Custom Guitar Order", label: "Custom guitar order" },
  { value: "Available Guitars", label: "Available guitars" },
  { value: "Workshop Visit", label: "Workshop visit" },
  { value: "General Inquiry", label: "General inquiry" },
];

interface SubjectSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function SubjectSelect({ value, onChange }: SubjectSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLabel = SUBJECT_OPTIONS.find((o) => o.value === value)?.label;

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(SUBJECT_OPTIONS.length - 1, i + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        onChange(SUBJECT_OPTIONS[activeIndex].value);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, activeIndex, onChange]);

  useEffect(() => {
    if (open) {
      const currentIdx = SUBJECT_OPTIONS.findIndex((o) => o.value === value);
      setActiveIndex(currentIdx >= 0 ? currentIdx : 0);
    }
  }, [open, value]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between px-4 py-3 bg-transparent border-b border-brand-rule focus:outline-none focus:border-brand-forest dark:focus:border-brand-forest-light transition-colors text-left cursor-pointer ${
          currentLabel
            ? "text-brand-ink dark:text-brand-cream"
            : "text-brand-ink-soft/50 dark:text-brand-cream/40"
        }`}
      >
        <span>{currentLabel || "Select an inquiry"}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-brand-forest dark:text-brand-forest-light"
          aria-hidden="true"
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1L7 7L13 1" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full mt-1 z-20 bg-brand-cream-soft dark:bg-stone-900 border border-brand-rule/60 dark:border-stone-800 shadow-[0_20px_40px_-20px_rgba(26,26,26,0.15)] overflow-hidden"
          >
            {SUBJECT_OPTIONS.map((option, i) => {
              const isSelected = option.value === value;
              const isActive = i === activeIndex;
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-brand-cream-deep dark:bg-stone-800 text-brand-forest dark:text-brand-forest-light"
                        : "text-brand-ink dark:text-brand-cream/90"
                    } ${
                      i < SUBJECT_OPTIONS.length - 1
                        ? "border-b border-brand-rule/40 dark:border-stone-800"
                        : ""
                    }`}
                  >
                    <span className="text-sm">{option.label}</span>
                    {isSelected && (
                      <span
                        aria-hidden="true"
                        className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-walnut dark:text-brand-walnut-light"
                      >
                        Selected
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ContactData {
  data: {
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface ContactContentProps {
  contactContent: ContactData | null;
}

const inputClasses =
  "w-full px-4 py-3 bg-transparent border-b border-brand-rule text-brand-ink dark:text-brand-cream placeholder:text-brand-ink-soft/50 dark:placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-forest dark:focus:border-brand-forest-light transition-colors";

const labelClasses =
  "block font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-2";

export default function ContactContent({ contactContent }: ContactContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      }, 4000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setErrorMessage(
        `Sorry, your message could not be sent (${message}). Please try again or email glenncanin@hotmail.com directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const phone = contactContent?.data?.phone || "415-407-1191";
  const email = contactContent?.data?.email || "glenncanin@hotmail.com";
  const address = contactContent?.data?.address || "314 Ross Drive\nMill Valley, CA 94941\nUSA";
  const hours = contactContent?.data?.hours || "Workshop visits by appointment only\nMonday – Friday, 9:00 AM – 5:00 PM";

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Correspondence
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            In Touch
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            Whether you are considering a commission or have questions about a completed
            instrument, I&apos;d be glad to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact info column */}
          <FadeIn className="lg:col-span-4">
            <dl className="space-y-10">
              <div>
                <dt className={labelClasses}>Telephone</dt>
                <dd className="text-lg text-brand-ink dark:text-brand-cream">
                  <a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClasses}>Email</dt>
                <dd className="text-lg text-brand-ink dark:text-brand-cream break-all">
                  <a href={`mailto:${email}`} className="hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors">
                    {email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClasses}>Workshop</dt>
                <dd className="text-lg text-brand-ink dark:text-brand-cream whitespace-pre-line leading-relaxed">
                  {address}
                </dd>
                {hours && (
                  <dd className="mt-3 text-sm text-brand-ink-soft/80 dark:text-brand-cream/60 whitespace-pre-line leading-relaxed">
                    {hours}
                  </dd>
                )}
              </div>
            </dl>
          </FadeIn>

          {/* Form column */}
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            {isSubmitted ? (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-brand-forest dark:text-brand-forest-light mx-auto mb-6" />
                <p className="font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-forest dark:text-brand-forest-light mb-3">
                  Received
                </p>
                <h3 className="font-cinzel text-3xl font-normal text-brand-ink dark:text-brand-cream mb-4">
                  Thank you.
                </h3>
                <p className="text-brand-ink-soft dark:text-brand-cream/75 max-w-md mx-auto">
                  A confirmation has been sent to your inbox. Glenn will reply personally within a few days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {errorMessage && (
                  <div className="flex items-start p-4 border-l-2 border-red-600 bg-red-50/50 dark:bg-red-950/20 text-red-800 dark:text-red-200">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                  className="absolute -left-[9999px] opacity-0 pointer-events-none h-0 w-0"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClasses}>Subject</label>
                  <SubjectSelect
                    value={formData.subject}
                    onChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-brand-ink disabled:hover:border-brand-ink"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
