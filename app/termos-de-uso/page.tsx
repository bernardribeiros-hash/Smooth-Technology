import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos e condições de uso do site e dos cursos de ${SITE.name}.`,
};

export default function TermosDeUsoPage() {
  return (
    <LegalContent
      title="Termos de Uso"
      updatedAt="16 de setembro de 2026"
      intro={`Ao acessar e usar o site ${SITE.url} e contratar os cursos ou serviços de ${SITE.name}, você
      concorda com os termos descritos abaixo. Leia com atenção antes de utilizar nossos serviços.`}
      sections={[
        {
          title: "1. Sobre os cursos",
          body: [
            "Os cursos oferecidos são de natureza educacional e informativa. O acesso é liberado após a confirmação do pagamento, conforme descrito na página de cada curso.",
            "O acesso vitalício se refere à disponibilidade do conteúdo enquanto a plataforma de hospedagem dos cursos estiver ativa, podendo o conteúdo ser atualizado ao longo do tempo.",
          ],
        },
        {
          title: "2. Uso do conteúdo",
          body: [
            "Todo o conteúdo disponibilizado (vídeos, materiais, PDFs e demais arquivos) é de uso pessoal e intransferível. É proibida a reprodução, distribuição ou revenda do conteúdo sem autorização expressa.",
          ],
        },
        {
          title: "3. Pagamentos",
          body: [
            "Os pagamentos são processados por plataformas externas de checkout (como Hotmart, Kiwify ou Mercado Pago). Ao concluir a compra, você também concorda com os termos de uso dessas plataformas.",
          ],
        },
        {
          title: "4. Cancelamento e reembolso",
          body: [
            "As condições de cancelamento e reembolso estão descritas na nossa Política de Reembolso, disponível em /politica-de-reembolso.",
          ],
        },
        {
          title: "5. Serviços de manutenção e suporte técnico",
          body: [
            "Os serviços de manutenção, redes e suporte técnico são orçados individualmente conforme o problema apresentado. O valor final pode variar de acordo com o diagnóstico e é sempre informado antes da execução do serviço.",
          ],
        },
        {
          title: "6. Limitação de responsabilidade",
          body: [
            `${SITE.name} se compromete a prestar os serviços com o máximo de cuidado e qualidade, mas não se responsabiliza por perdas de dados ou danos causados por uso indevido dos equipamentos, falhas de terceiros ou situações fora do nosso controle.`,
          ],
        },
        {
          title: "7. Alterações nos termos",
          body: [
            "Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página.",
          ],
        },
        {
          title: "8. Contato",
          body: [
            `Dúvidas sobre estes termos podem ser enviadas para ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
