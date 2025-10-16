import { useRef, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isScrolling = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isScrolling = false;
      scrollContainer.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      }
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mouseleave', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mouseleave', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

        <div 
          ref={scrollRef}
          className="relative overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex animate-scroll-x hover:pause scrollbar-hide">
            {/* Premier set de logos */}
            {partners.map((partner) => (
              <div
                key={`${partner.name}-1`}
                className="flex-shrink-0 w-48 h-32 mx-8 group flex items-center justify-center hover:scale-110 transition-all"
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
            {/* Second set pour le défilement continu */}
            {partners.map((partner) => (
              <div
                key={`${partner.name}-2`}
                className="flex-shrink-0 w-48 h-32 mx-8 group flex items-center justify-center hover:scale-110 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    filter: "drop-shadow(0 0 3px hsl(var(--primary) / 0.15))",
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
