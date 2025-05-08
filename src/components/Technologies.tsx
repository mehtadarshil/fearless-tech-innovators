import { cn } from "@/lib/utils";
import { Smartphone, Apple, Code2, Server, Terminal, Globe, Figma, Paintbrush } from "lucide-react";

const technologies = [
  { 
    name: "Android",
    category: "Mobile",
    icon: Smartphone
  },
  { 
    name: "iOS",
    category: "Mobile",
    icon: Apple
  },
  { 
    name: "Flutter",
    category: "Mobile",
    icon: Code2
  },
  { 
    name: "React Native",
    category: "Mobile",
    icon: Code2
  },
  { 
    name: "React Js",
    category: "Frameworks",
    icon: Code2
  },
  { 
    name: "Node Js",
    category: "Backend",
    icon: Server
  },
  { 
    name: "Python",
    category: "Languages",
    icon: Terminal
  },
  { 
    name: "WordPress",
    category: "CMS",
    icon: Globe
  },
  { 
    name: "Laravel",
    category: "Frameworks",
    icon: Code2
  },
  { 
    name: "Figma",
    category: "Design",
    icon: Figma
  },
  { 
    name: "Adobe XD",
    category: "Design",
    icon: Paintbrush
  },
  { 
    name: "DevOps",
    category: "Infrastructure",
    icon: Server
  }
];

const Technologies = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Technologies We Use
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative z-10">
          {technologies.map((tech, index) => (
            <TechFeature 
              key={tech.name} 
              name={tech.name} 
              category={tech.category} 
              icon={<tech.icon size={24} className="text-primary" />} 
              index={index} 
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

const TechFeature = ({
  name,
  category,
  icon,
  index,
}: {
  name: string;
  category: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 relative group/feature glass-card-hover",
        (index === 0 || index === 4 || index === 8) && "lg:border-l",
        index < 8 && "lg:border-b",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-r from-accent/10 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 flex justify-center">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6 text-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-accent/30 group-hover/feature:bg-accent transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block">
          {name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground relative z-10 px-6 text-center">
        {category}
      </p>
    </div>
  );
};

export default Technologies;