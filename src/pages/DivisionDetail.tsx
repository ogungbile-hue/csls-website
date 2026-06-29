import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, UserCheck, Compass, Target, BookOpen, Layers, Users, Globe2, Sparkles } from "lucide-react";
import { divisionsData } from "../data/divisions";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function DivisionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const division = divisionsData.find((d) => d.id === id);

  if (!division) {
    return (
      <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pt-32">
          <h2 className="text-4xl font-bold mb-4">Division Not Found</h2>
          <p className="text-muted-foreground mb-8">The requested research division does not exist or has been relocated.</p>
          <Link to="/" className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const IconComponent = division.icon;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-cyan-500/30">
      <Navbar />

      <div className="flex-1 pt-28 md:pt-36 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        
        {/* Navigation / Back Button */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <button
            onClick={() => navigate("/#divisions")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Divisions
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/60 overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start md:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <IconComponent className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1 block">CSLS Research Division</span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{division.title}</h1>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 self-start md:self-auto min-w-[260px]">
              <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> Division Leadership
              </div>
              <div className="text-sm font-semibold text-foreground/90">{division.leader}</div>
            </div>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column (Left 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            
            {/* Introduction */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-card/60 border border-border/40 space-y-4"
            >
              <h2 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Overview & Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {division.introduction}
              </p>
            </motion.section>

            {/* Mandate & Units (If present) */}
            {(division.mandate || division.units) && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {division.mandate && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Target className="w-4 h-4" /> Mandate
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{division.mandate}</p>
                  </div>
                )}
                {division.units && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Division Units
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{division.units}</p>
                  </div>
                )}
              </motion.section>
            )}

            {/* Vision & Mission Grid */}
            {(division.vision || division.mission) && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {division.vision && (
                  <div className="p-6 rounded-3xl bg-card border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Compass className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Vision</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{division.vision}</p>
                  </div>
                )}
                {division.mission && (
                  <div className="p-6 rounded-3xl bg-card border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Mission</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{division.mission}</p>
                  </div>
                )}
              </motion.section>
            )}

            {/* Projects & Impact */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-8 rounded-3xl bg-card border border-border/50 space-y-6"
            >
              {division.currentProjects && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <BookOpen className="w-5 h-5 text-cyan-400" /> Current Projects
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{division.currentProjects}</p>
                </div>
              )}

              {(division.collaborationImpact || division.globalPartnershipImpact || division.innovationImpact || division.communityImpact || division.terrestrialBenefits) && (
                <div className="pt-4 border-t border-border/30 space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <Globe2 className="w-5 h-5 text-cyan-400" /> Impact & Applications
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {division.collaborationImpact || division.globalPartnershipImpact || division.innovationImpact || division.communityImpact || division.terrestrialBenefits}
                  </p>
                </div>
              )}
            </motion.section>

          </div>

          {/* Sidebar Column (Right 1 col) */}
          <div className="flex flex-col gap-8">
            
            {/* Key Research Areas */}
            {division.keyResearchAreas && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-3xl bg-card border border-border/50 space-y-4"
              >
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Key Research Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {division.keyResearchAreas.split(",").map((area) => (
                    <span key={area.trim()} className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
                      {area.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Staff Members List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.45 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-4"
            >
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" /> Division Staff Members
              </h3>
              <p className="text-xs text-muted-foreground">Key personnel contributing to research and technical operations.</p>
              <div className="flex flex-col gap-2 pt-2">
                {division.staffMembers.map((staff) => (
                  <div key={staff} className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/90 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {staff}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
