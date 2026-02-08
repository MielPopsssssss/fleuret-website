import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import iconExploitation from "@/assets/icon-exploitation-new.png";
import iconValidation from "@/assets/icon-validation-new.png";
import iconRapidite from "@/assets/icon-rapidite-new.png";
import iconEfficacite from "@/assets/icon-efficacite-new.png";

const Benchmark = () => {
  const { t } = useLanguage();
  
  const metrics = [
    {
      icon: iconExploitation,
      label: t('benchmark.exploitation.label'),
      description: t('benchmark.exploitation.description')
    },
    {
      icon: iconRapidite,
      label: t('benchmark.rapidite.label'),
      description: t('benchmark.rapidite.description')
    },
    {
      icon: iconValidation,
      label: t('benchmark.validation.label'),
      description: t('benchmark.validation.description')
    },
    {
      icon: iconEfficacite,
      label: t('benchmark.efficacite.label'),
      description: t('benchmark.efficacite.description')
    }
  ];

  return (
    <section className="pt-24 pb-0 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 border-primary/30 bg-white card-glow text-brand-blue">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{t('benchmark.title.main')}</div>
                  <div className="text-xl text-on-light-muted">{t('benchmark.subtitle.main')}</div>
                </div>
                <p className="text-on-light-muted leading-relaxed">
                  {t('benchmark.description')}
                </p>
              </div>

              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex gap-4 items-start p-4 rounded-lg bg-secondary/30 border border-primary/10">
                    <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <img src={metric.icon} alt="" className="w-30 h-30" />
                    </div>
                    <div>
                      <div className="font-semibold">{metric.label}</div>
                      <div className="text-xs text-on-light-muted mt-1">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benchmark;