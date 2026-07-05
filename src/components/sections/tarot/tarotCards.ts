export interface TarotCardData {
  id: string;
  nome: string;
  imagem: string;
  mensagem: string;
  keywords: [string, string, string];
}

export const tarotCards: TarotCardData[] = [
  {
    id: 'louco',
    nome: 'O Louco',
    imagem: '/baralho/ultra-premium-tarot-card-o-louco-inspired-by-class.jpg',
    mensagem: 'Um novo ciclo se inicia. Permita-se dar um passo em direção ao desconhecido com fé e leveza.',
    keywords: ['Início', 'Liberdade', 'Espontaneidade']
  },
  {
    id: 'mago',
    nome: 'O Mago',
    imagem: '/baralho/ultra-premium-tarot-card-o-mago-inspired-by-classi.jpg',
    mensagem: 'Você tem em mãos todas as ferramentas para manifestar seus desejos. Acredite no seu poder de realização.',
    keywords: ['Manifestação', 'Habilidade', 'Foco']
  },
  {
    id: 'sacerdotisa',
    nome: 'A Sacerdotisa',
    imagem: '/baralho/image-1205390485986731.jpg',
    mensagem: 'Ouça a sua intuição e sabedoria interior. Nem tudo precisa de ação imediata; o silêncio também traz respostas.',
    keywords: ['Intuição', 'Mistério', 'Sabedoria']
  },
  {
    id: 'imperatriz',
    nome: 'A Imperatriz',
    imagem: '/baralho/ultra-premium-tarot-card-a-imperatriz-inspired-by.jpg',
    mensagem: 'Tempo de colheita, nutrição e abundância. Cuide de si mesmo(a) e floresça com amor e criatividade.',
    keywords: ['Abundância', 'Nutrição', 'Criatividade']
  },
  {
    id: 'imperador',
    nome: 'O Imperador',
    imagem: '/baralho/ultra-premium-tarot-card-o-imperador-inspired-by-c.jpg',
    mensagem: 'A estabilidade e a estrutura são suas aliadas. Estabeleça bases sólidas para seus planos crescerem.',
    keywords: ['Estrutura', 'Autoridade', 'Estabilidade']
  },
  {
    id: 'hierofante',
    nome: 'O Hierofante',
    imagem: '/baralho/ultra-premium-tarot-card-o-hierofante-inspired-by.jpg',
    mensagem: 'Busque conhecimentos profundos e honre as tradições que fazem sentido para a sua alma.',
    keywords: ['Conhecimento', 'Tradição', 'Espiritualidade']
  },
  {
    id: 'carro',
    nome: 'O Carro',
    imagem: '/baralho/ultra-premium-tarot-card-o-carro-inspired-by-class.jpg',
    mensagem: 'Siga em frente com determinação. Você tem o controle e a direção para alcançar suas metas.',
    keywords: ['Avanço', 'Determinação', 'Controle']
  },
  {
    id: 'forca',
    nome: 'A Força',
    imagem: '/baralho/ultra-premium-tarot-card-a-fora-inspired-by-classi.jpg',
    mensagem: 'A verdadeira força vem da gentileza e do autocontrole. Dome seus medos com amor e compaixão.',
    keywords: ['Coragem', 'Compaixão', 'Resiliência']
  },
  {
    id: 'eremita',
    nome: 'O Eremita',
    imagem: '/baralho/ultra-premium-tarot-card-o-eremita-inspired-by-cla.jpg',
    mensagem: 'Um momento para olhar para dentro e buscar sua própria luz. O recolhimento trará a clareza necessária.',
    keywords: ['Introspecção', 'Guia Interior', 'Clareza']
  },
  {
    id: 'roda',
    nome: 'A Roda da Fortuna',
    imagem: '/baralho/ultra-premium-tarot-card-a-roda-da-fortuna-inspired.jpg',
    mensagem: 'A vida é feita de ciclos. Abrace as mudanças e confie que o fluxo do destino está a seu favor.',
    keywords: ['Ciclos', 'Mudança', 'Destino']
  },
  {
    id: 'justica',
    nome: 'A Justiça',
    imagem: '/baralho/ultra-premium-tarot-card-a-justia-inspired-by-clas.jpg',
    mensagem: 'Tudo encontra seu ponto de equilíbrio. A verdade e a clareza guiarão suas decisões.',
    keywords: ['Equilíbrio', 'Verdade', 'Clareza']
  },
  {
    id: 'temperanca',
    nome: 'A Temperança',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-a-temperana-tem.jpg',
    mensagem: 'Encontre o caminho do meio. A harmonia e a paciência são chaves para a cura e a paz interior.',
    keywords: ['Harmonia', 'Paciência', 'Cura']
  },
  {
    id: 'diabo',
    nome: 'O Diabo',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-o-diabo-the-dev.jpg',
    mensagem: 'Liberte-se das amarras que você mesmo criou. Observe onde há apegos e recupere seu poder.',
    keywords: ['Libertação', 'Desejo', 'Transformação']
  },
  {
    id: 'torre',
    nome: 'A Torre',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-a-torre-the-tow.jpg',
    mensagem: 'Estruturas antigas caem para dar espaço ao novo. Confie no processo de renovação da sua vida.',
    keywords: ['Renovação', 'Despertar', 'Liberação']
  },
  {
    id: 'estrela',
    nome: 'A Estrela',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-a-estrela-the-s.jpg',
    mensagem: 'Mantenha a esperança viva no coração. Há uma luz divina guiando seus passos em direção ao bem.',
    keywords: ['Esperança', 'Inspiração', 'Fé']
  },
  {
    id: 'lua',
    nome: 'A Lua',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-a-lua-the-moon.jpg',
    mensagem: 'Explore seus sentimentos mais profundos e confie nos seus instintos, mesmo no desconhecido.',
    keywords: ['Mistério', 'Sentimentos', 'Intuição profunda']
  },
  {
    id: 'sol',
    nome: 'O Sol',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-o-sol-the-sun-m.jpg',
    mensagem: 'Alegria, vitalidade e sucesso! O sucesso brilha para você, trazendo luz e calor aos seus dias.',
    keywords: ['Alegria', 'Vitalidade', 'Sucesso']
  },
  {
    id: 'julgamento',
    nome: 'O Julgamento',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-o-julgamento-ju.jpg',
    mensagem: 'Um renascimento está próximo. Atenda ao chamado da sua alma e perdoe o passado para seguir livre.',
    keywords: ['Renascimento', 'Despertar', 'Absolvição']
  },
  {
    id: 'mundo',
    nome: 'O Mundo',
    imagem: '/baralho/ultra-premium-luxury-tarot-card-o-mundo-the-wor.jpg',
    mensagem: 'A conclusão de um belo ciclo. Celebre suas vitórias e sinta-se completo(a) e em paz.',
    keywords: ['Conclusão', 'Celebração', 'Totalidade']
  }
];
