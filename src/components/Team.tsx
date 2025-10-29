import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import yanisPhoto from "@/assets/yanis.png";
import augustinPhoto from "@/assets/augustin.png";
import pierreGabrielPhoto from "@/assets/pierre-gabriel.png";

const team = [
  {
    name: "Yanis Grigy",
    role: "CEO & Co-fondateur",
    education: "Télécom Paris, X-HEC Entrepreneur",
    description: "Vision stratégique et développement business.",
    photo: yanisPhoto,
    linkedin: "https://www.linkedin.com/in/yanis-grigy-793635237/"
  },
  {
    name: "Pierre-Gabriel Berlureau",
    role: "CTO & Co-fondateur",
    education: "ENS Ulm, MVA",
    description: "Architecture IA et développement technique.",
    photo: pierreGabrielPhoto,
    linkedin: "https://www.linkedin.com/in/pierre-gabriel-berlureau-427320313/"
  },
  {
    name: "Augustin Ponsin",
    role: "CPO & Co-fondateur",
    education: "Ex-Pentester, EPITA, EFREI, X-HEC",
    description: "Expertise pentesting et méthodologie.",
    photo: augustinPhoto,
    linkedin: "https://www.linkedin.com/in/augustinponsin/"
  }
];

const Team = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            L'Équipe
          </h2>
          <p className="text-lg text-muted-foreground">
            Une combinaison unique d'expertise en IA, cybersécurité et entrepreneuriat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card 
              key={member.name}
              className="p-8 bg-card border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="space-y-6">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-foreground/80 font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.education}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Profil LinkedIn
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
