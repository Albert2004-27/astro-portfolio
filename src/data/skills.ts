export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: 1 | 2 | 3 }[];
}

// level: 1=Familiar, 2=Proficient, 3=Expert

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Data',
    icon: 'code',
    skills: [
      { name: 'Python', level: 3 },
      { name: 'SQL', level: 2 },
      { name: 'R', level: 2 },
      { name: 'LaTeX', level: 2 },
    ],
  },
  {
    category: 'Deep Learning & RL',
    icon: 'brain',
    skills: [
      { name: 'PyTorch', level: 3 },
      { name: 'TensorFlow', level: 2 },
      { name: 'TD3 / Deep RL', level: 3 },
      { name: 'Transformers', level: 2 },
      { name: 'Stable-Baselines3', level: 2 },
    ],
  },
  {
    category: 'Generative AI & RAG',
    icon: 'ai',
    skills: [
      { name: 'RAG Architecture', level: 3 },
      { name: 'LangChain', level: 2 },
      { name: 'FAISS / BM25', level: 2 },
      { name: 'Prompt Engineering', level: 2 },
      { name: 'Cross-Encoder Reranking', level: 2 },
    ],
  },
  {
    category: 'Quantitative Finance',
    icon: 'chart',
    skills: [
      { name: 'TQuantLib', level: 2 },
      { name: 'YFinance / TEJ API', level: 3 },
      { name: 'Backtesting', level: 3 },
      { name: 'Risk Metrics', level: 3 },
      { name: 'Pandas / NumPy', level: 3 },
    ],
  },
];
