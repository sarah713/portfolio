import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics?: { label: string; value: string }[];
  link: string;
}

export function CaseStudyCard({ title, subtitle, description, image, metrics, link }: CaseStudyCardProps) {
  return (
    <a
      href={link}
      className="group block bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="text-sm text-stone-600 mb-2">{subtitle}</div>
            <h3 className="text-3xl mb-4">{title}</h3>
            <p className="text-stone-700 mb-6">{description}</p>
            {metrics && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl mb-1">{metric.value}</div>
                    <div className="text-sm text-stone-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-stone-800 group-hover:gap-3 transition-all">
            Read Case Study
            <ArrowRight className="size-5" />
          </div>
        </div>
      </div>
    </a>
  );
}
