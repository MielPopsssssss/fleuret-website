import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceaLogo from "@/assets/logo-cea.png";
import edfLogo from "@/assets/logo-edf.png";
import thalesLogo from "@/assets/logo-thales.png";
import hecLogo from "@/assets/logo-hec.png";
import polytechniqueLogo from "@/assets/logo-polytechnique.png";
import epitaLogo from "@/assets/logo-epita.png";
import ensLogo from "@/assets/logo-ens.jpeg";
import mvaLogo from "@/assets/logo-mva.jpeg";
import telecomLogo from "@/assets/logo-telecom.svg";

const partners = [
  { name: "EDF", logo: edfLogo, isText: false },
  { name: "Thales", logo: thalesLogo, isText: false },
  { name: "CEA", logo: ceaLogo, isText: false },
  { name: "École Polytechnique", logo: polytechniqueLogo, isText: false },
  { name: "HEC Paris", logo: hecLogo, isText: false },
  { name: "EPITA", logo: epitaLogo, isText: false },
  { name: "ENS", logo: ensLogo, isText: false },
  { name: "MVA", logo: mvaLogo, isText: false },
  { name: "Télécom Paris", logo: telecomLogo, isText: false },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  // Fonction pour obtenir les 5 logos à afficher
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      visible.push({
        partner: partners[index],
        offset: i,
        index: index
      });
    }
    return visible;
  };

  return (
    <section id="partners" className="py-24 relative border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos <span className="text-gradient">Partenaires</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Button - Left */}
          <Button
            variant="default"
            size="lg"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-14 h-14 shadow-lg"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Partners Display */}
          <div className="overflow-hidden px-24">
            <div className="flex justify-center items-center gap-8 min-h-[200px] transition-all duration-500">
              {getVisiblePartners().map(({ partner, offset, index }) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex-shrink-0 transition-all duration-500 flex items-center justify-center ${
                    offset === 0 ? 'scale-110' : 'scale-75'
                  }`}
                  style={{
                    opacity: offset === 0 ? 1 : 0.3,
                    width: '200px',
                    height: '120px'
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-28 max-w-full w-auto object-contain transition-opacity"
                    style={{
                      filter: offset === 0 
                        ? "drop-shadow(0 0 15px hsl(var(--primary) / 0.3))" 
                        : "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Button - Right */}
          <Button
            variant="default"
            size="lg"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-14 h-14 shadow-lg"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
