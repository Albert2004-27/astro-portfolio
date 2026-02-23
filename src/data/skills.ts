export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: 1 | 2 | 3 }[];
}

// level: 1=Familiar, 2=Proficient, 3=Expert

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python', level: 3 },
      { name: 'R', level: 2 },
      { name: 'SQL', level: 2 },
      { name: 'TypeScript', level: 1 },
    ],
  },
  {
    category: 'ML / Reinforcement Learning',
    icon: 'brain',
    skills: [
      { name: 'PyTorch', level: 3 },
      { name: 'Stable-Baselines3', level: 3 },
      { name: 'Scikit-learn', level: 2 },
      { name: 'Hugging Face', level: 1 },
    ],
  },
  {
    category: 'Quantitative Finance',
    icon: 'chart',
    skills: [
      { name: 'Backtrader', level: 3 },
      { name: 'TA-Lib', level: 3 },
      { name: 'pandas-ta', level: 2 },
      { name: 'yfinance / ccxt', level: 3 },
      { name: 'TQuantLib', level: 1 },
    ],
  },
  {
    category: 'Data & Tools',
    icon: 'tools',
    skills: [
      { name: 'Pandas / NumPy', level: 3 },
      { name: 'Git', level: 2 },
      { name: 'Docker', level: 1 },
      { name: 'Google Colab', level: 2 },
    ],
  },
];
