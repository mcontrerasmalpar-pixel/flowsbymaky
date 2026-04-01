import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="grid-bg" />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Process />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
