import { motion } from "framer-motion";
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
    category: "Languages",
    icon: Server
  },
  { 
    name: "Python",
    category: "Languages",
    icon: Terminal
  },
  { 
    name: "WordPress",
    category: "Frameworks",
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
  }
];

const Technologies = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Technologies We Use
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 rounded-lg text-center transition-all duration-300 hover:border-primary hover:scale-105 flex flex-col items-center justify-center gap-4"
              >
                <IconComponent className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;