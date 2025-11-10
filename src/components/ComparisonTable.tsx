import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonTable = () => {
  const { t } = useLanguage();

  const capabilities = [
    { 
      label: t("comparison.accuracy") || "Précision",
      traditional: t("comparison.accuracy.traditional") || "Variable",
      fleuret: t("comparison.accuracy.fleuret") || "Élevée",
      automated: t("comparison.accuracy.automated") || "Faible (faux positifs)"
    },
    {
      label: t("comparison.adaptability") || "Adaptabilité temps réel",
      traditional: { check: true },
      fleuret: { check: true },
      automated: { check: false }
    },
    {
      label: t("comparison.depth") || "Profondeur des tests",
      traditional: t("comparison.depth.traditional") || "Approfondie",
      fleuret: t("comparison.depth.fleuret") || "Approfondie",
      automated: t("comparison.depth.automated") || "Superficielle"
    },
    {
      label: t("comparison.context") || "Contexte métier",
      traditional: t("comparison.context.traditional") || "Élevé",
      fleuret: t("comparison.context.fleuret") || "Complet",
      automated: t("comparison.context.automated") || "Faible"
    },
    {
      label: t("comparison.frequency") || "Fréquence",
      traditional: t("comparison.frequency.traditional") || "Trimestrielle-Annuelle",
      fleuret: t("comparison.frequency.fleuret") || "Continue 24/7",
      automated: t("comparison.frequency.automated") || "Élevée"
    },
    {
      label: t("comparison.coverage") || "Couverture",
      traditional: t("comparison.coverage.traditional") || "Limitée",
      fleuret: t("comparison.coverage.fleuret") || "Complète",
      automated: t("comparison.coverage.automated") || "Large mais superficielle"
    }
  ];

  const CheckIcon = () => (
    <div className="flex items-center justify-center">
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
  );

  const XIcon = () => (
    <div className="flex items-center justify-center">
      <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
        <X className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("comparison.title") || "Fleuret vs Services Traditionnels vs Solutions Automatisées"}
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto px-8 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {/* Column 1 - Labels */}
              <div className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-bold text-base">{t("comparison.header.capability") || "Capacité"}</h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="p-4 font-medium bg-muted/10 rounded-lg min-h-[60px] flex items-center">
                    {capability.label}
                  </div>
                ))}
              </div>
              
              {/* Column 2 - Traditional */}
              <div className="border border-primary/30 rounded-lg p-3 space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-center text-sm">
                    {t("comparison.header.traditional") || "Services Traditionnels"}
                  </h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="p-4 text-center rounded-lg min-h-[60px] flex items-center justify-center">
                    {typeof capability.traditional === 'object' ? (
                      capability.traditional.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      <span className="text-muted-foreground text-sm">{capability.traditional}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Column 3 - Fleuret (highlighted) */}
              <div className="relative z-10 scale-105">
                <div className="border-2 border-primary rounded-lg bg-primary space-y-3 p-3">
                  <div className="p-3">
                    <h3 className="font-bold text-center text-primary-foreground text-sm">
                      {t("comparison.header.fleuret") || "Fleuret IA"}
                    </h3>
                  </div>
                  {capabilities.map((capability, index) => (
                    <div key={index} className="p-3 text-center min-h-[60px] flex items-center justify-center">
                      {typeof capability.fleuret === 'object' ? (
                        capability.fleuret.check ? (
                          <div className="flex items-center justify-center">
                            <div className="w-7 h-7 rounded-full bg-primary-foreground flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                            </div>
                          </div>
                        ) : <XIcon />
                      ) : (
                        <span className="font-bold text-primary-foreground text-sm">{capability.fleuret}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 4 - Automated */}
              <div className="border border-primary/30 rounded-lg p-3 space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-center text-sm">
                    {t("comparison.header.automated") || "Solutions Automatisées"}
                  </h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="p-4 text-center rounded-lg min-h-[60px] flex items-center justify-center">
                    {typeof capability.automated === 'object' ? (
                      capability.automated.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      <span className="text-muted-foreground text-sm">{capability.automated}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          <div className="border-2 border-primary bg-primary rounded-lg p-5 shadow-lg">
            <h3 className="font-bold text-base text-primary-foreground mb-4 text-center">
              {t("comparison.header.fleuret") || "Fleuret IA"}
            </h3>
            <div className="space-y-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="font-medium text-sm text-primary-foreground">{capability.label}</span>
                  <span className="text-sm font-bold text-primary-foreground">
                    {typeof capability.fleuret === 'object' ? (
                      capability.fleuret.check ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center">
                            <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                          </div>
                        </div>
                      ) : <XIcon />
                    ) : (
                      capability.fleuret
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg p-5">
            <h3 className="font-semibold text-center mb-4 text-sm">
              {t("comparison.header.traditional") || "Services Traditionnels"}
            </h3>
            <div className="space-y-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{capability.label}</span>
                  <span className="text-sm">
                    {typeof capability.traditional === 'object' ? (
                      capability.traditional.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      capability.traditional
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg p-5">
            <h3 className="font-semibold text-center mb-4 text-sm">
              {t("comparison.header.automated") || "Solutions Automatisées"}
            </h3>
            <div className="space-y-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{capability.label}</span>
                  <span className="text-sm">
                    {typeof capability.automated === 'object' ? (
                      capability.automated.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      capability.automated
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
