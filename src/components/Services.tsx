import { Code, Cloud, Shield, LineChart, Smartphone, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored solutions to meet your unique business needs with expertise in various programming languages and frameworks.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Responsive, user-friendly, and scalable apps integrated with advanced technologies like AR/VR and AI.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless transition to the cloud with cost-effective and secure infrastructure management.",
  },
  {
    icon: Brain,
    title: "IT Consulting",
    description:
      "Expert guidance for digital transformation and technology roadmaps to achieve business goals.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Proactive measures to protect your business from threats and ensure compliance with global security standards.",
  },
  {
    icon: LineChart,
    title: "Data Analytics & AI",
    description:
      "Transform data into actionable insights with AI-driven solutions for enhanced decision-making.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and quality assurance services to ensure your software meets the highest standards.",
  },
  {
    icon: Smartphone,
    title: "DevOps Services",
    description:
      "Streamline your development process with continuous integration, delivery, and deployment solutions.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive
            growth through innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {services.map((service, index) => (
            <ServiceFeature 
              key={service.title} 
              title={service.title} 
              description={service.description} 
              icon={<service.icon size={24} className="text-primary" />} 
              index={index} 
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

const ServiceFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature glass-card-hover",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 75}ms` }}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary/30 group-hover/feature:bg-primary transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-6">
        {description}
      </p>
    </div>
  );
};

export default Services;