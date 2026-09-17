"use client";

import { MessageCircle } from "lucide-react";
import { SITE, buildWhatsappMessage } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

type WhatsAppButtonProps = {
  /** Contexto extra para a mensagem, ex.: "quero saber mais sobre o curso de Redes" */
  context?: string;
  floating?: boolean;
};

export function WhatsAppButton({ context, floating = true }: WhatsAppButtonProps) {
  const href = whatsappUrl(SITE.whatsapp, buildWhatsappMessage(context));

  if (!floating) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-primary px-3 py-2 text-sm font-medium text-white md:group-hover:block" />
    </a>
  );
}

export function WhatsAppInlineLink({
  context,
  children,
  className,
}: {
  context?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const href = whatsappUrl(SITE.whatsapp, buildWhatsappMessage(context));
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
