"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur">
      <nav className="container-custom flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-heading text-lg font-800 text-primary md:text-xl" onClick={() => setOpen(false)}>
          {SITE.shortName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="whatsapp" size="sm">
            <WhatsAppInlineLink context="quero falar com você agora.">
              Falar no WhatsApp
            </WhatsAppInlineLink>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container-custom flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base font-medium text-text hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="whatsapp" className="mt-2 w-full">
              <WhatsAppInlineLink context="quero falar com você agora.">
                Falar no WhatsApp
              </WhatsAppInlineLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
