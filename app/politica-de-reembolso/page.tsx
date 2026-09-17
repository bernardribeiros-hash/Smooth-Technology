import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Reembolso",
  description: `Condições de garantia e reembolso dos cursos de ${SITE.name}.`,
};

export default function PoliticaDeReembolsoPage() {
  return (
    <LegalContent
      title="Política de Reembolso"
      updatedAt="16 de setembro de 2026"
      intro="Queremos que você compre com confiança. Por isso, todos os nossos cursos contam com garantia incondicional, descrita abaixo."
      sections={[
        {
          title: "1. Garantia de 7 dias",
          body: [
            "Você tem até 7 (sete) dias corridos, a partir da data da compra, para solicitar o reembolso integral do valor pago, sem necessidade de justificativa, conforme o Código de Defesa do Consumidor (direito de arrependimento em compras online).",
          ],
        },
        {
          title: "2. Como solicitar o reembolso",
          body: [
            `Para solicitar o reembolso dentro do prazo de garantia, entre em contato pelo e-mail ${SITE.email} ou pelo WhatsApp, informando o e-mail usado na compra. O reembolso será processado pela mesma plataforma de pagamento utilizada na compra.`,
          ],
        },
        {
          title: "3. Prazo para devolução do valor",
          body: [
            "O prazo para o valor ser efetivamente devolvido depende da política do meio de pagamento utilizado (cartão de crédito, PIX, boleto), podendo levar até algumas faturas no caso de cartão de crédito.",
          ],
        },
        {
          title: "4. Após o prazo de garantia",
          body: [
            "Solicitações realizadas após os 7 dias de garantia serão avaliadas caso a caso, sem garantia de reembolso integral.",
          ],
        },
        {
          title: "5. Reembolso de serviços de manutenção e redes",
          body: [
            "Para serviços técnicos já executados (manutenção, formatação, instalação de redes, entre outros), o reembolso não se aplica da mesma forma que os cursos, já que envolve mão de obra e deslocamento já realizados. Qualquer problema com o serviço prestado deve ser reportado imediatamente para que possamos resolver.",
          ],
        },
        {
          title: "6. Contato",
          body: [
            `Em caso de dúvidas sobre reembolso, fale conosco pelo e-mail ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
