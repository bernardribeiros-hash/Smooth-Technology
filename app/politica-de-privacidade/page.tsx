import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como ${SITE.name} coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.`,
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalContent
      title="Política de Privacidade"
      updatedAt="16 de setembro de 2026"
      intro={`Esta Política de Privacidade descreve como ${SITE.name} ("nós") coleta, usa, armazena e protege
      os dados pessoais dos usuários deste site (${SITE.url}), em conformidade com a Lei Geral de
      Proteção de Dados (Lei nº 13.709/2018 — LGPD).`}
      sections={[
        {
          title: "1. Quais dados coletamos",
          body: [
            "Coletamos dados fornecidos voluntariamente por você, como nome, e-mail e telefone/WhatsApp, quando você preenche o formulário de contato ou inicia uma conversa pelo WhatsApp.",
            "Também coletamos automaticamente dados de navegação (como páginas visitadas e tempo de permanência) por meio de ferramentas de análise, como Google Analytics e Meta Pixel.",
          ],
        },
        {
          title: "2. Para que usamos seus dados",
          body: [
            "Usamos seus dados para responder suas mensagens, prestar os serviços e cursos contratados, enviar informações relevantes sobre nossos produtos (quando autorizado) e melhorar a experiência no site.",
            "Dados de navegação são usados de forma agregada para entender o comportamento dos visitantes e melhorar o conteúdo do site e nossas campanhas de anúncios.",
          ],
        },
        {
          title: "3. Compartilhamento de dados",
          body: [
            "Não vendemos seus dados pessoais. Podemos compartilhar dados com prestadores de serviço que nos ajudam a operar o site (como plataformas de e-mail, hospedagem, checkout e ferramentas de análise), sempre limitado ao necessário para a prestação desses serviços.",
          ],
        },
        {
          title: "4. Cookies e ferramentas de análise",
          body: [
            "Este site utiliza cookies e tecnologias semelhantes (Google Analytics 4 e Meta Pixel) para entender como os visitantes usam o site e para exibir anúncios mais relevantes. Você pode desativar cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades.",
          ],
        },
        {
          title: "5. Seus direitos como titular de dados",
          body: [
            `Você pode, a qualquer momento, solicitar acesso, correção, portabilidade ou exclusão dos seus dados pessoais, entrando em contato pelo e-mail ${SITE.email}. Também é seu direito revogar consentimentos dados anteriormente.`,
          ],
        },
        {
          title: "6. Segurança dos dados",
          body: [
            "Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida.",
          ],
        },
        {
          title: "7. Alterações nesta política",
          body: [
            "Esta política pode ser atualizada periodicamente. Recomendamos revisitar esta página de tempos em tempos para se manter informado sobre eventuais mudanças.",
          ],
        },
        {
          title: "8. Contato",
          body: [
            `Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
