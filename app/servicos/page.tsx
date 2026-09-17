import type { Metadata } from "next";
import { MapPin, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import { SERVICES, SERVICE_AREA } from "@/lib/services";
import { SITE, TESTIMONIALS, HOW_IT_WORKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Serviços de Manutenção e Redes",
  description: `Manutenção, formatação, remoção de vírus, redes e suporte técnico remoto e presencial em ${SITE.city}.`,
};

const SERVICE_FAQ = [
  { question: "Vocês atendem presencialmente ou só remoto?", answer: `Atendemos presencialmente em ${SITE.city} e região, e remotamente para todo o Brasil.` },
  { question: "Quanto tempo demora um atendimento?", answer: "A maioria dos atendimentos remotos é resolvida no mesmo dia. Atendimentos presenciais dependem da agenda, mas normalmente em até 48h." },
  { question: "Vocês dão garantia no serviço?", answer: "Sim, todo serviço realizado tem garantia. O prazo varia conforme o tipo de serviço e é informado no orçamento." },
  { question: "Como funciona o orçamento?", answer: "Você entra em contato pelo WhatsApp, descreve o problema, e enviamos um valor estimado. Em muitos casos, o diagnóstico é gratuito." },
  { question: "Meus dados ficam seguros durante o atendimento?", answer: "Sim. Seguimos boas práticas de segurança e privacidade, e qualquer backup é feito com o seu conhecimento." },
  { question: "Vocês emitem nota fiscal?", answer: "Sim, emitimos nota fiscal para pessoa física e jurídica." },
];

export default function ServicosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Serviços" }]} />

      <section className="section-padding bg-surface">
        <div className="container-custom max-w-2xl text-center md:mx-auto">
          <h1 className="text-h1 text-primary">Manutenção, redes e suporte técnico sem dor de cabeça</h1>
          <p className="mt-4 text-lg text-text-muted">
            Atendimento rápido, direto e sem enrolação — remoto para todo o Brasil e presencial em {SITE.city}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg">
              <WhatsAppInlineLink context="preciso de ajuda com meu computador/rede.">
                Solicitar atendimento
              </WhatsAppInlineLink>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-h2 text-center text-primary">Como funciona o atendimento</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* Área de atendimento e preços */}
      <section className="section-padding">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <h3 className="font-bold">Área de atendimento</h3>
            </div>
            <p className="text-text-muted">{SERVICE_AREA.description}</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <h3 className="font-bold">Horário de atendimento</h3>
            </div>
            <p className="text-text-muted">{SERVICE_AREA.hours}</p>
          </div>
        </div>
        <div className="container-custom mt-6 rounded-2xl border border-border bg-surface p-6 text-center">
          <h3 className="font-bold text-primary">Preços</h3>
          <p className="mt-2 text-text-muted">
            Cada serviço tem um valor a partir de (veja nos cards acima). O valor final depende do
            diagnóstico — sempre combinado com você antes de qualquer cobrança.
          </p>
        </div>
      </section>

      {/* Prova social */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-h2 text-center text-primary">Quem já foi atendido</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <FAQ items={SERVICE_FAQ} title="Perguntas frequentes sobre os serviços" />

      <CTA
        title="Precisa de ajuda agora?"
        subtitle="Chama a gente no WhatsApp e resolvemos o mais rápido possível."
        whatsappContext="preciso de ajuda com meu computador/rede."
      />
    </>
  );
}
