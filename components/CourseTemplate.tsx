import Image from "next/image";
import { Check, X, Award, Clock, Layers, Infinity as InfinityIcon, LifeBuoy, PlayCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Guarantee } from "@/components/Guarantee";
import { SITE, TESTIMONIALS } from "@/lib/constants";
import type { Course } from "@/lib/courses";

const SUMMARY_ITEMS = (course: Course) => [
  { icon: PlayCircle, label: "Formato", value: course.format },
  { icon: Clock, label: "Duração", value: course.duration },
  { icon: Layers, label: "Nível", value: course.level },
  { icon: Award, label: "Certificado", value: course.certificate },
  { icon: InfinityIcon, label: "Acesso", value: course.access },
  { icon: LifeBuoy, label: "Suporte", value: course.support },
];

export function CourseTemplate({ course }: { course: Course }) {
  const whatsappContext = `quero saber mais sobre o curso de ${course.shortTitle}.`;

  return (
    <>
      <Breadcrumb items={[{ label: "Cursos", href: "/cursos" }, { label: course.shortTitle }]} />

      {/* Hero do curso */}
      <section className="section-padding bg-surface">
        <div className="container-custom grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Badge className="mb-4">{course.level}</Badge>
            <h1 className="text-h1 text-balance text-primary">{course.title}</h1>
            <p className="mt-4 max-w-lg text-lg text-text-muted">{course.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#oferta">Quero começar agora</a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <WhatsAppInlineLink context={whatsappContext}>Tirar dúvidas antes</WhatsAppInlineLink>
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Acesso imediato após a confirmação · Garantia de 7 dias
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image src={course.heroImage} alt={course.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Resumo */}
      <section className="border-b border-border py-8">
        <div className="container-custom grid grid-cols-2 gap-6 md:grid-cols-6">
          {SUMMARY_ITEMS(course).map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
              <item.icon className="h-5 w-5 text-secondary" />
              <span className="text-xs font-semibold text-primary">{item.label}</span>
              <span className="text-xs text-text-muted">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem é / não é */}
      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-lg font-bold text-primary">Esse curso é para quem</h2>
            <ul className="mt-4 space-y-3">
              {course.forWho.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-lg font-bold text-primary">Esse curso não é para quem</h2>
            <ul className="mt-4 space-y-3">
              {course.notForWho.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-h2 text-center text-primary">O que você vai aprender</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {course.learn.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo programático */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-h2 text-center text-primary">Conteúdo programático</h2>
          <div className="mt-10 space-y-4">
            {course.modules.map((mod, i) => (
              <div key={mod.title} className="rounded-xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Módulo {i + 1}</p>
                <h3 className="mt-1 font-bold text-primary">{mod.title.replace(/^Módulo \d+ — /, "")}</h3>
                <ul className="mt-3 space-y-2">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-2 text-sm text-text-muted">
                      <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-h2 text-center text-primary">Bônus exclusivos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {course.bonuses.map((bonus) => (
              <div key={bonus.title} className="rounded-xl border border-accent/30 bg-white p-5 text-center">
                <p className="mx-auto mb-2 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">BÔNUS</p>
                <h3 className="font-semibold text-primary">{bonus.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-h2 text-center text-primary">Quem já fez, aprova</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o instrutor */}
      <section className="section-padding bg-surface">
        <div className="container-custom flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-white shadow">
            <Image src="https://placehold.co/200x200?text=Foto" alt={SITE.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Sobre o instrutor</h2>
            <p className="mt-2 max-w-2xl text-text-muted">
              Sou {SITE.name}, atuo com informática há {SITE.yearsExperience} anos e já ajudei mais de{" "}
              {SITE.studentsCount} pessoas a aprenderem tecnologia ou resolverem problemas técnicos —
              sempre com paciência e linguagem simples.
            </p>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="section-padding">
        <div className="container-custom max-w-2xl">
          <div className="rounded-2xl border-2 border-secondary/30 bg-white p-8 text-center shadow-lg">
            <h2 className="text-xl font-bold text-primary">{course.title}</h2>
            <ul className="mx-auto mt-6 max-w-sm space-y-3 text-left">
              {course.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {course.oldPrice && (
                <p className="text-sm text-text-muted line-through">de {course.oldPrice}</p>
              )}
              <p className="text-4xl font-extrabold text-primary">{course.price}</p>
              <p className="text-sm text-text-muted">{course.installments}</p>
            </div>
            <Button asChild size="lg" className="mt-6 w-full">
              <WhatsAppInlineLink context={`quero garantir minha vaga no curso de ${course.shortTitle}.`}>
                Quero garantir minha vaga
              </WhatsAppInlineLink>
            </Button>
            <p className="mt-3 text-xs text-text-muted">Pagamento processado por link externo seguro</p>
          </div>
        </div>
      </section>

      <Guarantee />

      <FAQ items={course.faq} title="Perguntas frequentes sobre o curso" />

      <CTA
        title="Ainda com dúvida se esse curso é pra você?"
        subtitle="Fala com a gente pelo WhatsApp, sem compromisso."
        primaryHref="/cursos"
        primaryLabel="Ver outros cursos"
        whatsappContext={whatsappContext}
      />
    </>
  );
}
