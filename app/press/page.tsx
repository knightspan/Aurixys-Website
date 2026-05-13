import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Press as PressList } from "@/components/sections/Press";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "Press",
  description: "Press kit, media inquiries, and Aurixys in the news.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Media & Press Kit"
        intro="For media inquiries, interviews, or press kit access, email info@aurixys.com with subject Press. Coverage and assets are listed below as they land."
      />
      <PressList />
      <section className="border-t border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">Press kit.</h2>
            <p className="mt-6 max-w-[55ch] text-[15px] leading-relaxed text-ink-dim">
              Logos (wordmark only · v1), founder portraits, vessel renders, and field-deployment photography
              available on request. Mail <a className="text-ink hover:text-accent" href="mailto:info@aurixys.com">info@aurixys.com</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
