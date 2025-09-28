import { Code, Lightbulb, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const traits = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about clean code, modern frameworks, and cutting-edge technologies that solve real-world problems."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Always exploring new ideas and approaches to create unique, impactful digital experiences."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Organized and motivated professional who delivers projects on time with attention to detail."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong believer in teamwork and effective communication to achieve outstanding results."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a young IT graduate from Tunisia, I combine technical expertise with creative vision 
            to build web applications that make a difference. My journey in technology is driven by 
            curiosity, dedication, and a desire to innovate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <Card key={index} className="card-elevated group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <trait.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{trait.title}</h3>
                <p className="text-muted-foreground">{trait.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Background Story */}
        <div className="mt-16 card-gradient max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Born and raised in Tunisia, I discovered my passion for technology early on. 
                After completing my IT degree, I've been focused on mastering web development 
                and exploring the endless possibilities of modern technology.
              </p>
              <p className="text-muted-foreground">
                I believe in the power of technology to transform ideas into reality, and I'm 
                excited to contribute to projects that push boundaries and create meaningful impact.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                <span className="text-sm font-medium">IT Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Web Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                <span className="text-sm font-medium">Tech Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                <span className="text-sm font-medium">Based in Tunisia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;