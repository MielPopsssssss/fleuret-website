import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoFleuret from "@/assets/logo-fleuret.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/#partners", label: t("nav.partners") },
    { path: "/#team", label: t("nav.about") },
  ];

  return (
    <header
      className="py-2 sticky top-0 bg-background/95 backdrop-blur-sm z-50"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche - plus grand avec overflow visible */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0 -my-4"
            aria-label="Retour à l'accueil Fleuret AI"
          >
            <img
              src={logoFleuret}
              alt="Logo Fleuret AI"
              className="h-20 w-auto object-contain"
              width="80"
              height="80"
            />
          </Link>

          {/* Navigation centrée dans une barre */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-2 py-1"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-full",
                  location.pathname === item.path 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:bg-secondary/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <span className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Login
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
