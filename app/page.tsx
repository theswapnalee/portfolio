const experience = [
  {
    company: "Precision Technologies Corp",
    role: "Data Analyst",
    location: "New York, NY",
    dates: "Jan 2025 – Present",
    bullets: [
      "Designed Power BI dashboards to monitor regulatory compliance and operational KPIs, increasing reporting visibility by 73%",
      "Cleaned and standardized data from 400+ Excel files, improving operational efficiency by 22%",
    ],
  },
  {
    company: "Rutgers University",
    role: "Social Media Marketing Analyst",
    location: "Newark, NJ",
    dates: "May 2023 – Jan 2025",
    bullets: [
      "Built interactive dashboards with SQL Server, Looker Studio, and Adobe Analytics, cutting reporting time by 20%",
      "Analyzed engagement and audience behavior in Google Analytics, contributing to a 37% lift in user engagement",
    ],
  },
  {
    company: "IDFC First Bank",
    role: "Data Analyst",
    location: "Mumbai, India",
    dates: "Oct 2020 – Nov 2021",
    bullets: [
      "Analyzed 30,000+ credit card transactions to surface fraud patterns, improving detection efficiency by 30%",
      "Built automated SQL reporting pipelines, cutting manual reporting effort by 15%",
    ],
  },
  {
    company: "MasterTech Web Applications",
    role: "Web Content Developer / Analyst",
    location: "Mumbai, India",
    dates: "Jun 2019 – Jul 2019",
    bullets: [
      "Ran SEO audits and keyword research to improve organic search visibility",
      "Built KPI dashboards tracking traffic, bounce rate, and content engagement",
    ],
  },
];

const skills = [
  {
    category: "Analytics & Visualization",
    items: ["SQL", "Python", "R", "Power BI", "Tableau", "Excel"],
  },
  {
    category: "Data Engineering",
    items: ["SQL Server", "MySQL", "Pandas", "NumPy", "Data Cleaning"],
  },
  {
    category: "Delivery & Collaboration",
    items: ["Agile / Scrum", "Jira", "Confluence", "Git", "SharePoint"],
  },
];

