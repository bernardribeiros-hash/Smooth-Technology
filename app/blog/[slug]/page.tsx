import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/CTA";
import { ReadingProgress } from "@/components/ReadingProgress";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ReadingProgress />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <article className="section-padding">
        <div className="container-custom max-w-2xl">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-h1 text-balance text-primary">{post.title}</h1>
          <p className="mt-3 text-sm text-text-muted">
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            {" · "}
            {post.readingTime} de leitura
          </p>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-surface">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-slate mt-8 max-w-none space-y-4 text-text">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <CTA
        title="Gostou da dica?"
        subtitle="Aprenda de forma completa e guiada com nossos cursos práticos."
        primaryHref="/cursos"
        primaryLabel="Ver os cursos"
      />
    </>
  );
}
