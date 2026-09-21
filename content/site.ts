export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  note?: string;
  url?: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export const site = {
  profile: {
    name: "Weiqing Zeng",
    affiliation: "Southwest Jiaotong University",
    title: "Master's student",
    supervisor: "Prof. Yu Zheng (ACM/IEEE Fellow)",
    tagline:
      "Research interests include knowledge distillation and edge deployment, trustworthy retrieval-augmented generation (RAG), and intelligent systems in edge networks.",
  },
  interests: [
    "Knowledge distillation and edge model deployment / placement",
    "Trustworthy retrieval-augmented generation (RAG)",
    "Edge computing and networked intelligent systems",
  ],
  education: [
    {
      degree: "Master's Degree",
      school: "Southwest Jiaotong University",
      period: "2026.09 – Present",
      detail: "Supervisor: Prof. Yu Zheng (ACM/IEEE Fellow)",
    },
    {
      degree:
        "B.S. in Computer Science and Technology (Mao Yisheng Honors Class)",
      school: "Southwest Jiaotong University",
      period: "2022.09 – 2026.06",
      detail:
        "GPA 3.72/4; recommendation score 94.7 (2/21); University-level Outstanding Graduate",
    },
  ] as Education[],
  publications: [
    {
      authors: "W. Zeng, Z. Yang, G. You, H. Yang, Y. Zheng.",
      title:
        "Beyond Static Grounding: Behavioral Contracts for Trustworthy Retrieval-Augmented Generation",
      venue: "EMNLP 2026, Main Conference",
      year: "",
      note: "CCF-B",
    },
    {
      authors: "W. Zeng, D. Zheng, et al.",
      title:
        "Cost-Efficient Knowledge Distillation-enabled Student Models Placement in Edge Networks",
      venue: "GLOBECOM 2025",
      year: "",
      note: "CCF-C",
    },
  ] as Publication[],
  cv: {
    href: "/cv.pdf",
    label: "Download CV (PDF)",
  },
  contact: {
    email: "470769369@qq.com",
    github: "https://github.com/Zach-ceng",
    githubLabel: "GitHub",
  },
  siteUrl: "https://Zach-ceng.github.io",
};
