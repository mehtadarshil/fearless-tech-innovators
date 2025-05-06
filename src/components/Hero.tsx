import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { useEffect, useState } from "react";
import { SplineSceneBasic } from "@/components/ui/spline-scene-demo";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Digital Excellence";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="w-full flex flex-col md:flex-row items-start md:items-center relative">
        {/* Content - Left side on desktop */}
        <div className="w-full md:w-[50%] px-4 sm:px-6 lg:px-8 z-10 py-10 md:py-0 flex item-center justify-end">
          <div className="max-w-xl mx-auto md:mx-0 space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold tracking-tight animate-fade-up bg-transparent text-center md:text-left" style={{ animationDelay: "200ms" }}>
              Transforming Ideas into{" "}
              <span className="text-gradient animate-pulse relative">
                {text}
                {!isTypingComplete && (
                  <span className="inline-block w-1 h-8 ml-1 bg-primary animate-pulse">|</span>
                )}
                <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-50" />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground animate-fade-up glass-card p-6 rounded-lg backdrop-blur-lg bg-transparent text-center md:text-left" style={{ animationDelay: "400ms" }}>
              Trionyx Software Solutions delivers innovative and scalable software solutions 
              that empower businesses to thrive in the digital age.
            </p>
            
            {/* CTA Button */}
            <div className="animate-fade-up pt-4 text-center md:text-left" style={{ animationDelay: "600ms" }}>
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -z-10 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </button>
            </div>
          </div>
        </div>
        
        {/* 3D Scene - Right side, full height */}
        <div className="w-full md:w-[50%] absolute md:relative right-0 top-0 h-full md:h-screen hidden sm:block">
          <SplineSceneBasic />
        </div>
      </div>
    </div>
  );
};

export default Hero;