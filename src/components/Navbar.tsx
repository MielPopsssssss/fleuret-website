import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { cn } from "@/lib/utils";
import logoFleuret from "@/assets/logo-fleuret.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/#", label: t("nav.home") },
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
          {/* Logo à gauche */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0 -my-4"
            aria-label="Retour à l'accueil Fleuret AI"
          >
            <img
              src={logoFleuret}
              alt="Logo Fleuret AI"
              className="h-16 md:h-20 w-auto object-contain"
              width="80"
              height="80"
            />
          </Link>

          {/* Navigation centrée - Desktop */}
          <nav
            className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-2 py-1"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <HashLink
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-full",
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-secondary/80",
                )}
                smooth
              >
                {item.label}
              </HashLink>
            ))}
          </nav>

          {/* Actions à droite - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Login
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/10 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg",
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-secondary/80",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-2 mt-2 border-t border-primary/10 pt-4">
                <LanguageSwitcher />
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  Login
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
