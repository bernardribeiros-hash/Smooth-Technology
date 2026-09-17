export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // nome do ícone lucide-react
  priceFrom: string;
};

export const SERVICES: Service[] = [
  {
    slug: "formatacao",
    title: "Formatação e otimização",
    description: "Seu computador lento ou travando? Formatamos e deixamos como novo, com backup dos seus arquivos.",
    icon: "RefreshCw",
    priceFrom: "A partir de R$ 90",
  },
  {
    slug: "manutencao-preventiva",
    title: "Manutenção preventiva",
    description: "Limpeza física, troca de pasta térmica e revisão geral para evitar problemas antes que aconteçam.",
    icon: "Wrench",
    priceFrom: "A partir de R$ 80",
  },
  {
    slug: "remocao-de-virus",
    title: "Remoção de vírus e malware",
    description: "Removemos vírus, ransomware e programas maliciosos, com orientação para evitar reinfecção.",
    icon: "ShieldCheck",
    priceFrom: "A partir de R$ 100",
  },
  {
    slug: "redes-wifi",
    title: "Instalação e configuração de redes",
    description: "Configuramos Wi-Fi, rede cabeada e equipamentos para sua casa ou pequena empresa.",
    icon: "Wifi",
    priceFrom: "A partir de R$ 150",
  },
  {
    slug: "recuperacao-de-dados",
    title: "Recuperação de dados",
    description: "Perdeu fotos, documentos ou arquivos importantes? Fazemos a tentativa de recuperação.",
    icon: "DatabaseBackup",
    priceFrom: "A partir de R$ 120",
  },
  {
    slug: "suporte-remoto",
    title: "Suporte técnico remoto",
    description: "Resolvemos boa parte dos problemas à distância, sem você precisar sair de casa.",
    icon: "MonitorSmartphone",
    priceFrom: "A partir de R$ 60",
  },
];

export const SERVICE_AREA = {
  description:
    "Atendimento presencial em [Sua Cidade] e região. Suporte remoto para todo o Brasil.",
  hours: "Segunda a sábado, das 9h às 19h",
};
