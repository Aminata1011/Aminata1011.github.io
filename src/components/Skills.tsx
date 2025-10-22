import { Code2, Database, Boxes, Workflow,ShieldCheck,Server,Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Data Science & IA",
    skills: [
      "R",
      "Analyse de données (Pandas, NumPy)",
      "Machine Learning (Scikit-learn, TensorFlow)",
      "Data Visualisation (Matplotlib, Seaborn)",
      "Business Intelligence (Power BI)",
      "Plateformes (Kaggle, Google Colab)"
    ]
  },
  {
    icon: Database,
    title: "Bases de Données", 
    skills: [
      "Langages (SQL, PL/SQL)",
      "Outils (MySQL Workbench, SQL Developer)",
    ]
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    skills: [
      "Programmation & OS (C, Linux Kali/Debian)",
      "Analyse réseau (Wireshark, Sockets)",
      "Protocoles & Concepts (TLS/SSL, Sécurité réseaux, Cryptographie)",
    ]
  },
  {
    icon: Boxes,
    title: "DevOps & Infrastructure",
    skills: [
      "Conteneurisation & VM (Docker, VirtualBox)",
      "CI/CD & Versioning (Git/GitLab)",
      "Scripting & Cloud (Bash, AWS - bases)",
    ]
  },
  {
    icon: Server, 
    title: "Développement Backend",
    skills: [
      "Java",        
      "Python",
      "C",           
      "Django",
    ]
  },
  {
    icon: Code2,
    title: "Développement Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ]
  },
  {
    icon: Workflow,
    title: "Outils & Environnement",
    skills: [
      "Visual Studio Code",
      "IntelliJ",
      "CodeBlocks",
      "Modelio",
      "SDL2 (graphisme)",
    ]
  }
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
