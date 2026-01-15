import { profile, projects, caseStudies } from "../data/content.js";
import { Navbar } from "../components/Navbar.jsx";
import { Container } from "../components/Container.jsx";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Badge } from "../components/Badge.jsx";
import { Footer } from "../components/Footer.jsx";
import { PastelBackground } from "../components/PastelBackground.jsx";

function ArrowLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-slate-950"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
      <span aria-hidden className="translate-y-[1px]">
        →
      </span>
    </a>
  );
}

function ProjectCard({ p }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-950">{p.title}</h3>
          {p.year && (
            <span className="shrink-0 text-xs text-stone-500">{p.year}</span>
          )}
        </div>
        {p.company && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-stone-600">
            {p.company}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          {p.description}
        </p>
        {p.impact && (
          <p className="mt-3 text-xs font-medium text-emerald-700">
            ✓ {p.impact}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      {(p.links?.live || p.links?.repo) && (
        <div className="mt-6 flex items-center gap-4">
          {p.links?.live ? <ArrowLink href={p.links.live}>Live</ArrowLink> : null}
          {p.links?.repo ? <ArrowLink href={p.links.repo}>Code</ArrowLink> : null}
        </div>
      )}
    </Card>
  );
}

function CaseStudyCard({ cs }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-950">{cs.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          {cs.summary}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-stone-700">
          {cs.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        {cs.links?.read ? (
          <ArrowLink href={cs.links.read}>Read case study</ArrowLink>
        ) : null}
      </div>
    </Card>
  );
}

export function Home() {
  return (
    <div id="top" className="min-h-dvh text-slate-900">
      {/* Background */}
      <PastelBackground />

      <div className="relative">
        <Navbar name={profile.name} />

        {/* Hero */}
        <main className="pt-14">
          <Container>
            <div className="py-14 sm:py-20">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-700">
                {profile.role} • {profile.location}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Building products that millions trust, with engineering that scales.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-700">
                {profile.blurb}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 shadow-soft transition hover:bg-white/90"
                >
                  View projects
                </a>
                <a
                  href={profile.links.resume}
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-stone-900 backdrop-blur-md transition hover:bg-white"
                >
                  Download resume
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Experience",
                    value: "2+ years shipping at scale",
                  },
                  {
                    label: "Impact",
                    value: "75+ production fixes delivered",
                  },
                  {
                    label: "Reach",
                    value: "Millions of users worldwide",
                  },
                ].map((s) => (
                  <Card key={s.label}>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-600">
                      {s.label}
                    </p>
                    <p className="mt-2 text-sm text-stone-800">{s.value}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>

          <Section id="about" eyebrow="About" title="A quick intro">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <p className="text-sm leading-relaxed text-stone-700">
                    I'm a software engineer who thinks like a product person. I've spent 2+ years at HP working on HP Smart—a consumer app used by millions—where I diagnosed 75+ production defects, built internal tools that improved team productivity by 10×, and led observability improvements that reduced debugging time significantly.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">
                    What drives me: understanding user problems, collaborating across teams (PM, design, QA, platform), using data to make decisions, and shipping features that balance reliability with velocity. I care deeply about product quality, system observability, and building things that actually solve real problems.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">
                    I speak Urdu (native), English (fluent), Hindi (proficient), and Kannada (fluent).
                  </p>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-600">
                    Toolkit
                  </p>
                  <div className="mt-4 max-h-[160px] overflow-y-auto pr-2">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Product Strategy",
                        "User Research",
                        "Data Analysis",
                        "Prioritization",
                        "Roadmapping",
                        "UX/UI Collaboration",
                        "Experimentation",
                        "Java",
                        ".NET",
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "SQL",
                        "Azure",
                        "OpenTelemetry",
                        "Git",
                        "CI/CD",
                        "REST APIs",
                        "System Design",
                        "Observability",
                        "Agile",
                      ].map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Section>

          <Section id="projects" eyebrow="Work" title="Projects">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </div>
          </Section>

          <Section id="case-studies" eyebrow="Deep dives" title="Case studies">
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} cs={cs} />
              ))}
            </div>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Let’s build something">
            <Card className="overflow-hidden">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-stone-700">
                    Want to collaborate or hire me? Email me and I’ll respond
                    quickly.
                  </p>
                  <p className="mt-2 text-sm text-stone-700">
                    Prefer links? Use GitHub / LinkedIn below.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:items-end">
                  <a
                    href={profile.links.email}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 shadow-soft transition hover:bg-white/90"
                  >
                    Email me
                  </a>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <ArrowLink href={profile.links.github}>GitHub</ArrowLink>
                    <ArrowLink href={profile.links.linkedin}>LinkedIn</ArrowLink>
                  </div>
                </div>
              </div>
            </Card>
          </Section>
        </main>

        <Footer name={profile.name} />
      </div>
    </div>
  );
}


