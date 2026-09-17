import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-warning">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-warning" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm text-text">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface">
          <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
