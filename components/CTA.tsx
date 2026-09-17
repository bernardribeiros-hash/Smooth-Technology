import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";

export function CTA({
  title = "Pronto para dar o próximo passo?",
  subtitle = "Fale com a gente agora pelo WhatsApp ou escolha o curso ideal para você.",
  primaryHref = "/cursos",
  primaryLabel = "Ver os cursos",
  whatsappContext = "quero saber mais.",
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  whatsappContext?: string;
}) {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom flex flex-col items-center gap-6 text-center">
        <h2 className="text-h2 max-w-2xl text-balance">{title}</h2>
        <p className="max-w-xl text-white/80">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="whatsapp" size="lg">
            <WhatsAppInlineLink context={whatsappContext}>Falar no WhatsApp</WhatsAppInlineLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
