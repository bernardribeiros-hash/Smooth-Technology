import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: integrar com um provedor de e-mail (ex.: Resend, SendGrid, Nodemailer + SMTP)
  // para enviar os dados de `parsed.data` para o e-mail definido em SITE.email.
  // Exemplo com Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Site <contato@seudominio.com.br>",
  //     to: SITE.email,
  //     subject: `Novo contato: ${parsed.data.name}`,
  //     text: JSON.stringify(parsed.data, null, 2),
  //   });
  console.log("Novo contato recebido:", parsed.data);

  return NextResponse.json({ ok: true });
}
