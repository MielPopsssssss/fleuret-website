import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sword, Database, Lock, Trophy, AlertTriangle, CheckCircle } from "lucide-react";

const Sovereignty = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-4">
            <Sword className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t('sovereignty.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-urbanist">
            {t('sovereignty.main.title')} <span className="text-gradient">{t('sovereignty.main.precision')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('sovereignty.main.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-primary/20 card-glow hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">{t('sovereignty.risks.title')}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>{t('sovereignty.risks.gdpr')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>{t('sovereignty.risks.laws')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>{t('sovereignty.risks.purge')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>{t('sovereignty.risks.enrichment')}</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 border-primary/20 card-glow hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t('sovereignty.approach.title')}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('sovereignty.approach.mistral')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('sovereignty.approach.hosting')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('sovereignty.approach.compliance')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('sovereignty.approach.innovations')}</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Database,
              title: t('sovereignty.data.title'),
              description: t('sovereignty.data.desc')
            },
            {
              icon: Lock,
              title: t('sovereignty.infrastructure.title'),
              description: t('sovereignty.infrastructure.desc')
            },
            {
              icon: Trophy,
              title: t('sovereignty.excellence.title'),
              description: t('sovereignty.excellence.desc')
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className="p-6 border-primary/10 hover:border-primary/30 transition-all"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 border-primary/30 bg-card/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">
              {t('sovereignty.ranking.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="leading-relaxed">{t('sovereignty.ranking.market')}</p>
                <p className="leading-relaxed">{t('sovereignty.ranking.europe')}</p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">{t('sovereignty.ranking.objective')}</p>
                <p className="leading-relaxed">{t('sovereignty.ranking.advantage')}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Sovereignty;