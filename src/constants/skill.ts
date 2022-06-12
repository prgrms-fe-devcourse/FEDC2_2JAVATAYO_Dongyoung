const skillOptions = [
  {
    channel: "front",
    options: [
      { id: 1, value: "Html5", label: "Html5" },
      { id: 2, value: "TypeScript", label: "TypeScript" },
      { id: 3, value: "React", label: "React" },
      { id: 4, value: "NextJs", label: "Next.js" },
      { id: 5, value: "Vue", label: "Vue" },
      { id: 6, value: "NuxtJs", label: "Nuxt.js" },
      { id: 7, value: "Svelte", label: "Svelte" },
      { id: 8, value: "Gatsby", label: "Gatsby" },
      { id: 9, value: "Angular", label: "Angular" },
      { id: 10, value: "Sass", label: "Sass" },
      { id: 11, value: "Redux", label: "Redux" },
      { id: 12, value: "Recoil", label: "Recoil" },
      { id: 13, value: "Bootstrap", label: "Bootstrap" },
      { id: 14, value: "Mui", label: "Mui" },
      { id: 15, value: "Tailwind", label: "Tailwind" }
    ]
  },
  {
    channel: "back",
    options: [
      { id: 1, value: "NodeJs", label: "Node.js" },
      { id: 2, value: "Express", label: "Express" },
      { id: 3, value: "FastApi", label: "FastAPI" },
      { id: 4, value: "GraphQl", label: "GraphQL" },
      { id: 5, value: "Oracle", label: "Oracle" },
      { id: 6, value: "NestJs", label: "NestJS" },
      { id: 7, value: "MongoDb", label: "MongoDB" },
      { id: 8, value: "MySql", label: "MySQL" },
      { id: 9, value: "PostgreSql", label: "PostgreSQL" },
      { id: 10, value: "Firebase", label: "Firebase" },
      { id: 11, value: "Appwrite", label: "Appwrite" },
      { id: 12, value: "Django", label: "Django" },
      { id: 13, value: "Spring", label: "Spring" }
    ]
  },
  {
    channel: "ios",
    options: [
      { id: 1, value: "Swift", label: "Swift" },
      { id: 2, value: "Flutter", label: "Flutter" },
      { id: 3, value: "RN", label: "RN" }
    ]
  },
  {
    channel: "android",
    options: [
      { id: 1, value: "Java", label: "Java" },
      { id: 2, value: "Kotlin", label: "Kotlin" },
      { id: 3, value: "Flutter", label: "Flutter" },
      { id: 4, value: "RN", label: "RN" }
    ]
  },
  {
    channel: "designer",
    options: [
      { id: 1, value: "Figma", label: "Figma" },
      { id: 2, value: "Zeplin", label: "Zeplin" }
    ]
  },
  {
    channel: "AI",
    options: [
      { id: 1, value: "Python", label: "Python" },
      { id: 2, value: "java", label: "java" },
      { id: 3, value: "C/C++", label: "C/C++" },
      { id: 4, value: "TensorFlowJs", label: "TensorFlow.js" },
      { id: 5, value: "R", label: "R" },
      { id: 6, value: "Lua", label: "Lua" },
      { id: 7, value: "Julia", label: "Julia" },
      { id: 8, value: "Swift", label: "Swift" }
    ]
  }
] as const;

export default skillOptions;
