(() => {
  'use strict';

  const LOGO = '<span class="logo-pill"><span class="logo-big">A</span><span class="logo-sm">li</span><span class="logo-gap"></span><span class="logo-big">I</span><span class="logo-sm">mran</span></span>';

  const NAV_ITEMS = [
    { id: 'home',       label: 'Home',        anchor: '#home',        path: '/' },
    { id: 'experience', label: 'Experience',  anchor: '#experience',  path: '/index.html#experience' },
    { id: 'projects',   label: 'Projects',    path: '/projects.html' },
    {
      id: 'services',
      label: 'Services',
      children: [
        { id: 'ai-automation', label: 'AI Workflow Automation', desc: 'n8n, Zapier, Make.com builds', path: '/services/ai-automation.html' },
        { id: 'aeo',           label: 'Answer Engine Optimization', desc: 'Schema, AI crawlers, AEO audits', path: '/services/aeo.html' },
      ],
    },
    { id: 'blog',       label: 'Blog',        path: '/blogs.html' },
    { id: 'faq',        label: 'FAQ',         anchor: '#faq',         path: '/index.html#faq' },
  ];

  // ========== RENDER NAVBAR ==========
  window.renderNavbar = function (activePage) {
    const isHome = activePage === 'home';
    const logoHref = isHome ? '#' : '/';
    const ctaHref = isHome ? '#hire' : '/index.html#hire';

    const links = NAV_ITEMS.map(item => {
      if (item.children) {
        const childActive = item.children.some(c => c.id === activePage);
        const parentActive = (item.id === activePage || childActive) ? ' active' : '';
        const childLinks = item.children.map(c => {
          const cActive = c.id === activePage ? ' active' : '';
          const desc = c.desc ? `<span class="nav-dropdown-desc">${c.desc}</span>` : '';
          return `<li><a href="${c.path}" class="nav-dropdown-link${cActive}"><span class="nav-dropdown-label">${c.label}</span>${desc}</a></li>`;
        }).join('\n              ');
        return `<li class="nav-has-dropdown">
          <button type="button" class="nav-link nav-dropdown-toggle${parentActive}" aria-haspopup="true" aria-expanded="false">
            ${item.label}
            <svg class="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <ul class="nav-dropdown" role="menu">
              ${childLinks}
          </ul>
        </li>`;
      }
      const href = (isHome && item.anchor) ? item.anchor : item.path;
      const active = item.id === activePage ? ' active' : '';
      return `<li><a href="${href}" class="nav-link${active}">${item.label}</a></li>`;
    }).join('\n        ');

    return `<nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="${logoHref}" class="nav-logo">${LOGO}</a>
      <ul class="nav-links" id="navLinks">
        ${links}
      </ul>
      <a href="${ctaHref}" class="nav-cta">Hire Me</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
  };

  // ========== INIT NAV DROPDOWN ==========
  window.initNavDropdown = function () {
    document.querySelectorAll('.nav-has-dropdown').forEach(item => {
      const toggle = item.querySelector('.nav-dropdown-toggle');
      if (!toggle) return;

      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-has-dropdown.open').forEach(o => {
          o.classList.remove('open');
          const t = o.querySelector('.nav-dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-has-dropdown')) {
        document.querySelectorAll('.nav-has-dropdown.open').forEach(o => {
          o.classList.remove('open');
          const t = o.querySelector('.nav-dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-has-dropdown.open').forEach(o => {
          o.classList.remove('open');
          const t = o.querySelector('.nav-dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  };

  // ========== RENDER FOOTER ==========
  window.renderFooter = function () {
    const logoHref = '/';
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

  // ========== MEDIA: PLACEHOLDER USED ON PROJECTS WITHOUT REAL ASSETS YET ==========
  // To add/remove media for any project: edit the `media` array on that project below.
  // Format: { type: 'image' | 'video', src, alt, poster? (videos only) }
  const PLACEHOLDER_MEDIA = [
    { type: 'image', src: '/assets/projects/pos/thumbnail.png', alt: 'Project thumbnail (placeholder)' },
    { type: 'image', src: '/assets/projects/pos/ai-dashboard.png', alt: 'Project dashboard view (placeholder)' },
    { type: 'image', src: '/assets/projects/pos/interface.png', alt: 'Project interface view (placeholder)' },
  ];

  // ========== PROJECT DATA ==========
  const projectData = {
    1: {
      slug: 'appointment-ai',
      title: 'Appointment AI',
      abbr: 'MAO',
      timeline: 'Jan 2025 — Present',
      tags: ['LangChain', 'Python', 'Redis', 'FastAPI'],
      stars: 142, forks: 28,
      media: [
        {type: 'image', src: '/assets/projects/appointment_ai/app1.png', alt: 'Dashboard Image'},
        {type: 'image', src: '/assets/projects/appointment_ai/app2.png', alt: 'Schedule Image'},
        {type: 'image', src: '/assets/projects/appointment_ai/app3.png', alt: 'History Image'},],
      summary: 'Enterprise orchestration layer coordinating specialized LLM agents across complex workflows — handling task decomposition, tool use, memory, and human-in-the-loop escalation at scale. The system processes thousands of concurrent agent sessions with sub-second routing decisions.',
      impact: 'Reduced client operational overhead by 60%. Enabled non-technical teams to define complex business workflows that previously required dedicated engineering sprints. Currently serving 3 enterprise clients in production.',
      aiLeverage: 'Multi-agent architecture with specialized agents for planning, execution, and validation. Uses ReAct pattern with custom tool integrations. Implements semantic memory via vector stores for long-running conversation context.',
      problems: 'Agent reliability at scale — hallucination cascades where one agent\'s bad output corrupts downstream agents. Solved with validation checkpoints and confidence-gated routing. Latency optimization required aggressive caching and parallel agent execution.',
      link: '#',
    },
    2: {
      slug: 'offline-edge-ai-agent',
      title: 'Offline Edge Device AI Agent',
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
      slug: 'sglang-pipeline',
      title: 'SGLang Pipeline Project',
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
      slug: 'multi-branch-pos',
      title: 'Multi-branch POS platform',
      abbr: 'FIS',
      timeline: 'Feb 2025 — May 2025',
      tags: ['.NET', 'VB.NET', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'WebForms'],
      stars: 53, forks: 9,
      media: [
        { type: 'image', src: '/assets/projects/pos/thumbnail.png', alt: 'Multi-branch POS dashboard overview — main thumbnail' },
        { type: 'image', src: '/assets/projects/pos/ai-dashboard.png', alt: 'AI-assisted analytics dashboard inside the POS platform' },
        { type: 'image', src: '/assets/projects/pos/interface.png', alt: 'POS branch operator interface — checkout flow' },
      ],
      summary: 'Designed and implemented a centralized multi-branch POS platform enabling end-to-end retail operations, including checkout, inventory management, customer lifecycle tracking, and analytics. The system unified fragmented store operations into a single scalable platform with real-time visibility and control for both branch-level users and central administrators.',
      impact: 'Reduced in-store sales execution time by ~95% through scan-to-cart and optimized checkout flows, significantly improving customer throughput. Introduced a flexible credit-based payment system that enabled partial and deferred payments, increasing customer retention and repeat purchases. Enabled real-time inventory tracking and sales analytics, allowing businesses to make faster, data-driven decisions across multiple branches.',
      aiLeverage: 'Leveraged AI tools to accelerate development by assisting in system design decisions, generating optimized code patterns, and debugging complex workflows. Used AI to refine database schemas, Frontend and error handling',
      problems: 'One major challenge was handling distributed branch operations while maintaining consistency and control at a central level. This was solved by designing a robust RBAC system with hierarchical access and centralized governance. Another challenge was supporting complex real-world sales scenarios like partial payments and outstanding balances, which required designing a custom sales lifecycle pipeline instead of a simple transaction model.',
      link: '#',
    },
    5: {
      slug: 'facial-recognition-ml-pipeline',
      title: 'ML Pipeline for Facial Recognition and Verification',
      abbr: 'FRV',
      timeline: 'Jan 2026 — Mar 2026',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Embedding Matching'],
      stars: 47, forks: 8,
      media: [
        { type: 'image', src: '/assets/projects/ml_face/1.png', alt: 'ML Pipeline Enroll Image' },
        { type: 'image', src: '/assets/projects/ml_face/3.png', alt: 'ML Pipeline Check-In Image' },
        { type: 'image', src: '/assets/projects/ml_face/2.png', alt: 'ML Pipeline Captured Image' },
      ],
      summary: 'ML pipeline for facial recognition verification using embedding matching for identity validation in attendance workflows. Combines real-time mobile inference with multi-factor validation (face + time + geolocation) to enforce attendance authenticity.',
      impact: 'Eliminated fraudulent check-ins and enforced 100% attendance authenticity through real-time mobile inference and multi-factor validation. Removed manual attendance verification across distributed teams.',
      aiLeverage: 'Embedding-based face matching against a pre-registered employee database. Real-time inference optimized for mobile constraints. Multi-factor validation layer combining face vector similarity, timestamp window enforcement, and geolocation fencing.',
      problems: 'Mobile inference latency on lower-end devices required model quantization and inference graph optimization. Lighting and angle variability needed augmentation strategies during enrollment. False positives in similar-looking employees were addressed by raising similarity thresholds and adding the multi-factor layer.',
      link: '#',
    },
    6: {
      slug: 'complaint-management-system',
      title: 'Complaint Management System',
      abbr: 'CMS',
      timeline: 'Oct 2025 — Dec 2025',
      tags: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
      stars: 47, forks: 8,
      media: [
        { type: 'image', src: '/assets/projects/cms/1.png', alt: 'CMS Dashboard' },
        { type: 'image', src: '/assets/projects/cms/2.png', alt: 'CMS Ticket Details' },
        { type: 'image', src: '/assets/projects/cms/3.png', alt: 'CMS Customer Interface' },
      ],
      summary: 'AI-powered complaint lifecycle management with RBAC, real-time workflow transparency, and LangChain-driven prioritization. Unified customer, admin, and internal team views into a single auditable pipeline.',
      impact: 'Cut complaint resolution time from days to hours while improving accountability, prioritization of critical issues, and stakeholder visibility. Auditable trail eliminated the previous "lost ticket" problem.',
      aiLeverage: 'LangChain-driven prioritization layer that classifies complaint severity, suggests next-best-action, and surfaces patterns across historical tickets. AI-generated executive summaries gave leadership visibility without manual reporting.',
      problems: 'Aligning role-specific views (customer, admin, internal) onto a single state machine without leaking sensitive data was the central challenge. Solved by per-role projection layers on top of a unified ticket model. AI prioritization had to be calibrated against historical resolution outcomes to avoid over-escalating.',
      link: '#',
    },
    7: {
      slug: 'limove-wms-app',
      title: 'LiMove WMS App',
      abbr: 'WMS',
      timeline: 'Jun 2025 — Sep 2025',
      tags: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      stars: 47, forks: 8,
      media: [
        { type: 'image', src: '/assets/projects/wms/thumb.png', alt: 'WMS Thubnail' },
        { type: 'image', src: '/assets/projects/wms/1.png', alt: 'WMS Dashboard' },
        { type: 'image', src: '/assets/projects/wms/2.png', alt: 'WMS Order List' },
        { type: 'image', src: '/assets/projects/wms/3.png', alt: 'WMS Order Detail' },
      ],
      summary: 'Flutter-based enterprise WMS mobile application digitizing warehouse operations end-to-end — from receiving and put-away to picking, packing, and order verification.',
      impact: 'Reduced order processing and verification time from 7 days to under 6 hours, while improving backend performance by 60% through API optimization techniques including indexing, pagination, and controlled preloading.',
      aiLeverage: 'AI-assisted development to accelerate Flutter UI iteration, generate API client scaffolding, and surface query optimization patterns. Future roadmap includes computer vision for automated package verification at packing stations.',
      problems: 'Backend response times under heavy concurrent warehouse load required careful indexing strategy and pagination of large list endpoints. Offline-first behavior on warehouse-floor devices needed a sync layer with conflict resolution. Flutter performance on lower-end devices required strategic widget rebuilds.',
      link: '#',
    },
    8: {
      slug: 'partial-refunds-pipeline',
      title: 'Partial Refunds Pipeline',
      abbr: 'PRP',
      timeline: 'Sep 2024 — Nov 2024',
      tags: ['Python', 'GCP', 'PostgreSQL', 'GraphQL', 'Redis'],
      stars: 76, forks: 14,
      summary: 'Real-time partial refunds system designed and deployed directly in LAAM Seller Front, reducing dependency on Shopify and improving seller satisfaction. Sellers gained the ability to issue partial refunds without context-switching to external tooling.',
      impact: 'Cut manual refund processing time by 40%. Reduced support escalations around refund disputes. Removed a critical Shopify dependency from the seller workflow, giving the platform more control over the refund UX.',
      aiLeverage: 'AI-assisted development for GraphQL schema design, edge-case generation in test suites, and refund-amount validation logic. Future roadmap includes anomaly detection on refund patterns to flag potential abuse.',
      problems: 'Partial refunds in a multi-line-item order required careful state-machine design to prevent double-refunds. Reconciliation with payment processors needed idempotent retry logic. Concurrent edits by sellers during the refund flow were handled with optimistic locking.',
      link: '#',
    },
    9: {
      slug: 'customer-management-api',
      title: 'Centralized Customer Management API for Seller Applications',
      abbr: 'CMA',
      timeline: 'Nov 2024 — Jan 2025',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL/Rest API'],
      stars: 58, forks: 12,
      media: [],
      summary: 'Enhanced the Order Management service powering 3,000+ sellers with advanced editing capabilities, reducing manual operational overhead and platform dependency on third-party services.',
      impact: 'Streamlined order operations for 3,000+ sellers. Saved 5–7 hours of manual work per team each week. Reduced reliance on Shopify by enabling more order operations natively in the LAAM platform. Acted as on-call engineer during peak periods, resolving 20+ production-critical bugs in a single week.',
      aiLeverage: 'AI-assisted scaffolding for the GraphQL/REST hybrid layer, automated test generation for the editing workflows, and code review of edge-case branching in order state transitions.',
      problems: 'Concurrent order edits by sellers and admins required carefully designed locking and conflict-resolution semantics. Backwards compatibility with existing Shopify-driven flows had to be maintained during the migration. On-call incident velocity required tight observability — added structured logging and metric dashboards as part of the work.',
      link: '#',
    },
    10: {
      slug: 'content-generation-pipeline',
      title: 'Content Generation Pipeline',
      abbr: 'CGP',
      timeline: 'Jan 2023 — Apr 2023',
      tags: ['OpenAI', 'Python', 'n8n', 'PostgreSQL'],
      stars: 41, forks: 7,
      media: [],
      summary: 'Automated content pipeline producing SEO-optimized articles, social media posts, and email campaigns at scale — with brand voice consistency and human review workflows.',
      impact: 'Increased content output by 10x while maintaining quality scores. Reduced content production costs by 65%. SEO traffic grew 180% over 4 months.',
      aiLeverage: 'Prompt chaining for multi-stage content creation: research → outline → draft → optimize. Custom style transfer model trained on brand guidelines. Automated SEO keyword integration and readability scoring.',
      problems: 'Brand voice consistency across different content types. Built a style-scoring model that evaluates generated content against brand guidelines and triggers rewrites when scores drop below threshold.',
      link: '#',
    },
    11: {
      slug: 'brand-voice-ai',
      title: 'Brand Voice AI',
      abbr: 'BVA',
      timeline: 'Sep 2022 — Dec 2022',
      tags: ['Transformers', 'Python', 'FastAPI', 'Docker'],
      stars: 35, forks: 6,
      media: [],
      summary: 'Fine-tuned language model trained on client brand guidelines to generate on-brand copy — with tone analysis, style scoring, and iterative refinement loops.',
      impact: 'Achieved 91% brand voice consistency score (up from 62% with generic models). Reduced copywriting revision cycles from 4 rounds to 1.5 on average. Adopted by 3 creative teams internally.',
      aiLeverage: 'Fine-tuned GPT-based model on curated brand corpus. Built a discriminator model for real-time style scoring. Iterative generation loop that self-corrects based on style feedback.',
      problems: 'Limited brand-specific training data (only ~5K examples). Used data augmentation via paraphrasing and style transfer from adjacent brands. Curriculum learning strategy that starts with general writing quality before specializing.',
      link: '#',
    },
    12: {
      slug: 'invoice-automation',
      title: 'AI Invoice Automation',
      abbr: 'INV',
      timeline: 'Apr 2026 — Present',
      tags: ['n8n', 'OpenAI', 'OCR', 'Google Sheets', 'Google Drive API'],
      stars: 88, forks: 19,
      media: [
        { type: 'image', src: '/assets/projects/invoice-automation/real_impact_thumb.png', alt: 'AI invoice automation — impact summary thumbnail' },
        { type: 'image', src: '/assets/projects/invoice-automation/invoice_automation_thumbnail_1.png', alt: 'n8n invoice extraction pipeline overview' },
        { type: 'image', src: '/assets/projects/invoice-automation/image.png', alt: 'Extracted invoice data populated into Google Sheets' },
        { type: 'image', src: '/assets/projects/invoice-automation/image-Before.png', alt: 'Manual invoice processing — before automation' },
        { type: 'image', src: '/assets/projects/invoice-automation/image-Real_before.png', alt: 'Real invoice example — before-state baseline' },
      ],
      summary: 'End-to-end AI invoice processing pipeline built in n8n. Drive monitors a folder, file detected, OCR + LLM extracts every field (vendor, line items, taxes, totals, IBAN), data auto-populates Google Sheets, file is archived, notification fires. Zero human touch, sub-4-second per invoice.',
      impact: '80% faster processing. 50% less effort across the AP team. 4× throughput increase. Sub-4-second average runtime per invoice. Eliminated daily manual data entry that previously consumed several hours of finance-team time.',
      aiLeverage: 'OCR extracts text from variable PDF layouts. LLM does structured field extraction — vendor, line items, taxes, totals, IBAN — with confidence scoring on each field. n8n orchestrates 11 nodes covering Drive folder watch, OCR, LLM extraction, Google Sheets population, archival, and Slack/email notification. Caches extracted patterns to reduce LLM cost on recurring vendors.',
      problems: 'Variable PDF formats from different vendors broke fixed-template OCR; the OCR + LLM combo solved it for 95%+ of invoices. Edge cases — missing fields, low-quality scans, non-standard tables — needed graceful fallbacks with a human-review queue. Cost optimization: cached vendor-specific extraction patterns so the LLM only fires on novel layouts.',
      link: '#',
    },
  };

  window.projectData = projectData;

  // ========== BLOG DATA ==========
  const blogData = {
    1: {
      slug: 'llm-agents-production',
      title: 'Why Most LLM Agent Architectures Fail in Production — And How to Fix Them',
      tag: 'LLM Agents', date: 'Apr 2, 2026', readTime: '6 min read',
      image: '/assets/blogs/demovprod.png',
      summary: 'The gap between a demo agent and a production agent is enormous. Most teams build impressive prototypes that crumble under real-world conditions — unreliable tool calls, hallucination cascades, and zero observability. This article breaks down the reliability, observability, and fallback framework I use on every production agent build. Covers circuit breakers for tool calls, confidence-gated routing, structured logging for agent traces, and graceful degradation patterns.',
      links: { medium: 'https://medium.com/@saliimranz12/why-most-llm-agent-architectures-fail-in-production-and-how-to-fix-them-224f753daac0'},
    },
    2: {
      slug: 'beyond-naive-rag',
      title: 'Beyond Naive RAG: Building Retrieval Systems That Actually Scale',
      tag: 'RAG', date: 'Mar 22, 2026', readTime: '5 min read',
      image: '/assets/blogs/naieverag.png',
      summary: 'Chunking strategies, hybrid search, re-ranking, and the architecture decisions that separate toy demos from enterprise-grade knowledge systems. Covers advanced techniques like parent-child chunking, metadata-aware splitting, cross-encoder re-ranking, and query transformation pipelines that dramatically improve retrieval precision at scale.',
      links: { medium: 'https://medium.com/@saliimranz12/beyond-naive-rag-building-retrieval-systems-that-actually-scale-b518a38b3d3d'},
    },
    3: {
      slug: 'deploying-ml-models',
      title: 'Deploying ML Models Without the Pain: My Production Playbook',
      tag: 'MLOps', date: 'Mar 10, 2026', readTime: '4 min read',
      image: '/assets/blogs/mlpaybook.png',
      summary: 'From model registry to canary rollouts — the infrastructure patterns I rely on for shipping ML to production with confidence. Covers MLflow for experiment tracking, Docker-based serving with FastAPI, automated drift detection, shadow deployments, and the monitoring stack that catches issues before users do.',
      links: { medium: 'https://medium.com/@saliimranz12/deploying-ml-models-without-the-pain-my-production-playbook-f3e790fdb261'},
    },
    4: {
      slug: 'fine-tuning-vs-prompt-engineering',
      title: 'Fine-Tuning vs Prompt Engineering: When Each Wins',
      tag: 'LLMs', date: '4 May, 2026', readTime: '7 min read',
      image: '/assets/blogs/ft.png',
      summary: 'A practical decision framework for choosing between fine-tuning a model and crafting better prompts — based on cost, latency, and accuracy trade-offs. Includes real benchmarks from production systems where I\'ve tried both approaches, and the surprising cases where prompt engineering outperformed expensive fine-tuning.',
      links: { medium: 'https://medium.com/@saliimranz12/fine-tuning-vs-prompt-engineering-when-each-wins-d73f45888e86'},
    },
    5: {
      slug: 'multi-agent-pattern',
      title: 'The Multi-Agent Pattern Nobody Talks About',
      tag: 'Multi-Agent', date: 'Feb 14, 2026', readTime: '7 min read',
      image: '/assets/blogs/5.png',
      summary: 'Supervisor-worker, debate, and consensus patterns get all the attention. Here\'s the pattern I actually use in production — a hierarchical delegation model with typed contracts between agents. Covers why most multi-agent demos fail at scale and the specific architectural decisions that make the difference.',
      links: { medium: 'https://medium.com/@saliimranz12/the-multi-agent-pattern-nobody-talks-about-08f17eb34f6b'},
    },
    6: {
      slug: 'embedding-models-compared',
      title: 'Embedding Models Compared: What Actually Matters for RAG',
      tag: 'Embeddings', date: '4 May, 2026', readTime: '8 min read',
      image: '/assets/blogs/6bl.png',
      summary: 'I benchmarked 8 embedding models across 3 real-world datasets. The results surprised me — and changed how I build retrieval pipelines. Covers OpenAI, Cohere, BGE, E5, and others. Evaluates on retrieval precision, latency, cost, and the often-ignored dimension of domain transferability.',
      links: { medium: 'https://medium.com/@saliimranz12/embedding-models-compared-what-actually-matters-for-rag-f17881893901' },
    },
  };

  window.blogData = blogData;

  // ========== EXPERIENCE DATA ==========
  const experienceData = {
    1: {
      company: 'LiMove Logistics LLC',
      role: 'Software Engineer',
      period: 'Feb 2025 — Present',
      location: 'Remote · UAE',
      story: 'When I joined LiMove, their logistics operations relied on manual coordination and spreadsheet-based tracking. Dispatchers were spending hours per day on route planning, and vehicle maintenance was entirely reactive — breakdowns were costing the company hundreds of thousands annually. I was brought in to build the AI infrastructure from scratch. Within months, I shipped a fleet intelligence system that predicts maintenance before failures happen and a route optimization engine that cut delivery times by 22%. The operations team went from firefighting daily crises to running a data-driven logistics operation.',
      metrics: [
        { value: '35%', label: 'less vehicle downtime' },
        { value: '22%', label: 'faster deliveries' },
        { value: '$800K', label: 'saved annually' },
      ],
      projectIds: [4, 5, 6, 7],
      tags: ['Python', 'IoT', 'PyTorch', 'AWS', 'Kafka', 'OR-Tools', 'PostgreSQL', 'FastAPI', 'Redis'],
      learned: 'This role taught me that the hardest part of ML in logistics isn\'t the models — it\'s the data pipeline. IoT sensors drop out, GPS drifts, and timestamps conflict. I learned to build systems that are robust to messy, real-world data first, and optimize for accuracy second. I also learned that showing a non-technical operations team a real-time dashboard is worth more than any F1 score.',
    },
    2: {
      company: 'LAAM Technologies',
      role: 'Software Engineering Intern',
      period: 'Sep 2024 — Jan 2025',
      location: 'Remote',
      story: 'LAAM was scaling its e-commerce platform but struggling with two problems: customer support couldn\'t keep up with product queries, and the recommendation system was basic rule-based matching that wasn\'t driving conversions. I led the AI/ML vertical and built an LLM-powered shopping assistant that handles 70% of product queries autonomously, and a recommendation engine using neural collaborative filtering that lifted click-through rates by 40%. What started as an internship turned into me owning the entire AI stack for the company\'s products.',
      metrics: [
        { value: '32%', label: 'higher conversion rate' },
        { value: '70%', label: 'queries handled by AI' },
        { value: '40%', label: 'CTR improvement' },
      ],
      projectIds: [8, 9],
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
      projectIds: [10, 11],
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

  // ========== PROJECT MEDIA HYDRATION ==========
  function projectBySlug(slug) {
    for (const k in projectData) {
      if (projectData[k].slug === slug) return projectData[k];
    }
    return null;
  }

  function escapeAttr(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function mediaToCollageBlock(item, opts) {
    opts = opts || {};
    const overflowBadge = opts.overflow ? `<span class="collage-overflow">+${opts.overflow}</span>` : '';
    const overflowClass = opts.overflow ? ' has-overflow' : '';
    if (item.type === 'video') {
      const poster = item.poster ? ` poster="${escapeAttr(item.poster)}"` : '';
      return `<div class="collage-block has-media${overflowClass}"><video src="${escapeAttr(item.src)}"${poster} preload="metadata" muted playsinline></video>${overflowBadge}</div>`;
    }
    return `<div class="collage-block has-media${overflowClass}"><img src="${escapeAttr(item.src)}" alt="${escapeAttr(item.alt)}" loading="lazy" />${overflowBadge}</div>`;
  }

  function renderProjectCollage(slug) {
    const p = projectBySlug(slug);
    if (!p) return null;
    const media = (p.media || []).filter(Boolean);
    if (media.length === 0) return null;
    if (media.length <= 4) {
      return media.map(m => mediaToCollageBlock(m)).join('');
    }
    // 5+: render first 3 normally, fourth gets +N badge
    const first3 = media.slice(0, 3).map(m => mediaToCollageBlock(m)).join('');
    const fourth = mediaToCollageBlock(media[3], { overflow: media.length - 4 });
    return first3 + fourth;
  }

  function hydrateProjectCards() {
    document.querySelectorAll('[data-project-slug]').forEach(card => {
      const slug = card.getAttribute('data-project-slug');
      const host = card.querySelector('.project-collage');
      if (!host) return;
      const html = renderProjectCollage(slug);
      if (html === null) {
        host.remove();
        return;
      }
      const p = projectBySlug(slug);
      const count = p && p.media ? p.media.length : 0;
      host.setAttribute('data-count', String(Math.min(count, 4)));
      host.innerHTML = html;
    });
  }

  function hydrateProjectCarousels() {
    document.querySelectorAll('[data-project-carousel]').forEach(host => {
      const slug = host.getAttribute('data-project-carousel');
      const p = projectBySlug(slug);
      if (!p) { host.style.display = 'none'; return; }
      const media = (p.media || []).filter(Boolean);
      if (media.length === 0) { host.style.display = 'none'; return; }
      host.innerHTML = renderCarousel(media);
      initCarousel(host);
    });
  }

  window.hydrateProjectCards = hydrateProjectCards;
  window.hydrateProjectCarousels = hydrateProjectCarousels;

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

        const articleHref = b.slug ? `/blogs/${b.slug}.html` : null;
        const fullArticleLink = articleHref
          ? `<a href="${articleHref}" class="modal-case-study-link">Read full article <span class="arrow">&rarr;</span></a>`
          : '';

        const LINK_CONFIG = [
          {
            key: 'medium',
            label: 'Medium',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>',
          },
          {
            key: 'github',
            label: 'GitHub',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
          },
          {
            key: 'inspiration',
            label: 'Inspiration',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 00-2.1 13.68v2.57a1.75 1.75 0 001.75 1.75h.7a1.75 1.75 0 001.75-1.75v-2.57A7 7 0 0012 2z"/><path d="M10 21.25h4"/></svg>',
          },
          {
            key: 'resources',
            label: 'Extra Resources',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>',
          },
        ];

        const linkButtons = LINK_CONFIG
          .filter(cfg => b.links && b.links[cfg.key])
          .map(cfg => `<a href="${b.links[cfg.key]}" target="_blank" rel="noopener" class="modal-link-btn">${cfg.icon} ${cfg.label}</a>`)
          .join('');

        body.innerHTML = `
          <h2 class="modal-title">${b.title}</h2>
          <div class="modal-meta">
            <span class="blog-tag">${b.tag}</span>
            <span>${b.date}</span>
            <span>${b.readTime}</span>
          </div>
          <div class="modal-summary"><p>${b.summary}</p></div>
          ${fullArticleLink ? `<div class="modal-actions">${fullArticleLink}</div>` : ''}
          ${linkButtons ? `<div class="modal-links">${linkButtons}</div>` : ''}
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
          const miniHref = p.slug ? `/projects/${p.slug}.html` : '#';
          return `<a class="modal-mini-card" href="${miniHref}">
            <h4>${p.title}</h4>
            <p>${p.summary.substring(0, 100)}...</p>
            <div class="project-tags">${miniTags}</div>
          </a>`;
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

        openModal();
      });
    });
  }

  window.initModals = initModals;
})();
