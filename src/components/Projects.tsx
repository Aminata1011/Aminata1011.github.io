import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Prédiction des troubles du sommeil",
    description: "Modèle de machine learning pour analyser et prédire les troubles du sommeil à partir de données portant sur la santé du sommeil et le mode de vie des individus. Les données ont été nettoyées, explorées et utilisées pour entraîner plusieurs algorithmes de classification. Projet développé en équipe dans le cadre d'un projet universitaire, en collaboration avec l'université thaïlandaise KMUTT.",
    technologies: ["Github","Python", "Scikit-learn", "Pandas", "Jupyter"," Matplotlib"," Seaborn","TensorFlow","Kaggle","Google Colab"],
    githubUrl: "https://github.com/aminatadosso/sleep-prediction",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Messagerie instantanée avec algorithmes post-quantiques",
    description: "Projet en cours. Application de messagerie sécurisée implémentant des algorithmes cryptographiques résistants aux ordinateurs quantiques. Les algorithmes suivent les recommandations du NIST pour la cryptographie post-quantique. Application développée en équipe dans le cadre d'un projet universitaire.",
    technologies: ["Github","Cryptographie", "Wireshark", "Python", "Socket", "Post-Quantum","VirtualBox","Networking"],
    githubUrl: "https://github.com/aminatadosso/sleep-prediction",
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    title: "Gestion des associations et de leurs contrats",
    description: "Base de données pour la gestion administrative des associations de Paris, incluant le suivi des contrats et des membres. Projet universitaire, réalisé en groupe.",
    technologies: ["Github","SQL", "MySQL Workbench"],
    githubUrl: "https://github.com/aminatadosso/data-cleaning",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Simulateur d'attaque Wi-Fi",
    description: "Programme cherchant les mots de passe Wi-Fi en utilisant des techniques d'attaque par dictionnaire et par force brute. Il capture les paquets réseau et tente de cracker les clés WPA/WPA2. Les mots de passes ont été récupérés à partir de bases de données publiques. Programme développé dans le cadre d'un projet universitaire.",
    technologies: ["C","Kali Linux","VirtualBox", "Kaggle", "Netstat", "Aircrack-ng", "Wireshark"],
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Mini Shell Linux",
    description: "Implémentation minimaliste d'un shell Unix avec parsing de commandes, gestion des processus et redirections, historique des commandes, autocomplétion et gestion des signaux. Projet développé en équipe dans le cadre d'un projet universitaire.",
    technologies: ["Gitlab","C", "Bash", "Unix", "System Calls"],
    gradient: "from-slate-500/20 to-zinc-500/20"
  },
  {
    title: "Affichage d'une fractale",
    description: "Générateur et visualiseur de fractales mathématiques avec zoom interactif et génération aléatoire des couleurs. Programme développé en équipe dans le cadre d'un projet universitaire.",
    technologies: ["C", "Graphics", "Mathematics", "Algorithms"," SDL2"],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    title: "Application web pour l'association Le relais Fraternel",
    description: "Site web conçu pour l'association Le relais Fraternel avec gestion des stocks de denrées alimentaires et de produits d'hygiène. Application développée en équipe dans le cadre d'un projet universitaire.",
    technologies: ["Django", "CSS","Python", "HTML", "JavaScript", "SQLite", "Bootstrap"],
    gradient: "from-cyan-500/20 to-blue-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Projets Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes démontrant mes compétences en programmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
