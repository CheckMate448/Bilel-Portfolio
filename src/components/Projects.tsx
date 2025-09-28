import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Classement",
      description: "A dynamic web application for managing and displaying rankings, leveraging Netlify's scalable infrastructure for performance and easy deployment. It provides tools for tracking positions in various categories, ideal for competitions or analytics.",
      technologies: ["React", "Netlify", "JavaScript"],
      status: "Completed",
      category: "Web Application",
      liveLink: "https://classement.netlify.app"
    },
    {
      title: "Eau Vive Chat",
      description: "A real-time chat platform designed for seamless communication, integrated with multiple channels like WhatsApp and Messenger. Built for user engagement and deployed on Netlify for reliability.",
      technologies: ["React", "Netlify", "Socket.io"],
      status: "Completed",
      category: "Chat Application",
      liveLink: "https://eauvive-chat.netlify.app"
    },
    {
      title: "Gallery 360",
      description: "An interactive photo gallery featuring 360-degree views and image transformations, perfect for showcasing visuals in an immersive way. Developed with modern web tools and hosted on Netlify.",
      technologies: ["JavaScript", "Netlify", "CSS3"],
      status: "Completed",
      category: "Gallery Application",
      liveLink: "https://gallery-360.netlify.app"
    },
    {
      title: "Vegeta Kitchen",
      description: "A recipe-focused site dedicated to vegetarian cuisine, offering meal ideas and a user-friendly interface for food enthusiasts. Deployed on Netlify for fast access and smooth performance.",
      technologies: ["React", "Netlify", "Tailwind CSS"],
      status: "Completed",
      category: "Recipe Platform",
      liveLink: "https://vegeta-kitchen.netlify.app"
    },
    {
      title: "Taxi Swiss Transfert",
      description: "Official website for a professional taxi and transfer service in Switzerland, featuring booking forms, pricing calculators (e.g., km-based rates for limousines, minibuses, and large buses), and 24/7 contact options like +41 78 264 32 35. Emphasizes reliable transportation with years of experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      category: "Business Website",
      liveLink: "https://www.taxi-swiss-transfert.ch/"
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
            A selection of recent projects showcasing my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-elevated group overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="btn-secondary flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="btn-hero flex-1" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
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