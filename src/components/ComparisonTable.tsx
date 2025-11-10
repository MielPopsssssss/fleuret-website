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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("comparison.title") || "Fleuret vs Services Traditionnels vs Solutions Automatisées"}
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[800px] border border-border rounded-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-muted/30">
              <div className="p-6 border-r border-border">
                <h3 className="font-bold text-lg">{t("comparison.header.capability") || "Capacité"}</h3>
              </div>
              <div className="p-6 border-r border-border">
                <h3 className="font-semibold text-center">
                  {t("comparison.header.traditional") || "Services de Pentest Traditionnels"}
                </h3>
              </div>
              <div className="p-6 border-r border-border bg-primary/5">
                <h3 className="font-bold text-center text-primary">
                  {t("comparison.header.fleuret") || "Pentest IA Agentique Fleuret"}
                </h3>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-center">
                  {t("comparison.header.automated") || "Pentest Automatisé"}
                </h3>
              </div>
            </div>

            {/* Rows */}
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className={`grid grid-cols-4 ${index !== capabilities.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="p-6 border-r border-border font-medium bg-muted/10">
                  {capability.label}
                </div>
                <div className="p-6 border-r border-border text-center">
                  {typeof capability.traditional === 'object' ? (
                    capability.traditional.check ? <CheckIcon /> : <XIcon />
                  ) : (
                    <span className="text-muted-foreground">{capability.traditional}</span>
                  )}
                </div>
                <div className="p-6 border-r border-border text-center bg-primary/5">
                  {typeof capability.fleuret === 'object' ? (
                    capability.fleuret.check ? <CheckIcon /> : <XIcon />
                  ) : (
                    <span className="font-semibold text-foreground">{capability.fleuret}</span>
                  )}
                </div>
                <div className="p-6 text-center">
                  {typeof capability.automated === 'object' ? (
                    capability.automated.check ? <CheckIcon /> : <XIcon />
                  ) : (
                    <span className="text-muted-foreground">{capability.automated}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          <div className="border border-primary bg-primary/5 rounded-lg p-6">
            <h3 className="font-bold text-lg text-primary mb-4 text-center">
              {t("comparison.header.fleuret") || "Pentest IA Agentique Fleuret"}
            </h3>
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="font-medium text-sm">{capability.label}</span>
                  <span className="text-sm font-semibold">
                    {typeof capability.fleuret === 'object' ? (
                      capability.fleuret.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      capability.fleuret
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="font-semibold text-center mb-4">
              {t("comparison.header.traditional") || "Services Traditionnels"}
            </h3>
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
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

          <div className="border border-border rounded-lg p-6">
            <h3 className="font-semibold text-center mb-4">
              {t("comparison.header.automated") || "Solutions Automatisées"}
            </h3>
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
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
