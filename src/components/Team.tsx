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
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            L'<span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Une combinaison unique d'expertise en IA, cybersécurité et entrepreneuriat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="p-6 card-glow hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="space-y-4">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
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
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
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
