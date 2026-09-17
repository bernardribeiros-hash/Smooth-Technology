import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
  phone: z
    .string()
    .min(10, "Digite um telefone/WhatsApp válido com DDD")
    .max(20, "Telefone inválido"),
  subject: z.enum(["curso", "servico", "outro"], {
    message: "Selecione um assunto",
  }),
  message: z.string().min(10, "Conte um pouco mais (mínimo 10 caracteres)"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
