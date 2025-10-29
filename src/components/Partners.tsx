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
  const itemsPerPage = 5;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visiblePartners = partners.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

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

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Button - Left */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Partners Grid */}
          <div className="overflow-hidden px-12">
            <div className="flex gap-8 justify-center items-center transition-all duration-500">
              {visiblePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-40 h-32 group flex items-center justify-center hover:scale-110 transition-transform"
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
              ))}
            </div>
          </div>

          {/* Navigation Button - Right */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
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
