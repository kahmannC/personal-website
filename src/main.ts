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
    company: "Boost Bank",
    role: "Senior Associate, Analytics & Business Insights",
    period: "Nov 2023 - Present",
    impact:
      "Built a clearer customer view for digital banking teams through Customer 360 modelling, automated SQL frameworks, and self-service dashboards for adoption, engagement, transactions, and campaign effectiveness.",
    accent: "rust"
  },
  {
    company: "Lazada Malaysia",
    role: "Associate, Data Steering",
    period: "Apr 2022 - Oct 2023",
    impact:
      "Created measurement systems for seller advertising products across Southeast Asia, including shared metrics, targeting logic, experimentation standards, and dashboards that reduced campaign support time by 20%.",
    accent: "blue"
  },
  {
    company: "S-Cube, AFIC, 2X Marketing",
    role: "Marketing Analyst, Data Analyst, Data Associate",
    period: "May 2020 - Mar 2022",
    impact:
      "Built the foundation across campaign analytics, CRM data flows, segmentation, retention modelling, dashboards, user flows, and Python-assisted data operations for marketing and product teams.",
    accent: "moss"
  }
];

const projects = [
  {
    title: "Customer 360 Analytical Data Mart",
    label: "Unified customer view",
    description:
      "Connected lifecycle, product adoption, campaign attribution, transaction behavior, and engagement metrics into a reusable analytical layer."
  },
  {
    title: "Seller Advertising Measurement Framework",
    label: "Marketplace monetization",
    description:
      "Defined the metrics and evaluation methods needed to launch, measure, and improve advertising tools across Lazada seller segments."
  },
  {
    title: "Campaign Performance Automation",
    label: "Faster decisions",
    description:
      "Moved repeat campaign monitoring into automated dashboards, giving stakeholders clearer visibility while reducing manual support effort."
  }
];

const tools = [
  "SQL",
  "AWS Athena",
  "Presto/Trino",
  "Databricks",
  "Tableau",
  "QuickSight",
  "Looker Studio",
  "Prompt Engineering"
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="site-header">
    <a class="logo" href="#top" aria-label="Kahmann Choong home">KC</a>
    <nav aria-label="Primary navigation">
      <a href="#focus">Focus</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="intro-title">
      <div class="hero-kicker">
        <span>Kuala Lumpur, Malaysia</span>
        <span>Product & Customer Analytics</span>
      </div>
      <h1 id="intro-title">Kahmann Choong</h1>
      <p class="hero-copy">
        I am a senior data analyst working across product analytics, customer lifecycle measurement,
        campaign performance, and analytical data modelling for digital products and growth teams.
      </p>
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
        <h2 id="experience-title">A career built around<br />clearer measurement.</h2>
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
                <p>${item.impact}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="projects" class="section project-section" aria-labelledby="projects-title">
      <div class="chapter">
        <p class="eyebrow">Selected proof</p>
        <h2 id="projects-title">A few systems behind the story.</h2>
      </div>
      <div class="project-list">
        ${projects
          .map(
            (project) => `
              <article class="project-row">
                <p class="project-label">${project.label}</p>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
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
        <ul class="tool-list" aria-label="Tools and platforms">
          ${tools.map((tool) => `<li>${tool}</li>`).join("")}
        </ul>
      </div>
    </section>

    <section id="contact" class="section contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">If your team is trying to find the signal in customer, product, or campaign data, let us talk.</h2>
      </div>
      <div class="contact-panel">
        <p>Kuala Lumpur, Malaysia</p>
        <a href="mailto:carmenchoong234@gmail.com">carmenchoong234@gmail.com</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  </main>
`;
