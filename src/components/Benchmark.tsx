import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Benchmark = () => {
  const { t } = useLanguage();
  
  const metrics = [
    {
      label: t('benchmark.exploitation.label'),
      description: t('benchmark.exploitation.description')
    },
    {
      label: t('benchmark.rapidite.label'),
      description: t('benchmark.rapidite.description')
    },
    {
      label: t('benchmark.validation.label'),
      description: t('benchmark.validation.description')
    },
    {
      label: t('benchmark.efficacite.label'),
      description: t('benchmark.efficacite.description')
    }
  ];

  return (
    <section className="pt-24 pb-0 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-urbanist">
            {t('nav.whyUs')}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-10 lg:p-12 border-primary/30 bg-white card-glow text-brand-blue">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
              {/* Left: value prop */}
              <div className="space-y-5 md:space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-brand-blue/80">
                    {t('benchmark.title.main')}
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {t('benchmark.subtitle.main')}
                  </div>
                </div>
                <p className="text-base md:text-lg text-on-light-muted leading-relaxed">
                  {t('benchmark.description')}
                </p>
              </div>

              {/* Right: 4 concise bullets, no icons */}
              <div className="space-y-3 md:space-y-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 md:p-4 rounded-xl bg-secondary/20 border border-primary/10 text-left"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-base md:text-lg">{metric.label}</div>
                      <div className="text-sm md:text-base text-on-light-muted leading-snug">
                        {metric.description}
                      </div>
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