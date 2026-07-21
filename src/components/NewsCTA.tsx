import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../lib/animations";
import Hls from "hls.js";

const newsItems = [
  {
    date: "JANUARY 30, 2026",
    title: "Federal Government Allocates N10bn to NASRDA for Advanced Security and Space Life Infrastructure Development",
    readTime: "4 min read"
  },
  {
    date: "JANUARY 28, 2026",
    title: "CSLS Establishes Advanced Multi-Crop Farm Planning Advisory Framework at University of Ibadan Hub",
    readTime: "3 min read"
  }
];

export function NewsCTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden">
      {/* HLS Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Visual Protection Overlay */}
        <div className="absolute inset-0 bg-background/45 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Institutional <span className="font-serif italic font-normal text-foreground/90">Updates.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The latest directives, developments, and technological deployments from the Centre for Space Life Sciences.
          </p>
        </motion.div>

        <div className="space-y-4 mb-20 max-w-3xl mx-auto">
          {newsItems.map((item, i) => (
            <motion.a
              href="#"
              key={i}
              {...fadeUp(0.2 + i * 0.1)}
              className="group block p-6 md:p-8 bg-card/60 backdrop-blur-md border border-foreground/5 hover:border-foreground/20 hover:bg-foreground/5 rounded-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{item.date}</span>
                <span className="text-xs font-mono text-muted-foreground/60">{item.readTime}</span>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-foreground/90 group-hover:text-foreground transition-colors leading-snug">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors cursor-pointer">
            Submit Manuscript
          </button>
          <Link 
            to="/contact?subject=Collaboration" 
            className="w-full sm:w-auto liquid-glass px-8 py-3.5 text-foreground font-medium rounded-full hover:bg-foreground/10 transition-colors flex items-center justify-center text-center cursor-pointer"
          >
            Collaborate with CSLS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
