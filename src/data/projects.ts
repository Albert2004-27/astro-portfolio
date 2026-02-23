export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: 'quant' | 'rl' | 'data' | 'other';
}

export const projects: Project[] = [
  {
    title: 'RL Portfolio Management Agent',
    description:
      'Reinforcement learning agent for portfolio allocation using Stable-Baselines3 and custom Gym environment. Trained on Taiwan/US equity data with Sharpe ratio as reward signal.',
    tags: ['Python', 'PyTorch', 'Stable-Baselines3', 'Gym', 'yfinance'],
    github: 'https://github.com/YOUR_USERNAME/rl-portfolio-agent',
    featured: true,
    category: 'rl',
  },
  {
    title: 'Forex Quantitative Strategy',
    description:
      'Mean-reversion and momentum strategies on FX pairs using ccxt and TA-Lib. Backtested with Backtrader, achieving Sharpe > 1.5 on out-of-sample data.',
    tags: ['Python', 'ccxt', 'TA-Lib', 'Backtrader', 'pandas-ta'],
    github: 'https://github.com/YOUR_USERNAME/forex-quant-strategy',
    featured: true,
    category: 'quant',
  },
  {
    title: 'Financial Data ETL Pipeline',
    description:
      'Automated ETL pipeline for Taiwan TWSE and US NYSE/NASDAQ market data. Daily incremental updates with data quality checks and PostgreSQL storage.',
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'yfinance'],
    github: 'https://github.com/YOUR_USERNAME/financial-etl',
    featured: true,
    category: 'data',
  },
];
