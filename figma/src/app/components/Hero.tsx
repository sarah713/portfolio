import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          <span className="text-black">Tech</span> & <span className="text-rose-900">Product</span> Designer ✨
        </h1>
        <p className="text-xl md:text-2xl text-stone-800 mb-8 max-w-2xl mx-auto">
          Crafting elegant digital experiences at the intersection of technology and design
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            View Work
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-800 text-stone-900 rounded-full hover:bg-stone-800 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}