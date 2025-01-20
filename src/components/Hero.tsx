import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "200ms" }}>
            Empowering Your Digital Future with{" "}
            <span className="text-gradient animate-pulse relative">
              Fearless Innovation
              <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-50" />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up glass-card p-6 rounded-lg backdrop-blur-lg" style={{ animationDelay: "400ms" }}>
            TechNoFear bridges the gap between technology and trust, delivering
            cutting-edge IT solutions tailored to your needs.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <button className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -z-10 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;