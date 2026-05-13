import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-bg">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="text-mono mb-6 text-accent">{"// 404"}</div>
        <h1 className="font-display text-[clamp(48px,9vw,128px)] font-700 uppercase leading-[0.95] tracking-[-0.03em] text-ink">
          No signal.
        </h1>
        <p className="mt-8 max-w-[55ch] text-[16px] leading-relaxed text-ink-dim">
          The page you were looking for doesn&rsquo;t exist on this side of the river.
        </p>
        <Link
          href="/"
          className="text-mono mt-12 inline-block border border-rule px-6 py-4 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Return home →
        </Link>
      </div>
    </section>
  );
}
