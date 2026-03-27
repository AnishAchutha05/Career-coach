import { HeroSection }        from "@/components/home/HeroSection";
import { ImpactNumbers }       from "@/components/home/ImpactNumbers";
import { PhilosophyStrip }     from "@/components/home/PhilosophyStrip";
import { AboutTeaser }          from "@/components/home/AboutTeaser";
import { ProgramsGrid }        from "@/components/home/ProgramsGrid";
import { TrustedBy }           from "@/components/home/TrustedBy";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTA }            from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ImpactNumbers />
      <PhilosophyStrip />
      <AboutTeaser />
      <ProgramsGrid />
      <TrustedBy />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  );
}