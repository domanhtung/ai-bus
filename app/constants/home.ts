import { solutionServiceByKey, solutionServiceKey } from "./service";

export const navbarUrl = {
  home: "/",
  services: "/services",
  caseStudy: "/case-study",
  about: "/about",
  careers: "/careers",
  blogs: "/blogs",
};

export const navbarList = [
  {
    title: "Home",
    path: navbarUrl.home,
    subMenu: null,
  },
  {
    title: "Services",
    path: navbarUrl.services,
    subMenu: [
      solutionServiceByKey?.[solutionServiceKey.ai_solution],
      solutionServiceByKey?.[solutionServiceKey.web3_solution],
      solutionServiceByKey?.[solutionServiceKey.financial_innovation],
    ],
  },
  {
    title: "Case study",
    path: navbarUrl.caseStudy,
    subMenu: null,
  },
  {
    title: "About",
    path: navbarUrl.about,
    subMenu: null,
  },
  {
    title: "Careers",
    path: navbarUrl.careers,
    subMenu: null,
  },
  {
    title: "Blogs",
    path: navbarUrl.blogs,
    subMenu: null,
  },
];

export const footerServiceList = [
  {
    title: "ai-powered solution",
    path: "",
  },
  {
    title: "web3 development",
    path: "",
  },
  {
    title: "fin-tech innovations",
    path: "",
  },
  {
    title: "case study",
    path: "",
  },
];

export const footerAboutList = [
  {
    title: "Careers",
    path: "",
  },
  {
    title: "Blogs",
    path: "",
  },
  {
    title: "privacy policy",
    path: "",
  },
  {
    title: "security policy",
    path: "",
  },
];

export const solutions = [
  {
    key: solutionServiceKey.ai_solution,
    subHead: "AI-powered solutions",
    title: "A Leading Innovator in AI Development",
    content:
      "Leverage our expertise to design, develop, and deploy AI applications that revolutionize your business and deliver measurable results. We offer top solutions in Machine Learning, Generative AI, Visual Recognition, and Natural Language Processing.",
    list: [
      "Machine Learning",
      "Generative AI Applications",
      "Visual Recognition",
      "Natural Language",
    ],
    link: `/services?service=${solutionServiceKey.ai_solution}`,
  },
  {
    key: solutionServiceKey.web3_solution,
    subHead: "web3 development",
    title: "Transforming the Future with Web3 Solutions",
    content:
      "Stay ahead with our cutting-edge Web3 development services, incorporating the latest blockchain technologies and crypto trends. Our expertise spans the entire Web3 development life-cycle, ensuring seamless and secure transformation from traditional to decentralized solutions.",
    list: [
      "PoC & MVP Development",
      "dApp Development",
      "DeFi Solutions",
      "Web3 Transformation",
    ],
    link: `/services?service=${solutionServiceKey.web3_solution}`,
  },
  {
    key: solutionServiceKey.financial_innovation,
    subHead: "fintech innovations",
    title: "Financial Innovation with AI & Blockchain",
    content:
      "Harnessing the power of AI and blockchain, we craft groundbreaking financial solutions that drive efficiency, enhance security, and transform traditional processes. Our expertise in fintech technology ensures that your business stays ahead in the evolving financial landscape.",
    list: [
      "Payment & Wallets",
      "Lending Platforms",
      "DeFi & CeFi Solutions",
      "Personalized Financial",
    ],
    link: `/services?service=${solutionServiceKey.financial_innovation}`,
  },
];

export const aboutSection = [
  {
    icon: "/images/home/agility.svg",
    iconActive: "/images/home/agility_active.svg",
    title: "Agility",
    content: "Embrace agility for rapid, collaborative success.",
  },
  {
    icon: "/images/home/innovation.svg",
    iconActive: "/images/home/innovation_active.svg",
    title: "Innovation",
    content: "Drive innovation with advanced technology solutions.",
  },
  {
    icon: "/images/home/quality.svg",
    iconActive: "/images/home/quality_active.svg",
    title: "Quality",
    content: "Deliver excellence through uncompromising quality standards.",
  },
];

