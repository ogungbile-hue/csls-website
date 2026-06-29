import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Briefcase, Award, Sparkles, Compass, CheckCircle2, BookOpen, UserCheck } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function DirectorBiography() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      <div className="flex-1 pt-28 md:pt-36 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        
        {/* Back Navigation Button */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <button
            onClick={() => navigate("/#leadership")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Leadership Overview
          </button>
        </motion.div>

        {/* 1. BIOGRAPHY HEADER BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-14 rounded-3xl bg-card border border-border/60 overflow-hidden mb-12 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <UserCheck className="w-3.5 h-3.5" /> Executive Biography
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Dr. Kunle Oladosu</h1>
              <p className="text-lg md:text-xl text-cyan-400 font-medium mt-2">Acting Director, Centre for Space Life Sciences (CSLS)</p>
            </div>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light pt-2 border-t border-white/10">
              Dr. Kunle Oladosu assumed office as the Acting Director of the Centre for Space Life Sciences on November 19, 2025. With over 15 years of experience in space science education, atmospheric research, and institutional management, Dr. Oladosu brings a wealth of expertise and vision to lead the Centre towards greater heights of scientific excellence and innovation.
            </p>
          </div>
        </motion.div>

        {/* 2. LAYOUT STRUCTURE (2-Column Grid on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* COLUMN 1: Core Details & Professional Experience (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Educational Background */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border/50 space-y-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                Educational Background
              </h2>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-foreground">PhD in Physics (Atmospheric Physics)</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">2008</span>
                  </div>
                  <p className="text-xs text-cyan-300 font-medium">Obafemi Awolowo University, Ile-Ife, Nigeria</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 italic border-t border-white/5 font-light">
                    Dr. Oladosu's doctoral research focused on atmospheric physics phenomena with implications for space weather monitoring and telecommunications. His advanced studies laid the foundation for his future work in space science and environmental research.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">Master of Science in Physics</h4>
                    <p className="text-xs text-muted-foreground">Obafemi Awolowo University, Ile-Ife</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">Bachelor of Science in Physics</h4>
                    <p className="text-xs text-muted-foreground">Obafemi Awolowo University, Ile-Ife</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Professional Experience Timeline */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border/50 space-y-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-indigo-400" />
                </div>
                Professional Experience
              </h2>

              <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-8 my-4">
                {[
                  {
                    role: "Acting Director",
                    period: "2025 – Present",
                    org: "Centre for Space Life Sciences (CSLS)",
                    desc: "Providing strategic leadership to advance the Centre's research agenda and institutional development."
                  },
                  {
                    role: "Deputy Director (Scientist) & Head of Atmospheric & Allied Sciences",
                    period: "2023 – 2025",
                    org: "ARCSSTE-E",
                    desc: "Led research initiatives, coordinated scientific teams, and managed departmental resources while supervising postgraduate research programs."
                  },
                  {
                    role: "Head of Postgraduate Programmes",
                    period: "2010 – 2023",
                    org: "African Regional Centre for Space Science and Technology Education (ARCSSTE-E)",
                    desc: "Established and managed comprehensive postgraduate curriculum, facilitating international academic partnerships and coordinating advanced research projects."
                  },
                  {
                    role: "Lecturer, Department of Physics",
                    period: "2008 – 2015",
                    org: "Federal University of Technology Akure, Nigeria",
                    desc: "Conducted cutting-edge research in atmospheric physics and mentored numerous graduate students in theoretical and applied physics."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
                    
                    <div className="space-y-1.5 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-foreground">{item.role}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold">{item.period}</span>
                      </div>
                      <p className="text-xs font-medium text-cyan-400">{item.org}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* COLUMN 2: Strategy, Focus, and Achievements (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Areas of Expertise */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-4 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Atmospheric Physics & Space Science",
                  "Space Science Education & Training",
                  "Research Management & Leadership",
                  "Graduate Education & Mentorship",
                  "International Scientific Collaborations",
                  "Climate & Environmental Science",
                  "Remote Sensing Applications",
                  "Space Weather & Ionospheric Studies"
                ].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Research Interests & Focus Areas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-3 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" /> Research Interests & Focus Areas
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                Ionospheric variations and electromagnetic wave propagation in the ionosphere. Space weather effects on communication systems, ionospheric dynamics, climate change, African development issues via space science, and human adaptation to space environments.
              </p>
            </motion.div>

            {/* Notable Achievements & Contributions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-4 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" /> Notable Achievements
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground font-light">
                {[
                  "Established and supervised numerous postgraduate research programs at ARCSSTE-E.",
                  "Published research in peer-reviewed international journals and conferences.",
                  "Facilitated international capacity-building programs in space science across Africa.",
                  "Contributed to the development of space science curriculum at a regional level.",
                  "Mentored over 100 postgraduate students in space science and atmospheric physics.",
                  "Recognized for significant contributions to space science education and research.",
                  "Built strategic international partnerships with leading space research institutions."
                ].map((achieve, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{achieve}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

        {/* 3. FULL-WIDTH BOTTOM SECTION: LEADERSHIP PHILOSOPHY & VISION FOR C.S.L.S */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-card to-indigo-500/10 border border-cyan-500/30 space-y-8 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <Compass className="w-3.5 h-3.5" /> Strategic Direction
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Leadership Philosophy & Vision for C.S.L.S
            </h2>

            {/* Leadership Approach Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Leadership Approach Pillars</h3>
              <div className="flex flex-wrap gap-2">
                {["Scientific Excellence", "Capacity Building", "International Partnerships", "Practical Impact", "Diversity & Inclusion", "Institutional Development"].map((pillar, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white/10 text-foreground font-semibold text-xs border border-white/10">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision Quote Block */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 relative mt-6 space-y-2">
              <span className="text-4xl text-cyan-400 font-serif leading-none select-none">“</span>
              <p className="text-base md:text-xl font-serif italic text-foreground/90 leading-relaxed -mt-4">
                To position the Centre for Space Life Sciences as a leading African research and education institution that conducts cutting-edge research linking space science with biological and environmental sciences, serves as a training hub, bridges research with national development, and acts as a catalyst for international knowledge exchange.
              </p>
              <div className="pt-4 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">— Dr. Kunle Oladosu, Acting Director CSLS</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}
