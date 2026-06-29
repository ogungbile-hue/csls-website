import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-16 pb-12 px-6 md:px-16 lg:px-24 border-t border-border/10 bg-black text-foreground relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/10 relative z-10">
        
        {/* Brand Column (2 cols wide on large screens) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="CSLS NASRDA Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight tracking-wide">CSLS</span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-semibold">
                NASRDA CENTRE FOR SPACE LIFE SCIENCES
              </span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            Pioneering space life sciences, biotechnology, space medicine, and environmental life support systems under the National Space Research and Development Agency (NASRDA).
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://nasrda.gov.ng" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="NASRDA Website" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divisions Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">Research Divisions</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/divisions/asm" className="hover:text-foreground transition-colors flex items-center gap-1 group">
                Astrobiology & Medicine (ASM)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/divisions/aeols" className="hover:text-foreground transition-colors flex items-center gap-1 group">
                Agriculture & Earth (AEOLS)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/divisions/sict" className="hover:text-foreground transition-colors flex items-center gap-1 group">
                Space ICT (SICT)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/divisions/education-outreach" className="hover:text-foreground transition-colors flex items-center gap-1 group">
                Education & Outreach
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/divisions/stlss" className="hover:text-foreground transition-colors flex items-center gap-1 group">
                Space Tech & Life (STLSS)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home Overview</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/#divisions" className="hover:text-foreground transition-colors">Our Mandate</Link></li>
            <li><Link to="/#leadership" className="hover:text-foreground transition-colors">Directorate & Staff</Link></li>
            <li><Link to="/#journals" className="hover:text-foreground transition-colors">Publications & Journals</Link></li>
            <li><Link to="/#news" className="hover:text-foreground transition-colors">News & Announcements</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">Contact & Location</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-snug">University of Ibadan, Ibadan, Oyo State, Nigeria.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:kunle.oladosu@arcstee.org.ng" className="hover:text-foreground transition-colors truncate">
                kunle.oladosu@arcstee.org.ng
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="tel:+2348127567410" className="hover:text-foreground transition-colors">
                +234-812-756-7410
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/70 relative z-10">
        <p>&copy; {new Date().getFullYear()} Center for Space Life Sciences (CSLS) - NASRDA. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="https://nasrda.gov.ng" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">NASRDA HQ</a>
        </div>
      </div>
    </footer>
  );
}
