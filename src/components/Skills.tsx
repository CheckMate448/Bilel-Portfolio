import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", featured: true },
        { name: "TypeScript", featured: true },
        { name: "Next.js", featured: false },
        { name: "Vue.js", featured: false },
        { name: "Tailwind CSS", featured: true },
        { name: "JavaScript", featured: true }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", featured: true },
        { name: "Express.js", featured: false },
        { name: "Python", featured: false },
        { name: "PostgreSQL", featured: true },
        { name: "MongoDB", featured: false },
        { name: "REST APIs", featured: true }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", featured: true },
        { name: "Docker", featured: false },
        { name: "AWS", featured: false },
        { name: "Figma", featured: true },
        { name: "VS Code", featured: false },
        { name: "Linux", featured: false }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", featured: true },
        { name: "Team Collaboration", featured: true },
        { name: "Communication", featured: false },
        { name: "Project Management", featured: false },
        { name: "Creative Thinking", featured: true },
        { name: "Adaptability", featured: false }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web technologies, development practices, 
            and essential soft skills for building exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-semibold text-gradient mb-6">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    {skill.featured ? (
                      <Badge className="skill-pill-featured w-full justify-center py-3">
                        {skill.name}
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="skill-pill w-full justify-center py-3">
                        {skill.name}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Key Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Modern Web Development",
              "Responsive Design",
              "User Experience Focus",
              "Code Quality",
              "Continuous Learning",
              "Innovation Mindset"
            ].map((strength, index) => (
              <Badge 
                key={index} 
                className="skill-pill-featured px-6 py-3 text-base hover:scale-110"
              >
                {strength}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;