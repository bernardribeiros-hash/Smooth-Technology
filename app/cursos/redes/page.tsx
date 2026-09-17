import type { Metadata } from "next";
import { CourseTemplate } from "@/components/CourseTemplate";
import { getCourseBySlug } from "@/lib/courses";

const course = getCourseBySlug("redes")!;

export const metadata: Metadata = {
  title: course.title,
  description: course.seoDescription,
};

export default function RedesPage() {
  return <CourseTemplate course={course} />;
}
