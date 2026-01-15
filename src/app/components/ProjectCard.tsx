import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="group block bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl">{title}</h3>
          <ArrowUpRight className="size-5 text-stone-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
        <p className="text-stone-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-stone-200/50 text-stone-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
