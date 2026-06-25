/* ============================================================
   EMILLY CHEN — Modal Detail Content & Logic
   ============================================================ */

const modalData = {

  // ── EXPERIENCE ──────────────────────────────────────────────
  "qualcomm": {
    type: "experience",
    title: "Business Analyst (Capstone)",
    org: "Qualcomm",
    date: "Mar 2026 – Jun 2026 · San Diego, CA · Hybrid",
    image: "assets/qualcomm-cover.jpg",
    imageAlt: "Qualcomm capstone dashboard",
    body: `
      <p>Partnered with a cross-functional engineering and finance team to build a predictive model supporting cost forecasting and strategic resource planning.</p>
      <h4>What I built</h4>
      <ul>
        <li>An ensemble machine learning model with engineered features tailored to the business context, achieving a meaningful improvement in forecast accuracy over the team's prior baseline</li>
        <li>An interactive self-serve dashboard enabling Finance and HR stakeholders to generate planning projections independently, without relying on manual analyst support</li>
        <li>Executive-ready presentations translating model output into clear planning and budget guidance for cross-functional leadership</li>
      </ul>
      <h4>Why it mattered</h4>
      <p>Accurate forecasting feeds directly into resourcing and budget decisions for engineering leadership. Replacing ad-hoc, manual estimation with a validated model gave stakeholders a more repeatable, scalable process — and the self-serve dashboard reduced dependency on analyst availability for routine planning needs.</p>
    `,
    links: []
  },

  "nthu-consulting": {
    type: "experience",
    title: "Management Consulting Analyst",
    org: "NTHU Consulting Group",
    date: "Jan 2025 – Jun 2025",
    image: "assets/unilever-cover.jpg",
    imageAlt: "Unilever RTD tea market research",
    body: `
      <p>Led market analysis for Unilever's Lipton brand to evaluate Taiwan's ready-to-drink (RTD) tea market and surface a viable new-product opportunity.</p>
      <h4>What I did</h4>
      <ul>
        <li>Synthesized 20+ market research datasets to map consumer segments, pricing tiers, packaging preferences, and distribution channel performance</li>
        <li>Designed and ran a consumer taste-test study; used SPSS and R for segmentation and concept testing</li>
        <li>Recommended a 4P marketing strategy (product, price, place, promotion) for a new tea product launch</li>
      </ul>
      <p>The recommendations fed into a product launch that achieved 1.8 units/store/day and drove 45% sales growth across the portfolio.</p>
    `,
    links: []
  },

  "nycu-research-2024": {
    type: "experience",
    title: "Undergraduate Student Researcher",
    org: "National Yang Ming Chiao Tung University",
    date: "Sep 2024 – Dec 2024",
    image: "",
    imageAlt: "",
    body: `
      <p><strong>Research Topic:</strong> Flow of Purpose in Adolescents — A Longitudinal Analysis</p>
      <ul>
        <li>Analyzed longitudinal survey data using R, identifying behavioral differences and developmental trajectories between high- and low-purpose groups</li>
        <li>Conducted statistical hypothesis testing (t-tests) to evaluate significant changes in purpose development over a four-month period</li>
        <li>Developed Sankey diagrams in Python to visualize shifts in personal goals and behavioral patterns, transforming complex longitudinal data into actionable insights</li>
        <li>Presented findings to support evidence-based recommendations for purpose-driven education and youth development programs</li>
      </ul>
    `,
    links: []
  },

  "nova-studio-cofounder": {
    type: "experience",
    title: "Co-Founder",
    org: "Nova Studio",
    date: "Jan 2022 – Dec 2024 · 3 yrs · Self-employed",
    image: "assets/nova-team.jpg",
    imageAlt: "Nova Studio team photo",
    body: `
      <p>Co-founded Taiwan's first student-founded venture capital initiative, building an entrepreneurship ecosystem from zero to a 545-member community across 64 universities.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Designed and executed entrepreneurial training programs with corporate partners, impacting 2,577+ individuals across 64 universities and colleges</li>
        <li>Mentored 43 emerging talents in project development, business pitching, and leadership skills</li>
        <li>Organized 56+ events, fostering a thriving startup ecosystem with 545 active members</li>
        <li>Matched 30 talented individuals with partner enterprises for internship and employment opportunities</li>
      </ul>
    `,
    links: [
      { label: "Nova Studio Website", url: "https://novastudio.global/" },
      { label: "Nova Studio LinkedIn", url: "https://tw.linkedin.com/company/novastudiotw" }
    ]
  },

  "nycu-vp": {
    type: "experience",
    title: "Vice President",
    org: "NYCU Innovation and Entrepreneurship Club",
    date: "Sep 2023 – Jun 2024",
    image: "",
    imageAlt: "",
    body: `
      <ul>
        <li>Directed a 15-member leadership team in planning and executing entrepreneurship programs, driving student engagement and cross-functional collaboration across multiple initiatives</li>
        <li>Managed end-to-end execution of 12+ startup ecosystem events, coordinating founders, industry mentors, and student participants from universities across Taiwan</li>
        <li>Advised 5 early-stage venture teams on market validation, business strategy, and pitch development, helping founders refine go-to-market plans and competition submissions</li>
      </ul>
    `,
    links: []
  },

  "starworks": {
    type: "experience",
    title: "Intern",
    org: "StarWorks Entrepreneurial Venture Capital",
    date: "Jul 2023 – Sep 2023 · Taipei City, Taiwan · Hybrid",
    image: "",
    imageAlt: "",
    body: `
      <p>Program Design and Corporate Communications</p>
      <ul>
        <li>Collaborated with general partners and venture capital partners to distill knowledge for entrepreneurial coaching</li>
        <li>Designed a comprehensive four-day training course and accreditation process</li>
        <li>Implemented the course plan, assisting 20 instructors from Tungnan University in guiding students toward entrepreneurship</li>
        <li>Authored a detailed white paper outlining the organization's internal philosophy — problem analysis, mission/vision, market benchmarks, case studies, and milestones — serving as an internal communications manual</li>
      </ul>
    `,
    links: []
  },

  "countryedu": {
    type: "experience",
    title: "Research Analyst Intern",
    org: "CountryEDU Charity Foundation",
    date: "May 2023 – Jul 2023 · Taipei City, Taiwan · Remote",
    image: "",
    imageAlt: "",
    body: `
      <p>User Research</p>
      <ul>
        <li>Conducted qualitative interviews with high school stakeholders to analyze education needs</li>
        <li>Utilized secondary data to supplement research on high school education</li>
        <li>Assisted in drafting the foundation's educational philosophy white paper</li>
      </ul>
    `,
    links: []
  },

  "nova-pod-consultant": {
    type: "experience",
    title: "People & Organizational Development Consultant",
    org: "Nova Studio",
    date: "Jun 2022 – Jul 2023 · 1 yr 2 mos · Hybrid",
    image: "",
    imageAlt: "",
    body: `
      <ul>
        <li>Partnered with management consulting firms, digital marketing agencies, and corporate teams to design employee development and engagement initiatives aligned with business objectives</li>
        <li>Applied Stanford University's <em>Designing Your Life</em> framework to help employees connect personal career aspirations with organizational goals, improving engagement and retention outcomes</li>
        <li>Delivered programs that achieved an average participant satisfaction rate of 90% and a Net Promoter Score (NPS) of 80</li>
      </ul>
    `,
    links: []
  },

  "nycu-research-2023": {
    type: "experience",
    title: "Undergraduate Student Researcher",
    org: "National Yang Ming Chiao Tung University",
    date: "Feb 2023 – Jun 2023",
    image: "",
    imageAlt: "",
    body: `
      <p><strong>Research Topic:</strong> Development and Validation of the Adolescent Resilience Scale</p>
      <ul>
        <li>Designed and validated a psychometric assessment instrument measuring resilience among Taiwanese adolescents and young adults</li>
        <li>Performed exploratory factor analysis (EFA), confirmatory factor analysis (CFA), and structural equation modeling (SEM) using SPSS and R to evaluate construct validity and model fit</li>
        <li>Assessed reliability and measurement quality through statistical validation procedures, ensuring robustness of the proposed scale</li>
        <li>Collaborated with faculty researchers to interpret findings and refine measurement frameworks for educational and psychological research applications</li>
      </ul>
    `,
    links: []
  },

  "starwings": {
    type: "experience",
    title: "Consulting & Product Development Intern",
    org: "StarWings Management Consulting",
    date: "Jun 2022 – Sep 2022",
    image: "",
    imageAlt: "",
    body: `
      <p>Survey Design and Behavioral Analytics</p>
      <ul>
        <li>Supported development of a talent assessment product by contributing to assessment design, pilot testing, and statistical analysis to improve measurement validity and user applicability</li>
        <li>Conducted quantitative analysis on assessment results to evaluate reliability and refine product recommendations for talent development and leadership evaluation</li>
        <li>Assisted in designing and delivering manager development programs, coordinating curriculum planning, implementation, and participant engagement initiatives</li>
      </ul>
    `,
    links: []
  },

  "taiwan-ac": {
    type: "experience",
    title: "Founder",
    org: "Taiwan AC Children Leadership",
    date: "Aug 2017 – Aug 2019 · 2 yrs 1 mo · Self-employed",
    image: "",
    imageAlt: "",
    body: `
      <ul>
        <li>Founded the AC Children's Leadership Program to help children discover learning motivation and personal values through experiential education and student-led service projects</li>
        <li>Led a team of 70+ volunteers to serve 200+ children and youth annually across 5 cities in Taiwan, Northern Thailand, and California</li>
        <li>Coordinated curriculum and activities for an empowerment project in rural Northern Thailand to promote health, education, and self-confidence among rural children</li>
      </ul>
    `,
    links: []
  },

  // ── PROJECTS ────────────────────────────────────────────────
  "bcgx-churn": {
    type: "project",
    title: "Energy Sector Customer Churn Analysis",
    org: "BCG X Business Case (Simulation)",
    date: "May 2026 – Present",
    image: "",
    imageAlt: "",
    body: `
      <p>A simulated BCG X case studying churn among small-and-medium enterprise (SME) customers of a utility provider.</p>
      <h4>Approach</h4>
      <ul>
        <li>Architected an end-to-end churn analytics framework: defined data requirements, experimental design parameters, and a hypothesis structure (price sensitivity, service quality) as inputs to the ML pipeline</li>
        <li>Built binary classification models (Logistic Regression / Random Forest) with selection criteria balancing statistical accuracy and business explainability</li>
        <li>Engineered <strong>price elasticity of churn</strong> as a derived feature — quantifying the marginal effect of price changes on customer attrition and bridging statistical output to a business decision</li>
      </ul>
    `,
    links: [],
    tags: ["Business Analysis", "Data Modeling", "Logistic Regression"]
  },

  "secom-yield": {
    type: "project",
    title: "AI-Powered Semiconductor Yield Monitoring Platform",
    org: "UCSD · MGTA 457 — Business Intelligence Systems",
    date: "Mar 2026 – Jun 2026",
    image: "assets/secom-cover.jpg",
    imageAlt: "SECOM dashboard preview",
    body: `
      <p><strong>The problem:</strong> chip failures only surface at end-of-line testing, after the manufacturing cost is already sunk. <strong>The solution:</strong> a Snowflake-to-Tableau pipeline that surfaces failure risk in near real time, built on the UCI SECOM dataset — real fab data from 2008 (1,567 production runs, 590 sensor features, 6.6% failure rate).</p>
      <h4>What I built</h4>
      <ul>
        <li>An end-to-end BI platform using Snowflake and Tableau to monitor manufacturing yield and identify failure signals before end-of-line testing</li>
        <li>Interactive dashboards covering yield trends, fail heatmaps, sensor drift detection, and statistical process control (SPC) monitoring for rapid root-cause investigation</li>
        <li>An AI-powered chatbot integrated with Tableau and Claude, letting users query manufacturing insights in natural language and receive automated diagnostic recommendations</li>
        <li>Transformed raw sensor data (590 variables) into 4 curated MART tables (<code>MART_YIELD_DAILY</code>, <code>MART_FAIL_ANALYSIS</code>, <code>MART_SENSOR_STATS</code>, <code>MART_SENSOR_CONTROL</code>) — enabling self-service reporting with zero SQL required</li>
      </ul>
      <h4>Data pipeline</h4>
      <p>Raw (592-column upload, C1–C592) → Staging (cleaned, timestamp/sensor casting, label encoding) → Mart (daily yield, fail drilldown, SPC limits) → Serve (Tableau Cloud connected directly to curated tables).</p>
      <h4>Results</h4>
      <p>91.3% overall yield rate visualized across the year, 104 failures flagged, 48 sensors identified as drifting out of control — with the worst single day (7/25/2008) immediately traceable through the dashboard's drill-down chain.</p>
    `,
    links: [
      { label: "Slide Deck (PDF)", url: "#" }
    ],
    tags: ["Snowflake", "Tableau Cloud", "SPC + ML", "No SQL for Users"]
  },

  "customer-analytics": {
    type: "project",
    title: "Customer Analytics & Profit Optimization",
    org: "UC San Diego",
    date: "Jan 2026 – Mar 2026",
    image: "",
    imageAlt: "",
    body: `
      <ul>
        <li>Built statistical and machine learning models (logistic regression, random forest, XGBoost, neural networks) to solve customer analytics problems including targeting, churn prediction, uplift modeling, and next-best-product recommendations — using Python (Polars/Pandas) to query and analyze large datasets and identify behavioral trends</li>
        <li>Applied CLV (Customer Lifetime Value) modeling, break-even analysis, and experimental design (DOE, treatment vs. control) to evaluate marketing effectiveness and optimize ROI and customer retention strategies</li>
        <li>Developed a profit-optimized customer targeting model using logistic regression and statistical inference (AUC, lift, gain analysis), achieving <strong>top-2 profit performance in class</strong> by identifying high-value interaction terms as features</li>
      </ul>
    `,
    links: [],
    tags: ["Python", "SQL", "XGBoost", "CLV"]
  },

  "unilever-gtm": {
    type: "project",
    title: "Consumer Analytics & Go-to-Market Strategy",
    org: "Unilever × NTHU Consulting",
    date: "Dec 2024 – Jun 2025",
    image: "assets/unilever-cover.jpg",
    imageAlt: "Unilever RTD tea market research",
    body: `
      <ul>
        <li>Analyzed 20+ market research datasets to assess Taiwan's RTD tea market; visualized insights on segment trends, pricing, packaging, and optimal distribution channels for Unilever</li>
        <li>Designed and executed a consumer taste-test survey; used SPSS &amp; Excel to profile target segments and generate product concepts and 4P marketing strategies for Lipton's new tea product launch</li>
        <li>Contributed to a product launch that achieved <strong>1.8 units/store/day</strong> and drove <strong>45% sales growth</strong> across the product portfolio</li>
      </ul>
    `,
    links: [],
    tags: ["Statistical Data Analysis", "Business Strategy"]
  },

};

