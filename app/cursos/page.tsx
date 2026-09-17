import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CourseCard } from "@/components/CourseCard";
import { CTA } from "@/components/CTA";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos de Informática",
  description:
    "Cursos práticos de manutenção de computadores, redes, informática básica e HTML/CSS. Certificado, acesso vitalício e suporte por WhatsApp.",
};

export default function CursosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Cursos" }]} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <h1 className="text-h1 text-primary">Cursos de informática</h1>
            <p className="mt-4 text-lg text-text-muted">
              Escolha o curso ideal para o seu momento: do primeiro contato com o computador até
              virar um profissional de manutenção e redes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Não sabe qual curso escolher?"
        subtitle="Fala com a gente pelo WhatsApp e te ajudamos a decidir sem compromisso."
        whatsappContext="quero ajuda para escolher o curso certo para mim."
      />
    </>
  );
}
