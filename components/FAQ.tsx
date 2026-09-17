import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/constants";

export function FAQ({
  items,
  title = "Perguntas frequentes",
  subtitle,
}: {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-h2 text-primary">{title}</h2>
          {subtitle && <p className="mt-3 text-text-muted">{subtitle}</p>}
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
