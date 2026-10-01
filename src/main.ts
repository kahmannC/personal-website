import "./styles.css";

const focusAreas = [
  {
    title: "Product Analytics",
    description:
      "I translate product questions into adoption, engagement, retention, and usage signals teams can act on."
  },
  {
    title: "Campaign Measurement",
    description:
      "I define attribution logic, success criteria, and performance views so campaigns can be evaluated consistently."
  },
  {
    title: "Data Modelling",
    description:
      "I build analytical layers that connect customer lifecycle, product behavior, transactions, and marketing activity."
  },
  {
    title: "Customer Analytics",
    description:
      "I look for the patterns behind lifecycle movement, segmentation, behavior, and growth opportunities."
  },
  {
    title: "Dashboard Development",
    description:
      "I turn recurring analysis into self-service Tableau, QuickSight, and Looker Studio reporting systems."
  }
];

const experience = [
  {
    company: "Boost Bank / Boost Credit",
    role: "Senior Associate, Analytics & Business Insights",
    period: "Nov 2023 – Present",
    note: "Boost Credit: Nov 2023–Dec 2024 · Transferred to Boost Bank: Jan 2025",
    impact: "Designed the Customer 360 analytical datamart, reusable SQL frameworks, and self-service Tableau and QuickSight dashboards. Defined product and campaign metrics with business and engineering teams, and investigated adoption, engagement, and transaction behaviour.",
    accent: "rust"
  },
  {
    company: "Lazada Malaysia",
    role: "Associate, Data Steering",
    period: "Apr 2022 – Oct 2023",
    note: "",
    impact: "Developed measurement frameworks for seller advertising across Southeast Asia, including segmentation, product adoption metrics, targeting logic, and experimentation standards. Partnered with Product and Commercial teams on monetisation initiatives; automated dashboards reduced Customer Success support time by 20%.",
    accent: "blue"
  },
  {
    company: "S-Cube Sdn Bhd",
    role: "Marketing Analyst",
    period: "Nov 2021 – Mar 2022",
    note: "",
    impact: "Managed paid-media campaign planning and audience targeting, primarily across Meta platforms. Defined success measures, built campaign dashboards and performance trackers, and analysed customer retention and behavioural segments to improve campaign decisions.",
    accent: "moss"
  },
  {
    company: "AFIC Sdn Bhd",
    role: "Data Analyst",
    period: "Feb 2021 – Oct 2021",
    note: "",
    impact: "Owned analytics for marketing and product teams, combining Meta Ads, Google Analytics, and CRM data to assess campaign performance. Built conversion and retention dashboards, conducted segmentation and cohort analysis, and translated product requirements into feature documentation, wireframes, and user flows.",
    accent: "blue"
  },
  {
    company: "2X Marketing",
    role: "Data Associate",
    period: "May 2020 – Jan 2021",
    note: "",
    impact: "Supported B2B marketing operations for U.S. clients. Enriched and standardised lead data with Python, maintained Salesforce and Pardot data flows, and built Looker Studio and Tableau campaign dashboards for customer success teams.",
    accent: "moss"
  }
];

const projects = [
  {
    title: "Building a unified customer view across banking systems",
    label: "Customer 360 · Digital banking",
    problem: "Customer identities, product holdings, transactions, and campaign activity were spread across separate systems.",
    contribution: "Designed the customer identity foundation and reusable analytical tables for product adoption, balances, transactions, and campaign exposure.",
    outcome: "Created a customer-level foundation for segmentation, behavioural analysis, and campaign measurement.",
    tags: ["Customer identity", "Data modelling", "SQL", "Campaign measurement"],
    url: "https://customer-360-banking-case-study.carmenchoong234.chatgpt.site",
    kind: "banking"
  },
  {
    title: "Making seller advertising strategy fit different seller needs",
    label: "Seller advertising · Lazada",
    problem: "A diverse seller base needed more than a single free-credit approach to advertising adoption and continued spending.",
    contribution: "Developed a segmentation and lifecycle approach to connect seller needs with advertising initiatives and measurement.",
    outcome: "Shows the reasoning behind differentiated seller strategies and a framework for evaluating their effectiveness.",
    tags: ["Seller segmentation", "Monetisation", "Lifecycle strategy", "Measurement design"],
    url: "https://seller-advertising-portfolio.carmenchoong234.chatgpt.site",
    kind: "advertising"
  }
];

