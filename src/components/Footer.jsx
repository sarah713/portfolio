import { Container } from "./Container.jsx";

export function Footer({ name }) {
  return (
    <footer className="border-t border-stone-200/80 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-stone-600 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-stone-500">
            Built with React, Tailwind, and Vite.
          </p>
        </div>
      </Container>
    </footer>
  );
}