export const numberSection = [
  {
    count: 17,
    label: "Happy clients",
  },
  {
    count: 49,
    label: "Finished projects",
  },
  {
    count: 35,
    label: "Skilled Experts",
  },
  {
    count: 8,
    label: "Countries",
  },
];

export const techStacks = [
  {
    name: "Front end",
    techList: [
      {
        name: "API",
        logos: [
          "/images/tech_logo/graphQL.svg",
          "/images/tech_logo/rest_API.svg",
          "/images/tech_logo/websocket.svg",
        ],
      },
      {
        name: "Mobile",
        logos: [
          "/images/tech_logo/flutter.svg",
          "/images/tech_logo/kotlin.svg",
          "/images/tech_logo/swift.svg",
          "/images/tech_logo/react_native.svg",
        ],
      },
      {
        name: "Web",
        logos: [
          "/images/tech_logo/react.svg",
          "/images/tech_logo/vuejs.svg",
          "/images/tech_logo/angular.svg",
        ],
      },
    ],
  },
  {
    name: "Back end",
    techList: [
      {
        name: "Micro-services",
        logos: [
          "/images/tech_logo/nodeJS.svg",
          "/images/tech_logo/python.svg",
          "/images/tech_logo/golang.svg",
        ],
      },
      {
        name: "Databases",
        logos: [
          "/images/tech_logo/postgreSQL.svg",
          "/images/tech_logo/mongoDB.svg",
          "/images/tech_logo/redis.svg",
          "/images/tech_logo/elasticsearch.svg",
          "/images/tech_logo/mySQL.svg",
          "/images/tech_logo/couchbase.svg",
          "/images/tech_logo/clickhouse.svg",
        ],
      },
      {
        name: "Messaging / Streaming",
        logos: [
          "/images/tech_logo/kafka.svg",
          "/images/tech_logo/rabbit_MQ.svg",
          "/images/tech_logo/redis.svg",
          "/images/tech_logo/keras.svg",
        ],
      },
    ],
  },
  {
    name: "Devops",
    techList: [
      {
        name: "CIC/CD",
        logos: [
          "/images/tech_logo/github_actions.svg",
          "/images/tech_logo/CICD.svg",
          "/images/tech_logo/circleci.svg",
        ],
      },
      {
        name: "Deployment",
        logos: [
          "/images/tech_logo/AWS.svg",
          "/images/tech_logo/google_cloud.svg",
          "/images/tech_logo/kubernetes.svg",
        ],
      },
      {
        name: "Monitoring",
        logos: [
          "/images/tech_logo/grafana.svg",
          "/images/tech_logo/prometheus.svg",
          "/images/tech_logo/sentry.svg",
        ],
      },
    ],
  },
  {
    name: "Blockchain",
    techList: [
      {
        name: "DApps",
        logos: [
          "/images/tech_logo/ethers_js.svg",
          "/images/tech_logo/wagmi.svg",
          "/images/tech_logo/viem.svg",
        ],
      },
      {
        name: "Smart contract",
        logos: [
          "/images/tech_logo/hardhat.svg",
          "/images/tech_logo/openzeppelin.svg",
          "/images/tech_logo/truffle.svg",
        ],
      },
    ],
  },
  {
    name: "AI",
    techList: [
      {
        name: "ML",
        logos: [
          "/images/tech_logo/tensorflow.svg",
          "/images/tech_logo/pytorch.svg",
          "/images/tech_logo/keras.svg",
        ],
      },
      {
        name: "Generative AI",
        logos: [
          "/images/tech_logo/openAI.svg",
          "/images/tech_logo/S.svg",
          "/images/tech_logo/a.svg",
          "/images/tech_logo/noname.svg",
          "/images/tech_logo/noname_2.svg",
        ],
      },
    ],
  },
];

