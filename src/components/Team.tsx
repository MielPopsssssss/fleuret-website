import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin } from "lucide-react";
import yanisPhoto from "@/assets/yanis.png";
import augustinPhoto from "@/assets/augustin.png";
import pierreGabrielPhoto from "@/assets/pierre-gabriel.png";

const Team = () => {
  const { t } = useLanguage();
  
  const team = [
    {
      name: t('team.yanis.name'),
      role: t('team.yanis.role.main'),
      education: t('team.yanis.education'),
      description: t('team.yanis.description'),
      photo: yanisPhoto,
      linkedin: "https://www.linkedin.com/in/yanis-grigy-793635237/"
    },
    {
      name: t('team.pierregabriel.name'),
      role: t('team.pierregabriel.role.main'),
      education: t('team.pierregabriel.education'),
      description: t('team.pierregabriel.description'),
      photo: pierreGabrielPhoto,
      linkedin: "https://www.linkedin.com/in/pierre-gabriel-berlureau-427320313/"
    },
    {
      name: t('team.augustin.name'),
      role: t('team.augustin.role.main'),
      education: t('team.augustin.education'),
      description: t('team.augustin.description'),
      photo: augustinPhoto,
      linkedin: "https://www.linkedin.com/in/augustinponsin/"
    }
  ];

  return (
    <section className="py-24 relative" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{t('team.main.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('team.main.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="p-6 card-glow hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30 bg-white"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
              itemScope 
              itemType="https://schema.org/Person"
            >
              <article className="space-y-4">
                <img 
                  src={member.photo} 
                  alt={`${member.name} - ${member.role} chez Fleuret AI`}
                  className="w-20 h-20 rounded-full object-cover"
                  itemProp="image"
                  loading="lazy"
                  width="80"
                  height="80"
                />
                <div>
                  <h3 className="text-xl font-semibold" itemProp="name">{member.name}</h3>
                  <p className="text-primary font-medium text-sm" itemProp="jobTitle">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground" itemProp="alumniOf">
                  {member.education}
                </p>
                <p className="text-muted-foreground leading-relaxed" itemProp="description">
                  {member.description}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                  aria-label={`Voir le profil LinkedIn de ${member.name}`}
                  itemProp="url"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('team.linkedin')}
                </a>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;