import Link from "next/link";
import { Linkedin } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";
import { SITE } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative border-t border-rule bg-bg">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10">
        <div className="font-display select-none text-[20vw] font-900 leading-none tracking-[-0.04em] text-ink/95 sm:text-[22vw]">
          AURIXYS
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="text-mono mb-4 text-ink-mute">Navigate</div>
            <ul className="space-y-2 text-sm text-ink-dim">
              <li><Link href="/#capabilities" className="hover:text-ink">Capabilities</Link></li>
              <li><Link href="/products/jal-prahari" className="hover:text-ink">Jal Prahari</Link></li>
              <li><Link href="/products/anvay" className="hover:text-ink">ANVAY</Link></li>
              <li><Link href="/products/qumail" className="hover:text-ink">QuMail</Link></li>
              <li><Link href="/#missions" className="hover:text-ink">Missions</Link></li>
              <li><Link href="/about" className="hover:text-ink">About</Link></li>
              <li><Link href="/press" className="hover:text-ink">Press</Link></li>
              <li><Link href="/careers" className="hover:text-ink">Careers</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-mono mb-4 text-ink-mute">Legal</div>
            <ul className="space-y-2 text-sm text-ink-dim">
              <li><Link href="/legal/privacy" className="hover:text-ink">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-ink">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-mono mb-4 text-ink-mute">Contact</div>
            <ul className="space-y-2 text-sm text-ink-dim">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-ink">{SITE.phone}</a></li>
              <li className="text-ink-mute">{SITE.address}</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aurixys"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ink"
                  aria-label="Aurixys on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-rule pt-6 text-xs text-ink-mute md:flex-row md:items-center">
          <span className="text-mono">© 2026 Aurixys Pvt. Ltd. · Nashik, India</span>
          <ScrollProgress />
        </div>
      </div>
    </footer>
  );
}
