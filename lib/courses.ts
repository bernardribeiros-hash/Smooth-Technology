import type { FaqItem } from "./constants";

export type CourseModule = { title: string; lessons: string[] };
export type Bonus = { title: string; description: string };

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroImage: string;
  price: string;
  oldPrice?: string;
  installments: string;
  level: "Iniciante" | "Iniciante ao Intermediário" | "Todos os níveis";
  duration: string;
  format: string;
  certificate: string;
  access: string;
  support: string;
  forWho: string[];
  notForWho: string[];
  learn: string[];
  modules: CourseModule[];
  bonuses: Bonus[];
  includes: string[];
  faq: FaqItem[];
  seoDescription: string;
  keywords: string[];
};

export const COURSES: Course[] = [
  {
    slug: "manutencao",
    title: "Manutenção de Computadores e Notebooks",
    shortTitle: "Manutenção",
    subtitle: "Do zero ao profissional: monte, formate e conserte computadores com suas próprias mãos",
    heroImage: "https://placehold.co/960x540?text=Curso+de+Manuten%C3%A7%C3%A3o",
    price: "R$ 297",
    oldPrice: "R$ 497",
    installments: "ou 12x de R$ 29,70",
    level: "Iniciante",
    duration: "40 horas em vídeo",
    format: "100% online, no seu ritmo",
    certificate: "Certificado digital de conclusão",
    access: "Acesso vitalício",
    support: "Suporte direto por WhatsApp",
    forWho: [
      "Quem quer aprender uma profissão que sempre tem demanda",
      "Quem já mexe um pouco e quer parar de \"chutar\" solução",
      "Quem quer complementar a renda consertando PCs de vizinhos e conhecidos",
      "Pequenos empresários que querem economizar com manutenção própria",
    ],
    notForWho: [
      "Quem busca fórmula de ficar rico da noite pro dia",
      "Quem não vai separar nenhum tempo pra praticar",
      "Quem já é técnico sênior e busca conteúdo avançado de eletrônica",
    ],
    learn: [
      "Identificar e diagnosticar os problemas mais comuns em PCs e notebooks",
      "Montar um computador do zero, peça por peça",
      "Formatar e instalar Windows e Linux corretamente",
      "Trocar memória RAM, HD, SSD e placas sem danificar o equipamento",
      "Resolver travamentos, telas azuis e lentidão excessiva",
      "Fazer limpeza física e prevenção de superaquecimento",
      "Recuperar dados de HDs e pendrives com problema",
      "Remover vírus e malwares de forma definitiva",
      "Precificar seu serviço e atender o primeiro cliente",
      "Montar um kit de ferramentas básico e de baixo custo",
    ],
    modules: [
      {
        title: "Módulo 1 — Fundamentos do hardware",
        lessons: [
          "Como funciona um computador por dentro",
          "Placa-mãe, processador e memória explicados sem enrolação",
          "Fontes de alimentação: como escolher e testar",
          "Montagem completa de um PC do zero",
        ],
      },
      {
        title: "Módulo 2 — Diagnóstico de problemas",
        lessons: [
          "Checklist de diagnóstico rápido",
          "PC não liga: passo a passo de investigação",
          "Telas azuis (BSOD): como ler e resolver",
          "Superaquecimento e desligamentos aleatórios",
        ],
      },
      {
        title: "Módulo 3 — Sistema operacional",
        lessons: [
          "Formatação e instalação do Windows",
          "Instalação e configuração básica de Linux",
          "Drivers: como encontrar e instalar sem erro",
          "Backup e restauração de sistema",
        ],
      },
      {
        title: "Módulo 4 — Upgrades e componentes",
        lessons: [
          "Troca de SSD e HD sem perder dados",
          "Aumentando memória RAM: o que verificar antes",
          "Notebooks: particularidades da manutenção",
          "Quando vale a pena trocar x consertar",
        ],
      },
      {
        title: "Módulo 5 — Vírus, dados e segurança",
        lessons: [
          "Remoção de vírus e malwares passo a passo",
          "Recuperação de arquivos apagados ou corrompidos",
          "Boas práticas de segurança para orientar o cliente",
          "Ferramentas gratuitas essenciais",
        ],
      },
      {
        title: "Módulo 6 — Virando profissão",
        lessons: [
          "Montando seu kit de ferramentas",
          "Como precificar seu serviço",
          "Atendimento e comunicação com o cliente",
          "Divulgação local: como conseguir os primeiros clientes",
        ],
      },
    ],
    bonuses: [
      { title: "Checklist de diagnóstico em PDF", description: "Um roteiro rápido para não esquecer nenhum passo em um atendimento." },
      { title: "Planilha de precificação", description: "Modelo pronto para calcular quanto cobrar por serviço." },
      { title: "Lista de ferramentas essenciais", description: "O que comprar (e o que não precisa) para começar a atender." },
      { title: "Modelo de recibo e orçamento", description: "Documentos prontos para usar com seus clientes." },
      { title: "Grupo de alunos no WhatsApp", description: "Networking e troca de experiências com outros alunos." },
    ],
    includes: [
      "40 horas de videoaulas em alta definição",
      "Acesso vitalício e atualizações gratuitas",
      "Certificado digital de conclusão",
      "5 bônus exclusivos",
      "Suporte direto por WhatsApp",
      "Garantia incondicional de 7 dias",
    ],
    faq: [
      { question: "Preciso ter um computador para praticar?", answer: "É recomendado, mas não obrigatório para começar — muitos alunos praticam em equipamentos de amigos e familiares nos primeiros módulos." },
      { question: "O curso ensina notebook também, não só PC de mesa?", answer: "Sim, o módulo 4 é dedicado às particularidades de manutenção em notebooks." },
      { question: "Consigo trabalhar com isso mesmo sem diploma técnico?", answer: "Sim. A grande maioria dos técnicos de manutenção no Brasil aprendeu na prática, sem curso técnico formal." },
      { question: "Quanto tempo leva para concluir o curso?", answer: "Em média de 4 a 6 semanas estudando com calma, mas o acesso é vitalício e você pode ir no seu ritmo." },
      { question: "O curso ensina Windows e Linux?", answer: "Sim, os dois sistemas são abordados no módulo 3." },
      { question: "Tem parte prática ou é só teoria?", answer: "É essencialmente prático: cada aula mostra o procedimento sendo feito na tela, passo a passo." },
      { question: "Recebo certificado ao final?", answer: "Sim, um certificado digital de conclusão é liberado automaticamente." },
      { question: "Como funciona o suporte para tirar dúvidas?", answer: "Você tem um canal direto por WhatsApp para enviar suas dúvidas durante os estudos." },
      { question: "O pagamento é recorrente (mensalidade)?", answer: "Não. É um pagamento único, com acesso vitalício ao conteúdo." },
      { question: "E se eu não gostar do curso?", answer: "Você tem 7 dias de garantia incondicional. Se não for pra você, devolvemos 100% do valor." },
    ],
    seoDescription: "Curso de manutenção de computadores e notebooks do zero: monte, formate e conserte PCs. Certificado, acesso vitalício e suporte por WhatsApp.",
    keywords: ["curso de manutenção de computadores", "curso de manutenção de notebooks", "técnico de informática"],
  },
  {
    slug: "redes",
    title: "Redes e Infraestrutura de TI",
    shortTitle: "Redes",
    subtitle: "Configure, proteja e resolva problemas de rede em casas, escritórios e pequenas empresas",
    heroImage: "https://placehold.co/960x540?text=Curso+de+Redes",
    price: "R$ 347",
    oldPrice: "R$ 597",
    installments: "ou 12x de R$ 34,70",
    level: "Iniciante ao Intermediário",
    duration: "35 horas em vídeo",
    format: "100% online, no seu ritmo",
    certificate: "Certificado digital de conclusão",
    access: "Acesso vitalício",
    support: "Suporte direto por WhatsApp",
    forWho: [
      "Quem já sabe o básico de informática e quer se especializar",
      "Quem quer atender pequenas empresas com Wi-Fi instável",
      "Técnicos de manutenção que querem ampliar o serviço oferecido",
      "Quem quer configurar redes em casa com mais segurança e estabilidade",
    ],
    notForWho: [
      "Quem nunca ligou um computador na vida (comece pelo curso de Informática Básica)",
      "Quem busca certificação internacional (CCNA, por exemplo)",
      "Quem não tem interesse em atender clientes, só uso pessoal avançado",
    ],
    learn: [
      "Diferença entre roteador, modem, switch e access point",
      "Configurar uma rede Wi-Fi do zero com boa cobertura",
      "Resolver quedas de conexão e lentidão de internet",
      "Configurar rede cabeada em escritórios pequenos",
      "Criar redes de convidados e segmentação básica",
      "Configurar acesso remoto seguro",
      "Instalar e configurar câmeras de segurança em rede",
      "Proteger a rede contra acessos indevidos",
      "Diagnosticar problemas com ferramentas simples de linha de comando",
      "Precificar e vender serviços de rede para pequenas empresas",
    ],
    modules: [
      { title: "Módulo 1 — Fundamentos de redes", lessons: ["Como a internet chega até você", "Roteador, modem, switch e access point", "Cabeado x Wi-Fi: quando usar cada um", "Ferramentas de diagnóstico básicas"] },
      { title: "Módulo 2 — Configurando Wi-Fi", lessons: ["Configuração de roteador passo a passo", "Posicionamento para melhor cobertura", "Resolvendo quedas de sinal", "Redes mesh: quando vale a pena"] },
      { title: "Módulo 3 — Rede cabeada e escritórios", lessons: ["Estrutura de cabeamento básica", "Configurando switch para pequenas redes", "Organizando rede de um escritório pequeno", "Boas práticas de instalação"] },
      { title: "Módulo 4 — Segurança de rede", lessons: ["Senhas e criptografia Wi-Fi", "Rede de convidados separada", "Identificando dispositivos desconhecidos na rede", "Firewall básico para pequenos negócios"] },
      { title: "Módulo 5 — Acesso remoto e câmeras", lessons: ["Configurando acesso remoto seguro", "Instalação de câmeras IP em rede", "Acesso às câmeras pelo celular", "Armazenamento em nuvem x local"] },
      { title: "Módulo 6 — Virando serviço profissional", lessons: ["Como fazer um diagnóstico de rede em cliente", "Precificando projetos de rede", "Proposta comercial simples", "Como conseguir clientes de pequenas empresas"] },
    ],
    bonuses: [
      { title: "Checklist de instalação de rede", description: "Roteiro completo para não esquecer nenhuma etapa em uma instalação." },
      { title: "Planilha de precificação de projetos", description: "Calcule o valor de instalações e manutenções de rede." },
      { title: "Modelo de proposta comercial", description: "Documento pronto para apresentar a clientes de pequenas empresas." },
      { title: "Lista de equipamentos recomendados", description: "Roteadores e switches com melhor custo-benefício." },
      { title: "Grupo de alunos no WhatsApp", description: "Tire dúvidas e troque experiências com outros alunos." },
    ],
    includes: [
      "35 horas de videoaulas em alta definição",
      "Acesso vitalício e atualizações gratuitas",
      "Certificado digital de conclusão",
      "5 bônus exclusivos",
      "Suporte direto por WhatsApp",
      "Garantia incondicional de 7 dias",
    ],
    faq: [
      { question: "Preciso saber programar para fazer esse curso?", answer: "Não. É um curso prático de configuração e diagnóstico, sem necessidade de programação." },
      { question: "O curso serve para redes residenciais e empresariais?", answer: "Sim, os dois cenários são abordados, com foco extra em pequenas empresas." },
      { question: "Preciso ter equipamentos específicos para praticar?", answer: "Um roteador comum já é suficiente para acompanhar a maior parte das aulas." },
      { question: "O curso ensina instalação de câmeras de segurança?", answer: "Sim, o módulo 5 é dedicado a isso." },
      { question: "Dá pra usar o que aprendo para vender serviço?", answer: "Sim, o módulo 6 é justamente sobre precificação e venda desse tipo de serviço." },
      { question: "Preciso fazer o curso de Manutenção antes?", answer: "Não é obrigatório, mas ajuda. O curso de Redes assume que você já sabe o básico de informática." },
      { question: "Quanto tempo leva para concluir?", answer: "Em média de 3 a 5 semanas, no seu ritmo, com acesso vitalício." },
      { question: "Tem certificado?", answer: "Sim, certificado digital de conclusão liberado automaticamente." },
      { question: "Como funciona o suporte?", answer: "Você tem um canal direto por WhatsApp para dúvidas durante o curso." },
      { question: "E se eu não gostar do curso?", answer: "Garantia incondicional de 7 dias, com devolução de 100% do valor." },
    ],
    seoDescription: "Curso de redes e infraestrutura de TI: configure Wi-Fi, redes cabeadas, câmeras e segurança para casas e pequenas empresas. Certificado e suporte.",
    keywords: ["curso de redes", "curso de infraestrutura de TI", "configurar rede wifi"],
  },
  {
    slug: "informatica-basica",
    title: "Informática Básica",
    shortTitle: "Informática Básica",
    subtitle: "Perca o medo do computador e do celular: aprenda o essencial com calma e sem jargão técnico",
    heroImage: "https://placehold.co/960x540?text=Informática+Básica",
    price: "R$ 147",
    oldPrice: "R$ 247",
    installments: "ou 12x de R$ 14,70",
    level: "Iniciante",
    duration: "20 horas em vídeo",
    format: "100% online, no seu ritmo",
    certificate: "Certificado digital de conclusão",
    access: "Acesso vitalício",
    support: "Suporte direto por WhatsApp",
    forWho: [
      "Quem nunca usou computador ou usa muito pouco",
      "Pessoas com mais idade que querem aprender com calma e paciência",
      "Quem precisa usar computador para o trabalho e sente insegurança",
      "Quem quer aprender a usar WhatsApp, e-mail e internet com segurança",
    ],
    notForWho: [
      "Quem já usa computador no dia a dia sem dificuldades",
      "Quem busca conteúdo técnico avançado (veja os outros cursos)",
      "Quem espera aprender programação",
    ],
    learn: [
      "Ligar, desligar e navegar pelo computador com segurança",
      "Usar mouse e teclado com confiança",
      "Criar e organizar pastas e arquivos",
      "Usar a internet e pesquisar no Google com segurança",
      "Criar e usar e-mail no dia a dia",
      "Usar WhatsApp Web e videochamadas",
      "Editar documentos simples de texto",
      "Reconhecer golpes e mensagens falsas (phishing)",
      "Fazer backup simples de fotos e arquivos importantes",
      "Resolver pequenos problemas sozinho, sem depender de ninguém",
    ],
    modules: [
      { title: "Módulo 1 — Primeiros passos", lessons: ["Ligando e desligando corretamente", "Conhecendo o mouse e o teclado", "A área de trabalho explicada", "Abrindo e fechando programas"] },
      { title: "Módulo 2 — Arquivos e pastas", lessons: ["O que são arquivos e pastas", "Criando e organizando suas pastas", "Salvando e encontrando arquivos", "Pendrive e HD externo"] },
      { title: "Módulo 3 — Internet no dia a dia", lessons: ["Navegando com segurança", "Pesquisando no Google", "Criando e usando e-mail", "Reconhecendo golpes online"] },
      { title: "Módulo 4 — WhatsApp e comunicação", lessons: ["WhatsApp Web passo a passo", "Fazendo videochamadas", "Enviando fotos e documentos", "Cuidados com mensagens suspeitas"] },
      { title: "Módulo 5 — Documentos e organização", lessons: ["Criando um documento de texto simples", "Imprimindo e salvando em PDF", "Organizando fotos no computador", "Fazendo backup simples"] },
      { title: "Módulo 6 — Ganhando autonomia", lessons: ["Resolvendo pequenos problemas sozinho", "Atualizações: quando aceitar", "Pedindo ajuda de forma eficiente", "Próximos passos para continuar aprendendo"] },
    ],
    bonuses: [
      { title: "Guia rápido em PDF", description: "Resumo ilustrado dos principais passos de cada módulo." },
      { title: "Lista de golpes mais comuns", description: "Como reconhecer e evitar as fraudes mais frequentes na internet." },
      { title: "Aula extra de celular Android", description: "O essencial para usar o smartphone com mais segurança." },
      { title: "Glossário de termos de informática", description: "As palavras mais usadas, explicadas em português simples." },
      { title: "Grupo de alunos no WhatsApp", description: "Espaço para tirar dúvidas com calma e sem julgamento." },
    ],
    includes: [
      "20 horas de videoaulas em linguagem simples",
      "Acesso vitalício e atualizações gratuitas",
      "Certificado digital de conclusão",
      "5 bônus exclusivos",
      "Suporte direto por WhatsApp",
      "Garantia incondicional de 7 dias",
    ],
    faq: [
      { question: "Tenho quase 70 anos, consigo acompanhar?", answer: "Sim! O curso foi pensado especialmente para quem está começando do absoluto zero, com explicações devagar e repetidas." },
      { question: "Preciso saber alguma coisa antes de começar?", answer: "Não, nenhum conhecimento prévio é necessário." },
      { question: "O curso serve também para aprender celular?", answer: "O foco é computador, mas há uma aula bônus sobre o essencial do Android." },
      { question: "Posso assistir quantas vezes eu quiser?", answer: "Sim, o acesso é vitalício e você pode rever qualquer aula sempre que precisar." },
      { question: "Vou conseguir usar o computador do trabalho depois?", answer: "Sim, o curso cobre justamente as tarefas mais comuns do dia a dia, inclusive no trabalho." },
      { question: "Tem alguém para tirar minhas dúvidas?", answer: "Sim, há suporte direto por WhatsApp durante todo o curso." },
      { question: "Quanto tempo leva para terminar o curso?", answer: "Em média de 2 a 4 semanas, no seu ritmo, sem pressa." },
      { question: "Recebo certificado?", answer: "Sim, certificado digital de conclusão ao final do curso." },
      { question: "O pagamento é único ou mensal?", answer: "É um pagamento único, com acesso vitalício ao conteúdo." },
      { question: "E se eu achar difícil?", answer: "Você tem 7 dias de garantia incondicional para testar sem risco." },
    ],
    seoDescription: "Curso de informática básica para iniciantes: aprenda a usar computador, internet, e-mail e WhatsApp com calma. Ideal para idosos e quem nunca usou PC.",
    keywords: ["curso de informática básica", "aula de informática para idosos", "curso de computador para iniciantes"],
  },
  {
    slug: "html-css",
    title: "HTML e CSS na Prática",
    shortTitle: "HTML + CSS",
    subtitle: "Crie suas primeiras páginas web do zero e dê o primeiro passo para trabalhar com tecnologia",
    heroImage: "https://placehold.co/960x540?text=Curso+de+HTML+e+CSS",
    price: "R$ 197",
    oldPrice: "R$ 347",
    installments: "ou 12x de R$ 19,70",
    level: "Iniciante",
    duration: "25 horas em vídeo",
    format: "100% online, no seu ritmo",
    certificate: "Certificado digital de conclusão",
    access: "Acesso vitalício",
    support: "Suporte direto por WhatsApp",
    forWho: [
      "Quem quer dar o primeiro passo para trabalhar com tecnologia",
      "Quem busca uma base sólida antes de aprender programação",
      "Pequenos empreendedores que querem criar ou editar sua própria página",
      "Quem gosta de criar e quer ver resultado visual rápido",
    ],
    notForWho: [
      "Quem busca virar programador avançado em poucos dias",
      "Quem já domina HTML e CSS e quer conteúdo avançado de frameworks",
      "Quem não tem paciência para praticar escrevendo código",
    ],
    learn: [
      "Estrutura básica de uma página HTML",
      "Formatar textos, listas e links",
      "Trabalhar com imagens e ícones",
      "Estilizar páginas com CSS do zero",
      "Criar layouts com Flexbox",
      "Deixar o site responsivo para celular",
      "Criar um menu de navegação funcional",
      "Publicar seu site gratuitamente na internet",
      "Boas práticas de organização de código",
      "Construir um portfólio pessoal do zero ao publicado",
    ],
    modules: [
      { title: "Módulo 1 — Primeiros passos com HTML", lessons: ["O que é HTML e como funciona a web", "Estrutura básica de uma página", "Títulos, parágrafos e listas", "Links e navegação entre páginas"] },
      { title: "Módulo 2 — Imagens e mídia", lessons: ["Inserindo imagens corretamente", "Ícones e favicon", "Vídeos incorporados", "Boas práticas de acessibilidade"] },
      { title: "Módulo 3 — Introdução ao CSS", lessons: ["O que é CSS e como aplicar estilos", "Cores, fontes e espaçamentos", "Seletores e classes", "Box model explicado"] },
      { title: "Módulo 4 — Layouts com Flexbox", lessons: ["Entendendo o Flexbox na prática", "Criando um menu horizontal", "Organizando seções da página", "Alinhamento e distribuição de elementos"] },
      { title: "Módulo 5 — Responsividade", lessons: ["O que é design responsivo", "Media queries na prática", "Adaptando o layout para celular", "Testando em diferentes telas"] },
      { title: "Módulo 6 — Projeto final e publicação", lessons: ["Construindo um portfólio pessoal", "Organizando arquivos do projeto", "Publicando gratuitamente (GitHub Pages/Netlify)", "Próximos passos para continuar aprendendo"] },
    ],
    bonuses: [
      { title: "Modelo de portfólio pronto", description: "Base de código para você customizar e publicar mais rápido." },
      { title: "Cola de tags HTML", description: "Referência rápida das tags mais usadas no dia a dia." },
      { title: "Cola de propriedades CSS", description: "Referência rápida das propriedades CSS mais usadas." },
      { title: "Lista de ícones e fontes gratuitas", description: "Recursos gratuitos para deixar suas páginas mais bonitas." },
      { title: "Grupo de alunos no WhatsApp", description: "Tire dúvidas de código e troque ideias com outros alunos." },
    ],
    includes: [
      "25 horas de videoaulas com exercícios práticos",
      "Acesso vitalício e atualizações gratuitas",
      "Certificado digital de conclusão",
      "5 bônus exclusivos",
      "Suporte direto por WhatsApp",
      "Garantia incondicional de 7 dias",
    ],
    faq: [
      { question: "Preciso saber programar antes?", answer: "Não, o curso começa do absoluto zero." },
      { question: "Qual programa eu uso para praticar?", answer: "Usamos editores gratuitos, como o VS Code, e o curso ensina a instalar tudo passo a passo." },
      { question: "Esse curso já ensina JavaScript?", answer: "Não, o foco é HTML e CSS. É a base ideal antes de partir para JavaScript." },
      { question: "Vou conseguir publicar meu próprio site?", answer: "Sim, o módulo 6 ensina a publicar seu projeto gratuitamente na internet." },
      { question: "Serve para quem quer trabalhar com isso depois?", answer: "Sim, é uma ótima base para quem quer seguir carreira em desenvolvimento web." },
      { question: "Quanto tempo leva para concluir?", answer: "Em média de 3 a 5 semanas, no seu ritmo, com acesso vitalício." },
      { question: "Tem certificado?", answer: "Sim, certificado digital de conclusão ao final do curso." },
      { question: "Como funciona o suporte para dúvidas de código?", answer: "Você tem um canal direto por WhatsApp para enviar prints e dúvidas durante o curso." },
      { question: "O pagamento é único?", answer: "Sim, pagamento único com acesso vitalício ao conteúdo." },
      { question: "E se eu não conseguir acompanhar?", answer: "Você tem 7 dias de garantia incondicional, com devolução de 100% do valor." },
    ],
    seoDescription: "Curso de HTML e CSS do zero: crie e publique suas primeiras páginas web. Certificado, acesso vitalício e suporte por WhatsApp.",
    keywords: ["curso de HTML", "curso de HTML e CSS", "aprender a criar site do zero"],
  },
];

export function getCourseBySlug(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
