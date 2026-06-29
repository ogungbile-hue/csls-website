import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, UserCheck, Landmark, MessageSquare 
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      const formattedSubject = subjectParam.toLowerCase() === "collaboration" 
        ? "Collaboration with CSLS" 
        : subjectParam;
      setFormData(prev => ({ ...prev, subject: formattedSubject }));
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      <div className="flex-1 pt-28 md:pt-36 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        
        {/* 1. CONTACT HERO HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-14 rounded-3xl bg-card border border-border/60 overflow-hidden mb-12 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <MessageSquare className="w-3.5 h-3.5" /> Direct Communication
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Contact Us</h1>
            
            <p className="text-muted-foreground text-base md:text-xl font-light leading-relaxed">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </motion.div>

        {/* 2. LAYOUT STRUCTURE (2-Column Grid on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* COLUMN 1: Institutional Leadership Contacts & Business Hours (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Leadership Context Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-6 shadow-lg"
            >
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-white/10 pb-3">
                <Landmark className="w-5 h-5 text-cyan-400" /> Executive Directorate
              </h2>

              {/* Director General Context */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Director General / CE, NASRDA</div>
                <h3 className="text-sm font-bold text-foreground">Dr. Matthew Olumide Adepoju</h3>
                <p className="text-[11px] text-muted-foreground font-medium">FEGOSON, Fpme, FNCA, FISS</p>
              </div>

              {/* Centre Leadership Context */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Ag. Director, CSLS Ibadan</div>
                <h3 className="text-sm font-bold text-foreground">Dr. Olakunle Rufus Oladosu</h3>
                <p className="text-[11px] text-muted-foreground font-medium">mNip, mNurs, mNimets, mursi_ng</p>
              </div>
            </motion.div>

            {/* Direct Contacts Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-5 shadow-lg"
            >
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-white/10 pb-3">
                <UserCheck className="w-5 h-5 text-cyan-400" /> Direct Information
              </h2>

              <ul className="space-y-4 text-xs md:text-sm text-muted-foreground">
                <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-0.5">Physical Address</strong>
                    Center for Space Life Sciences, NASRDA, University of Ibadan, Ibadan, Oyo State, Nigeria.
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-0.5">Email Communications</strong>
                    <a href="mailto:kunle.oladosu@arcstee.org.ng" className="hover:text-cyan-300 transition-colors block">kunle.oladosu@arcstee.org.ng</a>
                    <a href="mailto:koladosu13@gmail.com" className="hover:text-cyan-300 transition-colors block">koladosu13@gmail.com</a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-0.5">Phone Line</strong>
                    <a href="tel:+2348127567410" className="hover:text-cyan-300 transition-colors">+234-812-756-7410</a>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl bg-card border border-border/50 space-y-4 shadow-lg"
            >
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" /> Business Hours
              </h3>
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground font-light">
                <div className="flex justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-foreground">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span>Saturday</span>
                  <span className="font-semibold text-foreground">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 text-muted-foreground/60">
                  <span>Sunday & Public Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* COLUMN 2: "Send us a Message" Interactive Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 md:p-12 rounded-3xl bg-card border border-border/60 space-y-8 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Send us a Message</h2>
                <p className="text-xs md:text-sm text-muted-foreground font-light">
                  Fill out the form below and our institutional secretariat will respond promptly.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground">Message Sent Successfully!</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Thank you for contacting CSLS NASRDA. We will review your inquiry and get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground/90 uppercase tracking-wider block">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Dr. John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground/90 uppercase tracking-wider block">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground/90 uppercase tracking-wider block">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground/90 uppercase tracking-wider block">Subject</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Research Collaboration Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/90 uppercase tracking-wider block">Message</label>
                    <textarea 
                      required 
                      rows={5}
                      placeholder="Write your message details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
