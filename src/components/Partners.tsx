import ceaLogo from "@/assets/logo-cea.png";
import edfLogo from "@/assets/logo-edf.png";
import thalesLogo from "@/assets/logo-thales.png";
import hecLogo from "@/assets/logo-hec.png";
import polytechniqueLogo from "@/assets/logo-polytechnique.png";

const partners = [
  { name: "EDF", logo: edfLogo, isText: false },
  { name: "Thales", logo: thalesLogo, isText: false },
  { name: "CEA", logo: ceaLogo, isText: false },
  { name: "École Polytechnique", logo: polytechniqueLogo, isText: false },
  { name: "HEC Paris", logo: hecLogo, isText: false }
];

const Partners = () => {
  return (
    <section className="py-24 relative border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos <span className="text-gradient">Partenaires</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ils nous font confiance pour sécuriser leurs infrastructures critiques.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x hover:pause">
            {/* Premier set de logos */}
            {partners.map((partner) => (
              <div 
                key={`${partner.name}-1`}
                className="flex-shrink-0 w-48 h-32 mx-4 group flex items-center justify-center rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:card-glow bg-card/50 hover:scale-105"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  {partner.isText ? (
                    <div className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.logo}
                    </div>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-20 w-auto object-contain"
                    />
                  )}
                  <div className="text-xs text-muted-foreground mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Second set pour le défilement continu */}
            {partners.map((partner) => (
              <div 
                key={`${partner.name}-2`}
                className="flex-shrink-0 w-48 h-32 mx-4 group flex items-center justify-center rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:card-glow bg-card/50 hover:scale-105"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  {partner.isText ? (
                    <div className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.logo}
                    </div>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-20 w-auto object-contain"
                    />
                  )}
                  <div className="text-xs text-muted-foreground mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
