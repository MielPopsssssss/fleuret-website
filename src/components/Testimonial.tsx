import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm card-glow relative">
            <Quote className="w-16 h-16 text-primary/20 absolute top-6 left-6" />
            <div className="relative z-10 space-y-6">
              <blockquote className="text-2xl md:text-3xl font-medium text-center leading-relaxed">
                "Nous avons découvert <span className="text-primary font-bold">19 vulnérabilités critiques</span> sur des applications populaires, dont plusieurs reçues en attribution"
              </blockquote>
              <div className="text-center pt-4">
                <p className="text-lg font-semibold">Équipe Fleuret AI</p>
                <p className="text-muted-foreground">Tests sur applications réelles</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
