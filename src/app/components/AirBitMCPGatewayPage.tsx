import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, Share2, Database, Shield, Activity, 
  Terminal, Globe, Lock, Search, Server,
  ArrowRight, Check, X, AlertCircle,
  LayoutGrid, GitBranch, Cpu, Eye
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSEO } from '../hooks/useSEO';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFC] text-[#1D1D1F]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle ambient glow behind the right-side content */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/60 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Enterprise MCP Gateway
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1D1D1F]">
            AI 智能体的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">企业级“神经中枢”</span>
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed mb-8 max-w-xl">
            首款面向企业的 Model Context Protocol (MCP) 网关。统一管理 AI Agent 对后端工具的调用，提供协议桥接、安全隔离与全链路审计。
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {['MCP Router', 'REST/gRPC Bridge', 'Tool Registry', 'Security Policy'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm font-medium rounded-md border border-gray-200/60">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
              部署 MCP Gateway <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#D2D2D7] font-medium hover:bg-[#F5F5F7] transition-all flex items-center justify-center gap-2">
              阅读架构白皮书
            </button>
          </div>
        </motion.div>

        {/* Visual: MCP Gateway Hub */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 520 420" className="w-full h-full">
              <defs>
                <radialGradient id="mcp-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0071E3" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
                </radialGradient>
                <filter id="mcp-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0071E3" floodOpacity="0.18"/>
                </filter>
                <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.06"/>
                </filter>
              </defs>

              {/* ── Left: AI Agents ── */}
              {[
                { y: 90,  label: 'Agent A', sub: 'Customer Service' },
                { y: 175, label: 'Agent B', sub: 'Data Analysis' },
                { y: 260, label: 'Agent C', sub: 'Code Assistant' },
                { y: 345, label: 'Agent D', sub: 'RAG Pipeline' },
              ].map((agent, i) => (
                <g key={`agent-${i}`}>
                  {/* Card */}
                  <rect x="18" y={agent.y - 28} width="118" height="56" rx="12" fill="white" stroke="#E5E5EA" strokeWidth="1.5" filter="url(#card-shadow)" />
                  {/* Icon circle */}
                  <circle cx="44" cy={agent.y} r="13" fill="#EFF6FF" />
                  <circle cx="44" cy={agent.y} r="5" fill="#3b82f6" />
                  {/* Text */}
                  <text x="62" y={agent.y - 5} fill="#1D1D1F" fontSize="11" fontWeight="600" fontFamily="system-ui">{agent.label}</text>
                  <text x="62" y={agent.y + 10} fill="#86868B" fontSize="9.5" fontFamily="system-ui">{agent.sub}</text>
                  {/* Connector line to center */}
                  <line x1="136" y1={agent.y} x2="218" y2="210" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="5 4" />
                  {/* Animated dot */}
                  <circle r="4" fill="#0071E3" opacity="0.85">
                    <animateMotion
                      path={`M ${136} ${agent.y} Q ${177} ${(agent.y + 210) / 2} 218 210`}
                      dur={`${2.2 + i * 0.6}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}

              {/* ── Center: MCP Gateway ── */}
              <circle cx="260" cy="210" r="64" fill="url(#mcp-glow)" />
              <circle cx="260" cy="210" r="44" fill="white" stroke="#0071E3" strokeWidth="2" filter="url(#mcp-shadow)" />
              {/* Rotating dashed ring */}
              <motion.circle
                cx="260" cy="210" r="54"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="1.2"
                strokeDasharray="6 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '260px 210px' }}
              />
              {/* Network icon (manual SVG paths) */}
              <g transform="translate(243, 193)" stroke="#0071E3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="17" cy="17" r="7" fill="#EFF6FF" stroke="#0071E3" strokeWidth="1.8"/>
                <line x1="17" y1="10" x2="17" y2="3"/>
                <line x1="17" y1="24" x2="17" y2="31"/>
                <line x1="10" y1="17" x2="3" y2="17"/>
                <line x1="24" y1="17" x2="31" y2="17"/>
                <circle cx="17" cy="3" r="2.5" fill="#0071E3"/>
                <circle cx="17" cy="31" r="2.5" fill="#0071E3"/>
                <circle cx="3" cy="17" r="2.5" fill="#0071E3"/>
                <circle cx="31" cy="17" r="2.5" fill="#0071E3"/>
              </g>
              <text x="260" y="240" textAnchor="middle" fill="#0071E3" fontSize="10" fontWeight="700" fontFamily="system-ui">MCP Gateway</text>

              {/* ── Right: Backend Systems ── */}
              {[
                { y: 115, label: 'Database',   sub: 'MySQL / PG',    icon: '🗄', color: '#EFF6FF', border: '#BFDBFE' },
                { y: 210, label: 'CRM System',  sub: 'Salesforce',    icon: '👥', color: '#F0FDF4', border: '#BBF7D0' },
                { y: 305, label: 'ERP System',  sub: 'SAP / Oracle',  icon: '⚙️', color: '#FFF7ED', border: '#FED7AA' },
              ].map((sys, i) => (
                <g key={`sys-${i}`}>
                  {/* Connector line from center */}
                  <line x1="304" y1="210" x2="374" y2={sys.y} stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="5 4" />
                  {/* Animated dot */}
                  <circle r="4" fill="#34C759" opacity="0.9">
                    <animateMotion
                      path={`M 304 210 Q ${339} ${(210 + sys.y) / 2} 374 ${sys.y}`}
                      dur={`${1.8 + i * 0.7}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Card */}
                  <rect x="374" y={sys.y - 30} width="128" height="60" rx="12" fill="white" stroke="#E5E5EA" strokeWidth="1.5" filter="url(#card-shadow)" />
                  <rect x="382" y={sys.y - 20} width="40" height="40" rx="8" fill={sys.color} stroke={sys.border} strokeWidth="1" />
                  <text x="402" y={sys.y + 6} textAnchor="middle" fontSize="16">{sys.icon}</text>
                  <text x="430" y={sys.y - 6} fill="#1D1D1F" fontSize="11" fontWeight="600" fontFamily="system-ui">{sys.label}</text>
                  <text x="430" y={sys.y + 9} fill="#86868B" fontSize="9.5" fontFamily="system-ui">{sys.sub}</text>
                </g>
              ))}

              {/* ── Protocol label on center ── */}
              <rect x="216" y="254" width="88" height="20" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1"/>
              <text x="260" y="268" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="600" fontFamily="system-ui">MCP / REST / gRPC</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">终结 AI 接入的“意大利面条式”混乱</h2>
          <p className="text-[#86868B] max-w-2xl mx-auto text-lg">
             随着企业内 Agent 数量激增，点对点的工具连接已成为安全噩梦。
          </p>
        </div>

        {/* Toggle Control */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#F5F5F7] p-1 rounded-full flex relative">
            <motion.div 
              className="absolute top-1 bottom-1 w-[120px] bg-white rounded-full shadow-sm border border-black/5"
              animate={{ x: activeTab === 'before' ? 0 : 120 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setActiveTab('before')}
              className={cn("relative z-10 w-[120px] py-2 text-sm font-medium transition-colors rounded-full", activeTab === 'before' ? "text-[#1D1D1F]" : "text-[#86868B]")}
            >
              Before
            </button>
            <button 
              onClick={() => setActiveTab('after')}
              className={cn("relative z-10 w-[120px] py-2 text-sm font-medium transition-colors rounded-full", activeTab === 'after' ? "text-[#1D1D1F]" : "text-[#86868B]")}
            >
              After (AirBit)
            </button>
          </div>
        </div>

        {/* Visual Container */}
        <div className="relative h-[400px] bg-[#FAFAFC] rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
           <AnimatePresence mode="wait">
             {activeTab === 'before' ? (
               <motion.div 
                 key="before"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 className="w-full h-full relative"
               >
                 <div className="absolute top-4 left-4 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                   ⚠️ 安全黑洞
                 </div>
                 <svg width="100%" height="100%" viewBox="0 0 760 320" fontFamily="system-ui, sans-serif">
                   <defs>
                     <filter id="b-shadow" x="-20%" y="-20%" width="140%" height="140%">
                       <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.06"/>
                     </filter>
                   </defs>

                   {/* ── Mesh lines (every agent → every tool) ── */}
                   {[75, 155, 235].map((ay) =>
                     [75, 155, 235].map((ty) => (
                       <line key={`${ay}-${ty}`}
                         x1="212" y1={ay} x2="548" y2={ty}
                         stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.22"
                       />
                     ))
                   )}

                   {/* ── Agents (Left) ── */}
                   {[
                     { y: 75,  label: 'Agent A', sub: 'Customer Bot' },
                     { y: 155, label: 'Agent B', sub: 'Data Analyst' },
                     { y: 235, label: 'Agent C', sub: 'Code Helper' },
                   ].map((a) => (
                     <g key={a.y}>
                       <rect x="72" y={a.y - 28} width="120" height="52" rx="12" fill="white" stroke="#FECACA" strokeWidth="1.5" filter="url(#b-shadow)" />
                       <circle cx="98" cy={a.y} r="13" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
                       <text x="98" y={a.y + 4} textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">AI</text>
                       <text x="118" y={a.y - 6} fontSize="11" fill="#1D1D1F" fontWeight="600">{a.label}</text>
                       <text x="118" y={a.y + 9} fontSize="9.5" fill="#9CA3AF">{a.sub}</text>
                     </g>
                   ))}
                   <text x="132" y="282" textAnchor="middle" fontSize="12" fill="#9CA3AF" fontWeight="500">AI Agents</text>

                   {/* ── Tools (Right) ── */}
                   {[
                     { y: 75,  label: 'DB',      icon: '🗄' },
                     { y: 155, label: 'CRM',     icon: '👥' },
                     { y: 235, label: 'ERP',     icon: '⚙️' },
                   ].map((t) => (
                     <g key={t.y}>
                       <rect x="548" y={t.y - 24} width="100" height="48" rx="12" fill="white" stroke="#FECACA" strokeWidth="1.5" filter="url(#b-shadow)" />
                       <text x="571" y={t.y + 6} fontSize="18">{t.icon}</text>
                       <text x="596" y={t.y + 5} fontSize="12" fill="#1D1D1F" fontWeight="600">{t.label}</text>
                     </g>
                   ))}
                   <text x="598" y="282" textAnchor="middle" fontSize="12" fill="#9CA3AF" fontWeight="500">Backend Tools</text>

                   {/* ── Warning badges ── */}
                   <g>
                     <rect x="280" y="108" width="80" height="22" rx="11" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1"/>
                     <text x="320" y="123" textAnchor="middle" fontSize="9.5" fill="#EF4444" fontWeight="600">无鉴权</text>
                   </g>
                   <g>
                     <rect x="360" y="158" width="80" height="22" rx="11" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1"/>
                     <text x="400" y="173" textAnchor="middle" fontSize="9.5" fill="#EF4444" fontWeight="600">无审计</text>
                   </g>
                   <g>
                     <rect x="280" y="198" width="80" height="22" rx="11" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1"/>
                     <text x="320" y="213" textAnchor="middle" fontSize="9.5" fill="#EF4444" fontWeight="600">数据泄露</text>
                   </g>
                 </svg>
               </motion.div>
             ) : (
               <motion.div 
                 key="after"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 className="w-full h-full relative"
               >
                 <div className="absolute top-4 left-4 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                   ✅ 统一入口 & 审计
                 </div>
                 <svg width="100%" height="100%" viewBox="0 0 760 320" fontFamily="system-ui, sans-serif">
                   <defs>
                     <filter id="a-shadow" x="-20%" y="-20%" width="140%" height="140%">
                       <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#0071E3" floodOpacity="0.12"/>
                     </filter>
                     <filter id="a-card" x="-20%" y="-20%" width="140%" height="140%">
                       <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.05"/>
                     </filter>
                     <radialGradient id="hub-bg" cx="50%" cy="50%" r="50%">
                       <stop offset="0%" stopColor="#EFF6FF"/>
                       <stop offset="100%" stopColor="#DBEAFE"/>
                     </radialGradient>
                   </defs>

                   {/* ── Left lines: agents → gateway ── */}
                   {[75, 155, 235].map((ay) => (
                     <line key={ay} x1="200" y1={ay} x2="322" y2="160"
                       stroke="#3B82F6" strokeWidth="1.8" strokeOpacity="0.5" strokeDasharray="6 4"/>
                   ))}
                   {/* Animated dots left→center */}
                   {[75, 155, 235].map((ay, i) => (
                     <circle key={ay} r="4" fill="#0071E3" opacity="0.9">
                       <animateMotion path={`M 200 ${ay} Q 261 ${(ay+160)/2} 322 160`}
                         dur={`${2 + i * 0.5}s`} repeatCount="indefinite"/>
                     </circle>
                   ))}

                   {/* ── Right lines: gateway → tools ── */}
                   {[75, 155, 235].map((ty) => (
                     <line key={ty} x1="438" y1="160" x2="558" y2={ty}
                       stroke="#10B981" strokeWidth="1.8" strokeOpacity="0.5" strokeDasharray="6 4"/>
                   ))}
                   {/* Animated dots center→right */}
                   {[75, 155, 235].map((ty, i) => (
                     <circle key={ty} r="4" fill="#10B981" opacity="0.9">
                       <animateMotion path={`M 438 160 Q 498 ${(160+ty)/2} 558 ${ty}`}
                         dur={`${2 + i * 0.5}s`} repeatCount="indefinite"/>
                     </circle>
                   ))}

                   {/* ── Agents (Left) ── */}
                   {[
                     { y: 75,  label: 'Agent A', sub: 'Customer Bot' },
                     { y: 155, label: 'Agent B', sub: 'Data Analyst' },
                     { y: 235, label: 'Agent C', sub: 'Code Helper' },
                   ].map((a) => (
                     <g key={a.y}>
                       <rect x="60" y={a.y - 28} width="120" height="52" rx="12" fill="white" stroke="#BFDBFE" strokeWidth="1.5" filter="url(#a-card)"/>
                       <circle cx="86" cy={a.y} r="13" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
                       <text x="86" y={a.y + 4} textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="700">AI</text>
                       <text x="106" y={a.y - 6} fontSize="11" fill="#1D1D1F" fontWeight="600">{a.label}</text>
                       <text x="106" y={a.y + 9} fontSize="9.5" fill="#9CA3AF">{a.sub}</text>
                     </g>
                   ))}
                   <text x="120" y="282" textAnchor="middle" fontSize="12" fill="#9CA3AF" fontWeight="500">AI Agents</text>

                   {/* ── Center: AirBit MCP Gateway ── */}
                   <circle cx="380" cy="160" r="62" fill="url(#hub-bg)" stroke="#3B82F6" strokeWidth="2" filter="url(#a-shadow)"/>
                   <motion.circle cx="380" cy="160" r="74" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="5 5"
                     animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                     style={{ transformOrigin: '380px 160px' }}/>
                   {/* Gateway icon */}
                   <g stroke="#0071E3" strokeWidth="1.8" fill="none" strokeLinecap="round">
                     <circle cx="380" cy="152" r="8" fill="#EFF6FF" stroke="#0071E3"/>
                     <line x1="380" y1="144" x2="380" y2="138"/>
                     <line x1="380" y1="160" x2="380" y2="166"/>
                     <line x1="372" y1="152" x2="366" y2="152"/>
                     <line x1="388" y1="152" x2="394" y2="152"/>
                     <circle cx="380" cy="138" r="3" fill="#0071E3"/>
                     <circle cx="380" cy="166" r="3" fill="#0071E3"/>
                     <circle cx="366" cy="152" r="3" fill="#0071E3"/>
                     <circle cx="394" cy="152" r="3" fill="#0071E3"/>
                   </g>
                   <text x="380" y="176" textAnchor="middle" fontSize="10" fill="#1D4ED8" fontWeight="700">MCP Gateway</text>
                   {/* Badges */}
                   <rect x="338" y="186" width="84" height="18" rx="9" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
                   <text x="380" y="199" textAnchor="middle" fontSize="8.5" fill="#16A34A" fontWeight="600">✓ 鉴权 · 审计 · 限流</text>

                   {/* ── Tools (Right) ── */}
                   {[
                     { y: 75,  label: 'Database', sub: 'MySQL / PG',   icon: '🗄' },
                     { y: 155, label: 'CRM',      sub: 'Salesforce',   icon: '👥' },
                     { y: 235, label: 'ERP',      sub: 'SAP / Oracle', icon: '⚙️' },
                   ].map((t) => (
                     <g key={t.y}>
                       <rect x="558" y={t.y - 28} width="130" height="52" rx="12" fill="white" stroke="#BBF7D0" strokeWidth="1.5" filter="url(#a-card)"/>
                       <rect x="566" y={t.y - 18} width="36" height="36" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
                       <text x="584" y={t.y + 6} textAnchor="middle" fontSize="17">{t.icon}</text>
                       <text x="610" y={t.y - 6} fontSize="11" fill="#1D1D1F" fontWeight="600">{t.label}</text>
                       <text x="610" y={t.y + 9} fontSize="9.5" fill="#9CA3AF">{t.sub}</text>
                     </g>
                   ))}
                   <text x="623" y="282" textAnchor="middle" fontSize="12" fill="#9CA3AF" fontWeight="500">Backend Tools</text>
                 </svg>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CoreEngine() {
  return (
    <section className="py-24 bg-[#FAFAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1D1D1F] mb-12 text-center">核心引擎能力</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Router */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] transition-all">
             <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
               <GitBranch className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-bold text-[#1D1D1F] mb-3">智能 MCP 路由器</h3>
             <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">AI 只管提需求，我们负责找工具。自动���析意图并精准分发。</p>
             <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-indigo-500" /> 意图路由分发</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-indigo-500" /> 多后端聚合</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-indigo-500" /> 热门工具负载均衡</li>
             </ul>
          </div>

          {/* Card 2: Registry */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] transition-all">
             <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
               <Database className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-bold text-[#1D1D1F] mb-3">工具注册中心</h3>
             <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">企业内部的“AI 工具应用商店”。统一上架与版本管理。</p>
             <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-blue-500" /> 工具统一上架</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-blue-500" /> 语义化版本控制</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-blue-500" /> 元数据与风险分级</li>
             </ul>
          </div>

          {/* Card 3: Session */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] transition-all">
             <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-6 text-pink-600">
               <Activity className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-bold text-[#1D1D1F] mb-3">会话上下文管理</h3>
             <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">让多轮对话拥有连贯的记忆。HTTP 之上的状态保持。</p>
             <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-pink-500" /> 状态自动保持</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-pink-500" /> 并发上下文隔离</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-pink-500" /> 资源生命周期管理</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolBridge() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold mb-4">Core Feature</div>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-6">无需重写代码，<br />旧系统秒变 AI 工具</h2>
            <p className="text-[#86868B] text-lg leading-relaxed mb-8">
              您的业务系统不需要原生支持 MCP。AirBit 充当协议转换器，让 AI 直接“听懂”现有接口。
            </p>

            <div className="space-y-4">
              {[
                { title: 'REST to MCP', desc: '导入 Swagger/OpenAPI，自动转换 API 为 Tools' },
                { title: 'gRPC to MCP', desc: '解析 Protobuf 定义，映射为 AI 可调用函数' },
                { title: 'CLI to MCP', desc: '封装运维脚本，安全地暴露给 AI 执行' },
                { title: 'SSE / Stdio', desc: '本地 Stdio 模式无缝转换为网络 SSE 服务' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-[#F5F5F7] transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1D1D1F] text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: Code Translation */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#1E1E1E] border border-gray-800">
            <div className="flex items-center justify-between px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
               </div>
               <div className="flex text-xs font-mono text-gray-400 gap-4">
                 <span className="text-white">legacy_api.json</span>
                 <span>→</span>
                 <span className="text-green-400">mcp_tool.json</span>
               </div>
            </div>
            <div className="grid grid-cols-2 text-xs font-mono p-4 gap-4 h-[300px] overflow-hidden">
               <div className="border-r border-gray-700 pr-4 text-gray-400 opacity-70">
                 <div className="text-blue-400">// REST API Def</div>
                 <div>"path": "/users/{`{id}`}</div>
                 <div>"method": "GET"</div>
                 <div className="mb-2">"desc": "Get user info"</div>
                 <div>"params": {`{`}</div>
                 <div className="pl-2">"id": "string"</div>
                 <div>{`}`}</div>
               </div>
               <div className="text-green-50 pl-2">
                 <div className="text-green-400">// MCP Tool Def</div>
                 <div>"name": "get_user"</div>
                 <div className="mb-2">"description": "Get info..."</div>
                 <div>"inputSchema": {`{`}</div>
                 <div className="pl-2">"type": "object",</div>
                 <div className="pl-2">"properties": {`{`}</div>
                 <div className="pl-4">"id": {`{ "type": "string" }`}</div>
                 <div className="pl-2">{`}`}</div>
                 <div>{`}`}</div>
               </div>
            </div>
            
            {/* Prism Effect Overlay */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="py-24 bg-[#FAFAFC]">
       <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
         {/* Visual: Gatekeeper */}
         <div className="flex justify-center relative h-[360px] items-center">
           <svg viewBox="0 0 380 360" className="w-full h-full" fontFamily="system-ui, sans-serif">
             <defs>
               <filter id="sec-shadow" x="-20%" y="-20%" width="140%" height="140%">
                 <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#000" floodOpacity="0.07"/>
               </filter>
               <filter id="gate-glow" x="-40%" y="-40%" width="180%" height="180%">
                 <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#EF4444" floodOpacity="0.25"/>
               </filter>
               <filter id="green-glow" x="-40%" y="-40%" width="180%" height="180%">
                 <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#10B981" floodOpacity="0.3"/>
               </filter>
             </defs>

             {/* ── Step 1: Agent Request (top) ── */}
             <rect x="120" y="16" width="140" height="52" rx="12" fill="white" stroke="#BFDBFE" strokeWidth="1.5" filter="url(#sec-shadow)"/>
             <circle cx="148" cy="42" r="13" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
             <text x="148" y="46" textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="700">AI</text>
             <text x="168" y="37" fontSize="11" fill="#1D1D1F" fontWeight="600">Finance Agent</text>
             <text x="168" y="52" fontSize="9.5" fill="#9CA3AF">调用"转账工具"</text>

             {/* Arrow down */}
             <line x1="190" y1="68" x2="190" y2="98" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="4 3"/>
             <polygon points="190,100 186,92 194,92" fill="#D1D5DB"/>

             {/* ── Step 2: Policy Engine (middle) ── */}
             <rect x="95" y="104" width="190" height="72" rx="14" fill="white" stroke="#0071E3" strokeWidth="2" filter="url(#sec-shadow)"/>
             {/* OPA badge */}
             <rect x="111" y="116" width="38" height="18" rx="9" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1"/>
             <text x="130" y="128" textAnchor="middle" fontSize="8.5" fill="#3B82F6" fontWeight="700">OPA</text>
             <text x="158" y="128" fontSize="11" fill="#1D1D1F" fontWeight="600">Policy Engine</text>
             {/* Policy rules */}
             <rect x="111" y="140" width="158" height="26" rx="7" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1"/>
             <text x="121" y="152" fontSize="8.5" fill="#6B7280">角色: 财务部 ·</text>
             <text x="121" y="162" fontSize="8.5" fill="#6B7280">时间: 09:00–18:00 · 工具: 转账</text>

             {/* ── Branch arrows ── */}
             {/* Left: DENIED */}
             <line x1="140" y1="176" x2="90" y2="226" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 3"/>
             <polygon points="88,228 84,219 93,221" fill="#FCA5A5"/>
             {/* Right: ALLOWED */}
             <line x1="240" y1="176" x2="290" y2="226" stroke="#6EE7B7" strokeWidth="1.5" strokeDasharray="4 3"/>
             <polygon points="292,228 289,219 298,221" fill="#6EE7B7"/>

             {/* Label: check fail / pass */}
             <text x="96" y="210" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="600">非工作时间</text>
             <text x="284" y="210" textAnchor="middle" fontSize="9" fill="#10B981" fontWeight="600">条件满足</text>

             {/* ── Result Left: DENIED ── */}
             <rect x="34" y="232" width="112" height="48" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" filter="url(#gate-glow)"/>
             <text x="90" y="251" textAnchor="middle" fontSize="10" fill="#EF4444" fontWeight="700">✕  DENIED</text>
             <text x="90" y="267" textAnchor="middle" fontSize="8.5" fill="#F87171">请求已拦截并记录</text>

             {/* ── Result Right: ALLOWED ── */}
             <rect x="234" y="232" width="112" height="48" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" filter="url(#green-glow)"/>
             <text x="290" y="251" textAnchor="middle" fontSize="10" fill="#10B981" fontWeight="700">✓  ALLOWED</text>
             <text x="290" y="267" textAnchor="middle" fontSize="8.5" fill="#34D399">请求透传并审计</text>

             {/* ── Audit log at bottom ── */}
             <rect x="70" y="302" width="240" height="44" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" filter="url(#sec-shadow)"/>
             <text x="90" y="320" fontSize="9" fill="#9CA3AF" fontFamily="monospace">📋  Audit Log</text>
             <text x="90" y="335" fontSize="8.5" fill="#6B7280" fontFamily="monospace">agent=finance · tool=transfer · DENY</text>

             {/* Arrow from both results to audit */}
             <line x1="90" y1="280" x2="155" y2="302" stroke="#E5E7EB" strokeWidth="1.2"/>
             <line x1="290" y1="280" x2="225" y2="302" stroke="#E5E7EB" strokeWidth="1.2"/>
           </svg>
         </div>

         {/* Content */}
         <div className="order-first md:order-last">
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-6">为 AI 的“手”戴上镣铐</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-[#1D1D1F] mb-2 flex items-center gap-2">
                   <Shield className="w-4 h-4 text-green-500" /> 细粒度权限决策 (OPA)
                 </h3>
                 <p className="text-sm text-[#86868B]">“只有‘财务部’ Agent 在‘工作时间’才能调用‘转账工具’”。</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-[#1D1D1F] mb-2 flex items-center gap-2">
                   <Lock className="w-4 h-4 text-orange-500" /> 人机协同审批
                 </h3>
                 <p className="text-sm text-[#86868B]">高风险操作（如删库）自动挂起，需管理员人工批准后放行。</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-[#1D1D1F] mb-2 flex items-center gap-2">
                   <Globe className="w-4 h-4 text-blue-500" /> 身份认证透传
                 </h3>
                 <p className="text-sm text-[#86868B]">自动传递 OAuth2 / API Key，确保后端系统能识别 Agent 背后的发起人。</p>
              </div>
            </div>
         </div>
       </div>
    </section>
  );
}

function Observability() {
  return (
    <section className="py-24 bg-white text-[#1D1D1F]">
      <div className="max-w-[1200px] mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">第一次，让 AI 的行为可审计</h2>
            <p className="text-[#86868B] max-w-2xl mx-auto">
               记录 谁 (User) → 调了什么 (Tool) → 结果如何 (Result)。全链路可追溯。
            </p>
         </div>

         {/* Dashboard */}
         <div className="bg-[#FAFAFC] rounded-xl border border-gray-200 p-6 shadow-xl font-mono text-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 text-[#86868B] border-b border-gray-200 pb-2">
               <span>Timestamp</span>
               <span className="flex-1">Event</span>
               <span>Status</span>
               <span>Latency</span>
            </div>
            
            <div className="space-y-3 relative h-[300px] overflow-hidden">
               {/* Gradient overlay for fade effect */}
               <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10"></div>

               {[
                 { time: '10:42:01', event: 'Agent-007 called "query_sales_db"', status: 'Success', lat: '120ms', color: 'text-green-600 bg-green-50 px-2 py-0.5 rounded' },
                 { time: '10:42:05', event: 'Agent-007 called "update_record"', status: 'Pending', lat: '-', color: 'text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded' },
                 { time: '10:43:12', event: 'DevCopilot called "restart_server"', status: 'Blocked', lat: '10ms', color: 'text-red-600 bg-red-50 px-2 py-0.5 rounded' },
                 { time: '10:44:00', event: 'MarketingBot called "gen_report"', status: 'Success', lat: '2400ms', color: 'text-green-600 bg-green-50 px-2 py-0.5 rounded' },
                 { time: '10:44:23', event: 'Agent-007 called "send_email"', status: 'Success', lat: '300ms', color: 'text-green-600 bg-green-50 px-2 py-0.5 rounded' },
               ].map((log, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-4 py-2 border-b border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                     <span className="text-[#86868B] w-24">{log.time}</span>
                     <span className="flex-1 text-[#1D1D1F] font-medium">{log.event}</span>
                     <span className={cn("w-24 text-xs font-bold text-center", log.color)}>{log.status}</span>
                     <span className="text-[#86868B] w-16 text-right">{log.lat}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

function Deployment() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-[#1D1D1F] mb-10">适应任何企业架构</h3>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: 'Sidecar 模式', desc: '随应用容器独立部署，极低延迟' },
             { title: 'Gateway 模式', desc: '集中式集群部署，统一治理' },
             { title: 'Federation 模式', desc: '跨部门、跨网络的多网关联邦管理' },
           ].map((mode) => (
             <div key={mode.title} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="font-bold text-[#1D1D1F] mb-2">{mode.title}</div>
                <div className="text-sm text-gray-500">{mode.desc}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-6">准备好让 Agent 进入业务核心了吗？</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
            立即部署 MCP Gateway
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-[#1D1D1F] border border-[#D2D2D7] font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
             联系售前咨询
          </button>
        </div>
      </div>
    </section>
  );
}

export function AirBitMCPGatewayPage() {
  useSEO({
    title: 'AirBit MCP Gateway | 智能体治理网关',
    description: '为模型提供规范化的外部工具调用能力，支持多后端路由、协议桥接及统一鉴权的模型上下文协议(MCP)治理网关。',
    path: '/airbit-mcp-gateway',
    keywords: 'AirBit MCP Gateway, MCP 网关, 智能体工具调用, 模型上下文协议, 企业 AI 集成',
    image: '/og-airbit.png',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: 'AirBit MCP Gateway', description: '智能体治理网关，为 AI 模型提供规范化外部工具调用能力，支持协议桥接与统一鉴权。', url: 'https://www.tlin.cn/airbit-mcp-gateway' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '产品', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: 'AirBit MCP Gateway', item: 'https://www.tlin.cn/airbit-mcp-gateway' },
      ]},
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'AirBit MCP Gateway 是什么？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit MCP Gateway 是企业级 MCP（模型上下文协议）治理网关，让 AI 智能体通过标准化协议安全调用企业内部系统和外部工具，支持多后端路由、协议桥接和统一鉴权。' } },
        { '@type': 'Question', name: 'MCP Gateway 和 AI Gateway 有什么区别？', acceptedAnswer: { '@type': 'Answer', text: 'AI Gateway 管理模型调用流量（选择用哪个模型），MCP Gateway 管理模型的工具调用（让模型能调用企业系统），两者协同工作。' } },
        { '@type': 'Question', name: 'MCP Gateway 支持哪些企业系统接入？', acceptedAnswer: { '@type': 'Answer', text: '支持通过 REST API、数据库、消息队列等协议桥接接入 ERP、CRM、OA、MES 等企业系统，前端零改造。' } },
      ]},
    ],
  });
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <ProblemSolution />
      <CoreEngine />
      <ProtocolBridge />
      <Security />
      <Observability />
      <Deployment />
      <CTA />
    </div>
  );
}
