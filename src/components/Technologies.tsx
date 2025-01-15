import { motion } from "framer-motion";

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
      </div>
    </section>
  );
};

export default Technologies;