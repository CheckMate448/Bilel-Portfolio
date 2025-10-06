import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import Project1 from "@/assets/Porject1.jpg";
import Project2 from "@/assets/Project2.jpg";
import Project3 from "@/assets/Project3.jpg";
import Project4 from "@/assets/Project4.jpeg";
import Project5 from "@/assets/Project5.jpeg";
import Project6 from "@/assets/Project6.jpeg";
import Project7 from "@/assets/Project7.jpeg";

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
    ,
    {
      title: "Project 5",
      description: "Marketing collateral set and poster concept emphasizing typographic hierarchy and print-ready layouts.",
      technologies: ["Print", "Layout"],
      status: "Completed",
      category: "Print",
      image: Project5
    },
    {
      title: "Project 6",
      description: "Mobile UI mockups with a focus on onboarding flows and micro-interactions to improve first-time user retention.",
      technologies: ["Mobile UI", "Prototyping"],
      status: "In Progress",
      category: "Mobile",
      image: Project6
    },
    {
      title: "Project 7",
      description: "Comprehensive case study combining branding, UI, and marketing assets for a fictional startup launch.",
      technologies: ["Branding", "UI", "Marketing"],
      status: "Completed",
      category: "Case Study",
      image: Project7
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

  const [selected, setSelected] = useState<{ src: string; title?: string } | null>(null);

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
            <Card key={index} className="card-elevated group overflow-hidden flex flex-col">
              <div className="w-full h-44 bg-muted/10 overflow-hidden cursor-zoom-in" onClick={() => setSelected({ src: project.image, title: project.title })}>
                <img
                  src={project.image ?? '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-md font-medium">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{project.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </Card>
          ))}
          {selected && (
            <ProjectModal src={selected.src} title={selected.title} onClose={() => setSelected(null)} />
          )}
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