export const whyChooseUs = [
  {
    img: "/images/home/innovatioon_hub.svg",
    imgActive: "/images/home/innovatioon_hub_active.svg",
    title: "Innovation Hub",
    content: "Always exploring the latest in AI and Blockchain technology.",
  },
  {
    img: "/images/home/client_centric.svg",
    imgActive: "/images/home/client_centric_active.svg",
    title: "Client-Centric",
    content: "Tailored solutions focused on meeting your specific needs.",
  },
  {
    img: "/images/home/dedicated_team.svg",
    imgActive: "/images/home/dedicated_team_active.svg",
    title: "Dedicated team",
    content: "Dedicated team on your site, fully aligned with your goals.",
  },
  {
    img: "/images/home/secure_salable.svg",
    imgActive: "/images/home/secure_salable_active.svg",
    title: "Secure & Salable",
    content:
      "Secure, scalable, and cross-platform solutions for your growing needs.",
  },
];

export const caseStudy = {
  mainContent: {
    thumb: "/images/home/case_study.png",
    subTitle: "AI Development",
    title: "The AI-Powered Re-Staking Protocol",
  },
  subContent: [
    {
      firstContent: {
        thumb: "/images/home/case_study.png",
        subTitle: "Blockchain Application",
        title: "Real-Time Price Charts",
      },
      secondContent: {
        thumb: "/images/home/case_study.png",
        subTitle: "Multifunctional of Technology",
        title: "The Ultimate Japanese Learning Matching Platform",
      },
    },
    {
      firstContent: {
        thumb: "/images/home/case_study.png",
        subTitle: "Multifunctional of Technology",
        title: "The Ultimate Japanese Learning Matching Platform",
      },
      secondContent: {
        thumb: "/images/home/case_study.png",
        subTitle: "Blockchain Application",
        title: "Real-Time Price Charts",
      },
    },
  ],
};

export const partnerList = [
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
  "/images/home/partner.png",
];

export const testimonialList = [
  {
    avatar: "/images/home/client_said.svg",
    avatarInactive: "/images/home/client_said_inactive.svg",
    name: "Laura Holder / CEO, Harlond inc",
    des: "AIBUS delivered software solutions that perfectly fit our needs. Their expertise in development and attention to detail made all the difference!",
  },
  {
    avatar: "/images/home/client_said.svg",
    avatarInactive: "/images/home/client_said_inactive.svg",
    name: "Mike Clay / COO, Forest Finance jsc",
    des: "Their team provided innovative solutions and managed every aspect of our software project with professionalism and efficiency.",
  },
  {
    avatar: "/images/home/client_said.svg",
    avatarInactive: "/images/home/client_said_inactive.svg",
    name: "Laura Holder / CEO, Harlond inc",
    des: "AIBUS delivered software solutions that perfectly fit our needs. Their expertise in development and attention to detail made all the difference!",
  },
  {
    avatar: "/images/home/client_said.svg",
    avatarInactive: "/images/home/client_said_inactive.svg",
    name: "Mike Clay / COO, Forest Finance jsc",
    des: "Their team provided innovative solutions and managed every aspect of our software project with professionalism and efficiency.",
  },
];

export const blogList = [
  {
    img: "/images/home/blog.png",
    title: "Blockchain is Shaping the Future of Financial Services",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
  {
    img: "/images/home/blog.png",
    title: "How AI is Transforming Business Operations in 2024?",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
  {
    img: "/images/home/blog.png",
    title: "Best Practices for Remote Software Development Team",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
  {
    img: "/images/home/blog.png",
    title: "Blockchain is Shaping the Future of Financial Services",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
  {
    img: "/images/home/blog.png",
    title: "How AI is Transforming Business Operations in 2024?",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
  {
    img: "/images/home/blog.png",
    title: "Best Practices for Remote Software Development Team",
    content: "Add short description about the article here, maximum is 2 lines",
    author: "Mira",
    date: "04/12/2024",
  },
];

export const socialList = [
  {
    icon: "/images/telegram.svg",
    name: "+84 33 777 8715",
    link: "https://t.me/mira_nguyen",
  },
  {
    icon: "/images/whatsapp.svg",
    name: "+84 33 777 8715",
    link: "",
  },
  {
    icon: "/images/mail.svg",
    name: "hello@aibus.dev",
    link: "",
  },
  {
    icon: "/images/linkedin.svg",
    name: "@aibusdev",
    link: "https://www.linkedin.com/company/aibusdev",
  },
];
