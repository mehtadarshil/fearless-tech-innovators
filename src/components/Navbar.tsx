import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Technologies", href: "technologies" },
  { name: "Impact", href: "impact" },
  { name: "Contact", href: "contact" },
  { name: "Our Work", href: "/work" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredItem) {
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredItem]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("/")) {
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl z-50 bg-background/5 backdrop-blur-sm border border-primary/20 rounded-full animate-fade-in">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div onClick={() => scrollToSection("home")} className="flex items-center space-x-2 cursor-none hover:scale-105 transition-transform">
            <span className="text-xl font-bold text-primary">TechNoFear</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative text-foreground/90 hover:text-primary px-2 py-1.5 rounded-full text-sm font-medium transition-colors cursor-none group overflow-hidden"
                >
                  {item.name}
                  {hoveredItem === item.name && (
                    <div
                      className="absolute pointer-events-none mix-blend-screen animate-pulse"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(207, 182, 115, 0.8) 0%, transparent 70%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        left: `${cursorPosition.x - 20}px`,
                        top: `${cursorPosition.y - 20}px`,
                        transition: 'all 0.1s ease-out',
                      }}
                    />
                  )}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative text-foreground/90 hover:text-primary px-2 py-1.5 rounded-full text-sm font-medium transition-colors cursor-none group overflow-hidden"
                >
                  {item.name}
                  {hoveredItem === item.name && (
                    <div
                      className="absolute pointer-events-none mix-blend-screen animate-pulse"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(207, 182, 115, 0.8) 0%, transparent 70%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        left: `${cursorPosition.x - 20}px`,
                        top: `${cursorPosition.y - 20}px`,
                        transition: 'all 0.1s ease-out',
                      }}
                    />
                  )}
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