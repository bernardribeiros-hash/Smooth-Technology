import { Users, Award, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

const ITEMS = [
  { icon: Users, label: `${SITE.studentsCount} alunos e clientes` },
  { icon: Award, label: "Certificado incluso" },
  { icon: ShieldCheck, label: "Garantia de 7 dias" },
  { icon: Clock, label: `${SITE.yearsExperience} anos de experiência` },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-8">
      <div className="container-custom grid grid-cols-2 gap-6 md:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:text-left">
            <item.icon className="h-6 w-6 shrink-0 text-secondary" />
            <span className="text-sm font-semibold text-primary">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
