import { motion } from "framer-motion";
import { useState } from "react";

const mainTechnologies = [
  { name: "Flutter", category: "Mobile" },
  { name: "React.js", category: "Frameworks" },
  { name: "Node.js", category: "Languages" },
  { name: "WordPress", category: "Frameworks" },
  { name: "Laravel", category: "Frameworks" },
];

const technologies = [
  // Development Languages
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "Node.js", category: "Languages" },
  { name: "Ruby", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "Dart", category: "Languages" },
  
  // Frameworks
  { name: "Spring Boot", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "Flask", category: "Frameworks" },
  { name: ".NET Core", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Ruby on Rails", category: "Frameworks" },
  { name: "React.js", category: "Frameworks" },
  { name: "Angular", category: "Frameworks" },
  { name: "Vue.js", category: "Frameworks" },
  { name: "Svelte", category: "Frameworks" },
  
  // Mobile Development
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Xamarin", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  
  // Cloud & DevOps
  { name: "Amazon Web Services (AWS)", category: "Cloud & DevOps" },
  { name: "Microsoft Azure", category: "Cloud & DevOps" },
  { name: "Google Cloud Platform (GCP)", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Jenkins", category: "Cloud & DevOps" },
  
  // Version Control & Collaboration
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Bitbucket", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Slack", category: "Tools" },
  
  // Databases & Data
  { name: "MySQL", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Elasticsearch", category: "Databases" },
  { name: "Apache Kafka", category: "Data" },
  { name: "Hadoop", category: "Data" },
  { name: "Spark", category: "Data" },
  
  // Analytics & Design
  { name: "Tableau", category: "Analytics" },
  { name: "Power BI", category: "Analytics" },
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
];

const Technologies = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedTechnologies = showAll ? technologies : mainTechnologies;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-20 px-4 bg-background relative">
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {displayedTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-4 rounded-lg text-center transition-all duration-300 hover:border-primary hover:scale-105 flex items-center justify-center min-h-[100px]"
            >
              <div>
                <p className="font-medium text-sm">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={handleToggle}
            className="relative group bg-primary/10 hover:bg-primary/20 text-primary font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              transform: "perspective(1000px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 bg-primary/5 rounded-lg transform group-hover:translate-z-2 transition-transform duration-300"
              style={{
                transform: "translateZ(-1px)",
              }}
            />
            <span className="relative inline-flex items-center gap-2">
              {showAll ? "Show Less Technologies" : "Show More Technologies"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;