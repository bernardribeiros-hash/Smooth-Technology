import { Breadcrumb } from "@/components/Breadcrumb";

export type LegalSection = { title: string; body: string[] };

export function LegalContent({
  title,
  updatedAt,
  intro,
  sections,
}: {
  title: string;
  updatedAt: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Breadcrumb items={[{ label: title }]} />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-h1 text-primary">{title}</h1>
          <p className="mt-2 text-sm text-text-muted">Última atualização: {updatedAt}</p>

          {intro && <p className="mt-6 text-text-muted">{intro}</p>}

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-primary">{section.title}</h2>
                <div className="mt-3 space-y-3 text-text-muted">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm text-text-muted">
            Este texto é um modelo genérico e não substitui a orientação de um advogado. Revise o
            conteúdo com um profissional jurídico antes de publicar o site.
          </p>
        </div>
      </section>
    </>
  );
}
