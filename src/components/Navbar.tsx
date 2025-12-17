import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoFleuret from "@/assets/logo-fleuret.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const navItems = [
    {
      path: "/",
      label: t("nav.home"),
    },
    {
      path: "/#partners",
      label: t("nav.partners"),
    },
  ];
  return (
    <header
      className="border-b border-primary/10 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Retour à l'accueil Fleuret AI"
          >
            <img
              src={logoFleuret}
              alt="Logo Fleuret AI - Solution de pentesting automatisé"
              className="h-32 w-auto object-contain"
              width="128"
              height="128"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/" aria-label="Devenir early adopter Fleuret AI">
              <Button>{t("nav.waitlist")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
