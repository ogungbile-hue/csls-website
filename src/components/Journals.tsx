import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { ArrowUpRight } from "lucide-react";

const journals = [
  {
    title: "Journal of Space Life Sciences",
    impactFactor: "4.5",
    editor: "Dr. Michael Chen",
    focus: "Microgravity physiology and long-duration spaceflight."
  },
  {
    title: "Space Medicine and Human Performance Quarterly",
    impactFactor: "3.8",
    editor: "Dr. Sarah Johnson",
    focus: "Astronaut health monitoring and countermeasures."
  },
  {
    title: "International Review of Astrobiology and Space Research",
    impactFactor: "5.2",
    editor: "Dr. James Patterson",
    focus: "Genetic studies and biotechnology applications."
  }
];

export function Journals() {
  return (
    <section id="journals" className="py-32 md:py-44 border-t border-border/30 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Featured Peer-Reviewed <span className="font-serif italic font-normal text-foreground/90">Publications.</span>
          </h2>
        </motion.div>

        {/* Video Banner */}
        <motion.div 
          {...fadeUp(0.2)}
          className="w-full aspect-[3/1] min-h-[300px] max-h-[500px] relative rounded-3xl overflow-hidden border border-foreground/10 mb-20"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-80"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <div className="text-[10px] font-bold tracking-widest text-foreground/60 uppercase mb-2">Scientific Contributions</div>
            <p className="text-xl md:text-3xl font-medium text-foreground max-w-xl leading-tight">
              Advancing global knowledge through rigorous academic publication.
            </p>
          </div>
        </motion.div>

        {/* Grid Array */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {journals.map((journal, i) => (
            <motion.div 
              key={i}
              {...fadeUp(0.3 + i * 0.1)}
              className="group flex flex-col p-8 rounded-2xl bg-card border border-border/50 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
                  IF: {journal.impactFactor}
                </span>
                <a href="#" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-foreground/80" />
                </a>
              </div>
              
              <h3 className="text-xl font-medium mb-4 leading-snug">{journal.title}</h3>
              
              <div className="mt-auto pt-8 space-y-4">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-1">Editor-in-Chief</div>
                  <div className="text-sm font-medium text-foreground/90">{journal.editor}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-1">Focus</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{journal.focus}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
