import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="flex items-center gap-8 xl:gap-12">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src="/images/nasrda-csls-logo.jpg" alt="CSLS NASRDA Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
          <div className="flex flex-col shrink-0">
            <span className="font-bold text-lg leading-tight tracking-wide group-hover:text-cyan-400 transition-colors">CSLS</span>
            <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-medium">NASRDA CENTRE</span>
          </div>
        </Link>

        {/* Desktop Nav - Visible on xl screens and up */}
        <ul className="hidden xl:flex items-center gap-5 xl:gap-6">
          {navItems.map((item, i) => {
            const active = isItemActive(item.path);
            return (
              <li key={item.name} className="flex items-center gap-5 xl:gap-6 shrink-0">
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm transition-all duration-200 relative py-1 whitespace-nowrap",
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

      <div className="flex items-center gap-3 shrink-0">
        {/* Desktop Social Icons */}
        <a href="#" aria-label="LinkedIn" className={cn("hidden sm:flex liquid-glass w-10 h-10 rounded-full items-center justify-center text-foreground hover:bg-white/5 transition-colors")}>
          <Linkedin className="w-4 h-4 fill-current" />
        </a>
        <a href="#" aria-label="X (formerly Twitter)" className={cn("hidden sm:flex liquid-glass w-10 h-10 rounded-full items-center justify-center text-foreground hover:bg-white/5 transition-colors")}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Mobile Menu Toggle Button - Visible up to xl screens */}
        <button
          className="xl:hidden liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/5 transition-colors ml-1 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/10 xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => {
                const active = isItemActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-3 border-b border-white/5 transition-colors",
                      active ? "text-cyan-400" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile Social Links - Only visible on very small screens since sm handles desktop icons */}
              <div className="flex items-center gap-4 pt-4 pb-2 sm:hidden">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a href="#" aria-label="X (formerly Twitter)" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
