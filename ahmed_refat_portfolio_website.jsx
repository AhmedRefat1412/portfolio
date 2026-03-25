import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Database, BarChart3, Workflow, Server, ArrowRight, ExternalLink } from "lucide-react";

const skills = {
  "Programming": ["Python", "SQL", "PySpark"],
  "Data Engineering": ["ETL Pipelines", "Data Modeling", "Batch Processing", "Structured Streaming"],
  "Tools & Platforms": ["Apache Kafka", "Apache Airflow", "Snowflake", "MongoDB", "Power BI"],
  "Foundations": ["Data Warehousing", "Analytics Engineering", "Dashboard-Ready Data Preparation"],
};

const projects = [
  {
    title: "Streaming Telecom Analytics Pipeline",
    icon: Workflow,
    summary:
      "A near real-time telecom monitoring pipeline built around event streaming and Spark processing to transform raw tower activity into actionable operational insights.",
    highlights: [
      "Ingested streaming events from Kafka topics",
      "Parsed nested JSON payloads with PySpark",
      "Applied time bucketing and stream joins for synchronized analysis",
      "Prepared clean outputs for monitoring and reporting use cases",
    ],
    stack: ["PySpark", "Kafka", "Structured Streaming", "Python"],
  },
  {
    title: "E-Commerce Analytics Data Pipeline",
    icon: BarChart3,
    summary:
      "An end-to-end analytics workflow for e-commerce data that transforms raw business records into clean, structured datasets suitable for reporting and decision-making.",
    highlights: [
      "Cleaned and transformed sales-related datasets",
      "Prepared reporting-ready tables for business analysis",
      "Organized data for KPI tracking and dashboard consumption",
      "Focused on reliable, understandable analytical output",
    ],
    stack: ["Python", "SQL", "Power BI", "ETL"],
  },
  {
    title: "MongoDB to BI Workflow",
    icon: Database,
    summary:
      "A workflow for extracting NoSQL data from MongoDB, reshaping it in Python, and preparing tabular structures that can be consumed easily by analytics and visualization tools.",
    highlights: [
      "Worked with document-based MongoDB collections",
      "Flattened and transformed nested data using Python",
      "Prepared BI-friendly structures for reporting",
      "Bridged operational NoSQL data with analytics needs",
    ],
    stack: ["MongoDB", "Python", "Pandas", "Power BI"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-400">{text}</p> : null}
    </div>
  );
}

export default function AhmedRefatPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.10),transparent_20%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Ahmed Refat<span className="text-cyan-300">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Data Engineer • Cairo, Egypt
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Building scalable data pipelines that turn raw data into usable business insight.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Ahmed Refat, a Data Engineer focused on Python, SQL, PySpark, Kafka, Airflow, Snowflake, and analytics-ready data workflows. I enjoy designing practical systems for batch processing, streaming data, and business reporting.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/15"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
                <a href="https://github.com/AhmedRefat1412" className="inline-flex items-center gap-2 transition hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/ahmedrefat1412/" className="inline-flex items-center gap-2 transition hover:text-white">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="mailto:ahmedrefat1412@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <Server className="h-8 w-8 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">Core Focus</p>
                  <p className="mt-1 text-lg font-semibold text-white">Data Engineering</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <Database className="h-8 w-8 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">Primary Stack</p>
                  <p className="mt-1 text-lg font-semibold text-white">Python • SQL • PySpark</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <Workflow className="h-8 w-8 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">Specialty</p>
                  <p className="mt-1 text-lg font-semibold text-white">ETL & Streaming Pipelines</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <BarChart3 className="h-8 w-8 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">Goal</p>
                  <p className="mt-1 text-lg font-semibold text-white">Analytics-Ready Data</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle
              eyebrow="About Me"
              title="A practical data engineer focused on real pipeline work."
              text="I enjoy taking raw, messy, or nested data and transforming it into reliable structures that teams can actually use. My learning journey has covered Python, SQL, MongoDB, Power BI, and modern data engineering workflows, and I’m currently deepening my experience in big data and streaming systems."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">What I build</p>
                <p className="mt-3 leading-7 text-slate-200">Batch pipelines, streaming workflows, transformation layers, and datasets prepared for analysis and dashboards.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">What I care about</p>
                <p className="mt-3 leading-7 text-slate-200">Clear data models, maintainable logic, practical business value, and systems that are easy to understand and extend.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Current direction</p>
                <p className="mt-3 leading-7 text-slate-200">Expanding further into big data engineering, production-style architectures, Kafka-based systems, and cloud deployment workflows.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle
              eyebrow="Skills"
              title="Tools and technologies I use across the data workflow."
              text="My stack is centered on data ingestion, transformation, processing, and analytics delivery."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle
              eyebrow="Projects"
              title="Selected work that reflects my data engineering journey."
              text="These projects highlight different parts of the data stack, from operational NoSQL workflows to streaming analytics and business-ready reporting pipelines."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                    <ul className="mt-5 space-y-2 text-sm text-slate-400">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10">
            <SectionTitle
              eyebrow="What I Can Build"
              title="Practical data solutions for analytics and operations."
              text="I focus on building useful systems, not just academic demos."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Batch ETL Pipelines</h3>
                <p className="mt-3 leading-7 text-slate-400">Transform raw records into trusted, structured datasets for downstream use.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Streaming Data Workflows</h3>
                <p className="mt-3 leading-7 text-slate-400">Process event streams with Kafka and Spark for near real-time insight.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Analytics Preparation</h3>
                <p className="mt-3 leading-7 text-slate-400">Shape data for dashboards, KPI tracking, and clear business reporting.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/80">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Let’s build something valuable with data.</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                I’m open to data engineering opportunities, freelance projects, and collaborations related to pipelines, transformation workflows, and analytics systems.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:ahmedrefat1412@gmail.com" className="block rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-300/30 hover:bg-slate-900">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 font-medium text-white">ahmedrefat1412@gmail.com</p>
              </a>
              <a href="https://github.com/AhmedRefat1412" className="block rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-300/30 hover:bg-slate-900">
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="mt-2 font-medium text-white">github.com/AhmedRefat1412</p>
              </a>
              <a href="https://www.linkedin.com/in/ahmedrefat1412/" className="block rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-300/30 hover:bg-slate-900">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="mt-2 font-medium text-white">linkedin.com/in/ahmedrefat1412</p>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Ahmed Refat. Built for a professional data engineering portfolio.
      </footer>
    </div>
  );
}
