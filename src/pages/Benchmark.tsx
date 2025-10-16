import { Card } from "@/components/ui/card";
import { Target, Zap, CheckCircle2, TrendingUp, Trophy } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BenchmarkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8">← Retour</Button>
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Performance <span className="text-gradient">Benchmark</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Des résultats mesurables et reproductibles validés par des benchmarks reconnus.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 border-primary/30 card-glow">
              <div className="text-center space-y-6">
                <div className="inline-block">
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">82%</div>
                  <div className="text-xl text-muted-foreground">au Benchmark XBOW</div>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  XBOW est un benchmark standardisé reconnu qui évalue les capacités réelles d'exploitation de vulnérabilités. 
                  Notre IA atteint <span className="text-primary font-semibold">le niveau d'un pentester junior</span>, 
                  là où la moyenne du marché stagne à 40-50%.
                </p>

                <div className="flex items-center justify-center gap-2 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Rank <span className="text-primary">Pro Hacker</span> sur Hack The Box</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">82%</div>
                    <div className="text-sm text-muted-foreground">Notre IA</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <TrendingUp className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <div className="text-2xl font-bold">40-50%</div>
                    <div className="text-sm text-muted-foreground">Moyenne marché</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exploitation réelle</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pas de simple détection : notre IA exploite réellement les vulnérabilités et génère des preuves de concept fonctionnelles.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rapidité</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Réduction drastique du temps d'audit : de plusieurs semaines à quelques heures pour des tests complets.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 text-center">Méthodologie Agentique</h3>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                Notre approche multi-agents permet une orchestration intelligente des différentes phases du pentest : 
                reconnaissance, scan, exploitation, validation et reporting. Chaque agent spécialisé collabore pour maximiser 
                l'efficacité et la pertinence des tests.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BenchmarkPage;
