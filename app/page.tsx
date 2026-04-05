import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <AboutSection />
        <MissionVision />
        {/* <Clients /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

