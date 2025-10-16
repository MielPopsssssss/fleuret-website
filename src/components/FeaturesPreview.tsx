import { Shield, Zap, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuresPreview = [
  {
    icon: Clock,
    title: "Résultats en Heures",
    description: "Obtenez vos résultats de pentest en quelques heures au lieu de plusieurs semaines."
  },
  {
    icon: Shield,
    title: "Couverture Complète",
    description: "Aucune faille manquée grâce à nos agents IA spécialisés qui collaborent."
  },
  {
    icon: Zap,
    title: "Sécurité Continue 24/7",
    description: "Surveillance et tests automatisés en continu pour une protection permanente."
  },
  {
    icon: Target,
    title: "72% de Réussite",
    description: "Performances validées sur des benchmarks exigeants avec exploitation réelle."
  }
];

const FeaturesPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
