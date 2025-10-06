import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: [
        { name: "Adobe Photoshop", featured: true },
        { name: "Adobe Illustrator", featured: true },
        { name: "Figma", featured: true },
        { name: "Sketch", featured: false },
        { name: "Adobe XD", featured: true },
        { name: "Canva", featured: false }
      ]
    },
    {
      category: "UI/UX Design",
      skills: [
        { name: "Wireframing", featured: true },
        { name: "Prototyping", featured: true },
        { name: "User Research", featured: false },
        { name: "Usability Testing", featured: false },
        { name: "Interaction Design", featured: true },
        { name: "Responsive Design", featured: true }
      ]
    },
    {
      category: "Creative Tools & Technologies",
      skills: [
        { name: "InDesign", featured: true },
        { name: "After Effects", featured: false },
        { name: "Premiere Pro", featured: false },
        { name: "Cinema 4D", featured: false },
        { name: "Lightroom", featured: true },
        { name: "CorelDRAW", featured: false }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Creative Thinking", featured: true },
        { name: "Attention to Detail", featured: true },
        { name: "Collaboration", featured: true },
        { name: "Time Management", featured: false },
        { name: "Problem Solving", featured: true },
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
            A comprehensive toolkit combining industry-leading design tools, creative practices,
            and essential soft skills to craft impactful visuals and seamless user experiences.
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
              "Creative Visual Design",
              "User-Centered UI/UX",
              "Responsive & Adaptive Layouts",
              "Brand Identity & Consistency",
              "Prototyping & Wireframing",
              "Innovation & Creative Thinking"
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