import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Puzzle, Database, Cloud, Server, Globe, 
  ArrowRight, FileText, Check, Box, Layers,
  Workflow, Zap, Shield, GitFork, Merge,
  RefreshCw, FileJson, Terminal, Cpu,
  MessageSquare, HardDrive, Share2
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFC]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            AirBit Eips Engine
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1D1D1F]">
            企业软件世界的<br />
            <span className="text-[#0071e3]">“万能胶水”</span>
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed mb-8 max-w-xl">
            基于企业集成模式 (EIP) 构建。拥有 300+ 开箱即用的连接器，用一套 DSL 轻松打通 Kafka、Salesforce、K8s 与遗留系统。拒绝复杂的胶水代码，让数据自由流转。
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {['300+ Components', 'Kubernetes Native', 'Java/YAML DSL'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              查看组件列表 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5E5] font-medium hover:bg-[#F5F5F7] transition-all transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> 5分钟快速上手
            </button>
          </div>
        </motion.div>

        {/* EIP Hub Visual */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <svg viewBox="0 0 440 440" className="w-full h-full max-w-[440px]">
              <defs>
                <filter id="cardShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.07"/>
                </filter>
                <filter id="hubShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#0071e3" floodOpacity="0.2"/>
                </filter>
              </defs>

              {/* ── Connecting lines (center=220,220) ── */}
              <line x1="220" y1="220" x2="96" y2="96"   stroke="#E5E5EA" strokeWidth="1.5"/>
              <line x1="220" y1="220" x2="344" y2="96"  stroke="#E5E5EA" strokeWidth="1.5"/>
              <line x1="220" y1="220" x2="96" y2="344"  stroke="#E5E5EA" strokeWidth="1.5"/>
              <line x1="220" y1="220" x2="344" y2="344" stroke="#E5E5EA" strokeWidth="1.5"/>

              {/* ── Animated flow dots ── */}
              {([
                { sx:96,  sy:96,  delay:0    },
                { sx:344, sy:96,  delay:0.75 },
                { sx:96,  sy:344, delay:1.5  },
                { sx:344, sy:344, delay:2.25 },
              ] as {sx:number,sy:number,delay:number}[]).map((p,i)=>(
                <motion.circle key={i} r="3.5" fill="#0071e3"
                  animate={{ cx:[p.sx,220], cy:[p.sy,220], opacity:[0,1,0] }}
                  transition={{ duration:2.2, repeat:Infinity, delay:p.delay, ease:"easeInOut" }}
                />
              ))}

              {/* ── Corner cards ── */}

              {/* Top-Left: DB */}
              <g transform="translate(96,96)" filter="url(#cardShadow)">
                <rect x="-44" y="-44" width="88" height="88" rx="20" fill="white" stroke="#E5E5EA" strokeWidth="1"/>
                {/* DB icon */}
                <ellipse cx="0" cy="-10" rx="15" ry="6" fill="none" stroke="#1D1D1F" strokeWidth="2"/>
                <line x1="-15" y1="-10" x2="-15" y2="8" stroke="#1D1D1F" strokeWidth="2"/>
                <line x1="15"  y1="-10" x2="15"  y2="8" stroke="#1D1D1F" strokeWidth="2"/>
                <ellipse cx="0" cy="8" rx="15" ry="6" fill="none" stroke="#1D1D1F" strokeWidth="2"/>
                <text x="0" y="32" textAnchor="middle" fontSize="11" fill="#86868B" fontWeight="600">DB</text>
              </g>

              {/* Top-Right: SaaS */}
              <g transform="translate(344,96)" filter="url(#cardShadow)">
                <rect x="-44" y="-44" width="88" height="88" rx="20" fill="white" stroke="#E5E5EA" strokeWidth="1"/>
                {/* Cloud icon */}
                <path d="M-16,8 A10,10,0,0,1,-10,-8 A12,12,0,0,1,10,-10 A8,8,0,0,1,18,2 A6,6,0,0,1,12,8 Z"
                  fill="none" stroke="#1D1D1F" strokeWidth="2" strokeLinejoin="round"/>
                <text x="0" y="32" textAnchor="middle" fontSize="11" fill="#86868B" fontWeight="600">SaaS</text>
              </g>

              {/* Bottom-Left: Legacy */}
              <g transform="translate(96,344)" filter="url(#cardShadow)">
                <rect x="-44" y="-44" width="88" height="88" rx="20" fill="white" stroke="#E5E5EA" strokeWidth="1"/>
                {/* Server rack */}
                <rect x="-16" y="-16" width="32" height="10" rx="2" fill="none" stroke="#1D1D1F" strokeWidth="2"/>
                <circle cx="-8" cy="-11" r="2" fill="#1D1D1F"/>
                <rect x="-16" y="-1"  width="32" height="10" rx="2" fill="none" stroke="#1D1D1F" strokeWidth="2"/>
                <circle cx="-8" cy="4"  r="2" fill="#1D1D1F"/>
                <text x="0" y="28" textAnchor="middle" fontSize="11" fill="#86868B" fontWeight="600">Legacy</text>
              </g>

              {/* Bottom-Right: IoT */}
              <g transform="translate(344,344)" filter="url(#cardShadow)">
                <rect x="-44" y="-44" width="88" height="88" rx="20" fill="white" stroke="#E5E5EA" strokeWidth="1"/>
                {/* Chip / IoT */}
                <rect x="-12" y="-12" width="24" height="24" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="2"/>
                <rect x="-6"  y="-6"  width="12" height="12" rx="2" fill="#1D1D1F"/>
                <line x1="-6"  y1="-18" x2="-6"  y2="-12" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6"   y1="-18" x2="6"   y2="-12" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="-6"  y1="12"  x2="-6"  y2="18"  stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6"   y1="12"  x2="6"   y2="18"  stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="-18" y1="-6"  x2="-12" y2="-6"  stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="-18" y1="6"   x2="-12" y2="6"   stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12"  y1="-6"  x2="18"  y2="-6"  stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12"  y1="6"   x2="18"  y2="6"   stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
                <text x="0" y="32" textAnchor="middle" fontSize="11" fill="#86868B" fontWeight="600">IoT</text>
              </g>

              {/* ── Center Hub ── */}
              <g transform="translate(220,220)">
                {/* Breathing glow */}
                <motion.circle r="52" fill="#0071e3"
                  initial={{ opacity:0.1, scale:0.9 }}
                  animate={{ opacity:0.18, scale:1.1 }}
                  transition={{ duration:2.5, repeat:Infinity, repeatType:"reverse", ease:"easeInOut" }}
                  filter="url(#hubShadow)"
                />
                {/* White circle */}
                <circle r="40" fill="white" filter="url(#cardShadow)"/>
                {/* EIP chain icon (rotated 45°) */}
                <g transform="rotate(-45)">
                  <line x1="0" y1="-10" x2="0" y2="10" stroke="#0071e3" strokeWidth="2.5"/>
                  <rect x="-9" y="-23" width="18" height="15" rx="5" fill="white" stroke="#0071e3" strokeWidth="2.5"/>
                  <rect x="-9" y="8"  width="18" height="15" rx="5" fill="#0071e3"/>
                </g>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">停止编写脆弱的“管道代码”</h2>
          <p className="text-[#86868B] max-w-2xl mx-auto text-lg">
            您的团队是否花费 50% 的时间在处理 HTTP 连接、解析 XML、捕获异常和重试逻辑？AirBit Eips 将业务逻辑与传输细节彻底解耦。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before: Spaghetti Code */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100 relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
              Before
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-900">硬编码噩梦</h3>
              </div>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-red-700/80 text-sm">
                  <RefreshCw className="w-4 h-4" /> 复杂的异常重试逻辑
                </div>
                <div className="flex items-center gap-2 text-red-700/80 text-sm">
                  <FileJson className="w-4 h-4" /> 手动解析 XML/JSON
                </div>
                <div className="flex items-center gap-2 text-red-700/80 text-sm">
                  <GitFork className="w-4 h-4" /> 难以维护的 If-Else 路由
                </div>
              </div>

              {/* Spaghetti Visual */}
              <div className="relative h-32 w-full opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  <path d="M10,10 Q50,90 90,10 T170,90" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M10,50 Q90,10 170,50" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M10,90 Q90,50 170,10" fill="none" stroke="#ef4444" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* After: Clean Pipes */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
              After
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900">逻辑解耦 & 治理</h3>
              </div>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-green-800/80 text-sm">
                  <Check className="w-4 h-4" /> 声明式重试与熔断
                </div>
                <div className="flex items-center gap-2 text-green-800/80 text-sm">
                  <Check className="w-4 h-4" /> 自动 Type Converter
                </div>
                <div className="flex items-center gap-2 text-green-800/80 text-sm">
                  <Check className="w-4 h-4" /> 可视化全链路追踪
                </div>
              </div>

               {/* Clean Pipe Visual */}
               <div className="relative h-32 w-full opacity-40">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  <line x1="10" y1="25" x2="190" y2="25" stroke="#22c55e" strokeWidth="4" />
                  <line x1="10" y1="50" x2="190" y2="50" stroke="#22c55e" strokeWidth="4" />
                  <line x1="10" y1="75" x2="190" y2="75" stroke="#22c55e" strokeWidth="4" />
                  <circle cx="100" cy="25" r="6" fill="#22c55e" />
                  <circle cx="140" cy="50" r="6" fill="#22c55e" />
                  <circle cx="60" cy="75" r="6" fill="#22c55e" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const componentCategories = [
  {
    id: 'bigdata',
    name: '大数据与流处理',
    desc: '无缝接入数据湖，内置幂等性消费与死信队列。',
    example: 'from("kafka:orders").to("jdbc:data_warehouse")',
    color: 'orange',
    items: ['Kafka', 'Pulsar', 'ActiveMQ', 'RabbitMQ', 'Spark', 'Hadoop']
  },
  {
    id: 'cloud',
    name: '云服务 & Serverless',
    desc: '统一 URI 接口读写对象存储、触发云函数。',
    example: 'from("aws-s3:bucket").to("aws-lambda:process")',
    color: 'blue',
    items: ['AWS S3', 'AWS SQS', 'Azure Blob', 'Google PubSub', 'AliCloud OSS']
  },
  {
    id: 'saas',
    name: 'SaaS 与企业应用',
    desc: '打通业务孤岛，监听变更并自动推送。',
    example: 'from("salesforce:Contact").to("slack:channel")',
    color: 'indigo',
    items: ['Salesforce', 'ServiceNow', 'Slack', 'Jira', 'SAP', 'Telegram']
  },
  {
    id: 'db',
    name: '数据库与存储',
    desc: '支持 SQL 绑定、ORM 映射及 NoSQL 操作。',
    example: 'from("timer:tick").to("sql:select * from users")',
    color: 'green',
    items: ['JDBC', 'MongoDB', 'Redis', 'Cassandra', 'ElasticSearch', 'Postgres']
  },
  {
    id: 'legacy',
    name: '协议与遗留系统',
    desc: '协议转换专家，无需重写旧系统。',
    example: 'from("ftp:incoming").to("http:backend/api")',
    color: 'gray',
    items: ['HTTP/HTTPS', 'gRPC', 'Netty', 'FTP/SFTP', 'SOAP', 'Mina']
  }
];

function ConnectivityUniverse() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="py-24 bg-[#FAFAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">300+ 组件，连接一切</h2>
           <p className="text-[#86868B] max-w-2xl text-lg mb-8 mx-auto md:mx-0">
             无论是 20 年前的 FTP 服务器，还是最新的 AI 模型，AirBit Eips 都有现成的适配器。
           </p>
           
           {/* Search Bar - Light Theme */}
           <div className="max-w-xl relative mx-auto md:mx-0">
             <input 
               type="text" 
               placeholder="你要连接什么？(e.g. AWS S3, Redis...)" 
               className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[#1D1D1F] bg-[#F5F5F7] focus:bg-white placeholder:text-gray-400"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
               <Puzzle className="w-5 h-5" />
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentCategories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full bg-${cat.color}-50 flex items-center justify-center`}>
                   <div className={`w-2.5 h-2.5 rounded-full bg-${cat.color}-500 shadow-sm`}></div>
                </div>
                <h3 className={`font-bold text-[#1D1D1F] text-lg group-hover:text-${cat.color}-600 transition-colors`}>{cat.name}</h3>
              </div>
              
              <p className="text-sm text-[#86868B] mb-5 h-10 leading-relaxed line-clamp-2">{cat.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cat.items.map((item) => (
                   <span key={item} className="text-[11px] font-medium px-2.5 py-1 bg-[#F5F5F7] text-[#1D1D1F] rounded-md border border-gray-200/50">
                     {item}
                   </span>
                ))}
              </div>

              {/* Light Theme Code Snippet */}
              <div className="bg-[#F5F5F7] rounded-lg p-3 border border-gray-200/50 flex items-center gap-3 overflow-hidden">
                <div className="shrink-0 flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                   <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <code className="text-[10px] font-mono text-gray-500 whitespace-nowrap truncate w-full">
                  {cat.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EIPPatterns() {
  const [activeTab, setActiveTab] = useState('routing');

  const tabs = [
    { id: 'routing', label: '智能路由', icon: GitFork },
    { id: 'transform', label: '数据变形', icon: RefreshCw },
    { id: 'resilience', label: '坚固容错', icon: Shield },
  ];

  const content = {
    routing: {
      title: '复杂逻辑，简单编排',
      desc: '基于内容的路由 (Content Based Router)、拆分器 (Splitter)、聚合器 (Aggregator)。轻松实现“将 1GB 的大文件拆成单行处理，最后聚合结果”的复杂逻辑。',
      visual: (
        <div className="flex items-center justify-center gap-4 text-gray-400">
           <div className="flex flex-col items-center">
             <Box className="w-8 h-8 text-blue-500 mb-2" />
             <span className="text-xs">Input</span>
           </div>
           <ArrowRight className="w-4 h-4" />
           <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
             <GitFork className="w-6 h-6 text-gray-600" />
           </div>
           <div className="flex flex-col gap-2">
             <ArrowRight className="w-4 h-4 -rotate-12" />
             <ArrowRight className="w-4 h-4 rotate-12" />
           </div>
           <div className="flex flex-col gap-2">
             <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-xs text-white">A</div>
             <div className="w-8 h-8 bg-green-50 rounded flex items-center justify-center text-xs text-green-600 border border-green-200">B</div>
           </div>
        </div>
      )
    },
    transform: {
      title: '自动类型转换',
      desc: '自动将 XML 转换为 JSON，将 Binary 转换为 String，无需手动解析。内置 300+ 种 Type Converter，让数据在不同系统间无缝流转。',
      visual: (
        <div className="flex items-center justify-center gap-6">
           <div className="text-center">
             <div className="w-16 h-20 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mb-2 font-mono text-xs text-gray-500">
               &lt;XML&gt;
             </div>
           </div>
           <RefreshCw className="w-6 h-6 text-green-500 animate-spin-slow" />
           <div className="text-center">
             <div className="w-16 h-20 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center mb-2 font-mono text-xs text-green-400">
               &#123;JSON&#125;
             </div>
           </div>
        </div>
      )
    },
    resilience: {
      title: '全局容错策略',
      desc: '定义全局错误处理策略，“当网络故障时自动重试 3 次，失败后存入审计库”。支持熔断器 (Circuit Breaker) 与死信队列 (Dead Letter Channel)。',
      visual: (
        <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
          <div className="flex items-center gap-2 w-full">
             <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white shrink-0"><Zap className="w-4 h-4" /></div>
             <div className="h-0.5 bg-red-400 flex-grow relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
                 <Shield className="w-4 h-4 text-red-500" />
               </div>
             </div>
             <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-400 shrink-0"><Server className="w-4 h-4" /></div>
          </div>
          <div className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Circuit Open: Fallback Enabled</div>
        </div>
      )
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">内置 60+ 种企业集成模式 (EIP)</h2>
          <p className="text-[#86868B]">解决复杂的集成逻辑难题，开箱即用。</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl text-left transition-all",
                  activeTab === tab.id ? "bg-gray-100 text-[#1D1D1F]" : "text-gray-500 hover:bg-gray-50"
                )}
              >
                <tab.icon className={cn("w-5 h-5", activeTab === tab.id ? "text-green-600" : "text-gray-400")} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-[#F5F5F7] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">{content[activeTab as keyof typeof content].title}</h3>
              <p className="text-[#86868B] leading-relaxed">
                {content[activeTab as keyof typeof content].desc}
              </p>
            </div>
            <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm min-h-[200px] flex items-center justify-center">
              {content[activeTab as keyof typeof content].visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevAndCloud() {
  return (
    <section className="py-24 bg-[#111] text-white overflow-hidden bg-[#000000]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IDE Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">极简开发，原生上云</h2>
            
            <div className="bg-[#1E1E1E] rounded-xl border border-white/10 p-4 shadow-2xl font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                 <span className="text-green-400 font-bold border-b-2 border-green-400 pb-4 -mb-4.5 px-2">Java DSL</span>
                 <span className="text-gray-500 px-2 cursor-pointer hover:text-gray-300">YAML</span>
                 <span className="text-gray-500 px-2 cursor-pointer hover:text-gray-300">XML</span>
              </div>
              <div className="space-y-1 text-gray-300">
                <p><span className="text-purple-400">from</span>(<span className="text-green-300">"kafka:topic.orders"</span>)</p>
                <p className="pl-4">.<span className="text-blue-400">filter</span>(order -&gt; order.isHighPriority())</p>
                <p className="pl-4">.<span className="text-blue-400">marshal</span>().<span className="text-yellow-300">json</span>()</p>
                <p className="pl-4">.<span className="text-blue-400">to</span>(<span className="text-green-300">"http:erp-system/api/orders"</span>)</p>
                <p className="pl-4">.<span className="text-blue-400">onException</span>(IOException.class)</p>
                <p className="pl-8">.<span className="text-purple-400">maximumRedeliveries</span>(<span className="text-orange-400">3</span>)</p>
                <p className="pl-8">.<span className="text-purple-400">to</span>(<span className="text-green-300">"slack:alerts"</span>);</p>
              </div>
            </div>
          </div>

          {/* K8s / Cloud Native Section */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
             
             <div className="space-y-6 relative z-10">
               <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Cloud className="w-5 h-5" /></div>
                   <h3 className="font-bold text-lg">AirBit Eips K</h3>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   专为 Kubernetes 和 Serverless 设计的轻量级运行时。
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                   <div className="text-2xl font-bold text-green-400 mb-1">~50ms</div>
                   <div className="text-xs text-gray-400">Quarkus 启动时间</div>
                 </div>
                 <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                   <div className="text-2xl font-bold text-blue-400 mb-1">0 -&gt; 1</div>
                   <div className="text-xs text-gray-400">Scale-to-Zero 支持</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecsAndCTA() {
  return (
    <>
      <div className="bg-[#FAFAFC] border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50">
            <div>
              <div className="text-2xl font-bold text-[#1D1D1F]">65+</div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider mt-1">EIP Patterns</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1D1D1F]">300+</div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider mt-1">Connectors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1D1D1F]">JVM/K8s</div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider mt-1">Runtime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1D1D1F]">Apache 2.0</div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider mt-1">License</div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1D1D1F] mb-6">准备好打通您的企业数据脉络了吗？</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
              阅读开发者手册
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-[#1D1D1F] border border-[#D2D2D7] font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
              浏览组件库
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function AirBitEipsPage() {
  useSEO({ 
    title: 'AirBit EIPs | 企业集成框架', 
    description: '内置 300+ 现成连接组件的企业应用集成框架，加速构建统一、高效的数据互通网络，彻底打通企业信息孤岛。',
    path: '/airbit-eips'
  });
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <PainPoints />
      <ConnectivityUniverse />
      <EIPPatterns />
      <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">坚若磐石的云原生架构</h2>
          <p className="text-[#86868B] max-w-2xl mx-auto text-lg">
            Control Plane 与 Data Plane 分离，确保极致性能与稳定性。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="bg-[#F5F5F7] rounded-[2rem] p-12 flex flex-col items-center justify-center min-h-[400px]">
             {/* Control Plane Card */}
             <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-[320px] text-center border border-gray-100 relative z-10">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">Control Plane</div>
                <div className="flex items-center justify-center gap-2 text-[#1D1D1F] font-bold text-lg mb-2">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span>etcd Cluster</span>
                </div>
                <div className="text-xs text-gray-400">配置中心 & 元数据存储</div>
             </div>

             {/* Connection Line */}
             <div className="h-10 w-px border-l-2 border-dashed border-gray-300 my-2"></div>

             {/* Data Plane Card */}
             <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-[320px] text-center border border-gray-100 relative overflow-hidden z-10">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400"></div>
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3 mt-1">Data Plane</div>
                <div className="flex items-center justify-center gap-2 text-[#1D1D1F] font-bold text-lg mb-4">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Nginx + LuaJIT</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                   {['Plugin Runner', 'Load Balancer', 'WAF Engine'].map(tag => (
                     <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] rounded border border-gray-100">{tag}</span>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex gap-5">
               <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                 <Terminal className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">打破语言壁垒的插件开发</h3>
                 <p className="text-[#86868B] leading-relaxed mb-4">
                   您的团队精通什么语言，就用什么语言扩展网关。支持使用 Java, Go, Python, Rust 甚至 Wasm (WebAssembly) 编写自定义插件。
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {['Lua', 'Java', 'Go', 'Python', 'Rust', 'Wasm'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">
               <div className="shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                 <Globe className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">无处不在的服务发现</h3>
                 <p className="text-[#86868B] leading-relaxed">
                   自动感知后端服务变化，开箱支持 Nacos, Eureka, Consul, DNS, ZooKeeper 及 Kubernetes (K8s)。
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <SpecsAndCTA />
    </div>
  );
}
