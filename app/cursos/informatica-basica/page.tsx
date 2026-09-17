import type { Metadata } from "next";
import { CourseTemplate } from "@/components/CourseTemplate";
import { getCourseBySlug } from "@/lib/courses";

const course = getCourseBySlug("informatica-basica")!;

export const metadata: Metadata = {
  title: course.title,
  description: course.seoDescription,
};

export default function InformaticaBasicaPage() {
  return <CourseTemplate course={course} />;
}
