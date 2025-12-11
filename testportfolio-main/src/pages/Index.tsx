import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhotoSection } from "@/components/PhotoSection";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Custom cursor - hidden on mobile */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main sections */}
      <Hero />
      <PhotoSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
