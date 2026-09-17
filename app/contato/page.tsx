import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import { SERVICE_AREA } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com ${SITE.name} pelo WhatsApp, e-mail ou formulário do site.`,
};

const CONTACT_FAQ = [
  { question: "Qual o prazo de resposta?", answer: "Pelo WhatsApp, normalmente respondemos em poucas horas dentro do horário de atendimento." },
  { question: "Posso ligar por telefone?", answer: "Nosso atendimento principal é pelo WhatsApp, para agilizar o retorno e manter um histórico da conversa." },
  { question: "Vocês atendem fora do horário comercial?", answer: "Mensagens fora do horário são respondidas assim que possível no próximo dia útil." },
];

export default function ContatoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contato" }]} />

      <section className="section-padding bg-surface">
        <div className="container-custom max-w-2xl text-center md:mx-auto">
          <h1 className="text-h1 text-primary">Fale com a gente</h1>
          <p className="mt-4 text-lg text-text-muted">
            Manda sua dúvida, pedido de orçamento ou pergunta sobre os cursos. Respondemos rápido.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <h2 className="mb-6 text-lg font-bold text-primary">Envie uma mensagem</h2>
            <ContactForm />
          </div>

          <div className="space-y-4">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md"
            >
              <MessageCircle className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary">WhatsApp</p>
                <p className="text-sm text-text-muted">Resposta mais rápida</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md"
            >
              <Mail className="h-6 w-6 shrink-0 text-secondary" />
              <div>
                <p className="font-semibold text-primary">{SITE.email}</p>
                <p className="text-sm text-text-muted">Para assuntos mais detalhados</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-5">
              <MapPin className="h-6 w-6 shrink-0 text-secondary" />
              <div>
                <p className="font-semibold text-primary">{SITE.city} — {SITE.state}</p>
                <p className="text-sm text-text-muted">{SERVICE_AREA.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-5">
              <Clock className="h-6 w-6 shrink-0 text-secondary" />
              <div>
                <p className="font-semibold text-primary">Horário de atendimento</p>
                <p className="text-sm text-text-muted">{SERVICE_AREA.hours}</p>
              </div>
            </div>

            <WhatsAppInlineLink
              context="quero falar com você agora."
              className="mt-2 block rounded-xl bg-accent px-5 py-4 text-center font-semibold text-white hover:bg-accent/90"
            >
              Prefiro falar agora pelo WhatsApp
            </WhatsAppInlineLink>
          </div>
        </div>
      </section>

      <FAQ items={CONTACT_FAQ} title="Dúvidas sobre o contato" />
    </>
  );
}
