import { motion } from "framer-motion";
import { 
  ShieldCheck, Target, Award, Rocket, Globe2, Sparkles, Building2, 
  Dna, Globe, Cpu, GraduationCap, Users, Network, Landmark, Wallet, 
  FileText, Scale, Radio, ChevronRight, Briefcase
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      <div className="flex-1 pt-28 md:pt-36 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        
        {/* 1. HERO SECTION BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-16 rounded-3xl bg-card border border-border/60 overflow-hidden mb-16 shadow-2xl"
        >
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <Building2 className="w-3.5 h-3.5" /> Institutional Overview
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              About <span className="font-serif italic text-cyan-400 font-normal">CSLS - NASRDA.</span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-light">
              Learn more about our story, mission, and organizational structure.
            </p>
          </div>
        </motion.div>

        {/* 2. VISION, MISSION & CORE OBJECTIVES */}
        <div className="space-y-16 mb-24">
          
          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-cyan-500/30 transition-all duration-300 space-y-4 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Mission Statement</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                The Centre for Space Life Sciences is devoted to revolutionary interdisciplinary research with cutting-edge technologies and fostering international collaborations exploring the effects of space environments on biological systems that benefit humanity on Earth and in space.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-indigo-500/30 transition-all duration-300 space-y-4 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Vision Statement</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                To pioneer Africa's understanding of space life sciences through innovative research, and Solutions that promote quality health, sustainable well-being beyond the earth.
              </p>
            </motion.div>
          </div>

          {/* Core Objectives Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-3xl bg-card/60 border border-border/40 space-y-10"
          >
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                <Award className="w-4 h-4" /> Institutional Goals
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Core Objectives</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Interdisciplinary Research",
                  desc: "Conduct interdisciplinary research, exploring astrobiology, space medicine, and the effects of living organisms.",
                  icon: Dna
                },
                {
                  title: "Habitation & Life Support",
                  desc: "Develop innovative solutions for space habitation and life support systems.",
                  icon: Cpu
                },
                {
                  title: "Space Agriculture & Security",
                  desc: "Apply space-based technologies to enhancing crop yields, disease detection and resource management.",
                  icon: Globe
                },
                {
                  title: "Global & National Partnerships",
                  desc: "Foster national and global partnerships with relevant institutions to accelerate advancements in space life sciences.",
                  icon: Globe2
                },
                {
                  title: "Capacity Building & STEM",
                  desc: "Build the capacity of indigenous generation of scientists, engineers, and Leaders in space life science.",
                  icon: GraduationCap
                }
              ].map((obj, index) => {
                const ObjIcon = obj.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 space-y-3 group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <ObjIcon className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{obj.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">{obj.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* 3. ORGANIZATIONAL STRUCTURE CHART (CSLS ORGANOGRAM) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 pt-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <Network className="w-3.5 h-3.5" /> Governance & Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Organizational Structure
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-light">
              Interactive structural organogram representing the executive directorate, attached advisory units, and core operational divisions.
            </p>
          </div>

          {/* ORGANOGRAM GRAPHICAL CONTAINER */}
          <div className="p-6 md:p-12 rounded-3xl bg-card border border-border/60 space-y-12 relative overflow-hidden shadow-2xl">
            
            {/* Top Tier: DIRECTOR & ASSISTANT DIRECTOR */}
            <div className="flex flex-col items-center relative z-10">
              <div className="px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 text-black font-extrabold text-lg md:text-xl shadow-xl shadow-cyan-500/20 tracking-wide flex items-center gap-3">
                <Landmark className="w-6 h-6" />
                DIRECTOR
              </div>
              <div className="w-0.5 h-6 bg-cyan-500/40 my-1" />
              <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/80 to-teal-400/80 text-black font-bold text-base shadow-lg shadow-cyan-500/10 tracking-wide flex items-center gap-2 backdrop-blur-sm border border-cyan-500/30">
                <Users className="w-5 h-5" />
                ASSISTANT DIRECTOR
              </div>
              <div className="w-0.5 h-8 bg-cyan-500/40 my-1" />
            </div>

            {/* Direct Executive Attachments (Side Nodes) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto">
              {/* Left Side Attachments */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 pb-2 border-b border-white/10">
                  <Briefcase className="w-4 h-4" /> Executive Attachments (West Wing)
                </div>
                <ul className="space-y-2.5 text-xs text-foreground/90 font-medium">
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    Media & Corporate Affairs
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    Library & Documentation
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    Consultancy Unit
                  </li>
                </ul>
              </div>

              {/* Right Side Attachments */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 pb-2 border-b border-white/10">
                  <Scale className="w-4 h-4" /> Executive Attachments (East Wing)
                </div>
                <ul className="space-y-2.5 text-xs text-foreground/90 font-medium">
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    Special Duties / Protocols
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    Local and International Collaborations
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    Legal Unit
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider Connector */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-0.5 h-10 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80" />
              <div className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Operational Divisions & Support Units
              </div>
              <div className="w-0.5 h-8 bg-cyan-500/60" />
            </div>

            {/* Core Operational Blocks Grid (7 Divisions/Blocks) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
              
              {/* 1. Administration Division */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-slate-300" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Administration Division</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> General Admin / Registry</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> Security, Transport, Maintenance & Promotion</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> NHS / NHE / Pension / Welfare</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> Human Resources, Staff Training & Discipline</li>
                </ul>
              </div>

              {/* 2. Finance and Account Division */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Finance and Account Division</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Planning Project Monitoring & Evidence</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Liability Management</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Other Charges Unit</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Head Accounts</li>
                </ul>
              </div>

              {/* 3. Astrobiology and Space Medicine */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <Dna className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Astrobiology & Space Medicine</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" /> Astrobiology & Exoplanetary Science</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" /> Space Medicine</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" /> Human Health in Space</li>
                </ul>
              </div>

              {/* 4. Space Agriculture and Earth Observation */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Space Agriculture & Earth Obs.</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Atmospheric & Weather Monitoring</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Precision Agriculture</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Data & Resource Management</li>
                </ul>
              </div>

              {/* 5. Space Security and Intelligence */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Radio className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Space Security & Intelligence</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /> Space-Based Assets</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /> Space & Network Security</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /> Military Intelligence</li>
                </ul>
              </div>

              {/* 6. Space Life Sciences Education & Outreach */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Education & Outreach</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> Space Life Outreachers</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> Science Trainings & Awareness</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> Short Courses & Specialized Programs</li>
                </ul>
              </div>

              {/* 7. Space Tech and Life Support Systems */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Space Tech & Life Support (STLSS)</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground pt-3 border-t border-white/5">
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> Space Travel Habitation Unit</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> Instrumentation & Innovative Tech</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" /> Maintenance & Technical Support</li>
                </ul>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}
