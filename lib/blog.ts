export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  coverImage: string;
  date: string;
  readingTime: string;
};

export const BLOG_CATEGORIES = ["Manutenção", "Redes", "Informática Básica", "Carreira em TI"];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "computador-lento-o-que-fazer",
    title: "Computador lento? 7 causas comuns e como resolver cada uma",
    excerpt:
      "Antes de sair trocando peças, confira essas 7 causas mais comuns de lentidão — e o que fazer em cada caso.",
    content: [
      "Um computador lento quase sempre tem uma causa identificável. Neste post, vamos por descarte, das causas mais simples às mais sérias.",
      "1. Muitos programas abrindo junto com o Windows. 2. Pouco espaço livre em disco. 3. HD tradicional (ao invés de SSD). 4. Superaquecimento por acúmulo de poeira. 5. Vírus ou malware rodando em segundo plano. 6. Memória RAM insuficiente para o uso atual. 7. Sistema desatualizado ou corrompido.",
      "Se depois de revisar esses pontos o problema continuar, vale uma avaliação técnica — às vezes o custo-benefício de um upgrade simples (como trocar HD por SSD) resolve o problema em poucos minutos.",
    ],
    category: "Manutenção",
    coverImage: "https://placehold.co/800x450?text=Computador+Lento",
    date: "2026-08-10",
    readingTime: "5 min",
  },
  {
    slug: "wifi-caindo-toda-hora",
    title: "Wi-Fi caindo toda hora? Veja o que pode estar acontecendo",
    excerpt:
      "Quedas de conexão têm explicação. Veja as causas mais comuns e ajustes simples que você pode tentar antes de chamar um técnico.",
    content: [
      "Quedas de Wi-Fi costumam ter uma de poucas causas: posicionamento do roteador, interferência de outros aparelhos, canal congestionado ou excesso de dispositivos conectados.",
      "Comece testando o roteador em um local mais central e alto, longe de micro-ondas e telefones sem fio. Se o problema persistir, trocar o canal do Wi-Fi nas configurações do roteador costuma ajudar bastante.",
      "Se mesmo assim a instabilidade continuar, pode ser hora de avaliar o próprio equipamento ou considerar uma configuração de rede mesh.",
    ],
    category: "Redes",
    coverImage: "https://placehold.co/800x450?text=Wi-Fi+Instável",
    date: "2026-07-22",
    readingTime: "4 min",
  },
  {
    slug: "primeiros-passos-informatica",
    title: "5 primeiros passos para perder o medo do computador",
    excerpt:
      "Se você está começando do zero, esses 5 passos simples vão te dar confiança nas primeiras semanas.",
    content: [
      "O maior obstáculo para quem está começando não é técnico, é emocional: o medo de \"quebrar\" alguma coisa.",
      "1. Saiba que é muito difícil estragar o computador só clicando em coisas. 2. Aprenda os atalhos básicos (copiar, colar, desfazer). 3. Organize suas pastas desde o início. 4. Pratique um pouco todos os dias, mesmo que 15 minutos. 5. Anote suas dúvidas para perguntar depois — elas vão diminuir rápido.",
      "Com prática constante, a maioria das pessoas ganha confiança em poucas semanas.",
    ],
    category: "Informática Básica",
    coverImage: "https://placehold.co/800x450?text=Primeiros+Passos",
    date: "2026-06-30",
    readingTime: "3 min",
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
