"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SITE } from "@/lib/utils";

const Schema = z.object({
  name: z.string().min(1, "Required"),
  organization: z.string().optional(),
  email: z.string().email("Valid email required"),
  subject: z.enum(["Partnership", "Press", "Careers", "Other"]),
  message: z.string().min(10, "At least 10 characters"),
});
type FormValues = z.infer<typeof Schema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(Schema), defaultValues: { subject: "Partnership" } });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("submit failed");
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="text-mono mb-4 text-ink-mute">{"// CONTACT"}</div>
          <h2
            id="contact-heading"
            className="font-display text-[clamp(40px,6vw,80px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            Take Contact.
          </h2>
          <p className="font-display mt-4 text-d-sm tracking-tight text-ink-dim">
            Build the future of Indian water.
          </p>
          <ul className="mt-12 space-y-3 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-ink hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="text-ink hover:text-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="text-ink-mute">{SITE.address}</li>
          </ul>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4" noValidate>
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className={inputCls} autoComplete="name" />
            </Field>
            <Field label="Organization" error={errors.organization?.message}>
              <input {...register("organization")} className={inputCls} autoComplete="organization" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" {...register("email")} className={inputCls} autoComplete="email" />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <select {...register("subject")} className={inputCls}>
                <option>Partnership</option>
                <option>Press</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea rows={5} {...register("message")} className={`${inputCls} min-h-[140px] resize-y`} />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="text-mono group mt-4 inline-flex items-center justify-between gap-3 border border-accent bg-transparent px-6 py-4 text-accent transition-colors hover:bg-accent hover:text-bg disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            {status === "error" ? (
              <p className="text-mono text-warn">Submission failed. Please email {SITE.email} directly.</p>
            ) : null}
            {status === "sent" ? (
              <p className="text-mono text-signal">Received. We&rsquo;ll respond from {SITE.email}.</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "block w-full border border-rule bg-bg-elevated px-4 py-3 text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-mono mb-2 block text-ink-mute">{label}</span>
      {children}
      {error ? <span className="text-mono mt-1 block text-warn">{error}</span> : null}
    </label>
  );
}
