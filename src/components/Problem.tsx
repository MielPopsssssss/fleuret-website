import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const Problem = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t('problem.main.title')} <span className="text-gradient">{t('problem.main.overwhelmed')}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('problem.main.subtitle')}
            </p>
          </div>

          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('problem.nis2.title')}</h3>
                <p className="text-muted-foreground">{t('problem.nis2.desc')}</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('problem.punctual.title')}</h3>
                <p className="text-muted-foreground">{t('problem.punctual.desc')}</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('problem.expensive.title')}</h3>
                <p className="text-muted-foreground">{t('problem.expensive.desc')}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10 text-center">
              <p className="text-lg text-muted-foreground">
                {t('problem.exposure')}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problem;