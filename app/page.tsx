import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "@/components/Footer";
import { Methodology } from "@/components/Methodology";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white border-4 border-transparent-500">
      <Navbar />
      <Hero />
      <Methodology />
      <Clients />
      <Testimonials />
      <Footer />
    </main>
  );
}