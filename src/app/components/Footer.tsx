import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Let's work together</h2>
            <p className="text-xl text-stone-700">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <a
              href="mailto:hello@yourname.com"
              className="text-2xl md:text-3xl hover:text-stone-600 transition-colors mb-4"
            >
              hello@yourname.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="mailto:hello@yourname.com"
                className="p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200/50 text-stone-600 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© 2026 All rights reserved.</p>
            <p>Designed & built with care</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
