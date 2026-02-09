import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Circle } from "lucide-react";

const Roadmap = () => {
  const { t } = useLanguage();
  
  const milestones = [
    {
      date: t('roadmap.phase1.date'),
      title: t('roadmap.phase1.title'),
      items: [
        t('roadmap.phase1.item1'),
        t('roadmap.phase1.item2'),
        t('roadmap.phase1.item3')
      ],
      completed: false
    },
    {
      date: t('roadmap.phase2.date'),
      title: t('roadmap.phase2.title'),
      items: [
        t('roadmap.phase2.item1'),
        t('roadmap.phase2.item2'),
        t('roadmap.phase2.item3')
      ],
      completed: false
    },
    {
      date: t('roadmap.phase3.date'),
      title: t('roadmap.phase3.title'),
      description: t('roadmap.phase3.desc'),
      completed: false
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-urbanist">
            {t('roadmap.main.title')} <span className="text-gradient">{t('roadmap.main.roadmap')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('roadmap.main.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.date}
                  className="relative pl-12 md:pl-20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 top-0">
                    {milestone.completed ? (
                      <CheckCircle2 className="w-8 h-8 text-primary glow-effect" />
                    ) : (
                      <Circle className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>

                  <Card className={`p-6 ${milestone.completed ? 'border-primary/30 card-glow' : 'border-primary/10'} transition-all hover:border-primary/30`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-primary">{milestone.date}</span>
                        {milestone.completed && (
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                            {t('roadmap.completed')}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      {'items' in milestone ? (
                        <ul className="space-y-2">
                          {milestone.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;