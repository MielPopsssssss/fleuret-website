const partners = [
  { name: "EDF", logo: "EDF" },
  { name: "Thales", logo: "THALES" },
  { name: "CEA", logo: "CEA" },
  { name: "École Polytechnique", logo: "X" },
  { name: "HEC Paris", logo: "HEC" }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group flex items-center justify-center w-full h-32 rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:card-glow bg-card/50"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.logo}
                </div>
                <div className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
