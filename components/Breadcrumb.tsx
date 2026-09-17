import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="border-b border-border bg-surface">
      <div className="container-custom flex items-center gap-1.5 py-3 text-sm text-text-muted">
        <Link href="/" className="flex items-center hover:text-secondary" aria-label="Início">
          <Home className="h-3.5 w-3.5" />
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            {item.href ? (
              <Link href={item.href} className="hover:text-secondary">{item.label}</Link>
            ) : (
              <span className="font-medium text-primary">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
