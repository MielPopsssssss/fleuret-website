import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSymbol from "@/assets/logo-symbol.svg";
import logoWordmark from "@/assets/logo-wordmark.svg";

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
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary flex items-center justify-center">
        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
  );

  const XIcon = () => (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-muted flex items-center justify-center">
        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );

  return (
    <section id="comparison" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-3">
            <span className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
              <img src={logoSymbol} alt="" className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-auto object-contain" width="34" height="59" />
              <img src={logoWordmark} alt="Fleuret" className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-auto object-contain" width="49" height="12" />
            </span>
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-tight text-center px-2">{t("comparison.title")}</span>
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto px-2 md:px-4 lg:px-8 py-4 -mx-2 md:mx-0">
          <div className="max-w-5xl mx-auto min-w-0 w-full">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4" style={{ minWidth: 'max-content' }}>
              {/* Column 1 - Labels */}
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                <div className="h-[60px] sm:h-[55px] md:h-[60px] p-2 sm:p-3 md:p-4 bg-muted/30 rounded-lg flex items-center">
                  <h3 className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-base leading-tight">{t("comparison.header.capability") || "Capacité"}</h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="h-[60px] sm:h-[55px] md:h-[60px] p-2 sm:p-3 md:p-4 font-medium bg-muted/10 rounded-lg flex items-center">
                    <span className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-tight">{capability.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Column 2 - Traditional */}
              <div className="border border-primary/30 rounded-lg p-1 sm:p-1.5 md:p-2 lg:p-3 space-y-1.5 sm:space-y-2 md:space-y-3 min-w-[90px] sm:min-w-[110px] md:min-w-[130px]">
                <div className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 bg-muted/30 rounded-lg flex items-center justify-center">
                  <h3 className="font-semibold text-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">
                    {t("comparison.header.traditional") || "Services Traditionnels"}
                  </h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 text-center rounded-lg flex items-center justify-center">
                    {typeof capability.traditional === 'object' ? (
                      capability.traditional.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      <span className="text-muted-foreground text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">{capability.traditional}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Column 3 - Fleuret (highlighted) */}
              <div className="relative z-10 sm:scale-[1.02] md:scale-105 min-w-[90px] sm:min-w-[110px] md:min-w-[130px]">
                <div className="border-2 border-primary rounded-lg bg-primary space-y-1.5 sm:space-y-2 md:space-y-3 p-1 sm:p-1.5 md:p-2 lg:p-3">
                  <div className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 flex items-center justify-center">
                    <h3 className="font-bold text-center text-primary-foreground text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">
                      {t("comparison.header.fleuret") || "Fleuret IA"}
                    </h3>
                  </div>
                  {capabilities.map((capability, index) => (
                    <div key={index} className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 text-center flex items-center justify-center">
                      {typeof capability.fleuret === 'object' ? (
                        capability.fleuret.check ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary-foreground flex items-center justify-center">
                              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" strokeWidth={2.5} />
                            </div>
                          </div>
                        ) : <XIcon />
                      ) : (
                        <span className="font-bold text-primary-foreground text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">{capability.fleuret}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 4 - Automated */}
              <div className="border border-primary/30 rounded-lg p-1 sm:p-1.5 md:p-2 lg:p-3 space-y-1.5 sm:space-y-2 md:space-y-3 min-w-[90px] sm:min-w-[110px] md:min-w-[130px]">
                <div className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 bg-muted/30 rounded-lg flex items-center justify-center">
                  <h3 className="font-semibold text-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">
                    {t("comparison.header.automated") || "Solutions Automatisées"}
                  </h3>
                </div>
                {capabilities.map((capability, index) => (
                  <div key={index} className="h-[60px] sm:h-[55px] md:h-[60px] p-1.5 sm:p-2 md:p-3 lg:p-4 text-center rounded-lg flex items-center justify-center">
                    {typeof capability.automated === 'object' ? (
                      capability.automated.check ? <CheckIcon /> : <XIcon />
                    ) : (
                      <span className="text-muted-foreground text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1">{capability.automated}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
