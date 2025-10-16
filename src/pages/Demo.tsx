import { Shield } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PentestTerminal from "@/components/PentestTerminal";

const Demo = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Voir une <span className="text-gradient">Démo Interactive</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Découvrez comment notre IA autonome réalise un pentest complet sur un environnement Active Directory.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Reconnaissance</h3>
                    <p className="text-sm text-muted-foreground">
                      Scan et énumération
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Exploitation</h3>
                    <p className="text-sm text-muted-foreground">
                      Accès initial
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Escalade</h3>
                    <p className="text-sm text-muted-foreground">
                      Privilèges SYSTEM
                    </p>
                  </div>
                </div>
              </div>

              <PentestTerminal />

              <div className="text-center pt-8 space-y-4 max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  Cette démo montre un scénario réel d'exploitation d'un environnement Active Directory, 
                  avec détection de credentials, escalade de privilèges et obtention d'un accès SYSTEM complet.
                </p>
                <p className="text-sm text-muted-foreground">
                  Basé sur des techniques réelles de pentesting automatisé par notre IA multi-agents.
                </p>
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
