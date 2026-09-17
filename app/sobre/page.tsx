import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Clock, GraduationCap } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a história de ${SITE.name}, instrutor de informática e técnico com ${SITE.yearsExperience} anos de experiência.`,
};

const NUMBERS = [
  { icon: Users, value: SITE.studentsCount, label: "alunos e clientes atendidos" },
  { icon: Clock, value: SITE.yearsExperience, label: "anos de experiência" },
  { icon: Award, value: "4", label: "cursos completos disponíveis" },
  { icon: GraduationCap, value: "100%", label: "conteúdo em português simples" },
];

const CREDENTIALS = [
  "Anos de experiência prática em manutenção, redes e suporte técnico",
  "Centenas de alunos formados nos cursos online",
  "Atendimento a pequenas empresas e clientes residenciais",
  "Metodologia própria focada em linguagem simples e prática",
];

export default function SobrePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Sobre" }]} />

      <section className="section-padding bg-surface">
        <div className="container-custom grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-h1 text-primary">Prazer, eu sou {SITE.name}</h1>
            <p className="mt-4 text-lg text-text-muted">
              Ajudo pessoas a perderem o medo da tecnologia e pequenos negócios a resolverem
              problemas de informática sem complicação — com cursos práticos e atendimento direto.
            </p>
          </div>
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg md:justify-self-end">
            <Image src="https://placehold.co/500x500?text=Foto+profissional" alt={SITE.name} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* História */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-h2 text-primary">Minha história</h2>
          <div className="mt-6 space-y-4 text-text-muted">
            <p>
              Comecei mexendo em computadores por curiosidade, ajudando vizinhos e familiares a
              resolver problemas simples. Com o tempo, o que era hobby virou profissão: primeiro
              consertando equipamentos, depois configurando redes para pequenas empresas.
            </p>
            <p>
              Percebi que a maior dificuldade das pessoas não era o computador em si, mas a
              linguagem cheia de termos técnicos usada para explicar as coisas. Foi aí que decidi
              criar cursos que qualquer pessoa pudesse entender, do zero, sem precisar de ninguém
              por perto.
            </p>
            <p>
              Hoje, além de atender clientes com serviços de manutenção e redes, dedico boa parte
              do meu tempo a ensinar — porque acredito que entender um pouco de tecnologia muda a
              vida das pessoas, seja para trabalhar, empreender ou simplesmente ficar mais tranquilo
              no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <h2 className="text-h2 text-primary">Credenciais</h2>
          <ul className="mt-6 space-y-3">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-text">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Filosofia */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl rounded-2xl border-2 border-secondary/20 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-primary">Minha filosofia</h2>
          <p className="mt-3 text-text-muted">
            Tecnologia não precisa ser complicada. Meu trabalho é traduzir o &ldquo;tecniquês&rdquo; em algo que
            faça sentido pra você, no seu ritmo, sem julgamento.
          </p>
        </div>
      </section>

      {/* Números */}
      <section className="section-padding bg-surface">
        <div className="container-custom grid grid-cols-2 gap-6 md:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
              <n.icon className="h-6 w-6 text-secondary" />
              <span className="text-2xl font-extrabold text-primary">{n.value}</span>
              <span className="text-xs text-text-muted">{n.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Vamos conversar?"
        subtitle="Tire suas dúvidas comigo diretamente pelo WhatsApp."
        whatsappContext="quero saber mais sobre você e o seu trabalho."
      />
    </>
  );
}
