"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export function ContactForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Falha ao enviar");

      const subjectLabel =
        data.subject === "curso" ? "um curso" : data.subject === "servico" ? "um serviço" : "uma dúvida";
      const message = `Olá! Me chamo ${data.name} e vim pelo formulário do site. Quero falar sobre ${subjectLabel}: ${data.message}`;

      window.open(whatsappUrl(SITE.whatsapp, message), "_blank");
      router.push("/obrigado");
    } catch {
      setSubmitError(
        "Não foi possível enviar agora. Tente novamente ou fale direto pelo WhatsApp."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          placeholder="Seu nome"
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-primary">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none"
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">
            WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none"
            placeholder="(11) 99999-9999"
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-primary">
          Assunto
        </label>
        <select
          id="subject"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          defaultValue=""
          {...register("subject")}
        >
          <option value="" disabled>Selecione um assunto</option>
          <option value="curso">Quero saber sobre um curso</option>
          <option value="servico">Preciso de um serviço técnico</option>
          <option value="outro">Outro assunto</option>
        </select>
        {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          placeholder="Conte um pouco sobre o que você precisa..."
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Enviar mensagem"}
      </Button>
    </form>
  );
}
