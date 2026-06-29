import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { fadeUp } from "../lib/animations";
import { divisionsData } from "../data/divisions";

export function DivisionsGrid() {
  return (
    <section id="divisions" className="pt-32 md:pt-48 pb-16 container max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h2 
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium mb-6"
        >
          Core Technical <span className="font-serif italic text-foreground/90 font-normal">Research.</span>
        </motion.h2>
        <motion.p 
          {...fadeUp(0.2)}
          className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed"
        >
          Our five primary divisions executing cutting-edge applied science and technological mandates to advance Africa's space research capabilities.
        </motion.p>
      </div>

      {/* 5 Cards Responsive Grid: 1 col on mobile, 2 cols on md, 3 cols on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {divisionsData.map((div, i) => {
          const IconComponent = div.icon;
          return (
            <motion.div
              key={div.id}
              {...fadeUp(0.1 + i * 0.08)}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/50 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 flex flex-col flex-1">
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 flex items-center justify-center mb-6 transition-colors">
                  <IconComponent className="w-6 h-6 text-foreground/80 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight mb-3 text-foreground group-hover:text-cyan-300 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {div.title}
                </h3>
                
                {/* Truncated Introduction/Mandate */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {div.introduction}
                </p>

                {/* Division Leadership & Staff Snippet */}
                <div className="mt-auto pt-6 border-t border-border/20 space-y-4 mb-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-1">Division Head</div>
                    <div className="font-medium text-xs text-foreground/90 truncate">{div.leader}</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2 flex items-center gap-1">
                      <Users className="w-3 h-3 text-muted-foreground" /> Staff Summary ({div.staffMembers.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-14 overflow-hidden">
                      {div.staffMembers.slice(0, 3).map((member) => (
                        <span key={member} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-muted-foreground border border-white/5 truncate max-w-[140px]">
                          {member}
                        </span>
                      ))}
                      {div.staffMembers.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-cyan-400/90 font-medium border border-white/5">
                          +{div.staffMembers.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Action Button */}
              <div className="relative z-10 pt-2">
                <Link
                  to={`/divisions/${div.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 text-sm font-medium text-foreground hover:text-cyan-300 transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
