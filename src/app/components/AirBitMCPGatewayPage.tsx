import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, Share2, Database, Shield, Activity, 
  Terminal, Globe, Lock, Search, Server, 
  ArrowRight, Check, X, AlertCircle, FileCode,
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-[#1D1D1F]">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
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

        {/* Visual: Neural Hub */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-xl">
              <defs>
                <radialGradient id="sphere-glow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Connecting Lines (Neural Network) */}
              {[...Array(8)].map((_, i) => (
                 <motion.line 
                   key={`line-${i}`}
                   x1="250" y1="200"
                   x2={50 + Math.random() * 100} y2={50 + Math.random() * 300}
                   stroke="#3b82f6"
                   strokeWidth="1"
                   strokeOpacity="0.2"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                   transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                 />
              ))}

              {/* Central Sphere (Gateway) */}
              <g transform="translate(250 200)">
                <circle r="40" fill="url(#sphere-glow)" className="animate-pulse" />
                <circle r="20" fill="white" stroke="#0071E3" strokeWidth="2" />
                <motion.circle 
                  r="25" 
                  fill="none" 
                  stroke="#60a5fa" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <Network className="w-6 h-6 text-[#0071E3] absolute -translate-x-3 -translate-y-3" />
              </g>

              {/* Incoming Agents (Left) */}
              {[...Array(5)].map((_, i) => (
                <motion.g key={`agent-${i}`}>
                   <circle r="3" fill="#0071E3" opacity="0.6">
                     <animateMotion 
                       path={`M 50 ${100 + i * 50} Q 150 ${150 + i * 20} 250 200`} 
                       dur={`${2 + Math.random()}s`} 
                       repeatCount="indefinite"
                     />
                   </circle>
                </motion.g>
              ))}

              {/* Backend Blocks (Right) */}
              <g transform="translate(380 100)">
                 <rect width="40" height="40" rx="8" fill="white" stroke="#E5E5EA" strokeWidth="1.5" />
                 <text x="20" y="24" textAnchor="middle" fill="#86868B" fontSize="10" fontWeight="500">DB</text>
              </g>
              <g transform="translate(380 180)">
                 <rect width="40" height="40" rx="8" fill="white" stroke="#E5E5EA" strokeWidth="1.5" />
                 <text x="20" y="24" textAnchor="middle" fill="#86868B" fontSize="10" fontWeight="500">CRM</text>
              </g>
              <g transform="translate(380 260)">
                 <rect width="40" height="40" rx="8" fill="white" stroke="#E5E5EA" strokeWidth="1.5" />
                 <text x="20" y="24" textAnchor="middle" fill="#86868B" fontSize="10" fontWeight="500">ERP</text>
              </g>
              
              {/* Active Beams to Backend */}
              <motion.line 
                x1="250" y1="200" x2="380" y2="120" 
                stroke="#34C759" strokeWidth="2" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
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
        <div className="relative h-[400px] bg-[#FAFAFA] rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
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
                 <svg width="100%" height="100%" viewBox="0 0 800 300" className="opacity-90">
                   {/* Explicit N x M Connections - Clear Mesh */}
                   <g opacity="0.3">
                     {[80, 150, 220].map((y1, i) => (
                        [80, 150, 220].map((y2, j) => (
                            <line 
                                key={`${i}-${j}`}
                                x1="200" y1={y1} 
                                x2="600" y2={y2} 
                                stroke="#EF4444" 
                                strokeWidth="1.5" 
                            />
                        ))
                     ))}
                   </g>

                   {/* Agents (Left) */}
                   <g>
                     <circle cx="200" cy="80" r="24" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     <text x="200" y="85" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">A1</text>
                     
                     <circle cx="200" cy="150" r="24" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     <text x="200" y="155" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">A2</text>
                     
                     <circle cx="200" cy="220" r="24" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     <text x="200" y="225" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">A3</text>
                     
                     <text x="200" y="270" textAnchor="middle" fill="#6B7280" fontSize="13" fontWeight="500">Agents</text>
                   </g>

                   {/* Tools (Right) */}
                   <g>
                     <rect x="580" y="60" width="40" height="40" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     <rect x="580" y="130" width="40" height="40" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     <rect x="580" y="200" width="40" height="40" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                     
                     <text x="600" y="270" textAnchor="middle" fill="#6B7280" fontSize="13" fontWeight="500">Tools</text>
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
                 <svg width="100%" height="100%" viewBox="0 0 800 300">
                   {/* Central Hub */}
                   <circle cx="400" cy="150" r="40" fill="#E0F2FE" stroke="#3B82F6" strokeWidth="2" />
                   <text x="400" y="155" textAnchor="middle" fill="#1D4ED8" fontSize="10" fontWeight="bold">AirBit Gateway</text>

                   {/* Organized Lines - Left */}
                   <line x1="120" y1="80" x2="360" y2="150" stroke="#3B82F6" strokeWidth="2" />
                   <line x1="120" y1="150" x2="360" y2="150" stroke="#3B82F6" strokeWidth="2" />
                   <line x1="120" y1="220" x2="360" y2="150" stroke="#3B82F6" strokeWidth="2" />

                   {/* Organized Lines - Right */}
                   <line x1="440" y1="150" x2="650" y2="80" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" />
                   <line x1="440" y1="150" x2="650" y2="150" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" />
                   <line x1="440" y1="150" x2="650" y2="220" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" />

                   {/* Agents */}
                   <circle cx="100" cy="80" r="15" fill="#DBEAFE" stroke="#3B82F6" />
                   <circle cx="100" cy="150" r="15" fill="#DBEAFE" stroke="#3B82F6" />
                   <circle cx="100" cy="220" r="15" fill="#DBEAFE" stroke="#3B82F6" />

                   {/* Tools */}
                   <rect x="650" y="65" width="30" height="30" fill="#D1FAE5" stroke="#10B981" />
                   <rect x="650" y="135" width="30" height="30" fill="#D1FAE5" stroke="#10B981" />
                   <rect x="650" y="205" width="30" height="30" fill="#D1FAE5" stroke="#10B981" />
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
    <section className="py-24 bg-[#F5F5F7]">
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
    <section className="py-24 bg-[#FAFAFA]">
       <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
         {/* Visual: Gatekeeper */}
         <div className="flex justify-center relative h-[300px] items-center">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-1 bg-gray-200 rounded-full"></div>
            </div>
            
            {/* Request Packet */}
            <motion.div 
               className="absolute w-12 h-12 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center z-10"
               animate={{ x: [-150, 0, 150], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
               <FileCode className="w-6 h-6 text-gray-400" />
            </motion.div>

            {/* The Gate */}
            <div className="relative z-20 flex flex-col items-center">
               <div className="w-4 h-20 bg-gray-800 rounded-full shadow-xl"></div>
               <motion.div 
                 className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-lg text-xs font-bold border border-red-200 shadow-sm"
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 1, repeat: Infinity }}
               >
                 Policy Check: DENIED
               </motion.div>
            </div>
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
         <div className="bg-[#FAFAFA] rounded-xl border border-gray-200 p-6 shadow-xl font-mono text-sm max-w-4xl mx-auto">
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
    path: '/airbit-mcp-gateway'
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
