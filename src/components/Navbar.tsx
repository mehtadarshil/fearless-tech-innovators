import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Technologies", href: "technologies" },
  { name: "Impact", href: "impact" },
  { name: "Contact", href: "contact" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("/")) {
      return; // Let the router handle full URLs
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl z-50 bg-background/30 backdrop-blur-md border border-primary/20 rounded-full animate-fade-in">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div onClick={() => scrollToSection("home")} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-xl font-bold text-primary">TechNoFear</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/90 hover:text-primary px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-primary/10"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/90 hover:text-primary px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-primary/10"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-foreground/90 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/50 backdrop-blur-lg rounded-2xl border border-primary/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/90 hover:text-primary block px-3 py-2 rounded-lg text-base font-medium w-full text-left hover:bg-primary/10 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;