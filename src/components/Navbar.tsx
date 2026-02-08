import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { cn } from "@/lib/utils";
import logoSymbol from "@/assets/logo-symbol.svg";
import logoWordmark from "@/assets/logo-wordmark.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/#home", label: t("nav.home") },
    { path: "/#partners", label: t("nav.partners") },
    { path: "/#team", label: t("nav.about") },
    { path: "/#comparison", label: t("nav.whyUs") },
  ];

  return (
    <header
      className="py-2 sticky top-0 bg-transparent backdrop-blur-sm z-50"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0 -my-4"
            aria-label="Retour à l'accueil Fleuret AI"
          >
            <img src={logoSymbol} alt="" className="h-10 md:h-12 w-auto object-contain" width="34" height="59" />
            <img src={logoWordmark} alt="Fleuret" className="h-10 md:h-12 w-auto object-contain" width="49" height="12" />
          </Link>

          {/* Navigation centrée - Desktop/Tablette */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-2 py-1"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <HashLink
                key={item.path}
                to={item.path}
                className={cn(
                  "text-xs xl:text-sm font-medium transition-colors hover:text-primary px-2 xl:px-4 py-2 rounded-full whitespace-nowrap",
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
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link to="/demo">
              <Button variant="outline" size="sm" className="text-xs xl:text-sm px-2 xl:px-3 whitespace-nowrap">
                {t("hero.cta.demo")}
              </Button>
            </Link>
            <HashLink to="/#waitlist" smooth>
              <Button size="sm" className="text-xs xl:text-sm px-2 xl:px-3 whitespace-nowrap">
                {t("hero.cta.waitlist")}
              </Button>
            </HashLink>
            <LanguageSwitcher />
          </div>
          
          {/* Actions tablette */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Link to="/demo">
              <Button variant="outline" size="sm" className="text-xs px-2 whitespace-nowrap">
                {t("hero.cta.demo")}
              </Button>
            </Link>
            <HashLink to="/#waitlist" smooth>
              <Button size="sm" className="text-xs px-2 whitespace-nowrap">
                {t("nav.waitlist")}
              </Button>
            </HashLink>
            <LanguageSwitcher />
          </div>

          {/* Mobile/Tablette menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile/Tablette menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary/10 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <HashLink
                  key={item.path}
                  to={item.path}
                  smooth
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg",
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-secondary/80",
                  )}
                >
                  {item.label}
                </HashLink>
              ))}
              <div className="flex flex-col gap-2 px-4 py-2 mt-2 border-t border-primary/10 pt-4">
                <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    {t("hero.cta.demo")}
                  </Button>
                </Link>
                <HashLink to="/#waitlist" smooth onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full justify-center">
                    {t("hero.cta.waitlist")}
                  </Button>
                </HashLink>
                <div className="flex items-center justify-center pt-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
