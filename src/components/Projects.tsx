import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Project1 from "@/assets/Project1.jpeg";
import Project2 from "@/assets/Project2.jpeg";
import Project3 from "@/assets/Project3.jpeg";
import Project4 from "@/assets/Project4.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Landing / hero-banner concept that emphasizes bold gradients, large typography, and layered imagery to create a modern first impression.",
      technologies: ["Visual Design", "Layout", "Typography"],
      status: "Completed",
      category: "Hero / Landing",
      image: Project1
    },
    {
      title: "Project 2",
      description: "Personal branding and profile module highlighting avatar treatment, circular frames, and subtle hover interactions for a human-centred presentation.",
      technologies: ["Branding", "UI", "Micro-interactions"],
      status: "Completed",
      category: "Personal Brand",
      image: Project2
    },
    {
      title: "Project 3",
      description: "Gallery-style mockup focused on grid composition and image rhythm — useful as a gallery or portfolio landing section when populated with visuals.",
      technologies: ["Gallery", "Imagery"],
      status: "Completed",
      category: "Presentation",
      image: Project3
    },
    {
      title: "Project 4",
      description: "Brand exploration layout demonstrating logo placement, color accents, and sample content blocks for identity exploration.",
      technologies: ["Branding", "Layout"],
      status: "Completed",
      category: "Brand",
      image: Project4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent-success text-white";
      case "In Progress":
        return "bg-accent-warning text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of recent projects highlighting my expertise in graphic design and UI/UX. 
            Each design reflects a balance of creativity, functionality, and user-centered thinking, showcasing my ability to solve problems 
            and deliver impactful digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-elevated group overflow-hidden">
              <div className="w-full h-48 bg-muted/10 overflow-hidden">
                <img
                  src={project.image ?? '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium truncate">{project.title}</h3>
                  <Badge className="text-xs">{project.status}</Badge>
                </div>
                <Badge variant="outline" className="text-xs mt-2">
                  {project.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button className="btn-accent">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;