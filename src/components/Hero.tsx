import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-vercel from-primary/20 via-background to-background animate-glow-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Future ingénieure Data & IA
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Étudiante-ingénieure à l'<a href="https://www.esiea.fr/" color="#b380ff">ESIEA</a> (4A), je conçois des solutions logicielles intelligentes et sécurisées. J'allie la puissance prédictive de la Data Science à la rigueur de la Cybersécurité, en m'appuyant sur une programmation robuste et optimisée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-lg group transition-all hover:scale-105"
          >
            Voir mes projets
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border bg-card/50 hover:bg-card text-foreground font-semibold rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all hover:scale-105"
          >
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
