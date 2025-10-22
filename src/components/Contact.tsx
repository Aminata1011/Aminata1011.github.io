import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Restons en contact
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Intéressé par une collaboration ou simplement envie d'échanger ? N'hésitez pas à me contacter.
          </p>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Aminata1011"
              className="p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aminata-dosso/"
              className="p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:am.dosso@laposte.net"
              className="p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
