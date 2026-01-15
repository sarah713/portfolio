import { ProjectCard } from "@/app/components/ProjectCard";

const projects = [
  {
    title: "Design System Platform",
    description: "Built a comprehensive design system that improved development efficiency by 40% across 5 product teams.",
    image: "https://images.unsplash.com/photo-1764406562219-105937cc3f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODI4MDE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Figma", "TypeScript"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Redesigned banking experience with focus on accessibility and simplified user flows for 2M+ users.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjgzNTI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["iOS", "Android", "UX Research"],
    link: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Created analytics platform helping merchants track performance metrics and optimize their sales.",
    image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY4Mjc4MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Vue.js", "Data Viz", "Product"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Selected Projects</h2>
          <p className="text-xl text-stone-700 max-w-2xl">
            A collection of products and experiences I've designed and built
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
