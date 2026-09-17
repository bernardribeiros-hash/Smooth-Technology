// Dados centrais do site — troque os valores abaixo pelos seus dados reais.
// Tudo que aparece em mais de um lugar (nome, WhatsApp, redes sociais, etc.)
// vive aqui para facilitar a manutenção.

export const SITE = {
  name: "[Seu Nome]",
  shortName: "[Seu Nome]",
  tagline: "Cursos e serviços de informática",
  description:
    "Aprenda informática do zero ou contrate manutenção, redes e suporte técnico com quem já ajudou centenas de alunos e clientes.",
  whatsapp: "5511999999999", // formato: 55 + DDD + número, só dígitos
  whatsappMessage: "Olá! Vim pelo site e quero saber mais.",
  email: "contato@seudominio.com.br",
  instagram: "@seuusuario",
  instagramUrl: "https://instagram.com/seuusuario",
  youtube: "@seucanal",
  youtubeUrl: "https://youtube.com/@seucanal",
  linkedin: "/in/seuperfil",
  linkedinUrl: "https://linkedin.com/in/seuperfil",
  city: "Sua Cidade",
  state: "UF",
  cnpj: "00.000.000/0001-00",
  url: "https://www.seudominio.com.br",
  logo: "/images/logo.svg",
  ogImage: "/images/og-default.jpg",
  foundedYear: 2018,
  studentsCount: "500+",
  yearsExperience: "8+",
  googleAnalyticsId: "G-XXXXXXXXXX",
  metaPixelId: "000000000000000",
} as const;

export function buildWhatsappMessage(context?: string) {
  return context ? `Olá! Vim pelo site e ${context}` : SITE.whatsappMessage;
}

export const NAV_LINKS = [
  { label: "Cursos", href: "/cursos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Reembolso", href: "/politica-de-reembolso" },
];

export type Testimonial = {
  name: string;
  role: string;
  photo: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcos Andrade",
    role: "Aluno do curso de Manutenção",
    photo: "https://placehold.co/96x96?text=MA",
    text: "Eu não sabia nem trocar uma memória RAM. Hoje já conserto notebook dos vizinhos e tô cobrando por isso. O curso é direto ao ponto, sem enrolação.",
    rating: 5,
  },
  {
    name: "Juliana Reis",
    role: "Aluna do curso de Informática Básica",
    photo: "https://placehold.co/96x96?text=JR",
    text: "Tenho 58 anos e sempre tive medo de computador. As aulas explicam tudo devagar, com paciência. Hoje resolvo praticamente tudo sozinha.",
    rating: 5,
  },
  {
    name: "Pedro Lima",
    role: "Cliente — Serviço de redes",
    photo: "https://placehold.co/96x96?text=PL",
    text: "Chamei pra resolver a rede Wi-Fi da minha loja, que caía toda hora. Resolveu no mesmo dia e ainda me ensinou a identificar problemas simples.",
    rating: 5,
  },
];

export type FaqItem = { question: string; answer: string };

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Preciso ter experiência prévia em informática?",
    answer:
      "Não. Os cursos foram criados para quem está começando do zero. Cada módulo parte do básico e avança no seu ritmo.",
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer:
      "O acesso é vitalício. Você assiste quando quiser, no seu tempo, e pode rever qualquer aula sempre que precisar.",
  },
  {
    question: "O curso tem certificado?",
    answer:
      "Sim. Ao concluir todos os módulos você recebe um certificado digital de conclusão.",
  },
  {
    question: "Como funciona o suporte tirar dúvidas?",
    answer:
      "Você tem um canal direto (WhatsApp e/ou grupo de alunos) para enviar dúvidas durante o curso.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer:
      "Sim. A plataforma funciona em celular, tablet e computador, então você estuda de onde estiver.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem garantia de 7 dias. Se não for pra você, devolvemos 100% do valor pago, sem perguntas.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Escolha seu curso ou serviço",
    description: "Veja qual opção resolve o seu problema hoje.",
  },
  {
    step: 2,
    title: "Fale com a gente pelo WhatsApp",
    description: "Tire dúvidas antes de decidir, sem compromisso.",
  },
  {
    step: 3,
    title: "Garanta sua vaga ou agende o atendimento",
    description: "Inscrição no curso ou visita/atendimento remoto marcado.",
  },
  {
    step: 4,
    title: "Comece a aprender ou resolva o problema",
    description: "Acesso liberado na hora ou atendimento no dia combinado.",
  },
  {
    step: 5,
    title: "Continue evoluindo",
    description: "Suporte contínuo para dúvidas e próximos passos.",
  },
];
