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
  { name: "HEC Paris", logo: hecLogo, isText: false },
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
          <style>{`
            @keyframes scroll-infinite {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-infinite {
              animation: scroll-infinite 30s linear infinite;
            }
          `}</style>
          <div className="flex animate-scroll-infinite">
            {/* Triple duplication pour un défilement fluide */}
            {[...Array(3)].map((_, setIndex) => (
              partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${setIndex}-${index}`}
                  className="flex-shrink-0 w-48 h-32 mx-8 group flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{
                      filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.15))",
                    }}
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
