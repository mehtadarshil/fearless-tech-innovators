import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Impact from "@/components/Impact";
import Technologies from "@/components/Technologies";
import WorkScroll from "@/components/WorkScroll";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <WorkScroll />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
