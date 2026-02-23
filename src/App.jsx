import React, { useState, useEffect } from 'react';
import { 
  Shield, Target, Database, Search, Cpu, Code, 
  Mail, Github, Linkedin, Terminal, ChevronRight, 
  Activity, Layers, ExternalLink, Send, Loader2, 
  Lock, Users, BarChart3, Globe, CheckCircle, ArrowRight
} from 'lucide-react';

// The execution environment provides the key at runtime
const apiKey = ""; 

export default function App() {
  const [aiInput, setAiInput] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAiAsk = async () => {
    if (!aiInput.trim()) return;
    setIsLoading(true);
    setAiOutput("");
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Analyze this IT risk scenario from a CISA perspective: ${aiInput}` }] }],
          systemInstruction: { 
            parts: [{ text: "You are a CISA-certified auditor. Provide a high-level risk assessment. Be professional, concise, and identify the relevant ISACA Domain (1-5). Offer a brutal but actionable remediation step." }] 
          }
        })
      });
      const result = await response.json();
      setAiOutput(result.candidates?.[0]?.content?.parts?.[0]?.text || "Analysis offline.");
    } catch (e) {
      setAiOutput("Strategic Failure: Unable to connect to Auditor Intelligence.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-neutral-200 antialiased">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="font-bold tracking-tighter text-lg uppercase">Master Builder</span>
          </a>
          <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#work" className="hover:text-blue-500 transition-colors">Work</a>
            <a href="#roadmap" className="hover:text-blue-500 transition-colors">Roadmap</a>
            <a href="#strategist" className="hover:text-blue-400 transition-colors">Strategist</a>
          </nav>
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">
            Get in Touch
          </a>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Activity size={12} className="animate-pulse" /> Infrastructure Status: Production
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] uppercase">
              Architecting <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic">Secure Governance.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed font-light">
              Transforming raw IT support experience into high-level <strong>Systems Assurance</strong>. 
              Specializing in data integrity, compliance frameworks, and automated risk management.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                Explore Projects <ChevronRight size={18} />
              </a>
              <a href="#roadmap" className="border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                Career Roadmap
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto text-neutral-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-6">The Narrative</h2>
                <h3 className="text-5xl font-bold tracking-tight mb-8 text-white">From Infrastructure Support to GRC Strategy.</h3>
                <div className="space-y-6 leading-relaxed">
                  <p>
                    My journey began in the trenches of IT support, where I learned the physical and logical realities of how systems fail. This "field experience" is now my greatest asset as I transition into <strong>Information Systems Auditing</strong>.
                  </p>
                  <p>
                    I don't just understand frameworks; I understand the systems they protect. With a foundation in <strong>ALX System Engineering</strong> and a <strong>BBA in Global Management</strong>, I bridge the gap between technical vulnerability and business risk.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Database size={24} className="text-blue-500" />, title: "Data Integrity", detail: "Expertise in managing and securing high-volume audit databases." },
                  { icon: <Lock size={24} className="text-green-500" />, title: "Access Control", detail: "Implementation of RBAC and Principle of Least Privilege." },
                  { icon: <Search size={24} className="text-purple-500" />, title: "Audit Trails", detail: "Building systems that leave an undeniable paper trail for verifiers." },
                  { icon: <Globe size={24} className="text-orange-500" />, title: "Global GRC", detail: "Aligning local operations with NIST and ISO standards." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
                    <div className="mb-4 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                    <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] mb-4">Case Studies</h2>
              <h3 className="text-5xl font-bold tracking-tight">Proof of Work.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { domain: "3 & 5", icon: <Layers size={24} className="text-blue-500" />, title: "Governance Engine", desc: "Architected the migration of 1.2TB of legacy audit data into a centralized, RBAC-governed Notion ecosystem." },
                { domain: "5", icon: <Users size={24} className="text-green-500" />, title: "IAM Ghost Hunter", desc: "Developed a PowerShell-based reconciliation tool to identify dormant user accounts across firm servers." },
                { domain: "1", icon: <Activity size={24} className="text-purple-500" />, title: "Command Center", desc: "Full-stack deployment of a custom career governance dashboard with Gemini AI integration." }
              ].map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col hover:border-blue-500/50 transition-all group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">{p.icon}</div>
                    <span className="text-[10px] font-black px-2 py-1 bg-neutral-800 rounded">Domain {p.domain}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                  <p className="text-neutral-400 text-sm mb-8 flex-grow">{p.desc}</p>
                  <button className="text-blue-500 text-xs font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Deep Dive <ArrowRight size={14} />
                  </button>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-32 px-6 bg-[#080808] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] mb-4">Strategic Timeline</h2>
            <h3 className="text-5xl font-bold tracking-tight mb-16">The 24-Month Build.</h3>
            
            <div className="space-y-6">
              {[
                { id: "01", title: "Data Intelligence", detail: "Google Data Analytics & Advanced SQL Proficiency", phase: "In Progress" },
                { id: "02", title: "Infrastructure Security", detail: "NIST Framework Implementation & Google Cyber Cert", phase: "Target Q3 2026" },
                { id: "03", title: "Audit Certification", detail: "CISA Exam Completion & ISACA Work Verification", phase: "Target Q1 2027" },
                { id: "04", title: "Governance Leadership", detail: "BBA Completion & CISM Management Transition", phase: "Target Q3 2028" }
              ].map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/[0.07] transition-all">
                  <div className="flex items-center gap-6">
                    <div className="text-3xl font-black text-blue-500/30 group-hover:text-blue-500 transition-colors">{step.id}</div>
                    <div>
                      <h4 className="font-bold text-xl text-white">{step.title}</h4>
                      <p className="text-sm text-neutral-500">{step.detail}</p>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 text-[10px] font-black uppercase px-4 py-2 rounded-full border ${step.phase === 'In Progress' ? 'border-blue-500 text-blue-500 bg-blue-500/10 animate-pulse' : 'border-neutral-800 text-neutral-600'}`}>
                    {step.phase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategist Section */}
        <section id="strategist" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900 to-black p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase italic">AI Auditor.</h2>
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    Test my strategic logic. Input an IT risk scenario and get an analysis based on <strong>CISA Job Practice Domains</strong>.
                  </p>
                  <div className="space-y-4">
                    <textarea 
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      placeholder="Input risk scenario (e.g., Sunday logins or data leaks)..."
                      className="w-full bg-black border border-white/10 rounded-2xl p-5 text-sm text-white focus:ring-2 focus:ring-blue-600 outline-none h-32 resize-none"
                    />
                    <button 
                      onClick={handleAiAsk}
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="animate-spin" /> : <Cpu size={18} />}
                      {isLoading ? "Consulting Domains..." : "Analyze Risk"}
                    </button>
                  </div>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-3xl p-8 min-h-[300px] font-mono text-sm leading-relaxed text-blue-400/80 overflow-y-auto">
                  {aiOutput || "// Strategist output will appear here after analysis..."}
                </div>
              </div>
              <Layers className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.02] text-blue-500" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xs font-black text-neutral-500 uppercase tracking-[0.4em] mb-6">Open for Discussion</h2>
            <h3 className="text-6xl font-black mb-12 tracking-tight uppercase">Let's build the <br/>secure future.</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:your.email@example.com" className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500 transition-all">
                <div className="flex items-center gap-4 text-left">
                  <Mail className="text-blue-500" />
                  <div>
                    <span className="font-bold block text-white">Email Me</span>
                    <span className="text-xs text-neutral-500">Professional inquiries & collaborations</span>
                  </div>
                </div>
                <ChevronRight className="text-neutral-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500 transition-all">
                <div className="flex items-center gap-4 text-left">
                  <Linkedin className="text-blue-500" />
                  <div>
                    <span className="font-bold block text-white">LinkedIn</span>
                    <span className="text-xs text-neutral-500">Connect with my professional network</span>
                  </div>
                </div>
                <ChevronRight className="text-neutral-700 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black text-center">
        <div className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.5em] mb-4">
          Growth over Comfort • Strategic Analysis • Brutal Execution
        </div>
        <div className="text-[10px] text-neutral-800">
          © 2026 Master Builder Portfolio | Built with React & Gemini Intelligence
        </div>
      </footer>
    </div>
  );
}