const skillGroups = [
  { title: "Analysis & measurement", text: "Product adoption, customer segmentation, lifecycle analysis, campaign measurement", tools: "SQL · Python" },
  { title: "Analytical data modelling", text: "Customer identity resolution, reusable fact tables, daily snapshots, customer-level aggregation", tools: "AWS Athena · Presto/Trino · Databricks" },
  { title: "Reporting & decision support", text: "Self-service dashboards, shared metric definitions, recurring performance reporting", tools: "Tableau · QuickSight · Looker Studio" }
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="site-header">
    <a class="logo" href="#top" aria-label="Kahmann Choong home">KC</a>
    <nav aria-label="Primary navigation">
      <a href="#projects">Selected work</a>
      <a href="#focus">Expertise</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="intro-title">
      <div class="hero-kicker">
        <span>Kuala Lumpur, Malaysia · UTC+8</span>
        <span>Open to fully remote roles</span>
      </div>
      <p class="eyebrow">Kahmann Choong · Product & Customer Analytics</p>
      <h1 id="intro-title">Turning business questions into useful analytical systems.</h1>
      <p class="hero-copy">
        I connect fragmented data, define meaningful measures, and build analytical models
        that help product and growth teams understand customers. My work spans digital banking,
        ecommerce, and marketing analytics.
      </p>
      <div class="hero-actions">
        <a class="button" href="#projects">Explore selected work</a>
        <a class="button secondary" href="mailto:carmenchoong234@gmail.com">Get in touch</a>
      </div>
    </section>

    <section id="projects" class="section project-section" aria-labelledby="projects-title">
      <div class="chapter">
        <p class="eyebrow">Selected work</p>
        <h2 id="projects-title">From fragmented data to better decisions.</h2>
        <p class="section-intro">Two case studies: the analytical foundation behind customer understanding, and the commercial thinking behind seller advertising.</p>
      </div>
      <div class="project-list">
        ${projects.map((project, index) => `
          <article class="case-card ${project.kind}">
            <div class="case-preview" aria-label="${index === 0 ? 'Customer data model overview' : 'Seller strategy overview'}">
              <p class="preview-caption">${index === 0 ? 'THE ANALYTICAL FOUNDATION' : 'THE COMMERCIAL FRAMEWORK'}</p>
              <div class="preview-grid">${(index === 0 ? ["Products", "Transactions", "Campaigns"] : ["Seller needs", "Lifecycle", "Initiatives"]).map(label => `<span>${label}</span>`).join("")}</div>
              <div class="preview-result">${index === 0 ? 'Unified customer model' : 'Segment-specific measurement'}</div>
            </div>
            <div class="case-content">
              <p class="project-label">${project.label}</p>
              <h3>${project.title}</h3>
              <p>${project.problem}</p>
              <dl><dt>My contribution</dt><dd>${project.contribution}</dd><dt>What the work enables</dt><dd>${project.outcome}</dd></dl>
              <ul class="case-tags">${project.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
              ${index === 1 ? '<p class="case-note">Reconstructed from project recollection; historical outcomes are not presented as verified results.</p>' : '<p class="case-note">Public, illustrative architecture and masked SQL. No customer-level records.</p>'}
              <a class="button secondary" href="${project.url}" target="_blank" rel="noopener noreferrer">Read case study</a>
            </div>
          </article>`).join("")}
      </div>
    </section>

    <section id="focus" class="section story-section" aria-labelledby="focus-title">
      <div class="chapter">
        <p class="eyebrow">The recurring problem</p>
        <h2 id="focus-title">Good teams often have data everywhere, but a shared view nowhere.</h2>
      </div>
      <div class="narrative">
        <p>
          My work sits in that gap: turning product behavior, campaign activity, transactions,
          and customer movement into a practical measurement system. Before the job titles,
          the through-line is simple: make ambiguity measurable.
        </p>
        <div class="focus-grid" aria-label="Highlighted areas of expertise">
          ${focusAreas
            .map(
              (area, index) => `
                <article class="focus-card">
                  <span class="step">${String(index + 1).padStart(2, "0")}</span>
                  <h3>${area.title}</h3>
                  <p>${area.description}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="experience" class="section experience-section" aria-labelledby="experience-title">
      <div class="chapter">
        <p class="eyebrow">Where the work happened</p>
        <h2 id="experience-title">A career built around clearer measurement.</h2>
      </div>
      <div class="timeline" aria-label="Professional experience">
        ${experience
          .map(
            (item) => `
              <article class="timeline-item ${item.accent}">
                <div class="timeline-marker" aria-hidden="true"></div>
                <p class="timeline-meta">${item.period}</p>
                <h3>${item.role}</h3>
                <p class="company">${item.company}</p>
                ${item.note ? `<p class="employment-note">${item.note}</p>` : ""}
                <p>${item.impact}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section principles" aria-labelledby="principles-title">
      <div class="chapter">
        <p class="eyebrow">How I work</p>
        <h2 id="principles-title">The dashboard comes after the question.</h2>
      </div>
      <div class="principle-copy">
        <p>
          I start by clarifying the decision, then the metric, then the data model. The best
          analytics work does not just produce charts; it gives teams a shared language for
          what changed, why it changed, and what to try next.
        </p>
        <p>I make metric definitions, data assumptions, and modelling decisions explicit so the work can be reviewed, reused, and maintained. The case studies show that reasoning alongside the implementation.</p>
        <div class="skill-groups">${skillGroups.map(group => `<article><h3>${group.title}</h3><p>${group.text}</p><p class="skill-tools">${group.tools}</p></article>`).join("")}</div>
      </div>
    </section>

    <section id="contact" class="section contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">If your team is trying to find the signal in customer, product, or campaign data, let us talk.</h2>
      </div>
      <div class="contact-panel">
        <p>Kuala Lumpur, Malaysia · UTC+8</p>
        <p>Open to fully remote product and customer analytics roles.</p>
        <a href="mailto:carmenchoong234@gmail.com">carmenchoong234@gmail.com</a>
        <a href="https://github.com/kahmannC" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  </main>
`;
