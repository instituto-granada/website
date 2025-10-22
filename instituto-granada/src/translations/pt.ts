export const pt = {
  about: {
    hero: {
      title: "Saiba mais sobre nós",
      text: "O Instituto Granada é uma Organização da  Sociedade Civil localizada na Vila Granada, em Mairinque/SP.\n\nConheça abaixo um pouco mais da nossa história.",
    },
  },
  footer: {
    description:
      "Organização da Sociedade Civil dedicada a reduzir desigualdades e apoiar crianças, adolescentes e famílias.",
    address:
      "Rua Moisés José de Camargo, em frente ao 140.\nVila Granada, Mairinque. São Paulo.",
    formSection: {
      buttonLabel: "Enviar mensagem",
      emailLabel: "E-mail",
      emailPlaceholder: "Insira seu email",
      messageLabel: "Mensagem",
      messageInputMaxLenght: "max. 500",
      messagePlaceholder: "Digite sua mensagem",
      title: "Fale conosco",
    },
    siteMapSection: {
      title: "Mapa do site",
      routesList: [
        { routeTitle: "Projetos" },
        { routeTitle: "Doações" },
        { routeTitle: "Voluntários" },
        { routeTitle: "Contato" },
      ],
    },
  },
  home: {
    hero: {
      title: "Transforme a realidade de crianças e famílias",
      text: "Desde 2008, o Instituto Granada oferece aprendizagem, alimentação gratuita, apoio às famílias, saúde emocional e capacitação profissional em Mairinque/SP",
      buttons: {
        primary: {
          label: "Quero doar agora",
        },
      },
    },
  },
  projects: {
    hero: {
      title: "Conheça nossos projetos",
      text: "Conheça nossas iniciativas e descubra como elas transformam realidades",
      buttons: {
        primary: {
          label: "Quero doar agora",
        },
        secondary: {
          label: "Quero ser voluntário",
        },
      },
    },
    carousel: {
      header: "PRINCIPAIS PROJETOS",
      projects: [
        {
          key: "pascoa",
          title: "PÁSCOA DO BEM E ESPERANÇA",
          body: "Reunimos cerca de 530 crianças e adolescentes da comunidade, em uma divertida festa de páscoa com bolo, lanches, brincadeiras, teatro e muita diversão. Ao final as crianças recebem deliciosos ovos de chocolate, captados de doadores e empresas.",
          image: "projectPascoa",
          onButtonClick: () => alert("Botão primário clicado!")
        },
        {
          key: "ferias",
          title: "FÉRIAS DA ALEGRIA",
          body: "Na nossa região, as crianças não têm muitos lugares seguros para brincar e se divertir. Por isso, durante as férias, criamos este projeto para proporcionar a elas momentos de lazer e cultura. O objetivo é ajudar a criar lembranças felizes e positivas na infância, oferecendo atividades que tragam diversão, aprendizado e convivência em um ambiente seguro e acolhedor.",
          image: "projectFerias",
          onButtonClick: () => alert("Botão primário clicado!")
        },
        {
          key: "natal",
          title: "APADRINHE COM AMOR",
          body: "O apadrinhamento é uma forma simples e poderosa de espalhar amor neste natal. Você escolhe uma criança ou adolescente e a presenteia com um kit de roupa, calçado e brinquedo. Saiba mais e participe agora!",
          image: "projectNatal",
          onButtonClick: () => alert("Botão primário clicado!")
        }
      ]
    },
    galleries: [
      {
        key: "gallery01",
        list: [
          {
            key: "vidaFeliz",
            title: "PROJETO VIDA FELIZ, DE APOIO ESCOLAR",
            body: "Crianças e adolescentes são recebidos no Instituto Granada nos períodos em que não estão na escola. Ali recebem café da manhã, almoço e café da tarde, enquanto participam de oficinas de artesanato, musicalização, teatro, dança, jogos pedagógicos. Também acessam a plataforma para apoio da compreensão de conteúdos escolares e podem realizar seus trabalhos escolares com apoio de pedagogas e de materiais necessários. As atividades são realizadas com muita atenção e carinho para que os participantes se sintam acolhidos, alegres e apoiados em suas dores e necessidades. ",
            imageKey: "projectVidaFeliz",
            imagePosition: "left" as const
          },
          {
            key: "byteAcao",
            title: "PROJETO BYTE AÇÃO",
            body: "Para capacitar adolescentes na busca de uma colocação profissional, como primeiro emprego, o curso de informática, oferece certificação e empoderamento. O adolescente sai, tendo acesso ao pacote office e navegação na web. Esta capacitação é importante já que muitas famílias ainda não possuem acesso a computadores e redes.",
            imageKey: "projectByteAcao",
            imagePosition: "right" as const
          },
          {
            key: "empoderaAdolescente",
            title: "EMPODERA ADOLESCENTE",
            body: "Os jovens são recebidos com carinho em rodas de conversas acompanhados por terapeutas, pedagogas, voluntários, oficineiros com conhecimentos específicos e convidados. Por meio de dinâmicas, brincadeiras, jogos e vídeos são levados a refletir sobre autoconhecimento, proporcionando fortalecimento emocional, ampliação de visão de mundo, permitindo lhes sonhar e caminhar na conquista de seus sonhos.",
            imageKey: "projectEmpoderaAdolescente",
            imagePosition: "left" as const
          }
        ]
      },
      {
        key: "gallery02",
        list: [
          {
            key: "chama",
            title: "PROJETO CHAMA",
            body: "O projeto “Chama” divulga a cultura hip hop. Projeto cultural que busca promover a representatividade, expressividade corporal e artística das crianças e adolescentes do território, por meio do street dance e breakdance. ​	Através dos passos e das letras, os participantes do projeto podem se desconectar de situações de dor e frustração, conhecer melhor seu corpo, conhecer e fazer uso de ritmos e passos, desenvolvendo novas habilidades e competências para enfrentar situações adversas.",
            imageKey: "projectChama",
            imagePosition: "right" as const
          },
          {
            key: "melhorToque",
            title: "PROJETO “O MELHOR TOQUE”",
            body: "Para capacitar adolescentes na busca de uma colocação profissional, como primeiro emprego, o curso de informática, oferece certificação e empoderamento. O adolescente sai, tendo acesso ao pacote office e navegação na web. Esta capacitação é importante já que muitas famílias ainda não possuem acesso a computadores e redes.",
            imageKey: "projectMelhorToque",
            imagePosition: "left" as const
          },
          {
            key: "mulheresCapazes",
            title: "MULHERES CAPAZES",
            body: "O Apoia mulheres, por meio de cursos de capacitação profissional, a descobrirem novas habilidades e ascenderem profissionalmente. Por meio de palestras ministradas por profissionais, o empoderamento feminino e a independência financeira são despertados.  Visando combater a violência contra mulher, por meio da  promoção da valorização da autoestima, do conhecimento dos seus direitos e da saúde emocional.",
            imageKey: "projectMulheresCapazes",
            imagePosition: "right" as const
          }
        ]
      }
    ]
  },
  Christmas: {
    hero: {
      title: "APADRINHE COM AMOR",
      text: "Neste Natal, apadrinhe uma criança ou adolescente e faça parte do nosso evento natalino, transformando vidas com um gesto de amor.",
      buttons: {
        primary: {
          label: "Quero apadrinhar",
        },
      },
    },
    learnMore: {
      title: "Saiba mais",
      text: `O apadrinhamento é uma forma simples e poderosa de espalhar amor. Você escolhe uma criança ou adolescente e a presenteia com um kit de roupa, calçado e brinquedo.
\n
Em troca, eles se dedicam a preparar apresentações e lembranças especiais como forma de gratidão. Junte-se a nós e faça parte dessa corrente do bem!`,
    },
    howItWorks: {
      title: "Como Funciona?",
      text: "O projeto começa em setembro com o cadastro das crianças e adolescentes e os ensaios das apresentações de Natal, que vão até dezembro. Durante esse período, você pode entrar em contato pelo WhatsApp, escolher uma criança para apadrinhar e fazer o Natal dela mais feliz",
    },
  },

  Vocation: {
    hero: {
      title: "APADRINHE COM AMOR",
      text: "Neste Natal, apadrinhe uma criança ou adolescente e faça parte do nosso evento natalino, transformando vidas com um gesto de amor.",
      buttons: {
        primary: {
          label: "Quero apadrinhar",
        },
      },
    },
    howItWorks: {
      title: "Como Funciona?",
      text: "O projeto começa em setembro com o cadastro das crianças e adolescentes e os ensaios das apresentações de Natal, que vão até dezembro. Durante esse período, você pode entrar em contato pelo WhatsApp, escolher uma criança para apadrinhar e fazer o Natal dela mais feliz",
    },
  },

  Easter: {
    hero: {
      title: "APADRINHE COM AMOR",
      text: "Neste Natal, apadrinhe uma criança ou adolescente e faça parte do nosso evento natalino, transformando vidas com um gesto de amor.",
      buttons: {
        primary: {
          label: "Quero apadrinhar",
        },
      },
    },
    howItWorks: {
      title: "Como Funciona?",
      text: `Como as crianças da região são desprovidas de áreas seguras para lazer e cultura, oferecemos nas férias, este projeto que visa gerar memórias agradáveis, na infância.
      \nSão períodos diários onde participam de atividades lúdicas e artísticas como: Gincanas, artesanato, contação de histórias, cantam músicas, dançam e tomam lanchinho.`,
    },
  },

  volunteers: {
    hero: {
      title: "Seja voluntário",
      text: "Contribua com nossa organização e ajude a transformar a vida de crianças e adolescentes!\n\nToda ajuda é bem-vinda e gera um impacto positivo. Confira abaixo as áreas em que mais precisamos de apoio neste momento",
    },
    formSection: {
      buttonLabel: "Enviar formulário",
      emailLabel: "E-mail",
      emailPlaceholder: "Insira seu email",
      nameLabel: "Nome completo",
      namePlaceholder: "Insira seu nome",
      messageLabel: "Mensagem",
      messageInputMaxLenght: "max. 500",
      messagePlaceholder: "Digite sua mensagem",
      positionLabel: "Interesse",
      positionPlaceholder: "Selecione",
      subtitle: "Venha fazer parte da nossa comunidade",
      title: "Se interessou? Entre em contato",
    },
    positionsSectionTitle: "Nossas vagas:",
    positions: [
      {
        body: "Apoio para publicações eficazes e constantes no site, Instagram e Facebook",
        title: "Marketing digital",
      },
      {
        title: "Captação",
        body: "Pessoas voluntárias que vão buscar captar doações recorrentes por telefone",
      },
      {
        title: "Psicólogo / psicanalista",
        body: "Conduzir rodas de conversa e atividades de promoção de saúde mental",
      },
      {
        title: "Professor / assistente",
        body: "Irá promover projetos de esportes junto a comunidade",
      },
      {
        title: "Psicopedagogos",
        body: "Apoio para crianças com dificuldade de aprendizagem",
      },
      {
        title: "Fonoaudiólogo",
        body: "Atendimento para crianças com dificuldade na fala",
      },
      {
        title: "Ajudante geral",
        body: "Pedreiros, encanadores e pintores para pequenas manutenções locais",
      },
    ],
  },
};
