import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="animate-fade-up">
          <p className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            +500 alunos e clientes atendidos
          </p>
          <h1 className="text-h1 text-balance text-primary">
            Aprenda informática ou resolva seu problema de computador hoje mesmo
          </h1>
          <p className="mt-5 max-w-lg text-lg text-text-muted">
            Cursos práticos para quem quer aprender do zero e serviços rápidos de manutenção,
            redes e suporte para quem precisa resolver agora — sem enrolação e sem jargão técnico.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/cursos">Ver os cursos</Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <WhatsAppInlineLink context="quero saber mais sobre os serviços.">
                Preciso de um técnico agora
              </WhatsAppInlineLink>
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            Resposta rápida pelo WhatsApp · Atendimento em todo o Brasil (remoto) e presencial em [Sua Cidade]
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-lg">
          <Image
            src="https://placehold.co/800x600?text=Foto+ou+v%C3%ADdeo+de+apresenta%C3%A7%C3%A3o"
            alt="Instrutor apresentando os cursos e serviços de informática"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
