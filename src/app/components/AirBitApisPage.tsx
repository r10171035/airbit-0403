import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, Shield, Eye, Server, Code, Globe, 
  ArrowRight, FileText, Check, DollarSign,
  ChevronDown, ChevronUp, Star, Phone
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
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AirBit Apis 4.0
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] leading-[1.1] tracking-tight mb-6">
            下一代云原生<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#00C7BE]">动态 API 网关</span>
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed mb-8 max-w-xl">
            基于 Nginx 与 OpenResty 构建，抛弃重载 (Reload)。以毫秒级热更新、全协议支持和极致性能，为企业微服务与 AI 应用提供统一流量入口。
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {['动态热更新', '七层全流量', 'AI 就绪', '99.999% SLA'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#FAFAFC] border border-[#E5E5EA] text-[#1D1D1F] text-sm font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              免费开始使用 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5EA] font-medium hover:bg-[#FAFAFC] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> 查看架构白皮书
            </button>
          </div>
        </motion.div>

        {/* Abstract Animation */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-full blur-3xl opacity-60" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            {/* Simulated 3D Light Beams using SVGs */}
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0071E3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00C7BE" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Central Engine */}
              <circle cx="200" cy="200" r="40" fill="url(#beamGrad)" className="animate-pulse" />
              <circle cx="200" cy="200" r="38" fill="white" />
              <circle cx="200" cy="200" r="15" fill="#0071E3" />
              
              {/* Incoming Beams */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={`in-${i}`}
                  x1={200 + Math.cos(i * 0.785) * 200}
                  y1={200 + Math.sin(i * 0.785) * 200}
                  x2="200"
                  y2="200"
                  stroke="url(#beamGrad)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              ))}

              {/* Outgoing Beams (Services) */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={`out-${i}`}
                  cx={200}
                  cy={200}
                  r={5}
                  fill="#0071E3"
                  animate={{ 
                    cx: 200 + Math.cos(i * 0.52) * 180,
                    cy: 200 + Math.sin(i * 0.52) * 180,
                    opacity: [1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeOut" }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    id: 'traffic',
    title: '极致流量治理',
    subtitle: 'Traffic Management',
    desc: '不仅是负载均衡，更是对每一比特流量的精细化掌控。',
    icon: Zap,
    color: 'blue',
    details: [
      { title: '多协议全代理', text: '原生支持 HTTP/1.1/2/3, gRPC, WebSocket, MQTT, TCP/UDP。内置 gRPC 转码。' },
      { title: '动态发布策略', text: '支持灰度发布 (Canary)、流量镜像 (Mirror)，基于 Header/IP/Cookie 切分。' },
      { title: '高可用防护', text: '智能限流 (Rate Limiting) 与主动熔断 (Circuit Breaker)，防止服务雪崩。' }
    ]
  },
  {
    id: 'security',
    title: '零信任安全盾牌',
    subtitle: 'Zero-Trust Security',
    desc: '将安全边界前移至网关，为后端服务构建统一的防御护城河。',
    icon: Shield,
    color: 'indigo',
    details: [
      { title: '身份认证矩阵', text: '开箱即用 OAuth2, OIDC, JWT, LDAP, Keycloak, HMAC 等多种认证方式。' },
      { title: '深度防御', text: '内置 WAF (防 SQL 注入/XSS)，IP 黑白名单，防重放攻击。' },
      { title: '数据隐私', text: '敏感数据自动脱敏 (Data Mask)，支持 mTLS 双向认证。' }
    ]
  },
  {
    id: 'observability',
    title: '全链路可观测性',
    subtitle: 'Observability',
    desc: '告别数据孤岛，让流量在黑盒中透明可见。',
    icon: Eye,
    color: 'green',
    details: [
      { title: '分布式追踪', text: '集成 SkyWalking, Zipkin, Jaeger, OTEL，自动生成 Trace ID。' },
      { title: '指标与监控', text: '原生 Prometheus 指标暴露，实时监控 QPS、延迟与带宽详情。' },
      { title: '日志生态', text: '实时推送访问日志至 Kafka, Elasticsearch, Splunk 或 TCP/UDP 服务。' }
    ]
  }
];

function FeatureSpectrum() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 bg-[#FAFAFC] border-t border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">功能全景</h2>
          <p className="text-[#86868B] max-w-2xl">
            AirBit Apis 提供了一整套企业级网关能力，满足从流量调度到安全合规的所有需求。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {features.map((feature) => (
              <div key={feature.id} className="relative">
                {/* Desktop Tab */}
                <button
                  onClick={() => setActiveTab(feature.id)}
                  className={cn(
                    "hidden lg:flex w-full text-left p-6 rounded-2xl transition-all duration-300 group border",
                    activeTab === feature.id 
                      ? "bg-white shadow-sm scale-100 border-[#E5E5EA]" 
                      : "border-transparent hover:bg-white/60 hover:border-[#E5E5EA] hover:scale-[1.02]"
                  )}
                >
                  <div className={cn(
                    "mr-4 p-3 rounded-xl transition-colors",
                    activeTab === feature.id ? `bg-${feature.color}-50 text-${feature.color}-600` : "bg-[#FAFAFC] text-[#86868B]"
                  )}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn("font-semibold text-lg mb-1", activeTab === feature.id ? "text-[#1D1D1F]" : "text-[#86868B]")}>
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#86868B] uppercase tracking-wider font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </button>

                {/* Mobile Accordion */}
                <div className="lg:hidden border-b border-[#E5E5EA] last:border-0">
                  <button
                    onClick={() => setActiveTab(activeTab === feature.id ? '' : feature.id)}
                    className="w-full flex items-center justify-between py-4 px-2"
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className={cn("w-5 h-5", activeTab === feature.id ? "text-[#0071E3]" : "text-[#86868B]")} />
                      <span className={cn("font-semibold", activeTab === feature.id ? "text-[#1D1D1F]" : "text-[#86868B]")}>
                        {feature.title}
                      </span>
                    </div>
                    {activeTab === feature.id ? <ChevronUp className="w-5 h-5 text-[#86868B]" /> : <ChevronDown className="w-5 h-5 text-[#86868B]" />}
                  </button>
                  <AnimatePresence>
                    {activeTab === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="py-4 px-2 space-y-4">
                           <p className="text-sm text-[#86868B] italic mb-4">{feature.desc}</p>
                           <div className="grid gap-4">
                             {feature.details.map((detail, idx) => (
                               <div key={idx} className="bg-white p-4 rounded-xl border border-[#E5E5EA] shadow-sm">
                                 <h4 className="font-medium text-[#1D1D1F] mb-1">{detail.title}</h4>
                                 <p className="text-sm text-[#86868B]">{detail.text}</p>
                               </div>
                             ))}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Content Panel */}
          <div className="hidden lg:block lg:w-2/3">
            <AnimatePresence mode="wait">
              {features.map((feature) => (
                activeTab === feature.id && (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[32px] p-10 border border-[#E5E5EA] shadow-sm h-full"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-${feature.color}-50 text-${feature.color}-600`}>
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1D1D1F]">{feature.title}</h3>
                        <p className="text-[#86868B] mt-1">{feature.desc}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className={cn(
                          "p-6 rounded-2xl bg-[#FAFAFC] border border-transparent hover:border-[#E5E5EA] hover:bg-white transition-all duration-300",
                          idx === 2 ? "col-span-2" : ""
                        )}>
                          <div className="flex items-start gap-3">
                            <Check className={`w-5 h-5 text-${feature.color}-500 mt-0.5 shrink-0`} />
                            <div>
                              <h4 className="font-semibold text-[#1D1D1F] mb-2">{detail.title}</h4>
                              <p className="text-sm text-[#86868B] leading-relaxed">{detail.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIGatewaySpotlight() {
  return (
    <section className="py-24 bg-white text-[#1D1D1F] overflow-hidden relative">
      <div className="absolute inset-0 bg-white pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-medium mb-6">
            AI Native
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            面向大模型时代的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">AI 流量管家</span>
          </h2>
          <p className="text-[#86868B] text-lg mb-10 leading-relaxed">
            专为 LLM 应用设计的统一控制平面，解决模型碎片化、成本不可控及数据泄露难题。
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Token 级精细限流</h3>
                <p className="text-[#86868B] text-sm">突破传统 QPS 限制，基于 Token 消耗量进行配额控制，精准把控 AI 预算。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">多模型统一代理 (AI Proxy)</h3>
                <p className="text-[#86868B] text-sm">屏蔽厂商接口差异，通过统一 API 连接 OpenAI, Claude, Gemini, DeepSeek 等主流模型。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#0071E3]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prompt 安全与管理</h3>
                <p className="text-[#86868B] text-sm">支持在网关层拦截、过滤或装饰 Prompt，防止敏感词输入及恶意 Prompt 注入。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative rounded-xl border border-[#E5E5EA] p-6 shadow-xl bg-white">
            <div className="flex items-center gap-2 mb-4 border-b border-[#E5E5EA] pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs text-[#86868B] font-mono ml-2">config.yaml</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-[#1D1D1F]">
              <code className="block">
                <span className="text-purple-600">ai_proxy:</span>{'\n'}
                <span className="text-[#86868B]">  # 统一模型路由配置</span>{'\n'}
                <span className="text-[#0071E3]">  providers:</span>{'\n'}
                <span className="text-[#1D1D1F]">    - name: openai</span>{'\n'}
                <span className="text-[#1D1D1F]">      model: gpt-4</span>{'\n'}
                <span className="text-[#1D1D1F]">      weight: 80</span>{'\n'}
                <span className="text-[#1D1D1F]">    - name: anthropic</span>{'\n'}
                <span className="text-[#1D1D1F]">      model: claude-3-opus</span>{'\n'}
                <span className="text-[#1D1D1F]">      weight: 20</span>{'\n'}
                {'\n'}
                <span className="text-purple-600">  governance:</span>{'\n'}
                <span className="text-[#0071E3]">    rate_limit:</span>{'\n'}
                <span className="text-[#1D1D1F]">      by: token_count</span>{'\n'}
                <span className="text-[#1D1D1F]">      limit: 100000/day</span>{'\n'}
                <span className="text-[#0071E3]">    security:</span>{'\n'}
                <span className="text-[#1D1D1F]">      detect_pii: true</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="py-24 bg-[#FAFAFC] border-t border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">坚若磐石的云原生架构</h2>
          <p className="text-[#86868B]">Control Plane 与 Data Plane 分离，确保极致性能与稳定性。</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Polyglot & Service Discovery */}
          <div className="space-y-12">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-[#0071E3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">打破语言壁垒的插件开发</h3>
              <p className="text-[#86868B] leading-relaxed mb-6">
                您的团队精通什么语言，就用什么语言扩展网关。支持使用 Java, Go, Python, Rust 甚至 Wasm (WebAssembly) 编写自定义插件。
              </p>
              <div className="flex flex-wrap gap-2">
                {['Lua', 'Java', 'Go', 'Python', 'Rust', 'Wasm'].map(lang => (
                  <span key={lang} className="px-3 py-1 bg-white border border-[#E5E5EA] text-[#86868B] text-sm font-medium rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
               <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">无处不在的服务发现</h3>
              <p className="text-[#86868B] leading-relaxed">
                自动感知后端服务变化，开箱支持 Nacos, Eureka, Consul, DNS, ZooKeeper 及 Kubernetes (K8s)。
              </p>
            </div>
          </div>

          {/* Architecture Diagram (Simplified Visualization) */}
          <div className="relative bg-white border border-[#E5E5EA] shadow-sm rounded-[40px] p-8 lg:p-12">
            <div className="flex flex-col gap-6">
              {/* Control Plane */}
              <div className="bg-[#FAFAFC] p-6 rounded-2xl border border-[#E5E5EA] text-center relative">
                 <div className="text-xs font-bold text-[#86868B] uppercase mb-2 tracking-wider">Control Plane</div>
                 <div className="font-bold text-[#1D1D1F] text-lg flex items-center justify-center gap-2">
                   <Server className="w-5 h-5 text-[#0071E3]" /> etcd Cluster
                 </div>
                 <p className="text-xs text-[#86868B] mt-2">配置中心 & 元数据存储</p>
                 
                 {/* Connection Lines */}
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#E5E5EA] border-l border-dashed border-[#E5E5EA]"></div>
              </div>

              {/* Data Plane */}
              <div className="bg-[#FAFAFC] p-6 rounded-2xl border border-[#E5E5EA] text-center mt-2 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0071E3] to-[#00C7BE]"></div>
                 <div className="text-xs font-bold text-[#86868B] uppercase mb-2 tracking-wider">Data Plane</div>
                 <div className="font-bold text-[#1D1D1F] text-lg flex items-center justify-center gap-2 mb-4">
                   <Zap className="w-5 h-5 text-yellow-500" /> Nginx + LuaJIT
                 </div>
                 <div className="grid grid-cols-3 gap-2 text-xs">
                   <div className="bg-white border border-[#E5E5EA] p-2 rounded text-[#86868B]">Plugin Runner</div>
                   <div className="bg-white border border-[#E5E5EA] p-2 rounded text-[#86868B]">Load Balancer</div>
                   <div className="bg-white border border-[#E5E5EA] p-2 rounded text-[#86868B]">WAF Engine</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-white border-t border-[#E5E5EA]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-6">准备好升级您的 API 架构了吗？</h2>
        <p className="text-xl text-[#86868B] mb-10">
          加入全球领先企业的行列，让 AI 与微服务治理更简单。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
            立即开始免费使用
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5EA] font-medium hover:bg-[#FAFAFC] transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
            联系销售团队
          </button>
        </div>
      </div>
    </section>
  );
}

export function AirBitApisPage() {
  useSEO({ 
    title: 'AirBit APIs | 云原生动态网关', 
    description: '接管进入企业所有流量的高性能 API 网关，提供身份认证、负载均衡、限流熔断等核心治理能力。',
    path: '/airbit-apis'
  });
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <FeatureSpectrum />
      <AIGatewaySpotlight />
      <Architecture />
      <CTA />
      
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5EA] p-4 z-50 flex items-center justify-between gap-4 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.05)]">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#FAFAFC] border border-[#E5E5EA] text-[#1D1D1F] font-medium rounded-lg text-sm">
          <Star className="w-4 h-4" /> Star on GitHub
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0071E3] text-white font-medium rounded-lg text-sm">
          <Phone className="w-4 h-4" /> 联系销售
        </button>
      </div>
    </div>
  );
}
