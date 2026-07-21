import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-28 md:pt-32">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          src="https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/Spacelife.mp4"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-foreground/80">
            Pioneering Africa's Space Life Science Frontier
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.1] mb-6"
        >
          Biological <span className="font-serif italic font-normal text-foreground/90">Adaptation</span><br />
          Beyond Earth
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg text-[hsl(var(--hero-subtitle))] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          The National Space Research and Development Agency's advanced center for astrobiology, space medicine, and earth observation systems based at the University of Ibadan.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="liquid-glass flex items-center p-1.5 rounded-full w-full max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-medium text-sm px-6 py-2.5 rounded-full transition-colors hover:bg-foreground/90"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
