import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  gradient = "from-primary/20 to-accent/20"
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
