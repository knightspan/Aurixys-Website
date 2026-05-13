import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-bg py-24">
        <div className="prose-invert mx-auto max-w-[760px] px-6 text-[15px] leading-[1.8] text-ink-dim lg:px-10">
          <p>
            This page is a placeholder pending finalisation of an Indian DPDP-compliant privacy policy.
            The forthcoming version will set out, in plain language, what personal data Aurixys collects,
            on what legal basis, how it is retained, with whom it is shared, and the rights data principals
            hold under the Digital Personal Data Protection Act, 2023.
          </p>
          <p className="mt-6">
            For any privacy-related question in the interim, contact{" "}
            <a className="text-ink hover:text-accent" href="mailto:info@aurixys.com">info@aurixys.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
