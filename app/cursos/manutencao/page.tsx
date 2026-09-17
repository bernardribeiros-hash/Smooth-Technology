import type { Metadata } from "next";
import { CourseTemplate } from "@/components/CourseTemplate";
import { getCourseBySlug } from "@/lib/courses";

const course = getCourseBySlug("manutencao")!;

export const metadata: Metadata = {
  title: course.title,
  description: course.seoDescription,
};

export default function ManutencaoPage() {
  return <CourseTemplate course={course} />;
}
