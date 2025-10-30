import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoFleuret from "@/assets/logo-fleuret.png";
const Navbar = () => {
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "Accueil"
  }];
  return <header className="border-b border-primary/10 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logoFleuret} alt="Fleuret AI" className="h-16 w-auto object-contain" />
            
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === item.path ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </Link>)}
            
            <Link to="/#partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Partenaires
            </Link>
          </nav>

          <Link to="/waitlist">
            <Button>Rejoindre notre waitlist</Button>
          </Link>
        </div>
      </div>
    </header>;
};
export default Navbar;