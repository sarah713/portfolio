import { Container } from "./Container.jsx";

export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <Container>
        <div className="mb-8">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  );
}


