import { Link, useLocation } from "react-router-dom";
import { Sword } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/features", label: "Fonctionnalités" },
    { path: "/benchmark", label: "Benchmark" },
    { path: "/sovereignty", label: "Souveraineté" },
  ];

  return (
    <header className="border-b border-primary/10 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sword className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Fleuret AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/demo">
            <Button>Demander une démo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
