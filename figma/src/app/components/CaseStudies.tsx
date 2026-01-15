import { CaseStudyCard } from "@/app/components/CaseStudyCard";

const caseStudies = [
  {
    title: "Reimagining Developer Tools",
    subtitle: "SaaS Platform • 2024",
    description: "How we increased developer productivity by 60% through thoughtful UX improvements and streamlined workflows.",
    image: "https://images.unsplash.com/photo-1758762641372-e3b52bf061d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODM3NzQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Efficiency", value: "+60%" },
      { label: "Users", value: "50K" },
      { label: "NPS", value: "72" }
    ],
    link: "#"
  },
  {
    title: "Zero to One Product Launch",
    subtitle: "Consumer App • 2023",
    description: "Led product design from concept to launch, reaching 100K users in the first 3 months with 4.8-star rating.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjgyODc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Downloads", value: "100K" },
      { label: "Rating", value: "4.8" },
      { label: "Retention", value: "65%" }
    ],
    link: "#"
  },
  {
    title: "AI-Powered Collaboration",
    subtitle: "Enterprise • 2024",
    description: "Integrated AI features that reduced manual work by 45% while maintaining user trust and transparency.",
    image: "https://images.unsplash.com/photo-1602064172250-43f8909056c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2ODM2MTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Time Saved", value: "45%" },
      { label: "Adoption", value: "85%" },
      { label: "Accuracy", value: "92%" }
    ],
    link: "#"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Case Studies</h2>
          <p className="text-xl text-stone-700 max-w-2xl">
            Deep dives into problems solved, decisions made, and impact created
          </p>
        </div>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
