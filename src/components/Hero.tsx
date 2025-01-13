import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Empowering Your Digital Future with{" "}
            <span className="text-primary">Fearless Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            TechNoFear bridges the gap between technology and trust, delivering
            cutting-edge IT solutions tailored to your needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;