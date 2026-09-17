import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge variant="default" className="mb-3 w-fit">{course.level}</Badge>
        <h3 className="text-lg font-bold text-primary">{course.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-text-muted">{course.subtitle}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5" />{course.level}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="block text-xs text-text-muted line-through">{course.oldPrice}</span>
            <span className="block text-xl font-extrabold text-primary">{course.price}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-secondary">
            Ver curso <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
