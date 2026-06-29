import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../lib/animations";
import { ArrowUpRight } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-32 md:py-44 border-t border-border/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Portrait */}
          <motion.div 
            {...fadeUp(0.1)}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="" 
              alt="Dr. Olakunle Rufus Oladosu" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Fallback pattern for empty src */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center opacity-20">
              <div className="w-32 h-32 rounded-full border border-white/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-16 h-16 rounded-full border border-white/30 border-dashed animate-[spin_10s_linear_infinite_reverse]" />
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-2">Executive Leadership</div>
              <h3 className="text-2xl font-medium text-white">Dr. Olakunle Rufus Oladosu</h3>
              <p className="text-white/70 text-sm mt-1">Acting Director, CSLS</p>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              {...fadeUp(0.2)}
              className="text-4xl md:text-5xl font-medium tracking-tight mb-12"
            >
              Guiding the future of <span className="font-serif italic text-foreground/90 font-normal">Space Science.</span>
            </motion.h2>

            <motion.div {...fadeUp(0.3)} className="space-y-8">
              <div className="group relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors">
                <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-1.5 group-hover:bg-white transition-colors" />
                <h4 className="font-serif italic text-xl text-foreground/90 mb-2">Academic Foundations (2008)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Earned a PhD in Atmospheric Physics from Obafemi Awolowo University. Served as a foundational lecturer at the Department of Physics, Federal University of Technology Akure until 2015.
                </p>
              </div>

              <div className="group relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors">
                <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-1.5 group-hover:bg-white transition-colors" />
                <h4 className="font-serif italic text-xl text-foreground/90 mb-2">Strategic Program Development (2010 - 2023)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Led as the Head of Postgraduate Programmes at the African Regional Centre for Space Science and Technology Education in English (ARCSTEE), architecting the next generation of curriculum.
                </p>
              </div>

              <div className="group relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors">
                <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-1.5 group-hover:bg-white transition-colors" />
                <h4 className="font-serif italic text-xl text-foreground/90 mb-2">Executive Appointment (November 19, 2025)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Served as Deputy Director before his formal appointment as the Acting Director of the Centre for Space Life Sciences, charting a new visionary course for the agency.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="mt-12">
              <Link 
                to="/biography/dr-kunle-oladosu" 
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors group"
              >
                Read Full Biography
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
