import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Bot, 
  Activity, 
  Puzzle, 
  Terminal, 
  ArrowRight, 
  Zap, 
  Play, 
  ShieldCheck, 
  LayoutTemplate, 
  Code2,
  Lock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import dashboardImg from 'figma:asset/144f50de21826e7132ed5c3c56c36094960deecb.png';

// 定义 Tab 的数据结构，包含 7 个核心模块
const TABS = [
  { id: 'portal', label: 'AirBit Portal', icon: LayoutTemplate },
  { id: 'ai-gateway', label: 'AI Gateway', icon: Bot },
  { id: 'mcp-gateway', label: 'MCP Gateway', icon: Network },
  { id: 'guardrails', label: 'Guardrails', icon: ShieldCheck },
  { id: 'apis', label: 'AirBit APIs', icon: Code2 },
  { id: 'eips', label: 'AirBit EIPs', icon: Puzzle },
  { id: 'aio', label: 'AirBit AIO', icon: Activity },
];

// 每个 Tab 对应的内容配置
const TAB_CONTENT = {
  'portal': {
    title: '企业级 AI 统一门户',
    description: '为企业全员打造的一站式 AI 工作台。无缝集成各类大模型能力，开箱即用的对话界面与知识库检索，让每个员工都能安全地使用 AI。',
    features: [
      '企业级单点登录 (SSO) 与组织架构同步',
      '内置多种场景化 AI 助手与 Prompt 模板库',
      '开箱即用的企业知识库 RAG 极简对接',
      '全员使用行为追踪与可溯源的审计日志'
    ],
    buttonText: '进入门户',
    visual: (
      <div className="w-full h-full relative">
        <img 
          src={dashboardImg} 
          alt="AirBit Portal" 
          className="w-full h-full object-contain object-right-bottom rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-xl pointer-events-none" />
      </div>
    )
  },
  'ai-gateway': {
    title: '统一且强大的 AI 路由中心',
    description: '一站式代理 OpenAI、Claude、DeepSeek 等主流大模型。提供企业级的高可用负载均衡、多租户鉴权与智能语义缓存。',
    features: [
      '多模型动态智能路由与故障自动转移',
      '统一的 API 鉴权与细粒度应用级限流',
      '开箱即用的 Semantic Cache 语义缓存降本',
      '跨区域 (Multi-region) 的低延迟边缘接入'
    ],
    buttonText: '配置网关',
    visual: (
      <div className="w-full h-full bg-[#FAFAFC] rounded-xl border border-[#E5E5EA] shadow-sm flex flex-col overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-[#E5E5EA] bg-white">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto text-xs text-[#86868B] font-medium flex items-center gap-2">
            <Terminal className="w-3 h-3" /> API Request
          </div>
        </div>
        <div className="p-6 font-mono text-[13px] leading-relaxed text-[#1D1D1F] flex-1 overflow-hidden relative">
          <div className="text-[#AF52DE]">curl</div> -X POST <span className="text-[#0071E3]">https://api.airbit.com/v1/chat</span> \
          <br/>
          &nbsp;&nbsp;-H <span className="text-[#34C759]">"Authorization: Bearer sk-airbit-***"</span> \
          <br/>
          &nbsp;&nbsp;-H <span className="text-[#34C759]">"Content-Type: application/json"</span> \
          <br/>
          &nbsp;&nbsp;-d '&#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0071E3]">"model"</span>: <span className="text-[#34C759]">"gpt-4-turbo"</span>,
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0071E3]">"messages"</span>: [
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<span className="text-[#0071E3]">"role"</span>: <span className="text-[#34C759]">"user"</span>, <span className="text-[#0071E3]">"content"</span>: <span className="text-[#34C759]">"Hello AirBit"</span>&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;]
          <br/>
          &nbsp;&nbsp;&#125;'
          
          <div className="mt-6 p-4 bg-[#F5F5F7] rounded-lg border border-[#E5E5EA] animate-pulse">
            <div className="text-xs text-[#86868B] mb-2 flex items-center gap-1"><Zap className="w-3 h-3 text-[#0071E3]" /> Load Balancing...</div>
            <div className="h-2 bg-[#D2D2D7] rounded-full w-3/4 mb-2"></div>
            <div className="h-2 bg-[#D2D2D7] rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    )
  },
  'mcp-gateway': {
    title: '让 Agent 真正连接业务',
    description: '业界领先的企业级 MCP (Model Context Protocol) 网关。以安全、合规的方式，让大模型智能体直连您的内部数据库与核心 ERP。',
    features: [
      '标准 MCP 协议全面支持与双向转换',
      '基于角色的企业级工具调用权限管控',
      '隔离沙箱执行，确保内部网络绝对安全',
      '无缝集成主流内部系统 (Jira, Confluence 等)'
    ],
    buttonText: '连接智能体',
    visual: (
      <div className="w-full h-full bg-white rounded-xl border border-[#E5E5EA] shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-[280px] aspect-square">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0071E3] rounded-2xl shadow-lg shadow-blue-500/30 flex items-center justify-center z-20">
            <Network className="text-white w-8 h-8" />
          </div>
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5EA] z-10">
            <Bot className="text-[#1D1D1F] w-5 h-5" />
          </div>
          <div className="absolute bottom-[10%] left-[15%] w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5EA] z-10">
            <svg className="w-5 h-5 text-[#1D1D1F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <div className="absolute bottom-[10%] right-[15%] w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5EA] z-10">
            <Code2 className="text-[#1D1D1F] w-5 h-5" />
          </div>
          <svg className="absolute inset-0 w-full h-full -z-0" style={{ strokeDasharray: "4 4" }}>
            <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#D2D2D7" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#D2D2D7" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#D2D2D7" strokeWidth="2" />
          </svg>
        </div>
      </div>
    )
  },
  'guardrails': {
    title: '坚不可摧的安全护栏',
    description: '在应用与模型之间建立实时的��全防线。智能拦截敏感信息，防止 Prompt 注入攻击，确保每一次大模型调用都符合企业最高合规要求。',
    features: [
      '双向 PII 敏感数据自动识别与无缝脱敏',
      '实时防御 Prompt 注入、越狱与恶意篡改',
      '自定义敏感词库与企业内容合规审查',
      '细粒度的模型输出格式校验与阻断机制'
    ],
    buttonText: '配置策略',
    visual: (
      <div className="w-full h-full bg-[#FAFAFC] rounded-xl border border-[#E5E5EA] p-6 shadow-sm overflow-hidden flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-full max-w-[280px] gap-3 relative">
          {/* User Input */}
          <div className="w-full bg-white p-3 rounded-lg border border-[#E5E5EA] shadow-sm flex items-start gap-3">
             <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
               <span className="text-[10px] text-[#0071E3] font-bold">User</span>
             </div>
             <div className="text-[12px] text-[#1D1D1F] font-mono leading-relaxed">
               Analyze customer data: <br/><span className="bg-red-100 text-red-700 px-1 rounded">Phone: 138-xxxx-8888</span>
             </div>
          </div>
          
          {/* Active Guardrail Center */}
          <div className="relative flex items-center justify-center w-full my-1">
            <div className="absolute w-[2px] h-full bg-[#D2D2D7] -z-10"></div>
            <div className="bg-white border-2 border-[#34C759] rounded-xl p-2 shadow-[0_0_15px_rgba(52,199,89,0.3)] z-10">
              <ShieldCheck className="w-6 h-6 text-[#34C759]" />
            </div>
            <div className="absolute right-4 bg-[#F5F5F7] border border-[#E5E5EA] text-[10px] text-[#86868B] px-2 py-1 rounded flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#FF9F0A]" /> PII Masked
            </div>
          </div>

          {/* Model Input */}
          <div className="w-full bg-white p-3 rounded-lg border border-[#E5E5EA] shadow-sm flex items-start gap-3 opacity-90">
             <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
               <span className="text-[10px] text-purple-700 font-bold">AI</span>
             </div>
             <div className="text-[12px] text-[#1D1D1F] font-mono leading-relaxed">
               Analyze customer data: <br/><span className="bg-green-100 text-green-700 px-1 rounded">Phone: [REDACTED]</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  'apis': {
    title: '统一的 AI API 资产管理',
    description: '将零散的 Prompt 和模型能力标准化为企业级内部 API。提供完整的生命周期管理、版本控制与接口监控，十倍提升上层应用的研发效率。',
    features: [
      '一键将 Prompt 链路封装为标准 RESTful API',
      '多租户 API Key 生命周期管理与配额分发',
      '接口级别的版本控制与灰度发布机制',
      '实时追踪每个 API 消费者的用量与延迟'
    ],
    buttonText: '管理 API',
    visual: (
      <div className="w-full h-full bg-white rounded-xl border border-[#E5E5EA] shadow-sm flex flex-col overflow-hidden text-left">
        <div className="bg-[#FAFAFC] border-b border-[#E5E5EA] px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#1D1D1F]">API Endpoints</span>
          <span className="text-[10px] bg-[#E8F2FF] text-[#0071E3] px-2 py-0.5 rounded-full font-medium">3 Active</span>
        </div>
        <div className="flex-1 overflow-hidden p-2 space-y-2">
          {[
            { method: 'POST', path: '/v1/agent/customer-support', latency: '240ms', status: 'Healthy' },
            { method: 'GET', path: '/v1/rag/search-docs', latency: '120ms', status: 'Healthy' },
            { method: 'POST', path: '/v1/data/extract-invoice', latency: '850ms', status: 'Warning' },
          ].map((api, idx) => (
            <div key={idx} className="p-3 bg-white border border-[#E5E5EA] rounded-lg hover:border-[#D2D2D7] transition-colors cursor-default flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${api.method === 'POST' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {api.method}
                  </span>
                  <span className="text-[13px] font-mono text-[#1D1D1F]">{api.path}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#86868B]">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3" /> {api.latency}
                </span>
                <span className="flex items-center gap-1">
                  {api.status === 'Healthy' ? <CheckCircle2 className="w-3 h-3 text-[#34C759]" /> : <AlertTriangle className="w-3 h-3 text-[#FF9F0A]" />}
                  {api.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'eips': {
    title: '企业集成的万能胶水',
    description: '内置 300+ 预置连接器与组件，解决异构系统间的「语言不通」问题。通过可视化的低代码编排能力，彻底打破企业数据孤岛。',
    features: [
      '拖拽式低代码工作流编排与直观调试',
      '支持海量协议转换（HTTP, RPC, Kafka 等）',
      '高吞吐量的异步消息与事件驱动架构',
      '零信任架构设计，确保端到端数据传输安全'
    ],
    buttonText: '查看组件库',
    visual: (
      <div className="w-full h-full bg-[#FAFAFC] rounded-xl border border-[#E5E5EA] p-6 shadow-sm overflow-hidden flex flex-col justify-center">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5EA] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0071E3]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0071E3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </div>
              <span className="text-sm font-medium text-[#1D1D1F]">Receive Webhook</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#34C759]"></div>
          </div>
          
          <div className="flex justify-center -my-2 z-10">
            <div className="w-0.5 h-6 bg-[#D2D2D7]"></div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#0071E3] ring-1 ring-[#0071E3]/20 flex items-center justify-between relative transform scale-105">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#AF52DE]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#AF52DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <span className="text-sm font-medium text-[#1D1D1F]">Transform Data (AI)</span>
            </div>
            <Play className="w-4 h-4 text-[#0071E3] fill-current" />
          </div>

          <div className="flex justify-center -my-2 z-10">
            <div className="w-0.5 h-6 bg-[#D2D2D7]"></div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5EA] flex items-center justify-between opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#FF9F0A]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#FF9F0A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="text-sm font-medium text-[#1D1D1F]">Sync to ERP</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'aio': {
    title: '全链路可观测性 (AIOps)',
    description: '专为大模型应用打造的监控与诊断中心。从 Token 消耗到底层 RPC 调用，毫秒级追踪每一个请求，让 AI 系统的性能瓶颈无所遁形。',
    features: [
      '端到端分布式 Trace 追踪与拓扑图自动生成',
      '多维度的 Token 消耗监控与精准成本分析',
      '模型输出质量自动评估与延迟热点分析',
      '基于基线的智能异常检测与实时告警推送'
    ],
    buttonText: '查看大盘',
    visual: (
      <div className="w-full h-full bg-white rounded-xl border border-[#E5E5EA] shadow-sm p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xs font-semibold text-[#1D1D1F]">System Metrics</h4>
          <span className="text-[10px] text-[#86868B] flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live
          </span>
        </div>
        
        {/* Mock Metrics Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#FAFAFC] p-3 rounded-lg border border-[#E5E5EA]">
            <div className="text-[10px] text-[#86868B] mb-1">Total Requests</div>
            <div className="text-lg font-semibold text-[#1D1D1F]">1.2M</div>
            <div className="text-[10px] text-[#34C759] flex items-center mt-1">↑ 12% vs last week</div>
          </div>
          <div className="bg-[#FAFAFC] p-3 rounded-lg border border-[#E5E5EA]">
            <div className="text-[10px] text-[#86868B] mb-1">Avg Latency</div>
            <div className="text-lg font-semibold text-[#1D1D1F]">240<span className="text-xs text-[#86868B]">ms</span></div>
            <div className="text-[10px] text-[#0071E3] flex items-center mt-1">↓ 5% optimized</div>
          </div>
        </div>

        {/* Mock Line Chart (CSS) */}
        <div className="flex-1 w-full bg-[#FAFAFC] rounded-lg border border-[#E5E5EA] relative overflow-hidden flex items-end px-2 pt-6 pb-2 gap-1">
           {/* Mock bars representing timeline usage */}
           {[40, 60, 30, 80, 50, 90, 45, 70, 85, 55, 65, 30].map((height, i) => (
             <div key={i} className="flex-1 bg-[#0071E3]/20 rounded-t-sm relative group hover:bg-[#0071E3]/40 transition-colors" style={{ height: `${height}%` }}>
               <div className="absolute -top-1 left-0 right-0 h-0.5 bg-[#0071E3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
           ))}
        </div>
      </div>
    )
  }
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const content = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT] || TAB_CONTENT[TABS[0].id as keyof typeof TAB_CONTENT];

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-[#FAFAFC]">
      {/* 极简网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full text-center">
        {/* 标题区域保持原样 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <p className="text-[#0071E3] font-semibold tracking-wide text-sm mb-3 uppercase">
            全栈 AI 基础设施
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#1D1D1F] mb-6 tracking-tight leading-[1.05]"
        >
          企业级 AI 的
          <br />
          信任基石
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-[#86868B] mb-16 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          统一的治理、可观测性与连接层。
          驯服大模型的复杂与混沌，让 AI 在企业内部安全落地。
        </motion.p>

        {/* --- 交互式功能展示卡片 --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[1080px] mx-auto"
        >
          {/* 顶部 Tab 导航 (扩展为 7 个模块) */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-white text-[#1D1D1F] shadow-[0_4px_12px_rgba(0,0,0,0.08)] ring-1 ring-[#E5E5EA]' 
                      : 'text-[#86868B] hover:text-[#1D1D1F] hover:bg-white/50'
                    }
                  `}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0071E3]' : ''}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 核心内容展示区 (明亮 Apple 风格卡片) */}
          <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#E5E5EA] overflow-hidden text-left relative min-h-[480px] flex items-center">
            
            {/* 内容切换动画容器 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex flex-col lg:flex-row gap-12 items-center relative z-10"
              >
                
                {/* 左侧：文字说明与特性列表 */}
                <div className="flex-1 w-full lg:max-w-[400px]">
                  <h3 className="text-3xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
                    {content.title}
                  </h3>
                  <p className="text-[16px] text-[#86868B] leading-relaxed mb-8">
                    {content.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {content.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E8F2FF] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#0071E3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#1D1D1F] text-[15px] font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 px-6 py-3 bg-[#1D1D1F] hover:bg-[#000000] text-white text-[15px] font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group">
                    {content.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 右侧：可视化 Mockup 区域 */}
                <div className="flex-1 w-full h-[320px] lg:h-[400px] flex items-center justify-center relative">
                  {content.visual}
                </div>

              </motion.div>
            </AnimatePresence>

            {/* 装饰性背景光晕 */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/50 to-purple-50/50 blur-3xl rounded-full -z-0 pointer-events-none opacity-50" />
          </div>

        </motion.div>
      </div>
      
      {/* 底部平滑过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}