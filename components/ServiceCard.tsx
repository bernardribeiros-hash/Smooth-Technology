import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as keyof typeof Icons] ?? Icons.Wrench) as LucideIcon;

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-primary">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-text-muted">{service.description}</p>
      <p className="mt-4 text-sm font-semibold text-accent">{service.priceFrom}</p>
    </div>
  );
}
