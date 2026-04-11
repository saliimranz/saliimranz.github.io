(() => {
  'use strict';

  const LOGO = '<span class="logo-pill"><span class="logo-big">A</span><span class="logo-sm">li</span><span class="logo-gap"></span><span class="logo-big">I</span><span class="logo-sm">mran</span></span>';

  const NAV_ITEMS = [
    { id: 'home',       label: 'Home',       home: '#home',              sub: 'index.html' },
    { id: 'experience', label: 'Experience',  home: '#experience',        sub: 'index.html#experience' },
    { id: 'projects',   label: 'Projects',    home: 'projects.html',      sub: 'projects.html' },
    { id: 'blog',       label: 'Blog',        home: 'blogs.html',         sub: 'blogs.html' },
    { id: 'contact',    label: 'Contact',     home: '#contact',           sub: 'index.html#contact' },
  ];

  // ========== RENDER NAVBAR ==========
  window.renderNavbar = function (activePage) {
    const isHome = activePage === 'home';
    const logoHref = isHome ? '#' : 'index.html';
    const ctaHref = isHome ? '#contact' : 'index.html#contact';

    const links = NAV_ITEMS.map(item => {
      const href = isHome ? item.home : item.sub;
      const active = item.id === activePage ? ' active' : '';
      return `<li><a href="${href}" class="nav-link${active}">${item.label}</a></li>`;
    }).join('\n        ');

    return `<nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="${logoHref}" class="nav-logo">${LOGO}</a>
      <ul class="nav-links" id="navLinks">
        ${links}
      </ul>
      <a href="${ctaHref}" class="nav-cta">Get in Touch</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
  };

  // ========== RENDER FOOTER ==========
  window.renderFooter = function () {
    const logoHref = 'index.html';
    return `<footer class="footer">
    <div class="footer-container">
      <a href="${logoHref}" class="footer-logo">${LOGO}</a>
      <p class="footer-desc">AI Engineer building production-grade LLM agents, ML pipelines, and intelligent automation systems.</p>
      <p class="footer-copy">&copy; 2026 Ali Imran. All rights reserved.</p>
    </div>
  </footer>`;
  };

  // ========== RENDER MODAL SHELL ==========
  window.renderModal = function () {
    return `<div class="modal-overlay" id="modalOverlay">
    <div class="modal-card" id="modalCard">
      <button class="modal-close" id="modalClose" aria-label="Close modal">&times;</button>
      <div class="modal-gallery" id="modalGallery"></div>
      <div class="modal-body" id="modalBody"></div>
    </div>
  </div>`;
  };

  // ========== SVG ICONS ==========
  const ICON_STAR = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>';
  const ICON_FORK = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0zM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM8 12.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/></svg>';
  const ICON_CALENDAR = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';

  // ========== PROJECT DATA ==========
  const projectData = {
    1: {
      title: 'Multi-Agent Orchestration Platform',
      abbr: 'MAO',
      timeline: 'Jan 2025 — Present',
      tags: ['LangChain', 'Python', 'Redis', 'FastAPI'],
      stars: 142, forks: 28,
      media: [],
      summary: 'Enterprise orchestration layer coordinating specialized LLM agents across complex workflows — handling task decomposition, tool use, memory, and human-in-the-loop escalation at scale. The system processes thousands of concurrent agent sessions with sub-second routing decisions.',
      impact: 'Reduced client operational overhead by 60%. Enabled non-technical teams to define complex business workflows that previously required dedicated engineering sprints. Currently serving 3 enterprise clients in production.',
      aiLeverage: 'Multi-agent architecture with specialized agents for planning, execution, and validation. Uses ReAct pattern with custom tool integrations. Implements semantic memory via vector stores for long-running conversation context.',
      problems: 'Agent reliability at scale — hallucination cascades where one agent\'s bad output corrupts downstream agents. Solved with validation checkpoints and confidence-gated routing. Latency optimization required aggressive caching and parallel agent execution.',
      link: '#',
    },
    2: {
      title: 'RAG-Powered Knowledge Engine',
      abbr: 'RAG',
      timeline: 'Sep 2024 — Dec 2024',
      tags: ['OpenAI', 'Pinecone', 'Python', 'Next.js'],
      stars: 89, forks: 17,
      media: [],
      summary: 'End-to-end retrieval-augmented generation system ingesting 100K+ enterprise documents with hybrid search, re-ranking, and citation-backed conversational responses. Serves as the knowledge backbone for client support and internal operations.',
      impact: 'Cut support ticket resolution time by 45%. Achieved 94% answer accuracy on internal benchmarks. Replaced a team of 5 knowledge workers for first-line query resolution.',
      aiLeverage: 'Hybrid retrieval combining dense vector search (Pinecone) with sparse BM25. Cross-encoder re-ranking for precision. Chunking strategy with overlapping windows and metadata-aware splitting.',
      problems: 'Document heterogeneity — PDFs, Confluence pages, Slack threads all had different structures. Built a universal ingestion pipeline with format-specific parsers. Hallucination control required strict citation enforcement and confidence thresholding.',
      link: '#',
    },
    3: {
      title: 'Predictive ML Pipeline',
      abbr: 'PML',
      timeline: 'May 2024 — Aug 2024',
      tags: ['PyTorch', 'MLflow', 'Docker', 'AWS SageMaker'],
      stars: 64, forks: 11,
      media: [],
      summary: 'Automated machine learning pipeline for demand forecasting — data ingestion, feature engineering, PyTorch model training, and real-time inference with drift monitoring. Processes millions of data points daily.',
      impact: 'Improved forecast accuracy by 28% over the client\'s existing rule-based system. Reduced inventory overstock costs by $1.2M annually. Automated what was previously a 3-day manual forecasting process.',
      aiLeverage: 'Temporal fusion transformer for multi-horizon forecasting. Automated feature engineering pipeline extracting 200+ features from raw transactional data. Online learning component for continuous model adaptation.',
      problems: 'Data quality — missing values, inconsistent timestamps, and seasonal anomalies. Built robust preprocessing with automatic outlier detection. Model drift was addressed with automated retraining triggers based on performance degradation.',
      link: '#',
    },
    4: {
      title: 'Fleet Intelligence System',
      abbr: 'FIS',
      timeline: 'Mar 2024 — Jun 2024',
      tags: ['Python', 'IoT', 'PyTorch', 'AWS', 'Kafka'],
      stars: 53, forks: 9,
      media: [],
      summary: 'Real-time fleet monitoring platform using IoT sensor data and ML models to predict vehicle maintenance, optimize fuel consumption, and reduce downtime by 35%.',
      impact: 'Reduced unplanned vehicle downtime by 35%. Saved the client ~$800K/year in preventive maintenance costs. Real-time alerts prevented 12 critical failures in the first quarter.',
      aiLeverage: 'Anomaly detection models on streaming sensor data. Predictive maintenance using survival analysis models. Fuel optimization through route-aware consumption modeling.',
      problems: 'Noisy IoT sensor data with frequent dropouts. Built a robust data cleaning pipeline with interpolation and anomaly filtering. Edge computing constraints required model compression for on-device inference.',
      link: '#',
    },
    5: {
      title: 'Route Optimization Engine',
      abbr: 'ROE',
      timeline: 'Nov 2023 — Feb 2024',
      tags: ['Python', 'OR-Tools', 'PostgreSQL', 'FastAPI', 'Redis'],
      stars: 47, forks: 8,
      media: [],
      summary: 'Graph-based optimization system that reduced average delivery times by 22% using constraint-solving algorithms, real-time traffic data, and demand forecasting models.',
      impact: 'Reduced average delivery time by 22%. Increased daily delivery capacity by 18% without adding vehicles. ROI achieved within 6 weeks of deployment.',
      aiLeverage: 'Hybrid approach combining Google OR-Tools for constraint optimization with ML-based travel time prediction. Demand clustering for zone-based routing. Real-time re-routing based on traffic feed integration.',
      problems: 'NP-hard optimization at scale — exact solutions were too slow for 500+ stop routes. Implemented hierarchical decomposition: cluster stops first, then optimize within clusters. Achieved near-optimal solutions in under 30 seconds.',
      link: '#',
    },
    6: {
      title: 'Conversational Commerce Agent',
      abbr: 'CCA',
      timeline: 'Jul 2023 — Oct 2023',
      tags: ['LangChain', 'OpenAI', 'Node.js', 'Stripe'],
      stars: 76, forks: 14,
      media: [],
      summary: 'LLM-powered shopping assistant that handles product discovery, comparisons, and checkout through natural conversation — integrated with inventory and payment APIs.',
      impact: 'Increased conversion rate by 32% for users who engaged with the agent. Handled 70% of product queries without human intervention. Average session value increased by 25%.',
      aiLeverage: 'Function-calling agent with structured tool use for product search, cart management, and payment processing. Fine-tuned on e-commerce conversation data for domain-specific understanding.',
      problems: 'Payment security in an LLM context — preventing prompt injection from manipulating transaction amounts. Implemented strict tool-level validation and sandboxed the payment flow outside the LLM\'s control loop.',
      link: '#',
    },
    7: {
      title: 'Product Recommendation Engine',
      abbr: 'PRE',
      timeline: 'Mar 2023 — Jun 2023',
      tags: ['Python', 'PyTorch', 'Redis', 'PostgreSQL', 'FastAPI'],
      stars: 58, forks: 12,
      media: [],
      summary: 'Collaborative filtering and embedding-based recommendation system serving 50K+ daily users — with A/B testing framework and real-time personalization.',
      impact: 'Lifted click-through rate by 40% over the previous rule-based system. Increased average order value by 15%. A/B tests showed statistically significant improvement within 2 weeks.',
      aiLeverage: 'Two-tower neural architecture for user-item embeddings. Real-time feature store in Redis for session-based personalization. Multi-armed bandit for exploration-exploitation in recommendation slots.',
      problems: 'Cold-start problem for new users and items. Solved with content-based fallback using item metadata embeddings. Built a progressive profiling system that transitions from content-based to collaborative filtering as user data accumulates.',
      link: '#',
    },
    8: {
      title: 'Content Generation Pipeline',
      abbr: 'CGP',
      timeline: 'Oct 2022 — Feb 2023',
      tags: ['OpenAI', 'Python', 'n8n', 'PostgreSQL'],
      stars: 41, forks: 7,
      media: [],
      summary: 'Automated content pipeline producing SEO-optimized articles, social media posts, and email campaigns at scale — with brand voice consistency and human review workflows.',
      impact: 'Increased content output by 10x while maintaining quality scores. Reduced content production costs by 65%. SEO traffic grew 180% over 4 months.',
      aiLeverage: 'Prompt chaining for multi-stage content creation: research → outline → draft → optimize. Custom style transfer model trained on brand guidelines. Automated SEO keyword integration and readability scoring.',
      problems: 'Brand voice consistency across different content types. Built a style-scoring model that evaluates generated content against brand guidelines and triggers rewrites when scores drop below threshold.',
      link: '#',
    },
    9: {
      title: 'Brand Voice AI',
      abbr: 'BVA',
      timeline: 'Jun 2022 — Sep 2022',
      tags: ['Transformers', 'Python', 'FastAPI', 'Docker'],
      stars: 35, forks: 6,
      media: [],
      summary: 'Fine-tuned language model trained on client brand guidelines to generate on-brand copy — with tone analysis, style scoring, and iterative refinement loops.',
      impact: 'Achieved 91% brand voice consistency score (up from 62% with generic models). Reduced copywriting revision cycles from 4 rounds to 1.5 on average. Adopted by 3 creative teams internally.',
      aiLeverage: 'Fine-tuned GPT-based model on curated brand corpus. Built a discriminator model for real-time style scoring. Iterative generation loop that self-corrects based on style feedback.',
      problems: 'Limited brand-specific training data (only ~5K examples). Used data augmentation via paraphrasing and style transfer from adjacent brands. Curriculum learning strategy that starts with general writing quality before specializing.',
      link: '#',
    },
  };

  window.projectData = projectData;

  // ========== BLOG DATA ==========
  const blogData = {
    1: {
      title: 'Why Most LLM Agent Architectures Fail in Production — And How to Fix Them',
      tag: 'LLM Agents', date: 'Apr 2, 2026', readTime: '6 min read',
      image: '',
      summary: 'The gap between a demo agent and a production agent is enormous. Most teams build impressive prototypes that crumble under real-world conditions — unreliable tool calls, hallucination cascades, and zero observability. This article breaks down the reliability, observability, and fallback framework I use on every production agent build. Covers circuit breakers for tool calls, confidence-gated routing, structured logging for agent traces, and graceful degradation patterns.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
    2: {
      title: 'Beyond Naive RAG: Building Retrieval Systems That Actually Scale',
      tag: 'RAG', date: 'Mar 22, 2026', readTime: '5 min read',
      image: '',
      summary: 'Chunking strategies, hybrid search, re-ranking, and the architecture decisions that separate toy demos from enterprise-grade knowledge systems. Covers advanced techniques like parent-child chunking, metadata-aware splitting, cross-encoder re-ranking, and query transformation pipelines that dramatically improve retrieval precision at scale.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
    3: {
      title: 'Deploying ML Models Without the Pain: My Production Playbook',
      tag: 'MLOps', date: 'Mar 10, 2026', readTime: '4 min read',
      image: '',
      summary: 'From model registry to canary rollouts — the infrastructure patterns I rely on for shipping ML to production with confidence. Covers MLflow for experiment tracking, Docker-based serving with FastAPI, automated drift detection, shadow deployments, and the monitoring stack that catches issues before users do.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
    4: {
      title: 'Fine-Tuning vs Prompt Engineering: When Each Wins',
      tag: 'LLMs', date: 'Feb 28, 2026', readTime: '5 min read',
      image: '',
      summary: 'A practical decision framework for choosing between fine-tuning a model and crafting better prompts — based on cost, latency, and accuracy trade-offs. Includes real benchmarks from production systems where I\'ve tried both approaches, and the surprising cases where prompt engineering outperformed expensive fine-tuning.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
    5: {
      title: 'The Multi-Agent Pattern Nobody Talks About',
      tag: 'Multi-Agent', date: 'Feb 14, 2026', readTime: '7 min read',
      image: '',
      summary: 'Supervisor-worker, debate, and consensus patterns get all the attention. Here\'s the pattern I actually use in production — a hierarchical delegation model with typed contracts between agents. Covers why most multi-agent demos fail at scale and the specific architectural decisions that make the difference.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
    6: {
      title: 'Embedding Models Compared: What Actually Matters for RAG',
      tag: 'Embeddings', date: 'Jan 30, 2026', readTime: '6 min read',
      image: '',
      summary: 'I benchmarked 8 embedding models across 3 real-world datasets. The results surprised me — and changed how I build retrieval pipelines. Covers OpenAI, Cohere, BGE, E5, and others. Evaluates on retrieval precision, latency, cost, and the often-ignored dimension of domain transferability.',
      links: { medium: '#', github: '#', inspiration: '#', resources: '#' },
    },
  };

  window.blogData = blogData;

  // ========== EXPERIENCE DATA ==========
  const experienceData = {
    1: {
      company: 'LiMove Logistics LLC',
      role: 'Software Engineer',
      period: 'May 2025 — Present',
      location: 'Remote · UAE',
      story: 'When I joined LiMove, their logistics operations relied on manual coordination and spreadsheet-based tracking. Dispatchers were spending hours per day on route planning, and vehicle maintenance was entirely reactive — breakdowns were costing the company hundreds of thousands annually. I was brought in to build the AI infrastructure from scratch. Within months, I shipped a fleet intelligence system that predicts maintenance before failures happen and a route optimization engine that cut delivery times by 22%. The operations team went from firefighting daily crises to running a data-driven logistics operation.',
      metrics: [
        { value: '35%', label: 'less vehicle downtime' },
        { value: '22%', label: 'faster deliveries' },
        { value: '$800K', label: 'saved annually' },
      ],
      projectIds: [4, 5],
      tags: ['Python', 'IoT', 'PyTorch', 'AWS', 'Kafka', 'OR-Tools', 'PostgreSQL', 'FastAPI', 'Redis'],
      learned: 'This role taught me that the hardest part of ML in logistics isn\'t the models — it\'s the data pipeline. IoT sensors drop out, GPS drifts, and timestamps conflict. I learned to build systems that are robust to messy, real-world data first, and optimize for accuracy second. I also learned that showing a non-technical operations team a real-time dashboard is worth more than any F1 score.',
    },
    2: {
      company: 'LAAM Technologies',
      role: 'Software Engineering Intern',
      period: 'Sep 2024 — Apr 2024',
      location: 'Remote',
      story: 'LAAM was scaling its e-commerce platform but struggling with two problems: customer support couldn\'t keep up with product queries, and the recommendation system was basic rule-based matching that wasn\'t driving conversions. I led the AI/ML vertical and built an LLM-powered shopping assistant that handles 70% of product queries autonomously, and a recommendation engine using neural collaborative filtering that lifted click-through rates by 40%. What started as an internship turned into me owning the entire AI stack for the company\'s products.',
      metrics: [
        { value: '32%', label: 'higher conversion rate' },
        { value: '70%', label: 'queries handled by AI' },
        { value: '40%', label: 'CTR improvement' },
      ],
      projectIds: [6, 7],
      tags: ['LangChain', 'OpenAI', 'Node.js', 'Stripe', 'Python', 'PyTorch', 'Redis', 'PostgreSQL', 'FastAPI'],
      learned: 'This was where I learned that LLM agents in production need guardrails, not just prompts. The biggest lesson was around payment security in an AI context — I had to completely rethink how the agent interacts with sensitive operations. I also discovered that A/B testing ML systems requires patience; you need statistical significance, not just vibes.',
    },
    3: {
      company: 'CreativeDOT Technologies',
      role: 'Unity Game Developer',
      period: 'Sep 2022 — Apr 2023',
      location: 'On-site',
      story: 'I joined CreativeDOT as a Unity game developer, but the company was pivoting toward AI-driven content tools. I saw the opportunity and built the backend infrastructure that would power their AI products — from automated content pipelines that increased output 10x to a brand voice AI that achieved 91% consistency scores. By the time I left, the systems I built were the foundation of their entire product suite, and three creative teams were using the Brand Voice AI daily.',
      metrics: [
        { value: '10x', label: 'content output increase' },
        { value: '91%', label: 'brand voice accuracy' },
        { value: '65%', label: 'cost reduction' },
      ],
      projectIds: [8, 9],
      tags: ['OpenAI', 'Python', 'n8n', 'PostgreSQL', 'Transformers', 'FastAPI', 'Docker'],
      learned: 'This was my transition from traditional development to AI engineering. The biggest takeaway was that fine-tuning with limited data (we only had ~5K brand-specific examples) requires creative solutions — data augmentation, curriculum learning, and knowing when to stop training. I also learned that the best AI products are the ones that feel invisible to the end user.',
    },
  };

  window.experienceData = experienceData;

  // ========== CAROUSEL HELPERS ==========
  function renderCarousel(media) {
    if (!media || media.length === 0) {
      return `<div class="carousel">
        <div class="carousel-track">
          <div class="carousel-slide active">
            <div class="carousel-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span>Project media</span>
            </div>
          </div>
        </div>
      </div>`;
    }
    const slides = media.map((m, i) => {
      const activeClass = i === 0 ? ' active' : '';
      if (m.type === 'video') {
        return `<div class="carousel-slide${activeClass}"><video src="${m.src}" controls preload="metadata"></video></div>`;
      }
      return `<div class="carousel-slide${activeClass}"><img src="${m.src}" alt="${m.alt || ''}" /></div>`;
    }).join('');
    const nav = media.length > 1
      ? `<button class="carousel-btn carousel-prev" aria-label="Previous">&#8249;</button>
         <button class="carousel-btn carousel-next" aria-label="Next">&#8250;</button>
         <div class="carousel-dots">${media.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-slide="${i}"></span>`).join('')}</div>`
      : '';
    return `<div class="carousel">${nav}<div class="carousel-track">${slides}</div></div>`;
  }

  function initCarousel(container) {
    const track = container.querySelector('.carousel-track');
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    let current = 0;
    const dots = container.querySelectorAll('.carousel-dot');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');

    function goTo(idx) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach(dot => dot.addEventListener('click', () => goTo(+dot.dataset.slide)));

    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  // ========== MODAL LOGIC ==========
  function initModals() {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay) return;

    const gallery = document.getElementById('modalGallery');
    const body = document.getElementById('modalBody');
    const closeBtn = document.getElementById('modalClose');

    function openModal() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });

    // Reusable: open a project modal by ID
    function openProjectModal(id) {
      const p = projectData[id];
      if (!p) return;

      gallery.innerHTML = renderCarousel(p.media);
      initCarousel(gallery);

      const tagsHtml = p.tags.map(t => `<span>${t}</span>`).join('');

      body.innerHTML = `
        <h2 class="modal-title">${p.title}</h2>
        <div class="modal-meta">
          ${ICON_CALENDAR} ${p.timeline}
        </div>
        <div class="project-tags">${tagsHtml}</div>
        <div class="modal-sections">
          <div class="modal-section">
            <h3 class="modal-section-title">Summary</h3>
            <p>${p.summary}</p>
          </div>
          <div class="modal-section">
            <h3 class="modal-section-title">Impact</h3>
            <p>${p.impact}</p>
          </div>
          <div class="modal-section">
            <h3 class="modal-section-title">AI Leverage</h3>
            <p>${p.aiLeverage}</p>
          </div>
          <div class="modal-section">
            <h3 class="modal-section-title">Problems Faced</h3>
            <p>${p.problems}</p>
          </div>
        </div>
        <a href="${p.link}" target="_blank" class="modal-project-link">Visit Project &rarr;</a>
      `;

      openModal();
    }

    // Project click handler
    document.querySelectorAll('[data-project-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openProjectModal(el.getAttribute('data-project-id'));
      });
    });

    // Blog click handler
    document.querySelectorAll('[data-blog-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-blog-id');
        const b = blogData[id];
        if (!b) return;

        const blogImage = b.image
          ? `<img src="${b.image}" alt="${b.title}" />`
          : `<div class="carousel-placeholder">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
               <span>Article cover</span>
             </div>`;
        gallery.innerHTML = `<div class="modal-blog-image">${blogImage}</div>`;

        body.innerHTML = `
          <h2 class="modal-title">${b.title}</h2>
          <div class="modal-meta">
            <span class="blog-tag">${b.tag}</span>
            <span>${b.date}</span>
            <span>${b.readTime}</span>
          </div>
          <div class="modal-summary"><p>${b.summary}</p></div>
          <div class="modal-links">
            <a href="${b.links.medium}" target="_blank" class="modal-link-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              Medium
            </a>
            <a href="${b.links.github}" target="_blank" class="modal-link-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="${b.links.inspiration}" target="_blank" class="modal-link-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 00-2.1 13.68v2.57a1.75 1.75 0 001.75 1.75h.7a1.75 1.75 0 001.75-1.75v-2.57A7 7 0 0012 2z"/><path d="M10 21.25h4"/></svg>
              Inspiration
            </a>
            <a href="${b.links.resources}" target="_blank" class="modal-link-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
              Extra Resources
            </a>
          </div>
        `;

        openModal();
      });
    });

    // Experience click handler
    document.querySelectorAll('[data-exp-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-exp-id');
        const exp = experienceData[id];
        if (!exp) return;

        gallery.innerHTML = '';

        const metricsHtml = exp.metrics.map(m =>
          `<div class="modal-metric">
            <span class="modal-metric-value">${m.value}</span>
            <span class="modal-metric-label">${m.label}</span>
          </div>`
        ).join('');

        const miniCardsHtml = exp.projectIds.map(pid => {
          const p = projectData[pid];
          if (!p) return '';
          const miniTags = p.tags.slice(0, 3).map(t => `<span>${t}</span>`).join('');
          return `<div class="modal-mini-card" data-mini-project="${pid}">
            <h4>${p.title}</h4>
            <p>${p.summary.substring(0, 100)}...</p>
            <div class="project-tags">${miniTags}</div>
          </div>`;
        }).join('');

        const tagsHtml = exp.tags.map(t => `<span>${t}</span>`).join('');

        body.innerHTML = `
          <div class="modal-exp-header">
            <div class="modal-exp-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>
            </div>
            <div>
              <h2 class="modal-title">${exp.company}</h2>
              <div class="modal-meta">${exp.role}<span class="modal-exp-sep">·</span>${exp.period}<span class="modal-exp-sep">·</span>${exp.location}</div>
            </div>
          </div>

          <div class="modal-sections">
            <div class="modal-section">
              <h3 class="modal-section-title">The Story</h3>
              <p>${exp.story}</p>
            </div>
          </div>

          <div class="modal-section-title" style="margin-top:24px">Key Metrics</div>
          <div class="modal-metrics">${metricsHtml}</div>

          <div class="modal-section-title" style="margin-top:28px">Projects from this Role</div>
          <div class="modal-mini-projects">${miniCardsHtml}</div>

          <div class="modal-section-title" style="margin-top:28px">Tech Stack</div>
          <div class="project-tags" style="margin-top:8px">${tagsHtml}</div>

          <div class="modal-sections" style="margin-top:24px">
            <div class="modal-section">
              <h3 class="modal-section-title">What I Learned</h3>
              <p>${exp.learned}</p>
            </div>
          </div>
        `;

        body.querySelectorAll('[data-mini-project]').forEach(card => {
          card.addEventListener('click', () => {
            closeModal();
            setTimeout(() => openProjectModal(card.getAttribute('data-mini-project')), 350);
          });
        });

        openModal();
      });
    });
  }

  window.initModals = initModals;
})();
