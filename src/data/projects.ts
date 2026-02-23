export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: 'quant' | 'rl' | 'rag' | 'data' | 'other';
}

export const projects: Project[] = [
  {
    title: 'Deep RL for Portfolio Management (TD3)',
    description:
      'TD3-based deep reinforcement learning agent for multi-asset portfolio allocation. Features a fusion reward function combining Sharpe ratio, alpha generation, drawdown control, and cash timing. Benchmarked against classical quant strategies on U.S. equities; achieved Sharpe > 1.5 with lower volatility.',
    tags: ['Python', 'TensorFlow', 'TD3', 'YFinance', 'NumPy', 'Pandas'],
    github:
      'https://github.com/Albert2004-27/Deep-Reinforcement-Learning-for-Portfolio-Management-A-Fusion-Reward-Approach-with-TD3',
    featured: true,
    category: 'rl',
  },
  {
    title: 'HERO: RAG System for ESG Document QA',
    description:
      'Kaggle WattBot 2025 competition solution (Top 3/42). Hierarchical Evidence Retrieval & Optimization (HERO) pipeline for extracting evidence-backed estimates from scholarly sustainability papers. Hybrid BM25 + dense retrieval with cross-encoder reranking improved Recall@10 by +2.81pp.',
    tags: ['Python', 'RAG', 'BM25', 'Sentence-Transformers', 'Gemini', 'PyMuPDF'],
    github: 'https://github.com/Albert2004-27/WattBot-RAG-System',
    featured: true,
    category: 'rag',
  },
  {
    title: 'Taiwan Quant Strategies & Backtesting',
    description:
      'Quantitative trading experiments on Taiwan equities (TWSE). Includes a Taiwan stock web scraper, momentum/mean-reversion strategy backtests, and Monte Carlo simulation notebooks. Early-stage project with plans to expand into a full strategy framework.',
    tags: ['Python', 'Jupyter', 'Pandas', 'finlab', 'Web Scraping'],
    github: 'https://github.com/Albert2004-27/quant-project',
    featured: true,
    category: 'quant',
  },
];
