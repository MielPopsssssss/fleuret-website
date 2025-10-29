import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PentestTerminal from "@/components/PentestTerminal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Demo = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-gradient">Démo Interactive</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Découvrez comment notre IA autonome réalise un pentest complet sur un environnement Active Directory.
                </p>
              </div>

              <PentestTerminal />

              <div className="text-center pt-8 space-y-6">
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-muted-foreground">
                    Cette démo montre un scénario réel d'exploitation d'un environnement Active Directory, 
                    avec détection de credentials, escalade de privilèges et obtention d'un accès SYSTEM complet.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Basé sur des techniques réelles de pentesting automatisé par notre IA multi-agents.
                  </p>
                </div>

                <Link to="/waitlist">
                  <Button size="lg" className="mt-4">
                    Rejoindre la waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
