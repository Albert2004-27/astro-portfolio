export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: 'quant' | 'rl' | 'rag' | 'data' | 'web' | 'other';
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
      'Kaggle WattBot 2025 — 3rd Place (3/42). Hierarchical Evidence Retrieval & Optimization (HERO) pipeline for extracting evidence-backed estimates from scholarly sustainability papers. Hybrid BM25 + dense retrieval with cross-encoder reranking improved Recall@10 by +2.81pp.',
    tags: ['Python', 'RAG', 'BM25', 'Sentence-Transformers', 'Gemini', 'PyMuPDF'],
    github: 'https://github.com/Albert2004-27/WattBot-RAG-System',
    featured: true,
    category: 'rag',
  },
  {
    title: 'Graduate Planning Group (GPG)',
    description:
      'Co-founded and built the full website for GPG — a boutique consulting firm specializing in dual-track strategy for Taiwan domestic university applications (NCCU/NTU) and overseas admissions (Oxford, MIT, Imperial). Multi-page site with mentor profiles, service tiers, FAQ, and Google Analytics integration.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'Google Analytics'],
    demo: 'https://gpgconsultings.com',
    featured: false,
    category: 'web',
  },
  {
    title: '鳳麟柑仔燈工作室',
    description:
      "Designed and built the website for a family-run traditional craft studio specializing in handmade glass kandeng lanterns, inheriting century-old Taiwanese tin lamp craftsmanship. Showcases the artisan's portfolio and handles custom commission inquiries.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://happytw88888-sketch.github.io/website/index.html',
    featured: false,
    category: 'web',
  },
];
