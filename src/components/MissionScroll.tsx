import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { Sparkles } from "lucide-react";

export function MissionScroll() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden border-t border-border/30">
      {/* Background Video Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-full blur-[2px]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          {...fadeUp(0.1)}
          className="p-8 md:p-16 lg:p-20 rounded-[2.5rem] bg-card/40 backdrop-blur-2xl border border-foreground/10 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

          <div className="relative z-10">
            <div className="mb-8 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.4] md:leading-[1.5] tracking-tight font-light text-foreground/80 max-w-4xl mx-auto">
              The Centre for Space Life Sciences is devoted to{" "}
              <span className="font-serif italic font-normal text-foreground">revolutionary interdisciplinary research</span>{" "}
              with cutting-edge technologies and fostering international collaborations exploring the effects of{" "}
              <span className="text-cyan-400 font-medium">space environments on biological systems</span>{" "}
              that benefit humanity on{" "}
              <span className="text-foreground font-medium">Earth and in space.</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