// ── MODAL RENDERING & CONTROL ──────────────────────────────────

function openModal(id) {
  const data = modalData[id];
  if (!data) return;

  const overlay = document.getElementById('modal-overlay');
  const panel = document.getElementById('modal-panel');

  let imageHtml = '';
  if (data.image) {
    imageHtml = `<div class="modal__image-wrap"><img src="${data.image}" alt="${data.imageAlt || data.title}" class="modal__image" onerror="this.parentElement.style.display='none'" /></div>`;
  }

  let tagsHtml = '';
  if (data.tags && data.tags.length) {
    tagsHtml = `<div class="modal__tags">${data.tags.map(t => `<span>${t}</span>`).join('')}</div>`;
  }

  let linksHtml = '';
  if (data.links && data.links.length) {
    linksHtml = `<div class="modal__links">${data.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="modal__link-btn">${l.label} ↗</a>`).join('')}</div>`;
  }

  panel.innerHTML = `
    <button class="modal__close" id="modal-close-btn" aria-label="Close">&times;</button>
    <div class="modal__eyebrow mono">${data.type === 'experience' ? 'Experience' : 'Project'}</div>
    <h2 class="modal__title">${data.title}</h2>
    <p class="modal__org">${data.org} &nbsp;·&nbsp; ${data.date}</p>
    ${imageHtml}
    ${tagsHtml}
    <div class="modal__body">${data.body}</div>
    ${linksHtml}
  `;

  overlay.classList.add('is-open');
  document.body.classList.add('modal-open');

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  // Click on any card with data-modal
  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', (e) => {
      openModal(card.getAttribute('data-modal'));
    });
    card.style.cursor = 'pointer';
  });

  // Close on overlay background click
  const overlay = document.getElementById('modal-overlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
