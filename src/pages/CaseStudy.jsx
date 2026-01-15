import { Link, useParams } from "react-router-dom";
import { caseStudies, profile } from "../data/content.js";
import { Navbar } from "../components/Navbar.jsx";
import { Container } from "../components/Container.jsx";
import { Card } from "../components/Card.jsx";
import { Badge } from "../components/Badge.jsx";
import { Footer } from "../components/Footer.jsx";
import { PastelBackground } from "../components/PastelBackground.jsx";

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-stone-200/80 bg-white/80 px-4 py-3 backdrop-blur-md">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-600">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-950">{value}</p>
    </div>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies.find((x) => x.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-dvh text-slate-900">
        <PastelBackground />
        <div className="relative">
          <Navbar name={profile.name} />
          <main className="pt-16">
            <Container>
              <div className="py-14">
                <Card>
                  <p className="text-sm text-stone-700">
                    That case study doesn’t exist (yet).
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-slate-950"
                    >
                      <span aria-hidden>←</span> Back home
                    </Link>
                  </div>
                </Card>
              </div>
            </Container>
          </main>
          <Footer name={profile.name} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh text-slate-900">
      {/* Background */}
      <PastelBackground />

      <div className="relative">
        <Navbar name={profile.name} />

        <main className="pt-16">
          <Container>
            <div className="py-10 sm:py-14 flex justify-center">
              <article className="w-full max-w-3xl rounded-3xl bg-white/90 px-6 py-8 shadow-soft backdrop-blur-md sm:px-10 sm:py-10">
                <header className="border-b border-stone-200 pb-6 mb-6">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-slate-950"
                  >
                    <span aria-hidden>←</span> Back
                  </Link>

                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-stone-600">
                    Case study
                  </p>
                  <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {cs.title}
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">
                    {cs.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-xs text-stone-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {cs.role ?? "—"}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                      {cs.timeline ?? "—"}
                    </span>
                    {(cs.stack ?? []).slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                </header>

                {(cs.metrics?.length ?? 0) > 0 ? (
                  <section className="mb-8">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-600">
                      Key outcomes
                    </h2>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {cs.metrics.map((m) => (
                        <Stat key={m.label} label={m.label} value={m.value} />
                      ))}
                    </div>
                  </section>
                ) : null}

                {(cs.highlights?.length ?? 0) > 0 ? (
                  <section className="mb-8">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-600">
                      Highlights
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm text-stone-700">
                      {cs.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <section className="space-y-6">
                  {(cs.sections ?? []).map((s) => (
                    <div
                      key={s.heading}
                      id={s.heading.toLowerCase().replaceAll(" ", "-")}
                      className="scroll-mt-24"
                    >
                      <h2 className="text-base font-semibold text-slate-950">
                        {s.heading}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-stone-700">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </section>
              </article>
            </div>
          </Container>
        </main>

        <Footer name={profile.name} />
      </div>
    </div>
  );
}


