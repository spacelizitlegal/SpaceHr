export type Career = {
  slug: string;
  title: string;
  experience: string;
  tagline: string;
  employmentType: string[];
  location: string;
  description: string;
  overview: string;
  responsibilities: { group: string; items: string[] }[];
  requirements: string[];
  offers: string[];
};

export const careers: Career[] = [
  {
    slug: "mern-developer",
    title: "MERN Stack Developer",
    experience: "Freshers Welcome",
    tagline:
      "Build scalable HR applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js.",
    employmentType: ["Full-time"],
    location: "Remote",
    description:
      "Build scalable HR web applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js. Freshers welcome.",
    overview:
      "We're looking for a passionate MERN Stack Developer to join our product engineering team. You'll build high-quality software for the Space HR platform using React, Next.js, Node.js, MongoDB, and GraphQL, working alongside a team of engineers who are shaping the future of AI-powered HR.",
    responsibilities: [
      {
        group: "Core Development",
        items: [
          "Design and implement scalable, efficient web applications for the Space HR platform.",
          "Build and maintain reusable React components and Next.js pages.",
          "Collaborate with product and design teams to identify and prioritize feature requirements.",
          "Ensure high-quality code delivery, adhering to best practices and coding standards.",
          "Troubleshoot and resolve technical issues, providing timely and effective solutions.",
        ],
      },
    ],
    requirements: [
      "Freshers are welcome to apply. Candidates with 1+ years of relevant experience will be given additional consideration.",
      "Solid understanding of JavaScript, TypeScript, React, and Node.js.",
      "Experience or familiarity with Next.js, MongoDB, and REST/GraphQL APIs.",
      "Excellent problem-solving skills, with the ability to analyze complex technical issues.",
      "Strong communication and collaboration skills, with experience working in cross-functional teams.",
    ],
    offers: [
      "Opportunity to work with a cutting-edge AI startup transforming the HR industry.",
      "Collaborative and dynamic work environment with a team of passionate and talented individuals.",
      "Competitive compensation and benefits package with a focus on growth and development.",
      "Work from anywhere with a remote-first culture.",
    ],
  },
  {
    slug: "senior-mern-developer",
    title: "Senior MERN Stack Developer",
    experience: "5 to 10 Years Experience",
    tagline:
      "Lead development of cutting-edge HR applications with expertise in the MERN stack and related technologies.",
    employmentType: ["Full-time", "Part-time"],
    location: "Remote",
    description:
      "Lead development of cutting-edge HR applications with expertise in React, Next.js, MongoDB, NestJS, GraphQL, and Node.js. 5 to 10 years of experience.",
    overview:
      "We're seeking an experienced Senior MERN Stack Developer to lead development on the Space HR platform. You'll architect solutions using Next.js, Node.js, MongoDB, and GraphQL, mentor junior engineers, and drive technical decisions that power AI-driven HR for hundreds of companies.",
    responsibilities: [
      {
        group: "Leadership & Architecture",
        items: [
          "Lead the design and implementation of scalable, secure full-stack applications.",
          "Architect REST and GraphQL APIs powering payroll, attendance, and AI chatbot features.",
          "Mentor and review code from junior developers while championing best practices.",
          "Own performance, reliability, and security of critical platform services.",
          "Coordinate with AI, product, and data teams to ship roadmap features end to end.",
        ],
      },
    ],
    requirements: [
      "5 to 10 years of professional experience building production web applications.",
      "Deep expertise in the MERN stack: MongoDB, Express, React, and Node.js.",
      "Strong hands-on experience with Next.js, TypeScript, and GraphQL.",
      "Experience designing and scaling cloud-native applications and CI/CD pipelines.",
      "Excellent problem-solving skills and a track record of technical leadership and mentoring.",
      "Strong communication skills with stakeholders across engineering, product, and design.",
    ],
    offers: [
      "Leadership role in a fast-growing AI startup that serves customers in 7+ countries.",
      "Opportunity to architect products used by 500+ companies worldwide.",
      "Competitive compensation and benefits with equity potential.",
      "Flexible full-time or part-time engagement with a remote-first culture.",
    ],
  },
  {
    slug: "python-developer-ai",
    title: "Python Developer — AI/ML",
    experience: "3 to 5 Years Experience",
    tagline:
      "Design scalable AI systems using Python, Neo4j, RAG pipelines, LLMs, and vLLM optimization.",
    employmentType: ["Full-time"],
    location: "Remote",
    description:
      "Design scalable AI systems using Python, Neo4j, RAG pipelines, and LLM optimization for the Space HR platform. 3 to 5 years experience.",
    overview:
      "We're looking for a Python Developer to design and scale the AI engine behind Space HR — powering our employee self-service chatbot, payroll anomaly detection, and workforce forecasting. You'll work with Python, Neo4j, RAG pipelines, and LLM serving stacks to build intelligent systems used by HR teams daily.",
    responsibilities: [
      {
        group: "AI Systems",
        items: [
          "Design and implement scalable AI services for the Space HR platform.",
          "Build and optimize RAG pipelines over HR policies, compliance docs, and workforce data.",
          "Develop and fine-tune LLM-based features including the HR AI Concierge chatbot.",
          "Optimize inference performance and cost using vLLM and related serving stacks.",
          "Collaborate with product and engineering teams to ship AI features end to end.",
        ],
      },
    ],
    requirements: [
      "3 to 5 years of professional experience in Python development.",
      "Hands-on experience with LLMs, embeddings, and retrieval-augmented generation (RAG).",
      "Experience with graph databases such as Neo4j is a plus.",
      "Familiarity with AI serving and optimization frameworks such as vLLM.",
      "Strong foundation in data structures, algorithms, and software engineering best practices.",
      "Excellent problem-solving and communication skills.",
    ],
    offers: [
      "Work on genuinely novel AI systems used by HR teams across the US, UAE, UK, India, and beyond.",
      "Fast-moving AI team inside a profitable, bootstrapped product ecosystem.",
      "Competitive compensation and benefits with a strong focus on professional growth.",
      "Remote-first culture with flexible working hours.",
    ],
  },
];

export const getCareerBySlug = (slug: string) =>
  careers.find((career) => career.slug === slug);