const projects = [
  {
    version: "v4.0.0",
    date: "2025",
    name: "NYC Public Schools Data Quality & Reporting Initiative",
    company: "Precision Technologies Corp · NYC DOE",
    description:
      "Analyzed resource allocation and workforce utilization data to surface capacity trends, then built automated dashboards tracking utilization rates and workforce metrics for stakeholders.",
    stack: ["SQL", "Power BI", "Excel"],
  },
  {
    version: "v3.1.0",
    date: "2025",
    name: "HAZMAT Compliance Monitoring & Reporting System",
    company: "Precision Technologies Corp · NYC DOE",
    description:
      "Cleaned and analyzed HAZMAT operational and compliance data, then built audit dashboards tracking inventories, inspections, and key risk indicators for regulatory adherence.",
    stack: ["SQL", "Power BI", "Excel"],
  },
  {
    version: "v2.0.0",
    date: "2020 – 2021",
    name: "Credit Card Fraud Control",
    company: "IDFC First Bank",
    description:
      "Built user and admin modules for a fraud-monitoring platform with React and Bootstrap, improving code reusability by 25% and speeding development by 20% with a responsive, mobile-first design.",
    stack: ["React", "HTML", "SCSS", "Bootstrap"],
  },
  {
    version: "v1.0.0",
    date: "2019",
    name: "CasinoGurus SEO & Web Analytics Optimization",
    company: "MasterTech Web Applications",
    description:
      "Ran SEO audits, keyword research, and content optimization, then built reporting dashboards tracking traffic, bounce rate, and conversions to guide content strategy.",
    stack: ["Google Analytics", "SEO", "WordPress"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm font-medium tracking-tight">
            sb<span className="text-add">.log</span>
          </span>
          <nav className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <a href="#about" className="hover:text-ink transition-colors">About</a>
            <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
            <a href="#skills" className="hover:text-ink transition-colors">Skills</a>
            <a href="#work" className="hover:text-ink transition-colors">Projects</a>
            <a href="#resume" className="hover:text-ink transition-colors">Resume</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <div className="order-2 sm:order-1">
              <p className="font-mono text-xs text-ink-muted mb-3 flex items-center gap-2">
                <span className="status-dot" />
                Harrison, NJ ·{" "}
                <span className="text-add">open to opportunities</span>
              </p>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                Swapnali Bhide
              </h1>
            </div>
            <img
              src="/profile.svg"
              alt="Swapnali Bhide"
              className="order-1 sm:order-2 w-28 h-28 sm:w-44 sm:h-44 rounded-full border border-rule shrink-0 object-cover self-center sm:self-auto"
            />
          </div>
          <p className="mt-6 text-lg sm:text-xl text-ink-muted max-w-xl leading-relaxed">
            Data analyst turning banking, compliance, and marketing data into
            dashboards people actually use.
            <span className="cursor-blink text-add">_</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-sm px-5 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(20,23,26,0.45)]">
              View projects
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 border border-rule font-mono text-sm px-5 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-[0_10px_28px_-14px_rgba(20,23,26,0.3)]">
              Download resume
            </a>
          </div>
        </section>

        <Divider />

        {/* About — v1.0.0 */}
        <Section id="about" version="v1.0.0" date="summary" label="About">
          <div className="space-y-4 text-[15px] leading-relaxed text-ink/90">
            <p>
              I&apos;m a data analyst with experience across banking,
              compliance, higher education, and marketing. I&apos;m most at
              home turning messy, scattered data into dashboards and
              reporting pipelines that stakeholders actually rely on — recent
              work includes Power BI dashboards that lifted reporting
              visibility by 73% and Excel cleanup that cut operational effort
              by 22%.
            </p>
            <p>
              I hold a Master&apos;s in Information Technology and Analytics
              from Rutgers Business School (GPA 3.73) and a Bachelor&apos;s in
              Information Technology from the University of Mumbai. Along the
              way I&apos;ve worked on fraud detection at a bank, campaign
              analytics for a university, and regulatory compliance reporting
              — SQL, Power BI, and Tableau are the throughline.
            </p>
          </div>
        </Section>

        <Divider />

        {/* Experience — v1.1.0 */}
        <Section id="experience" version="v1.1.0" date="2019 – present" label="Experience">
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company + job.dates} className="border-l-2 border-rule pl-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold tracking-tight">
                    {job.role}{" "}
                    <span className="font-normal text-ink-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                    {job.dates}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-muted mt-0.5 mb-2">
                  {job.location}
                </p>
                <ul className="space-y-1.5 text-[15px] text-ink/90 leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-add select-none">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Skills — v1.2.0 */}
        <Section id="skills" version="v1.2.0" date="2026-01" label="Skills">
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                  {group.category}
                </h3>
                <div className="rounded-sm border border-rule overflow-hidden font-mono text-sm">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-baseline gap-3 px-4 py-1.5 bg-add-bg/60 border-b border-rule last:border-b-0">
                      <span className="text-add select-none">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Projects — v2.0.0 */}
        <Section id="work" version="v2.0.0" date="2019 – 2025" label="Projects">
          <div className="space-y-5">
            {projects.map((p) => (
              <article key={p.name} className="border border-rule rounded-sm p-5 hover:border-ink/30 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                    {p.version} · {p.date}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-muted mb-3">{p.company}</p>
                <p className="text-[15px] text-ink/90 leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-xs px-2 py-0.5 rounded-sm bg-paper-raised text-ink-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Resume / Contact */}
        <section id="resume" className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p className="font-mono text-xs text-ink-muted mb-8">
            <span className="text-add">latest</span> · get in touch
          </p>
          <div className="border border-rule rounded-sm p-6 sm:p-8 bg-paper-raised/50">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">resume.pdf</h2>
                <p className="font-mono text-xs text-ink-muted mt-1">116 KB</p>
              </div>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-sm px-5 py-2.5 rounded-sm hover:bg-ink/85 transition-colors whitespace-nowrap">
                Download resume
              </a>
            </div>
            <div className="border-t border-rule pt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
              <a href="mailto:bhideswapnali@gmail.com" className="text-accent hover:underline underline-offset-2">
                bhideswapnali@gmail.com
              </a>
              <a href="tel:+12018050722" className="text-accent hover:underline underline-offset-2">
                (201) 805-0722
              </a>
              <a href="https://www.linkedin.com/in/swapnalib" className="text-accent hover:underline underline-offset-2">
                linkedin.com/in/swapnalib
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="max-w-3xl mx-auto px-6 py-8 font-mono text-xs text-ink-muted flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Swapnali Bhide</span>
          <span>built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, version, date, label, children,
}: {
  id: string; version: string; date: string; label: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
      <p className="font-mono text-xs text-ink-muted mb-3">{version} · {date}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">{label}</h2>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="h-px bg-rule" />
    </div>
  );
}