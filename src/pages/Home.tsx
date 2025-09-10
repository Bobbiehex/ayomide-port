import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 float">
          <Code className="w-8 h-8 text-primary opacity-20" />
        </div>
        <div className="absolute top-40 right-20 float" style={{ animationDelay: '2s' }}>
          <Zap className="w-6 h-6 text-accent-cyan opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20 float" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-10 h-10 text-accent-purple opacity-20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Main heading with animation */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Full-stack</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building digital experiences one code at a time
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern web development and cyber systems.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/projects">
              <Button 
                size="lg" 
                className="btn-glow bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* About Section */}
          <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 card-3d border border-border">
              <h2 className="text-2xl font-bold mb-6 gradient-text">About Me</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I am a Full Stack Developer with experience in frontend and backend development, 
                database management, and responsive web design. I build web applications that are 
                efficient, scalable, and user-friendly, with a focus on creating seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;