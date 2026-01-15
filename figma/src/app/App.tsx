import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { CaseStudies } from "@/app/components/CaseStudies";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-300 via-amber-200 to-orange-200 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tr from-pink-300/60 via-peach-200/50 to-cyan-200/70 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/70 via-transparent to-transparent -z-10" />
      
      <Hero />
      <Projects />
      <CaseStudies />
      <Footer />
    </div>
  );
}