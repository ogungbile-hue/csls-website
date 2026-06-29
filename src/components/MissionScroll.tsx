import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "../lib/utils";

const text = "The Centre for Space Life Sciences is devoted to revolutionary interdisciplinary research with cutting-edge technologies and fostering international collaborations exploring the effects of space environments on biological systems that benefit humanity on Earth and in space.";
const highlightWords = ["space", "environments", "biological", "systems", "humanity"];

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[1.5vw] mt-[1vw]">
      <motion.span
        style={{ opacity: isHighlight ? opacity : useTransform(progress, range, [0.15, 0.7]) }}
        className={cn(isHighlight ? "text-foreground font-medium" : "text-foreground")}
      >
        {children}
      </motion.span>
    </span>
  );
};

export function MissionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.1"]
  });

  const words = text.split(" ");
  
  // Format word matching slightly to handle punctuation if necessary, but here words are clean mostly.
  // Actually, "space environments", "biological systems", and "humanity"
  // Let's match purely by substring for the highlight
  const checkHighlight = (word: string) => {
    const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
    return highlightWords.includes(cleanWord) || 
           (cleanWord === "environments" && word.includes("environments"));
  };

  return (
    <section ref={containerRef} className="relative pt-0 pb-32 md:pb-44 flex items-center justify-center min-h-[120vh]">
      {/* Background Video Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-screen">
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

      <div className="relative z-10 container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.4] tracking-tight font-light text-center flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word 
                key={i} 
                progress={scrollYProgress} 
                range={[start, end]}
                isHighlight={checkHighlight(word)}
              >
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
