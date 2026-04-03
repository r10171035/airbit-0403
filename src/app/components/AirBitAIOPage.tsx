import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, Play, Search, DollarSign, Shield, Code, 
  GitBranch, Database, Server, Zap, ChevronRight, 
  Clock, AlertTriangle, FileText, ArrowRight,
  CheckCircle2, ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSEO } from '../hooks/useSEO';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Icons & Visuals ---

function TraceVisual() {
  const spans = [
    { name: 'Gateway Entry', duration: '2ms', color: 'bg-blue-500', width: 'w-[10%]', left: 'ml-0' },
    { name: 'Auth Check', duration: '15ms', color: 'bg-purple-500', width: 'w-[15%]', left: 'ml-[5%]' },
    { name: 'RAG Retrieval', duration: '240ms', color: 'bg-orange-500', width: 'w-[40%]', left: 'ml-[15%]' },
    { name: 'OpenAI ChatCompletion', duration: '1.2s', color: 'bg-green-500', width: 'w-[60%]', left: 'ml-[35%]' },
    { name: 'Response Streaming', duration: '400ms', color: 'bg-blue-400', width: 'w-[20%]', left: 'ml-[80%]' },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E5EA] p-4 font-mono text-xs shadow-xl overflow-hidden relative group">
       <div className="flex justify-between items-center mb-4 text-[#86868B] border-b border-[#E5E5EA] pb-2">
         <span>TRACE_ID: 8f2a9c1d</span>
         <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 1.85s total</span>
       </div>
       <div className="space-y-3 relative">
         {/* Grid lines */}
         <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
           {[...Array(6)].map((_, i) => <div key={i} className="w-px h-full bg-[#E5E5EA]"></div>)}
         </div>

         {spans.map((span, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.15 }}
             className="relative z-10 hover:z-20 group/span"
           >
             <div className={cn("h-8 rounded-md flex items-center px-3 text-white font-medium relative hover:ring-2 hover:ring-offset-1 hover:ring-blue-100 transition-all cursor-crosshair shadow-sm", span.color, span.width, span.left)}>
               <span className="truncate drop-shadow-md">{span.name}</span>
               <span className="ml-auto opacity-90 text-[10px] drop-shadow-md">{span.duration}</span>
               
               {/* Hover Tooltip */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-[#E5E5EA] rounded-lg p-3 shadow-xl opacity-0 group-hover/span:opacity-100 transition-opacity pointer-events-none z-50 hidden md:block text-[#1D1D1F]">
                 <div className="text-[10px] text-[#86868B] mb-1">Span Details</div>
                 <div className="font-semibold">latency: {span.duration}</div>
                 <div className="text-[#86868B]">tokens: {Math.floor(Math.random() * 500)}</div>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
}

// --- Sections ---

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFC] text-[#1D1D1F]">
      {/* 极简网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0071E3] text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3]"></span>
            </span>
            AirBit AIO Platform
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight text-[#1D1D1F]">
            拒绝 AI 应用<br />
            <span className="text-[#0071E3]">“裸奔”上线</span>
          </h1>
          <p className="text-xl text-[#86868B] leading-relaxed mb-10 max-w-xl font-light">
             为您的 LLM 应用提供全链路追踪 (Tracing)、Prompt 版本管理与自动化评估。像监控微服务一样监控 AI，让黑盒变白盒。
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
            {[
              { label: "全链路追踪", icon: <Activity className="w-4 h-4" /> },
              { label: "Prompt 工程化", icon: <Code className="w-4 h-4" /> },
              { label: "RAG 透视", icon: <Search className="w-4 h-4" /> },
              { label: "成本审计", icon: <DollarSign className="w-4 h-4" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#424245] text-sm">
                <div className="p-1.5 rounded bg-white shadow-sm border border-[#E5E5EA] text-[#0071E3]">{item.icon}</div>
                {item.label}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              立即部署 (Docker/K8s) <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5EA] font-medium hover:bg-[#FAFAFC] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> 在线 Sandbox 体验
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 w-[400px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"></div>
          <TraceVisual />
        </motion.div>
      </div>
    </section>
  );
}

function PainPoints() {
  const points = [
    { title: "调试黑洞", sub: "The Debugging Black Hole", desc: "用户投诉 AI 胡说八道，但无法复现。复盘每一次对话的完整上下文，一键重放故障现场。", icon: <AlertTriangle className="w-6 h-6 text-orange-500" /> },
    { title: "Prompt 管理混乱", sub: "Prompt Chaos", desc: "提示词硬编码在代码里，改一个词要重新发版。CMS 风格的管理后台，支持热更新与版本回溯。", icon: <FileText className="w-6 h-6 text-purple-500" /> },
    { title: "成本不可控", sub: "Uncontrolled Costs", desc: "账单爆炸却查不出原因。Token 级成本审计，精细计算每一笔调用的 ROI。", icon: <DollarSign className="w-6 h-6 text-red-500" /> },
    { title: "质量无量化", sub: "No Quality Metrics", desc: "模型更新后效果未知。建立金标准数据集，自动化回归测试量化模型表现。", icon: <Activity className="w-6 h-6 text-blue-500" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="bg-[#FAFAFC] p-8 rounded-3xl border border-[#E5E5EA] shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-3 rounded-2xl border border-[#E5E5EA] shadow-sm group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div className="text-right">
                   <h3 className="text-lg font-bold text-[#1D1D1F]">{p.title}</h3>
                   <div className="text-xs text-[#86868B] font-medium uppercase tracking-wider">{p.sub}</div>
                </div>
              </div>
              <p className="text-[#86868B] leading-relaxed text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureDeepDive() {
  return (
    <div className="w-full">
      
      {/* 1. Tracing */}
      <section className="py-24 bg-[#FAFAFC]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="text-[#0071E3] font-bold text-xs tracking-wider uppercase mb-4">Tracing</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-6">追踪 AI 思考的<br/>每一个微秒</h2>
              <p className="text-[#86868B] text-lg leading-relaxed mb-8">
                采用 OpenTelemetry 标准，将一次用户交互拆解为可视化的 Trace 链路。
              </p>
              <ul className="space-y-4">
                {[
                  { t: "精细化 Span", d: "拆分 Prompt 组装、向量检索、LLM 生成等步骤" },
                  { t: "元数据透视", d: "查看 Temperature、Token 消耗及 Latency" },
                  { t: "异常定位", d: "红色高亮显示错误步骤，缩短 90% 排查时间" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0071E3] shrink-0" />
                    <div>
                      <div className="text-[#1D1D1F] font-medium">{item.t}</div>
                      <div className="text-sm text-[#86868B]">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
           </div>
           {/* Visual Mockup */}
           <div className="bg-white rounded-xl border border-[#E5E5EA] p-1 shadow-md overflow-hidden ring-1 ring-black/5">
             <div className="bg-[#FAFAFC] p-4 border-b border-[#E5E5EA] flex gap-2">
               <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
               <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
               <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
             </div>
             <div className="p-6 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 text-[#1D1D1F]"><ChevronDown className="w-3 h-3" /> <span className="bg-blue-50 text-[#0071E3] px-1.5 py-0.5 rounded border border-blue-100">POST</span> /v1/chat/completions <span className="ml-auto text-[#86868B]">2.4s</span></div>
                <div className="pl-4 flex items-center gap-2 text-[#1D1D1F]"><ChevronDown className="w-3 h-3" /> <span className="bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded border border-yellow-100">RAG</span> retrieval <span className="ml-auto text-[#86868B]">400ms</span></div>
                <div className="pl-8 text-[#86868B] border-l border-[#E5E5EA] ml-5 py-1">query: "如何重置密码"</div>
                <div className="pl-8 text-[#86868B] border-l border-[#E5E5EA] ml-5 py-1">score: 0.89</div>
                <div className="pl-4 flex items-center gap-2 text-[#1D1D1F]"><ChevronRight className="w-3 h-3" /> <span className="bg-green-50 text-green-600 px-1.5 py-0.5 rounded border border-green-100">LLM</span> generation <span className="ml-auto text-[#86868B]">1.8s</span></div>
             </div>
           </div>
        </div>
      </section>

      {/* 2. Prompt Management */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center lg:grid-flow-col-dense">
           <div className="lg:col-start-2">
              <div className="text-purple-600 font-bold text-xs tracking-wider uppercase mb-4">Prompt Ops</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-6">把 Prompt 当作代码，<br/>但比代码更灵活</h2>
              <p className="text-[#86868B] text-lg leading-relaxed mb-8">
                解决 Prompt 协作难题，支持非技术人员在后台直接调优。
              </p>
              <ul className="space-y-4">
                {[
                  { t: "Git 级版本控制", d: "一键回滚 (Rollback)，秒级生效" },
                  { t: "A/B 测试", d: "10% 流量灰度，用真实数据决定胜负" },
                  { t: "结构化模板", d: "变量注入，分离业务数据与模板" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <GitBranch className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <div className="text-[#1D1D1F] font-medium">{item.t}</div>
                      <div className="text-sm text-[#86868B]">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
           </div>
           {/* Visual Mockup - Diff View */}
           <div className="bg-[#FAFAFC] rounded-xl border border-[#E5E5EA] p-6 shadow-md font-mono text-xs ring-1 ring-black/5">
              <div className="flex justify-between items-center mb-4 border-b border-[#E5E5EA] pb-4">
                <div className="flex gap-4">
                   <span className="px-2 py-1 rounded bg-red-50 text-red-600 border border-red-100">v1.2 (Old)</span>
                   <span className="px-2 py-1 rounded bg-green-50 text-green-600 border border-green-100">v1.3 (Current)</span>
                </div>
              </div>
              <div className="space-y-1">
                 <div className="bg-red-50 text-[#86868B] p-1 flex"><span className="w-6 text-[#86868B] select-none border-r border-[#E5E5EA] mr-2">1</span> <span className="line-through decoration-red-400/50 text-red-900/50">You are a helpful assistant.</span></div>
                 <div className="bg-green-50 text-[#1D1D1F] p-1 flex"><span className="w-6 text-[#86868B] select-none border-r border-[#E5E5EA] mr-2">1</span> <span className="text-green-700">You are a specialized financial advisor.</span></div>
                 <div className="text-[#86868B] p-1 flex"><span className="w-6 text-[#86868B] select-none border-r border-[#E5E5EA] mr-2">2</span> Answer strictly based on the context.</div>
                 <div className="bg-green-50 text-[#1D1D1F] p-1 flex"><span className="w-6 text-[#86868B] select-none border-r border-[#E5E5EA] mr-2">3</span> <span className="text-green-700">If unsure, say "I don't know".</span></div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. RAG */}
      <section className="py-24 bg-[#FAFAFC] text-center">
         <div className="max-w-[1200px] mx-auto px-6">
           <div className="text-orange-500 font-bold text-xs tracking-wider uppercase mb-4">RAG X-Ray</div>
           <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-6">你的模型真的读懂文档了吗？</h2>
           <p className="text-[#86868B] text-lg max-w-2xl mx-auto mb-16">
              专为检索增强生成 (RAG) 场景打造的深度观测能力，根治“幻觉”问题。
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-3xl border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 border border-orange-100">
                   <Search className="w-6 h-6" />
                 </div>
                 <h3 className="text-[#1D1D1F] font-bold mb-2 text-lg">检索命中分析</h3>
                 <p className="text-sm text-[#86868B]">显示 Top-K 结果及其相似度分数 (Similarity Score)。</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 border border-orange-100">
                   <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <h3 className="text-[#1D1D1F] font-bold mb-2 text-lg">相关性评估</h3>
                 <p className="text-sm text-[#86868B]">自动标记“检索内容”与“用户问题”是否相关，快速发现噪音。</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 border border-orange-100">
                   <FileText className="w-6 h-6" />
                 </div>
                 <h3 className="text-[#1D1D1F] font-bold mb-2 text-lg">引用溯源</h3>
                 <p className="text-sm text-[#86868B]">验证回答是否基于检索内容，精准定位模型“编造事实”时刻。</p>
              </div>
           </div>
         </div>
      </section>

      {/* 4. Eval */}
      <section className="py-24 bg-white">
         <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#FAFAFC] rounded-[32px] p-10 md:p-16 border border-[#E5E5EA] shadow-sm">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">建立 AI 质量的“金标准”</h2>
               </div>
               <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E5EA]">
                  <div className="text-center px-4 pt-4 md:pt-0">
                     <div className="text-[#1D1D1F] font-bold text-lg mb-2">自动化评估</div>
                     <div className="text-[#0071E3] text-xs font-bold uppercase tracking-wider mb-4">LLM-as-a-Judge</div>
                     <p className="text-[#86868B] text-sm">让 GPT-4 给 Llama-3 打分。自动检测幻觉、恶意内容及准确性。</p>
                  </div>
                  <div className="text-center px-4 pt-8 md:pt-0">
                     <div className="text-[#1D1D1F] font-bold text-lg mb-2">人工反馈</div>
                     <div className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">RLHF Integration</div>
                     <p className="text-[#86868B] text-sm">集成 👍/👎 反馈组件。收集真实用户的点赞与吐槽，转化为微调数据集。</p>
                  </div>
                  <div className="text-center px-4 pt-8 md:pt-0">
                     <div className="text-[#1D1D1F] font-bold text-lg mb-2">回归测试</div>
                     <div className="text-green-600 text-xs font-bold uppercase tracking-wider mb-4">Regression Testing</div>
                     <p className="text-[#86868B] text-sm">更新前自动运行 100+ 个经典测试用例，防止能力倒退。</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function CostSecurity() {
  return (
    <section className="py-24 bg-[#FAFAFC] border-t border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold text-[#1D1D1F] mb-8">给 CIO 的 AI 成本账本</h2>
               <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl border border-[#E5E5EA] shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-[#FAFAFC] p-3 rounded-xl border border-[#E5E5EA] shadow-sm h-fit"><DollarSign className="w-5 h-5 text-[#1D1D1F]" /></div>
                    <div>
                       <h4 className="text-[#1D1D1F] font-bold">Token 审计</h4>
                       <p className="text-sm text-[#86868B] mt-1">谁在花钱？按用户、部门、应用维度统计 Token 消耗趋势。</p>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-[#E5E5EA] shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-[#FAFAFC] p-3 rounded-xl border border-[#E5E5EA] shadow-sm h-fit"><Zap className="w-5 h-5 text-[#1D1D1F]" /></div>
                    <div>
                       <h4 className="text-[#1D1D1F] font-bold">ROI 分析</h4>
                       <p className="text-sm text-[#86868B] mt-1">识别高成本、低质量的异常调用，优化模型选择。</p>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-[#E5E5EA] shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-[#FAFAFC] p-3 rounded-xl border border-[#E5E5EA] shadow-sm h-fit"><Shield className="w-5 h-5 text-[#1D1D1F]" /></div>
                    <div>
                       <h4 className="text-[#1D1D1F] font-bold">私有化部署</h4>
                       <p className="text-sm text-[#86868B] mt-1">Docker / Kubernetes 私有化部署，数据不出内网，满足合规要求。</p>
                    </div>
                 </div>
               </div>
            </div>
            {/* Charts Mockup */}
            <div className="bg-white rounded-[32px] p-8 border border-[#E5E5EA] shadow-md flex flex-col justify-between h-full ring-1 ring-black/5">
               <div className="flex justify-between items-center mb-8">
                 <h3 className="text-[#1D1D1F] font-bold text-sm tracking-wide">TOKEN USAGE TREND</h3>
                 <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                 </div>
               </div>
               <div className="h-52 border-b border-[#E5E5EA] pb-2">
                  <svg viewBox="0 0 420 180" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0071E3" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Y-axis grid lines */}
                    {[30, 75, 120, 165].map((y) => (
                      <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#E5E5EA" strokeWidth="1" />
                    ))}
                    {/* X-axis labels */}
                    {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                      <text key={m} x={17.5 + i * 35} y="178" textAnchor="middle" fontSize="9" fill="#86868B">{m}</text>
                    ))}
                    {/* Blue area (input tokens) */}
                    <path
                      d="M17,138 L52,120 L87,130 L122,105 L157,118 L192,95 L227,108 L262,82 L297,95 L332,120 L367,72 L402,85 L402,168 L17,168 Z"
                      fill="url(#blueGrad)"
                    />
                    {/* Purple area (output tokens) */}
                    <path
                      d="M17,150 L52,138 L87,145 L122,128 L157,140 L192,118 L227,130 L262,108 L297,122 L332,142 L367,98 L402,112 L402,168 L17,168 Z"
                      fill="url(#purpleGrad)"
                    />
                    {/* Blue line (input tokens) */}
                    <polyline
                      points="17,138 52,120 87,130 122,105 157,118 192,95 227,108 262,82 297,95 332,120 367,72 402,85"
                      fill="none"
                      stroke="#0071E3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Purple line (output tokens) */}
                    <polyline
                      points="17,150 52,138 87,145 122,128 157,140 192,118 227,130 262,108 297,122 332,142 367,98 402,112"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Blue data points */}
                    {[[17,138],[52,120],[87,130],[122,105],[157,118],[192,95],[227,108],[262,82],[297,95],[332,120],[367,72],[402,85]].map(([x,y],i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#0071E3" />
                    ))}
                    {/* Purple data points */}
                    {[[17,150],[52,138],[87,145],[122,128],[157,140],[192,118],[227,130],[262,108],[297,122],[332,142],[367,98],[402,112]].map(([x,y],i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#A855F7" />
                    ))}
                  </svg>
               </div>
               {/* Legend */}
               <div className="flex gap-4 mt-2 mb-2">
                 <div className="flex items-center gap-1.5 text-xs text-[#86868B]">
                   <span className="w-3 h-0.5 bg-[#0071E3] inline-block rounded"></span>Input Tokens
                 </div>
                 <div className="flex items-center gap-1.5 text-xs text-[#86868B]">
                   <span className="w-3 h-0.5 bg-purple-500 inline-block rounded"></span>Output Tokens
                 </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mt-6">
                 <div>
                   <div className="text-[#86868B] text-xs mb-1 font-medium">Total Cost</div>
                   <div className="text-[#1D1D1F] font-mono font-bold text-lg">$1,204.50</div>
                 </div>
                 <div>
                   <div className="text-[#86868B] text-xs mb-1 font-medium">Avg Request</div>
                   <div className="text-[#1D1D1F] font-mono font-bold text-lg">$0.004</div>
                 </div>
                 <div>
                   <div className="text-[#86868B] text-xs mb-1 font-medium">Errors</div>
                   <div className="text-red-500 font-mono font-bold text-lg">0.8%</div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

function TechStack() {
  const stack = [
    { cat: "Models", items: ["OpenAI", "Azure", "Anthropic", "Mistral"] },
    { cat: "Frameworks", items: ["LangChain", "LlamaIndex", "Flowise"] },
    { cat: "Vector DBs", items: ["Pinecone", "Milvus", "Weaviate"] },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1D1D1F] mb-16">无缝集成您的 AI 技术栈</h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
           {stack.map((s, i) => (
             <div key={i} className="text-left">
                <div className="text-xs text-[#86868B] font-bold uppercase tracking-wider mb-4 border-b border-[#E5E5EA] pb-2">{s.cat}</div>
                <div className="space-y-2">
                   {s.items.map(item => (
                     <div key={item} className="text-[#1D1D1F] font-medium">{item}</div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="py-32 bg-[#FAFAFC] text-center relative overflow-hidden border-t border-[#E5E5EA]">
       <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-8 tracking-tight">准备好掌握您的 AI 应用了吗？</h2>
          <p className="text-[#86868B] text-xl mb-10 font-light">
             加入数千名开发者，使用 AirBit AIO 提升模型落地成功率。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                查看 GitHub 源码 <ArrowRight className="w-4 h-4" />
             </button>
             <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5EA] font-medium hover:bg-[#FAFAFC] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                阅读开发者文档
             </button>
          </div>
       </div>
    </section>
  );
}

// --- Mobile Bottom Nav (Sticky) ---
function MobileNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-[#E5E5EA] p-4 z-50 flex justify-around text-[10px] text-[#86868B] font-medium">
       <button className="flex flex-col items-center gap-1 hover:text-[#0071E3] transition-colors"><Activity className="w-5 h-5" /> 监控</button>
       <button className="flex flex-col items-center gap-1 hover:text-[#0071E3] transition-colors"><FileText className="w-5 h-5" /> 日志</button>
       <button className="flex flex-col items-center gap-1 hover:text-[#0071E3] transition-colors"><DollarSign className="w-5 h-5" /> 成本</button>
       <button className="flex flex-col items-center gap-1 hover:text-[#0071E3] transition-colors"><Server className="w-5 h-5" /> 设置</button>
    </div>
  );
}

export function AirBitAIOPage() {
  useSEO({ 
    title: 'AirBit AIO | 全栈可观测平台', 
    description: '为企业提供从传统微服务到大模型应用的端到端监控、日志分析与性能追踪能力的全栈可观测平台。',
    path: '/airbit-aio'
  });
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <PainPoints />
      <FeatureDeepDive />
      <CostSecurity />
      <TechStack />
      <FooterCTA />
      <MobileNav />
    </div>
  );
}
