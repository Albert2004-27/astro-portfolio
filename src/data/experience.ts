export interface Experience {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    org: 'Academia Sinica',
    role: 'Research Assistant — Reinforcement Learning',
    period: '2024.06 – Present',
    location: 'Taipei, Taiwan',
    bullets: [
      'Research on RL-based portfolio management under market microstructure constraints',
      'Implemented PPO/SAC agents with custom multi-asset trading environments',
      'Evaluated risk-adjusted performance metrics: Sharpe, Sortino, Maximum Drawdown',
    ],
    tags: ['RL', 'PyTorch', 'Stable-Baselines3', 'Finance'],
  },
  {
    org: 'RGA Reinsurance',
    role: 'Actuarial & Data Science Intern',
    period: '2023.07 – 2023.09',
    location: 'Taipei, Taiwan',
    bullets: [
      'Built mortality prediction models using gradient boosting on policyholder data',
      'Automated actuarial report generation reducing manual work by 60%',
      'Collaborated with pricing team on life insurance product analysis',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Actuarial'],
  },
  {
    org: 'National Chengchi University',
    role: 'B.B.A Finance / B.S. Statistics (Double Major)',
    period: '2021.09 – 2025.06',
    location: 'Taipei, Taiwan',
    bullets: [
      "GPA: 3.9/4.0 (Dean's List)",
      'Key courses: Derivatives Pricing, Stochastic Processes, Machine Learning, Econometrics',
      "Incoming NTU Finance Master's student (2025)",
    ],
    tags: ['Finance', 'Statistics', 'Academia'],
  },
];
