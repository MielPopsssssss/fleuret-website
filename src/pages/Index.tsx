import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, Lock, Brain, CheckCircle2, Circle, Linkedin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              Pentesting Automatisé Piloté par IA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              De l'IP au rapport final sans intervention humaine. Audit continu, conformité NIS2 & DORA.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8">
                Demander une Démo
              </Button>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-lg">
                  En Savoir Plus <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Des Résultats Réels.<br />Validés et Reproductibles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">82%</div>
              <p className="text-xl text-muted-foreground">Taux de réussite au benchmark XBOW</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">100%</div>
              <p className="text-xl text-muted-foreground">Tests automatisés</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">24/7</div>
              <p className="text-xl text-muted-foreground">Audit continu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Votre Équipe IA de Sécurité Offensive
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              Des centaines d'agents IA travaillant en parallèle pour découvrir, valider et exploiter les vulnérabilités sans intervention humaine
            </p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">IA Agentique Autonome</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Pense Comme un Hacker. Travaille Comme une Machine.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Notre système multi-agents orchestre automatiquement reconnaissance, exploitation et validation. 
                  82% de réussite au benchmark XBOW - niveau pentester junior 2-3 ans d'expérience.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Brain className="w-32 h-32 text-primary/40" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center order-2 md:order-1">
                <Zap className="w-32 h-32 text-primary/40" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Pentesting à la Demande</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Tests en Heures, Pas en Semaines.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  De l'IP au rapport en minutes. Pas de planification, pas de délais. Tests continus automatisés. 
                  Déployez votre code et regardez notre IA se mettre au travail.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Couverture Complète</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  L'IA Coordonne. Rien n'Est Oublié.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Test systématique de chaque endpoint, chaque vecteur d'attaque. 
                  Notre coordinateur IA garantit qu'aucune surface d'attaque n'est laissée de côté.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Target className="w-32 h-32 text-primary/40" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center order-2 md:order-1">
                <Shield className="w-32 h-32 text-primary/40" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Conformité & Souveraineté</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  NIS2 & DORA Ready. 100% EU.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Infrastructure 100% européenne. Conformité NIS2 & DORA complète. 
                  Aucune dépendance aux LLM US/CN. Vos données restent en Europe.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-muted/30 mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Notre Roadmap
            </h2>
            <p className="text-xl text-muted-foreground">
              3 mois d'innovation intensive : notre IA a déjà le niveau d'un pentester junior (2-3 ans d'XP).
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              <div className="space-y-8">
                {[
                  {
                    date: "Octobre 2024",
                    title: "Inception & Recherche",
                    description: "Définition du concept, constitution de l'équipe, étude de marché.",
                    completed: true
                  },
                  {
                    date: "Novembre 2024",
                    title: "Architecture & Prototype",
                    description: "Conception système, fine-tuning Mistral, premiers tests sur Hack The Box.",
                    completed: true
                  },
                  {
                    date: "Décembre 2024",
                    title: "PoC Fonctionnel",
                    description: "Démonstration bout-en-bout : IP → reconnaissance → exploitation → rapport. L'IA atteint le niveau d'un pentester junior avec 2-3 ans d'expérience, validé par 82% de réussite au benchmark XBOW.",
                    completed: true
                  },
                  {
                    date: "Janvier 2025",
                    title: "HEC Launchpad & Levée",
                    description: "Présentation aux investisseurs, début de la levée de fonds.",
                    completed: false
                  },
                  {
                    date: "Q1-Q2 2025",
                    title: "V1 Production",
                    description: "Durcissement, conformité NIS2 complète, premiers clients pilotes.",
                    completed: false
                  },
                  {
                    date: "Q3-Q4 2025",
                    title: "Scale & Leadership Européen",
                    description: "Multi-tenancy, couverture techno élargie, positionnement Top 3 du classement IA offensive EU.",
                    completed: false
                  },
                  {
                    date: "2030",
                    title: "Leader Souverain Mondial",
                    description: "Domination du marché européen, exportation vers pays alliés, référence mondiale en IA offensive souveraine.",
                    completed: false
                  }
                ].map((milestone, index) => (
                  <div 
                    key={milestone.date}
                    className="relative pl-12 md:pl-20"
                  >
                    <div className="absolute left-0 md:left-4 top-0">
                      {milestone.completed ? (
                        <CheckCircle2 className="w-8 h-8 text-primary glow-effect" />
                      ) : (
                        <Circle className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>

                    <Card className={`p-6 ${milestone.completed ? 'border-primary/30 card-glow' : 'border-primary/10'} transition-all hover:border-primary/30`}>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono text-primary">{milestone.date}</span>
                          {milestone.completed && (
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                              Terminé
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <Partners />
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              L'Équipe
            </h2>
            <p className="text-xl text-muted-foreground">
              Une combinaison unique d'expertise en IA, cybersécurité et entrepreneuriat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Yanis Grigy",
                role: "CEO & Co-fondateur",
                education: "Télécom Paris, X-HEC Entrepreneur",
                description: "Vision stratégique et développement business."
              },
              {
                name: "Pierre-Gabriel Berlureau",
                role: "CTO & Co-fondateur",
                education: "ENS Ulm, MVA",
                description: "Architecture IA et développement technique."
              },
              {
                name: "Augustin Ponsin",
                role: "CPO & Co-fondateur",
                education: "Ex-Pentester, EPITA, EFREI, X-HEC",
                description: "Expertise pentesting et méthodologie."
              }
            ].map((member) => (
              <Card 
                key={member.name}
                className="p-6 card-glow hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
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
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Prêt à Automatiser Votre Sécurité Offensive ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez les organisations qui font confiance à l'IA pour protéger leurs infrastructures critiques.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8">
                Demander une Démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
