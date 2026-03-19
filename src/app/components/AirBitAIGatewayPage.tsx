import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Zap, Shield, Globe, Terminal, 
  Activity, Lock, Search, BarChart3, 
  Coins, Layers, ArrowRight, Check,
  Plug, Server, AlertTriangle, RefreshCw
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            AirBit AI Gateway 4.0
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1D1D1F]">
            驾驭多模型时代的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">统一 AI 网关</span>
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed mb-8 max-w-xl">
            停止在业务代码中硬编码 API Key。AirBit AI Gateway 为您提供跨模型的统一接口、Token 级成本控制、Prompt 集中管理与企业级安全防护。
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {['Unified API', 'Token Rate Limiting', 'Prompt Management'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium rounded-md border border-gray-100">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium hover:bg-black transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              免费接入第一个模型 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5E5] font-medium hover:bg-[#F5F5F7] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              查看 API 文档
            </button>
          </div>
        </motion.div>

        {/* Visual: AI Prism */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl">
              <defs>
                <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="beam-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Input Streams (Left) */}
              {[100, 200, 300].map((y, i) => (
                <g key={`in-${i}`}>
                   <line x1="50" y1={y} x2="250" y2="200" stroke="url(#beam-gradient)" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                   {/* Incoming Particles */}
                   <motion.circle r="3" fill="#6B7280" 
                     animate={{ cx: [50, 250], cy: [y, 200], opacity: [0, 1, 0] }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                   />
                </g>
              ))}

              {/* Inputs Label */}
              <text x="50" y="350" textAnchor="middle" fontSize="12" fill="#9CA3AF" className="uppercase tracking-widest">Client Apps</text>

              {/* The Prism (Center) */}
              <g transform="translate(250 200)">
                <motion.path 
                  d="M0 -40 L35 20 L-35 20 Z" 
                  fill="white" 
                  stroke="#A855F7" 
                  strokeWidth="2"
                  filter="url(#glow-purple)"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle r="10" fill="#A855F7" className="animate-pulse" />
              </g>

              {/* Output Beams (Right) */}
              {[
                { y: 80, color: "#22c55e", label: "OpenAI" },
                { y: 160, color: "#a855f7", label: "Claude" },
                { y: 240, color: "#3b82f6", label: "Gemini" },
                { y: 320, color: "#f97316", label: "Llama" }
              ].map((item, i) => (
                <g key={`out-${i}`}>
                  <line x1="250" y1="200" x2="450" y2={item.y} stroke={item.color} strokeWidth="2" strokeOpacity="0.3" />
                  {/* Outgoing Token Particles */}
                  <motion.circle r="3" fill={item.color} 
                     animate={{ cx: [250, 450], cy: [200, item.y], opacity: [1, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
                  />
                  {/* Target Node */}
                  <circle cx="450" cy={item.y} r="5" fill={item.color} />
                  <text x="460" y={item.y + 4} fontSize="12" fill="#6B7280" fontWeight="500">{item.label}</text>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">功能全景</h2>
          <p className="text-[#86868B] max-w-2xl mx-auto text-lg">
            解决模型碎片化与成本失控痛点，为开发者提供开箱即用的企业级能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Unified Model Proxy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <Plug className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">统一模型代理</h3>
            <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">一次接入，任意切换。兼容 OpenAI 规范的统一 API。</p>
            
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-blue-500 shrink-0" />
                <span>OpenAI / Claude / Llama 兼容</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-blue-500 shrink-0" />
                <span>代码零改动迁移模型</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-blue-500 shrink-0" />
                <span>多账号轮询负载均衡</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Cost Control */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">Token 级成本控制</h3>
            <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">精准控制每一分 AI 预算，拒绝意外账单。</p>
            
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span>按 Token 总量限流</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span>每日消费熔断 (e.g. $50/day)</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span>语义缓存 (0 延迟 0 成本)</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Resilience */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">高可用与降级</h3>
            <p className="text-[#86868B] text-sm mb-6 min-h-[40px]">永远不要让 AI 服务“开天窗”。</p>
            
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span>自动降级 (GPT-4 → GPT-3.5)</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span>智能错误重试机制</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span>超时自动熔断</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Expand Button */}
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 font-medium flex items-center justify-center gap-1 mx-auto"
          >
            {isExpanded ? '收起插件列表' : '查看所有 20+ AI 插件'}
            <ArrowRight className={cn("w-4 h-4 transition-transform", isExpanded ? "-rotate-90" : "rotate-90")} />
          </button>
        </div>
      </div>
    </section>
  );
}

function PromptStudio() {
  const [decoratorEnabled, setDecoratorEnabled] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-xs font-bold mb-4">Prompt Studio</div>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-6">Prompt 不再是字符串，<br />而是企业资产</h2>
            <p className="text-[#86868B] text-lg leading-relaxed mb-8">
              将 Prompt 从代码中解耦，实现集中版本管理与热更新。支持模板变量替换、上下文装饰器注入及 RAG 知识库拼接。
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1D1D1F]">提示词模板</h4>
                  <p className="text-sm text-gray-500 mt-1">预设模板，仅需传输变量，无需硬编码。</p>
                </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1D1D1F]">上下文装饰器</h4>
                  <p className="text-sm text-gray-500 mt-1">自动追加系统指令（System Prompt），如“你是一个法律专家”。</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Only Toggle Demo */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-700">Enable Decorator</span>
                <button 
                  onClick={() => setDecoratorEnabled(!decoratorEnabled)}
                  className={cn("w-12 h-6 rounded-full transition-colors relative", decoratorEnabled ? "bg-green-500" : "bg-gray-300")}
                >
                  <span className={cn("absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform", decoratorEnabled ? "translate-x-6" : "")} />
                </button>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs font-mono text-gray-600">
                <div className={cn("text-green-600 mb-2 transition-all overflow-hidden", decoratorEnabled ? "max-h-20 opacity-100" : "max-h-0 opacity-0")}>
                  [System] You are a helpful AI assistant specialized in legal advice.
                </div>
                <div>[User] 如何申请退款？</div>
              </div>
            </div>
          </div>

          {/* Desktop Visual: IDE */}
          <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F7] border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5" />
              </div>
              <span className="text-xs text-gray-500 ml-2 font-mono">customer_service_v1.prompt</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-[#1D1D1F]">
              <div className="text-gray-400 mb-4"># Template Definition</div>
              <div><span className="text-purple-600">role</span>: <span className="text-green-600">"system"</span>,</div>
              <div className="mb-4"><span className="text-purple-600">content</span>: <span className="text-blue-600">"You are a helpful assistant for {`{{company_name}}`}."</span></div>
              
              <div><span className="text-purple-600">role</span>: <span className="text-green-600">"user"</span>,</div>
              <div className="mb-6"><span className="text-purple-600">content</span>: <span className="text-blue-600">"{`{{user_question}}`}"</span></div>

              <div className="pt-4 border-t border-gray-100">
                 <div className="text-gray-400 mb-2"># Request Variables</div>
                 <div className="text-gray-500">{`{`}</div>
                 <div className="pl-4"><span className="text-indigo-600">"company_name"</span>: <span className="text-green-600">"AirBit"</span>,</div>
                 <div className="pl-4"><span className="text-indigo-600">"user_question"</span>: <span className="text-green-600">"How to reset API key?"</span></div>
                 <div className="text-gray-500">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Observability() {
  return (
    <section className="py-24 bg-[#111] text-white bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#000000]">谁在花钱？花在哪里？一目了然</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            全链路追踪每一次 LLM 调用，实时审计成本与质量。
          </p>
        </div>

        {/* Mobile Key Metrics */}
        <div className="md:hidden grid grid-cols-1 gap-4 mb-8">
           <div className="bg-[#1E1E1E] p-6 rounded-xl border border-white/10">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Today's Cost</div>
              <div className="text-3xl font-bold text-green-400">$45.20</div>
           </div>
           <div className="bg-[#1E1E1E] p-6 rounded-xl border border-white/10">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Total Tokens</div>
              <div className="text-3xl font-bold text-blue-400">1.2M</div>
           </div>
           <div className="bg-[#1E1E1E] p-6 rounded-xl border border-white/10">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Avg Latency</div>
              <div className="text-3xl font-bold text-yellow-400">800ms</div>
           </div>
        </div>

        {/* Desktop Dashboard Visual */}
        <div className="hidden md:block relative bg-white rounded-2xl border border-gray-100 p-6 shadow-xl overflow-hidden">
           {/* Header */}
           <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
              <div className="flex gap-4">
                 <h3 className="font-bold text-[#1D1D1F]">AI Gateway Monitor</h3>
                 <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100 text-[10px] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                 </span>
              </div>
              <div className="text-sm text-gray-400">Last 24 Hours</div>
           </div>
           
           <div className="grid grid-cols-3 gap-6">
              {/* Chart 1: Token Usage */}
              <div className="col-span-2 bg-[#F5F5F7] rounded-xl p-4 border border-gray-100/50">
                 <div className="text-xs font-medium text-gray-500 mb-4">Token Usage Trend</div>
                 <div className="h-40 flex items-end justify-between gap-1">
                    {[30, 45, 35, 60, 80, 55, 70, 90, 65, 50, 40, 60, 75, 85, 95, 80, 60, 45, 30, 40].map((h, i) => (
                      <div key={i} className="w-full bg-[#0071e3]/20 hover:bg-[#0071e3]/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>
              
              {/* Chart 2: Cost Breakdown */}
              <div className="bg-[#F5F5F7] rounded-xl p-4 border border-gray-100/50">
                 <div className="text-xs font-medium text-gray-500 mb-4">Cost by Team</div>
                 <div className="h-40 flex items-center justify-center relative">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 -rotate-90">
                       <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E5E5" strokeWidth="16" />
                       <circle cx="50" cy="50" r="40" fill="none" stroke="#34C759" strokeWidth="16" strokeDasharray="150 251" strokeLinecap="round" />
                       <circle cx="50" cy="50" r="40" fill="none" stroke="#0071e3" strokeWidth="16" strokeDasharray="70 251" strokeDashoffset="-150" strokeLinecap="round" />
                       <circle cx="50" cy="50" r="40" fill="none" stroke="#FF9500" strokeWidth="16" strokeDasharray="30 251" strokeDashoffset="-220" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-xl font-bold text-[#1D1D1F]">$120</span>
                       <span className="text-[10px] text-gray-400 font-medium">Total</span>
                    </div>
                 </div>
                 <div className="mt-2 text-xs space-y-2">
                    <div className="flex justify-between items-center text-gray-500">
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#34C759]"></div>Marketing</div>
                      <span className="font-medium text-[#1D1D1F]">60%</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#0071e3]"></div>Dev</div>
                      <span className="font-medium text-[#1D1D1F]">30%</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#FF9500]"></div>HR</div>
                      <span className="font-medium text-[#1D1D1F]">10%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { label: "Traceability", desc: "Full Lifecycle" },
             { label: "Cost Audit", desc: "Per Team/App" },
             { label: "Quality", desc: "Hallucination Monitor" },
             { label: "Integration", desc: "Datadog / Prometheus" }
           ].map((item) => (
             <div key={item.label}>
               <div className="text-lg font-bold text-white mb-1">{item.label}</div>
               <div className="text-sm text-gray-500">{item.desc}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Visual: Shield */}
        <div className="order-2 md:order-1 flex justify-center">
           <div className="relative w-64 h-64">
              <motion.div 
                className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <Shield className="w-48 h-48 text-gray-200" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-md shadow-sm border border-red-100 flex items-center gap-2 text-xs font-mono text-gray-500 line-through decoration-red-400">
                       <AlertTriangle className="w-3 h-3 text-red-500" />
                       PII: 138-0000-0000
                    </div>
                    <div className="bg-green-50 px-3 py-1.5 rounded-md shadow-sm border border-green-200 flex items-center gap-2 text-xs font-mono text-green-700 font-bold">
                       <Lock className="w-3 h-3" />
                       PII: [REDACTED]
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
           <h2 className="text-3xl font-bold text-[#1D1D1F] mb-6">不让敏感数据<br />离开您的私有网络</h2>
           <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-[#1D1D1F] mb-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500"></div> PII 自动脱敏
                 </h3>
                 <p className="text-sm text-[#86868B]">自动识别并替换手机号、邮箱、身份证、信用卡号，确保隐私安全。</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-[#1D1D1F] mb-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-orange-500"></div> 防注入围栏
                 </h3>
                 <p className="text-sm text-[#86868B]">识别并拦截“忽略之前的指令”等 Jailbreak 攻击，防止 Prompt 泄露。</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function TechSpecs() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-center font-bold text-gray-900 mb-8">企业级技术指标</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
           <div className="pt-4 md:pt-0">
             <div className="text-2xl font-bold text-[#1D1D1F] mb-1">&lt; 2ms</div>
             <div className="text-xs text-gray-500 uppercase tracking-wider">Gateway Overhead</div>
           </div>
           <div className="pt-4 md:pt-0">
             <div className="text-2xl font-bold text-[#1D1D1F] mb-1">20+ Models</div>
             <div className="text-xs text-gray-500 uppercase tracking-wider">OpenAI, Claude, Llama, Gemini...</div>
           </div>
           <div className="pt-4 md:pt-0">
             <div className="text-2xl font-bold text-[#1D1D1F] mb-1">Anywhere</div>
             <div className="text-xs text-gray-500 uppercase tracking-wider">Docker, K8s, Edge</div>
           </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-6">准备好统管您的 AI 流量了吗？</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="px-8 py-4 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ED] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
            立即部署 AirBit Gateway
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-[#1D1D1F] border border-[#D2D2D7] font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
             联系售前咨询
          </button>
        </div>
      </div>
    </section>
  );
}

export function AirBitAIGatewayPage() {
  useSEO({ 
    title: 'AirBit AI Gateway | 企业级智能流量管家', 
    description: '将不同厂商的 AI 模型标准化为 OpenAI 格式，提供路由、限流、容灾及统一安全管控的企业级大模型网关。',
    path: '/airbit-ai-gateway'
  });
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Capabilities />
      <PromptStudio />
      <Observability />
      <Security />
      <TechSpecs />
      <CTA />
    </div>
  );
}
