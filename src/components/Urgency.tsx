import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Urgency = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-primary/5 to-card/50 backdrop-blur-sm card-glow">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Urgence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Chaque Jour Sans Tests Automatisés = <br />
                <span className="text-gradient">Jour d'Exposition</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Démo personnalisée en 15 min</p>
                    <p className="text-sm text-muted-foreground">Découvrez notre solution adaptée à vos besoins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">POC gratuit sur votre infrastructure</p>
                    <p className="text-sm text-muted-foreground">Testez notre IA sur votre environnement réel</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/demo">
                  <Button size="lg" className="text-lg group">
                    <span>Réserver Ma Démo Maintenant</span>
                    <Zap className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
