import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Users, Clock, Headphones } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number>();

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        frameId.current = requestAnimationFrame(animate);
      }
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Impact = () => {
  const { data: statistics } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("statistics")
        .select("*")
        .single();
      
      if (error) {
        console.error("Error fetching statistics:", error);
        throw error;
      }
      
      return data;
    },
  });

  const impactData = [
    {
      title: "Satisfied Clients",
      value: statistics?.satisfied_clients || 0,
      suffix: "+",
      icon: Trophy
    },
    {
      title: "Projects Completed",
      value: statistics?.completed_projects || 0,
      suffix: "+",
      icon: Users
    },
    {
      title: "Support Available",
      value: "24/7",
      suffix: "",
      icon: Clock
    },
    {
      title: "Client Retention",
      value: "95",
      suffix: "%",
      icon: Headphones
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence and building trust through successful partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {impactData.map((item, index) => (
            <ImpactFeature
              key={item.title}
              title={item.title}
              value={item.value}
              suffix={item.suffix}
              icon={<item.icon size={32} className="text-primary" />}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactFeature = ({
  title,
  value,
  suffix,
  icon,
  index,
}: {
  title: string;
  value: number | string;
  suffix: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature glass-card-hover text-center",
        (index === 0) && "lg:border-l",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 flex justify-center">
        {icon}
      </div>
      
      <div className="text-3xl md:text-4xl font-bold mb-2 relative z-10 text-primary">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 group-hover/feature:h-16 w-1 rounded-tr-full rounded-br-full bg-primary/30 group-hover/feature:bg-primary transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block">
          {typeof value === 'number' ? <CountUp end={value} /> : value}{suffix}
        </span>
      </div>
      
      <p className="text-muted-foreground relative z-10">
        {title}
      </p>
    </div>
  );
};

export default Impact;