import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/CTA";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas práticas de manutenção, redes e informática básica para o seu dia a dia.",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="section-padding bg-surface">
        <div className="container-custom max-w-2xl text-center md:mx-auto">
          <h1 className="text-h1 text-primary">Blog</h1>
          <p className="mt-4 text-lg text-text-muted">
            Dicas práticas e diretas sobre manutenção, redes e informática do dia a dia.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-6">
        <div className="container-custom flex flex-wrap justify-center gap-3">
          {BLOG_CATEGORIES.map((cat) => (
            <Badge key={cat} variant="outline">{cat}</Badge>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-surface">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Badge variant="default" className="mb-3 w-fit">{post.category}</Badge>
                <h2 className="text-lg font-bold text-primary">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-text-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-text-muted">{post.readingTime} de leitura</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-xl rounded-2xl border border-border bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-primary">Quer receber novos posts?</h2>
          <p className="mt-2 text-text-muted">
            Em breve você poderá assinar nossa newsletter para receber dicas direto no seu e-mail.
          </p>
        </div>
      </section>

      <CTA
        title="Prefere aprender de forma completa e guiada?"
        subtitle="Conheça nossos cursos práticos de informática."
        primaryHref="/cursos"
        primaryLabel="Ver os cursos"
      />
    </>
  );
}
