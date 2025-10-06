import { Palette, PenTool, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const traits = [
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Passionate about creating visually stunning and user-friendly designs that leave a lasting impression."
    },
    {
      icon: PenTool,
      title: "Creative Vision",
      description: "Always exploring new design trends and approaches to craft unique, impactful visual experiences."
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Organized and precise, ensuring every design element aligns perfectly with brand identity and user needs."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong believer in teamwork and open communication to bring ideas to life and achieve outstanding results."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a passionate Graphic and UI/UX Designer from Tunisia, I combine creativity with 
            strategy to design visuals and interfaces that connect with people. My journey in design 
            is driven by curiosity, dedication, and a desire to create meaningful experiences.
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
                Born and raised in Tunisia, I discovered my passion for design at a young age. 
                From sketching ideas to mastering digital tools like Photoshop, Illustrator, and Figma, 
                I have shaped my skills around bringing concepts to life visually.
              </p>
              <p className="text-muted-foreground">
                I believe design is more than aesthetics — it’s about creating experiences that inspire 
                and engage. I’m excited to contribute to projects that blend creativity, functionality, 
                and innovation.
              </p>
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-2">Selected Experience</h4>
                  <ul className="text-muted-foreground list-disc list-inside">
                    <li>Enix ads — Graphic Designer</li>
                    <li>Bharcom — Graphic Designer</li>
                  </ul>
                </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                <span className="text-sm font-medium">Graphic Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">UI/UX Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                <span className="text-sm font-medium">Creative Thinker</span>
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
