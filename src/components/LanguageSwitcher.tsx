import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="text-sm font-medium"
      >
        {language === 'fr' ? 'EN' : 'FR'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
