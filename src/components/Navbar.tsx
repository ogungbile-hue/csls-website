import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Divisions", path: "/#divisions" },
  { name: "Leadership", path: "/#leadership" },
  { name: "Journals", path: "/#journals" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();

  const isItemActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.replace("/", "");
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/20 border-b border-border/10">
      <div className="flex items-center gap-10 lg:gap-12">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/logo.webp" alt="CSLS NASRDA Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-wide group-hover:text-cyan-400 transition-colors">CSLS</span>
            <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-medium">NASRDA CENTRE</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-5 lg:gap-6">
          {navItems.map((item, i) => {
            const active = isItemActive(item.path);
            return (
              <li key={item.name} className="flex items-center gap-5 lg:gap-6">
                <Link 
                  to={item.path} 
                  className={cn(
                    "text-sm transition-all duration-200 relative py-1",
                    active 
                      ? "text-cyan-400 font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </Link>
                {i !== navItems.length - 1 && (
                  <span className="text-muted-foreground/30 text-xs">•</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" aria-label="LinkedIn" className={cn("liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/5 transition-colors")}>
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="#" aria-label="Twitter" className={cn("liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/5 transition-colors")}>
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" aria-label="External Link" className={cn("liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/5 transition-colors")}>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
