import { Container } from "./Container.jsx";
import { Link } from "react-router-dom";

const items = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ name }) {
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-base font-semibold tracking-normal text-slate-900 hover:text-slate-950"
          >
            {name}
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-stone-700 transition hover:text-slate-950"
              >
                {it.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800"
          >
            Let's talk
          </a>
        </div>
      </Container>
    </header>
  );
}


