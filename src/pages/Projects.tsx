import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "CropAI",
      description: "An agritech crop web app that uses drone technology and AI for crop insights and monitoring of crop diseases.",
      link: "https://crop-ai-rosy.vercel.app/",
      tech: ["React", "AI/ML", "Drone Tech", "Next.js"],
      gradient: "from-green-400 to-blue-500"
    },
    {
      name: "Hospital Website with AI Assistant",
      description: "Integrates an AI assistant to help patients schedule appointments, access hospital information, and navigate services.",
      link: "https://bob-med.vercel.app/",
      tech: ["React", "AI Assistant", "Healthcare", "API"],
      gradient: "from-blue-400 to-purple-500"
    },
    {
      name: "AgriTech Web App",
      description: "A web application for livestock production and breeding management. Provides data-driven insights and monitoring tools for farmers.",
      link: "https://nextgen-breeders-alliance-nu.vercel.app/",
      tech: ["React", "Data Analytics", "Agriculture", "Dashboard"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Donation Landing Page",
      description: "Includes a pitch deck and Paystack payment gateway integration for secure and seamless donations.",
      link: "https://donation-seven-pink.vercel.app/",
      tech: ["React", "Paystack", "Payment Gateway", "Landing Page"],
      gradient: "from-pink-400 to-red-500"
    },
    {
      name: "Responsive Auth System",
      description: "Fully responsive authentication page for user registration and login, optimized for all devices.",
      link: "https://simple-auth-pi-seven.vercel.app/",
      tech: ["React", "Authentication", "Responsive Design", "Form Validation"],
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      name: "Alpha Capitals",
      description: "Alpha Capitals Investment is a secure and user-friendly investment platform where users can manage funds, track balances, and perform transactions seamlessly, built with HTML, CSS, JavaScript, PHP, and MySQL.",
      link: "https://alpha-production-923f.up.railway.app/index.php",
      tech: ["Html", "Css", "JavaScript ", "Php"],
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card 
      className="project-card bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
      <CardHeader>
        <CardTitle className="text-xl font-bold gradient-text">{project.name}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Button */}
          <Button 
            asChild
            className="w-full btn-glow bg-primary hover:bg-primary-dark text-primary-foreground group"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing modern, responsive web applications built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Section — vertical on mobile, horizontal with styled scroll on desktop */}
<div className="animate-fade-in-up">
  <div className="projects-scroll flex flex-col md:flex-row gap-6 md:overflow-x-auto md:pb-4">
    {projects.map((project, index) => (
      <div
        key={project.name}
        className="w-full md:flex-shrink-0 md:w-[320px]"
      >
        <ProjectCard project={project} index={index} />
      </div>
    ))}
  </div>

  {/* Inline scrollbar styling */}
  <style>{`
    .projects-scroll::-webkit-scrollbar {
      height: 8px;
    }
    .projects-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .projects-scroll::-webkit-scrollbar-thumb {
      background-color: #6366f1; /* Tailwind indigo-500 */
      border-radius: 10px;
    }
    .projects-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #4f46e5; /* Tailwind indigo-600 */
    }
    /* Firefox */
    .projects-scroll {
      scrollbar-width: thin;
      scrollbar-color: #6366f1 transparent;
    }
  `}</style>
</div>

        {/* GitHub Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <Card className="p-8 bg-card/50 backdrop-blur-sm card-3d border border-border max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Github className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Explore More on GitHub</h2>
            <p className="text-muted-foreground mb-6">
              Check out my complete portfolio of projects, contributions, and open-source work
            </p>
            <Button 
              asChild
              size="lg"
              className="btn-glow bg-primary hover:bg-primary-dark text-primary-foreground group"
            >
              <a href="https://github.com/Bobbiehex" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
                <Github className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;