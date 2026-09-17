import type { Metadata } from "next";
import Link from "next/link";
import { X, Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CourseCard } from "@/components/CourseCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Guarantee } from "@/components/Guarantee";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/lib/courses";
import { SERVICES } from "@/lib/services";
import { HOME_FAQ, HOW_IT_WORKS, SITE, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Cursos e Serviços de Informática`,
  description: SITE.description,
};

const PAIN_POINTS = [
  "Computador travando ou lento e você não sabe se conserta ou compra outro",
  "Internet caindo toda hora e ninguém consegue te explicar o motivo",
  "Vontade de aprender informática, mas achando que é \"complicado demais\"",
  "Depender sempre de outra pessoa para resolver qualquer problema simples",
];

const SOLUTIONS = [
  "Cursos práticos, em português simples, sem jargão técnico desnecessário",
  "Atendimento rápido para manutenção, redes e suporte quando você precisa",
  "Conteúdo pensado para quem está começando do zero",
  "Suporte direto por WhatsApp durante todo o curso",
  "Garantia de 7 dias em todos os cursos, sem risco para você",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Dor */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-h2 text-primary">Isso já aconteceu com você?</h2>
          <p className="mt-4 text-text-muted">
            A maioria das pessoas só procura ajuda quando o problema já está grande. Mas dá pra
            evitar isso — e até aprender a resolver sozinho.
          </p>
        </div>
        <div className="container-custom mt-10 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-white p-5">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <p className="text-text">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-h2 text-primary">Como eu posso te ajudar</h2>
          <p className="mt-4 text-text-muted">
            Seja para aprender do zero ou resolver um problema agora, tem um caminho direto para você.
          </p>
        </div>
        <div className="container-custom mt-10 grid gap-4 sm:grid-cols-2">
          {SOLUTIONS.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-white p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-text">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-h2 text-primary">Cursos para todos os níveis</h2>
            <p className="max-w-xl text-text-muted">
              Do primeiro clique no mouse até virar um profissional de manutenção e redes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-h2 text-primary">Serviços de manutenção e redes</h2>
            <p className="max-w-xl text-text-muted">
              Atendimento remoto para todo o Brasil e presencial em {SITE.city}.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="text-h2 text-primary">Como funciona</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="text-h2 text-primary">Quem já passou por aqui</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section-padding">
        <div className="container-custom flex flex-col items-center gap-4 text-center">
          <h2 className="text-h2 max-w-2xl text-primary">
            Ensinando informática e resolvendo problemas há {SITE.yearsExperience} anos
          </h2>
          <p className="max-w-2xl text-text-muted">
            Sou {SITE.name}, e minha missão é simples: tirar o medo da tecnologia e ajudar pessoas e
            pequenos negócios a resolverem seus problemas de informática sem complicação.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/sobre">Conhecer minha história</Link>
          </Button>
        </div>
      </section>

      <Guarantee />

      <FAQ items={HOME_FAQ} subtitle="Ainda com dúvida? Fale com a gente pelo WhatsApp." />

      <CTA
        title="Bora resolver isso hoje?"
        subtitle="Escolha um curso para começar a aprender ou fale agora com a gente pelo WhatsApp."
        whatsappContext="quero saber mais sobre os cursos e serviços."
      />
    </>
  );
}
