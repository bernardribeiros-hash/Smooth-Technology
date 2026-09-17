import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Obrigado pelo contato",
  robots: { index: false, follow: true },
};

export default function ObrigadoPage() {
  return (
    <section className="section-padding">
      <div className="container-custom flex max-w-xl flex-col items-center gap-5 text-center">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h1 className="text-h1 text-primary">Recebemos sua mensagem!</h1>
        <p className="text-lg text-text-muted">
          Obrigado por entrar em contato, {SITE.name} vai te responder o quanto antes. Se quiser
          agilizar ainda mais, chama a gente direto no WhatsApp.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="lg">
            <WhatsAppInlineLink context="acabei de te mandar uma mensagem pelo site.">
              Falar no WhatsApp agora
            </WhatsAppInlineLink>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/">Voltar para a home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
