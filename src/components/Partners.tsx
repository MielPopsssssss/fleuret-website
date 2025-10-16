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
                className="flex-shrink-0 w-48 h-32 mx-8 group flex items-center justify-center hover:scale-110 transition-all"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))',
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))',
                  }}
                />
              </div>
            ))}
            {/* Second set pour le défilement continu */}
            {partners.map((partner) => (
              <div 
                key={`${partner.name}-2`}
                className="flex-shrink-0 w-48 h-32 mx-8 group flex items-center justify-center hover:scale-110 transition-all"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))',
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
