import { Link, useLocation } from "react-router-dom";
import { Sword, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoEpita from "@/assets/logo-epita.png";
import logoEns from "@/assets/logo-ens.png";
import logoMva from "@/assets/logo-mva.png";

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
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Partenaires
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background p-0 w-[250px]">
                <div className="flex gap-6 p-4 overflow-x-scroll overflow-y-hidden scrollbar-thin">
                  <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-32">
                    <img src={logoEpita} alt="EPITA" className="h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-32">
                    <img src={logoEns} alt="ENS" className="h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-32">
                    <img src={logoMva} alt="Mathématiques Vision Apprentissage" className="h-16 w-auto object-contain" />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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
