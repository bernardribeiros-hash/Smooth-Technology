import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, FOOTER_LEGAL_LINKS } from "@/lib/constants";
import { COURSES } from "@/lib/courses";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-800">{SITE.shortName}</p>
          <p className="mt-3 text-sm text-white/70">{SITE.description}</p>
          <div className="mt-4 flex gap-3">
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Cursos</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {COURSES.map((c) => (
              <li key={c.slug}>
                <Link href={`/cursos/${c.slug}`} className="hover:text-white">
                  {c.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Institucional</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {SITE.city} — {SITE.state}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.shortName}. Todos os direitos reservados. CNPJ {SITE.cnpj}
          </p>
          <div className="flex gap-4">
            {FOOTER_LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
