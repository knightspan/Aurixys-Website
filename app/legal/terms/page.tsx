import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[760px] px-6 text-[15px] leading-[1.8] text-ink-dim lg:px-10">
          <p>
            This page is a placeholder pending finalisation. The forthcoming terms will govern access to this
            website, the materials Aurixys publishes on it, and the conditions under which technical
            documentation and renders may be referenced.
          </p>
          <p className="mt-6">
            Until final terms are published, all material on this site is the property of Aurixys Pvt. Ltd.
            and may not be reproduced without written permission. For permissions, contact{" "}
            <a className="text-ink hover:text-accent" href="mailto:info@aurixys.com">info@aurixys.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
