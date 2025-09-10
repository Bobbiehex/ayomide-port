import AutoCarousel from "@/components/AutoCarousel";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: "Expert", icon: "🌐" },
    { name: "CSS3", level: "Expert", icon: "🎨" },
    { name: "JavaScript", level: "Expert", icon: "⚡" },
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "Next.js", level: "Advanced", icon: "🔺" },
    { name: "TypeScript", level: "Advanced", icon: "📘" },
    { name: "Tailwind CSS", level: "Expert", icon: "💨" },
    { name: "Responsive Design", level: "Expert", icon: "📱" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Advanced", icon: "🟢" },
    { name: "Express.js", level: "Advanced", icon: "🚀" },
    { name: "PHP", level: "Intermediate", icon: "🐘" },
    { name: "MySQL", level: "Advanced", icon: "🗄️" },
    { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
    { name: "MongoDB", level: "Intermediate", icon: "🍃" },
    { name: "REST APIs", level: "Expert", icon: "🔗" },
    { name: "Authentication", level: "Advanced", icon: "🔐" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <Card 
      className="skill-card p-6 min-w-[280px] bg-card border border-border hover:border-primary/30 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-center space-y-4">
        <div className="text-4xl mb-4">{skill.icon}</div>
        <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-muted-foreground">Level:</span>
          <span className="text-sm font-semibold text-primary">{skill.level}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-1000"
            style={{ 
              width: skill.level === 'Expert' ? '95%' : 
                     skill.level === 'Advanced' ? '80%' : '65%' 
            }}
          ></div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiency in modern web development technologies
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">
            Frontend Development
          </h2>
          <AutoCarousel className="animate-fade-in-up" speed={10}>
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AutoCarousel>
        </div>

        {/* Backend Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">
            Backend Development
          </h2>
          <AutoCarousel className="animate-fade-in-up" speed={12}>
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AutoCarousel>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <Card className="p-8 bg-card/50 backdrop-blur-sm card-3d border border-border">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Additional Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
              <div className="hover:text-primary transition-colors">Git & GitHub</div>
              <div className="hover:text-primary transition-colors">Responsive Design</div>
              <div className="hover:text-primary transition-colors">API Integration</div>
              <div className="hover:text-primary transition-colors">Database Design</div>
              <div className="hover:text-primary transition-colors">Payment Gateways</div>
              <div className="hover:text-primary transition-colors">AI Integration</div>
              <div className="hover:text-primary transition-colors">Deployment</div>
              <div className="hover:text-primary transition-colors">Testing</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;