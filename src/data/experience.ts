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
    org: 'Taiwan Economic Journal (TEJ)',
    role: 'Quantitative Analyst Intern',
    period: 'Jan 2026 – Present',
    location: 'Taipei, Taiwan',
    bullets: [
      'Conducted systematic literature reviews on SSRN and Quantpedia, reproducing factor strategies and researching their adaptation to Taiwan equity markets (TWSE/TPEx) using TQuantLib; published findings as research articles for the quant community.',
      'Evaluated and enhanced the TQuant Lab platform documentation, troubleshooting API technical issues and streamlining the onboarding process for quantitative researchers.',
      'Integrated and processed large-scale market datasets using TEJ APIs and Python (Pandas), ensuring robust data pipelines for financial modeling and backtesting workflows.',
    ],
    tags: ['TQuantLib', 'Python', 'Pandas', 'SSRN', 'Quant Research'],
  },
  {
    org: 'Reinsurance Group of America (RGA)',
    role: 'Data Analyst Intern',
    period: 'Jul 2025 – Oct 2025',
    location: 'Taipei, Taiwan',
    bullets: [
      'Processed and validated premium and claims data in the internal ACF system, ensuring accuracy and consistency for actuarial and finance reporting.',
      'Assisted in mapping and reconciling data files (PE/IF/PB) to support risk assessment and monthly reporting.',
      'Streamlined routine checks using Excel, SQL, and Power Query, reducing manual errors and improving reporting efficiency.',
    ],
    tags: ['SQL', 'Excel', 'Power Query', 'Actuarial'],
  },
  {
    org: 'Institute of Information Science, Academia Sinica',
    role: 'Summer Research Intern',
    period: 'Jul 2025 – Aug 2025',
    location: 'Taipei, Taiwan',
    bullets: [
      'Contributed a novel fusion reward function for RL agents, combining Sharpe ratio, alpha generation, drawdown control, and cash timing to better align with portfolio objectives.',
      'Developed multiple backtesting and performance evaluation modules (risk metrics, attribution analysis), strengthening the robustness and transparency of trading strategy assessment.',
      'Delivered consistent outperformance in U.S. equity backtests, achieving Sharpe ratios above 1.5 with lower volatility and drawdowns versus standard benchmarks.',
    ],
    tags: ['Deep RL', 'PyTorch', 'TensorFlow', 'Backtesting', 'Finance'],
  },
  {
    org: 'Institute of Statistical Science, Academia Sinica',
    role: 'Summer Research Intern',
    period: 'Jul 2024 – Aug 2024',
    location: 'Taipei, Taiwan',
    bullets: [
      'Applied multi-stratum factorial experimental design theory (Chang & Cheng, 2018) to structure ML hyperparameter optimization under heterogeneous computing environments (varying days, OS, and processors).',
      'Derived optimal treatment allocations by sequentially minimizing wordlength pattern criteria under Bayesian D-optimality across a 2/(2×2) block structure, identifying 384–1,152 optimal designs.',
      'Presented research findings as a formal academic poster and PPT under the supervision of Associate Research Fellow Ming-Chung Chang.',
    ],
    tags: ['Experimental Design', 'Statistics', 'Factorial Designs', 'R', 'Hyperparameter Optimization'],
  },
  {
    org: 'National Chengchi University',
    role: 'B.S. Money & Banking · Double Major: Statistics · Minor: Mathematics',
    period: 'Sep 2022 – Jun 2026',
    location: 'Taipei, Taiwan',
    bullets: [
      'GPA: 4.2/4.3 — Top 5%, Academic Excellence Award (3 semesters)',
      'Incoming NTU Finance M.S. student (Sep 2026)',
      'Key courses: Financial Engineering, Mathematical Statistics, Machine Learning, NLP, Algorithms, Linear Algebra, Differential Equations',
    ],
    tags: ['Finance', 'Statistics', 'Mathematics', 'Academia'],
  },
];
