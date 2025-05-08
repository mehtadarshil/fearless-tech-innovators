import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Gallery6 } from "@/components/ui/gallery6";

const Work = () => {
  const {
    data: workItems,
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
      return data;
    }
  });

  const transformedItems = workItems?.map(item => ({
    id: item.id,
    title: item.title,
    summary: item.description,
    url: "#", // You can add real URLs when available
    image: item.image_url || "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  })) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching work items:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Error loading work items. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <Navbar />
      
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">Our Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>
      </div> */}

      {/* Featured Projects Carousel */}
      <Gallery6 
        heading="Featured Projects" 
        demoUrl="/contact"
        items={transformedItems} 
      />
      
      {/* Grid Layout for All Projects
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-gradient mb-10">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems?.map((item, index) => (
            <div
              key={item.id}
              className="glass-card rounded-lg overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gradient">
                  {item.title}
                </h2>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Work;
