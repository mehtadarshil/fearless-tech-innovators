import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

const WorkScroll = () => {
  const [isHovering, setIsHovering] = useState(false);

  const {
    data: projects,
    isLoading,
    error
  } = useQuery({
    queryKey: ["workItems"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("work_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Transform the data to match our Project interface
      return data.map(item => ({
        id: item.id,
        title: item.title,
        category: item.category || "Project", // Use a default if category is missing
        image_url: item.image_url || "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }));
    }
  });

  // Fallback data if API call fails or for initial loading
  const fallbackProjects: Project[] = [
    {
      id: "1",
      title: "Mobile App Design",
      category: "UI/UX",
      image_url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      category: "Web Development",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "3",
      title: "AI Assistant",
      category: "Machine Learning",
      image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "4",
      title: "Data Analytics Dashboard",
      category: "Data Visualization",
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      title: "Smart Home App",
      category: "IoT",
      image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "6",
      title: "Fitness Tracker",
      category: "Mobile App",
      image_url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // Use API data or fallback
  const displayProjects = projects || fallbackProjects;
  
  // Double the array to create a seamless loop effect
  const duplicatedProjects = [...displayProjects, ...displayProjects];
  
  if (error) {
    console.error("Error loading projects:", error);
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore our latest projects and discover how we bring innovation to life
          </p>
          {/* <a 
            href="/work" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>
      </div>
      
      <div 
        className="relative w-full overflow-hidden" 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isLoading ? (
          <div className="py-20 text-center">
            <div className="animate-pulse text-primary">Loading projects...</div>
          </div>
        ) : (
          <div 
            className={cn(
              "flex items-center gap-4 py-4 animate-scroll-x",
              isHovering && "animate-paused"
            )}
            style={{ 
              width: `${duplicatedProjects.length * 18}rem` // 16rem card width + 2rem gap
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard 
                key={`${project.id}-${index}`} 
                project={project} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  // Handle image loading errors
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="project-card group glass-card rounded-lg overflow-hidden">
      <div className="relative w-64 h-64 overflow-hidden">
        <img 
          src={imageError ? fallbackImage : project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        
        {/* Gradient overlay - visible on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
          <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkScroll; 