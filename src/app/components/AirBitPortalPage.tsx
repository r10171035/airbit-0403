import { motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Briefcase,
  Coins,
  Cpu,
  FileSearch,
  HelpCircle,
  Lock,
  MessageSquare,
  Network,
  Search,
  ShieldAlert,
  ShieldCheck,
  Unplug,
  User,
  Zap,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSEO } from '../hooks/useSEO';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            全新发布 AirBit Portal
          </div>
          <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-[#1D1D1F] lg:text-6xl">
            AirBit Portal
            <br />
            <span className="bg-gradient-to-r from-[#0071E3] to-[#42A5F5] bg-clip-text text-transparent">企业级 AI 业务统一门户</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-[#86868B]">
            告别“玩具式”大模型对话。基于全栈 AI 基础设施，为企业打造安全、受控、直连业务的超级智能体交互中心。
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0071E3] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
              申请专属演示 <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-8 py-3.5 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
              获取架构白皮书
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 border-t border-[#F5F5F7] pt-10"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-[#86868B]">无缝兼容并连接主流模型与企业系统</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0">
            <div className="text-xl font-bold tracking-tighter">OpenAI</div>
            <div className="text-xl font-bold tracking-tight text-blue-800">Azure</div>
            <div className="text-xl font-bold tracking-wide">通义千问</div>
            <div className="text-2xl font-black tracking-tighter text-blue-600">SAP</div>
            <div className="text-xl font-bold tracking-widest text-blue-400">钉钉</div>
            <div className="text-xl font-semibold tracking-tight">内部 ERP</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const painPoints = [
  {
    icon: <ShieldAlert className="h-6 w-6 text-red-500" />,
    title: '合规形同虚设',
    desc: 'AI 安全完全依赖模型自觉，员工很容易诱导模型泄露内部财务数据或敏感客户信息。',
  },
  {
    icon: <Coins className="h-6 w-6 text-orange-500" />,
    title: '成本黑洞显现',
    desc: '月底 API 账单惊人，却无法清晰追溯究竟是哪一个部门、哪一个业务模块消耗了最多 Token。',
  },
  {
    icon: <Unplug className="h-6 w-6 text-gray-500" />,
    title: '业务系统割裂',
    desc: '大模型只是一个“孤岛知识库”，无法直接操作系统帮助员工发起审批、查阅报表或修改工单。',
  },
  {
    icon: <FileSearch className="h-6 w-6 text-purple-500" />,
    title: '问责机制缺失',
    desc: '模型一旦出现严重“幻觉”并导致业务决策失误，往往没有日志可查，最终变成黑盒。',
  },
];

function PainPoints() {
  return (
    <section className="bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D1D1F] lg:text-4xl">为什么企业不敢轻易让大模型进入生产环境</h2>
          <p className="text-lg text-[#86868B]">真正阻碍落地的，不是模型能力，而是安全、成本、系统连接和审计问题。</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">{point.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-[#1D1D1F]">{point.title}</h3>
              <p className="text-sm leading-relaxed text-[#86868B]">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const coreValues = [
  {
    icon: <Zap className="h-8 w-8 text-[#0071E3]" />,
    title: '零改造接入生产系统',
    desc: '无需业务团队重写大量代码，底层引擎将现有 REST、gRPC 以及老旧系统接口直接虚拟化为大模型可调用的专属工具。',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#0071E3]" />,
    title: '铁壁合规，守住数据安全',
    desc: '每一次对话都经过企业预设的安全护栏，自动拦截越权攻击、脱敏身份证号等 PII 数据，确保输出始终在制度框架内。',
  },
  {
    icon: <Activity className="h-8 w-8 text-[#0071E3]" />,
    title: '全链路审计，让 AI 透明可控',
    desc: '内置应用性能管理平台，记录检索链路、文档来源、提示词版本和 Token 消耗，实现 100% 审计追责。',
  },
];

function CoreValue() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D1D1F] lg:text-4xl">看似极简对话，实则全能中枢</h2>
          <p className="text-lg text-[#86868B]">AirBit Portal 不是一个简单聊天框，而是企业大模型的方向盘和刹车片。</p>
        </div>
        <div className="space-y-12">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-8 rounded-3xl bg-[#FAFAFC] p-8 md:flex-row md:items-center lg:p-12"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">{val.icon}</div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-[#1D1D1F]">{val.title}</h3>
                <p className="text-lg leading-relaxed text-[#86868B]">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const engines = [
  {
    name: 'AI Gateway（流量与成本管家）',
    desc: '统一纳管多厂商模型，利用语义缓存拦截重复提问，大幅降低 API 成本并提升响应速度。',
    icon: <Network className="h-6 w-6" />,
  },
  {
    name: 'Guardrails（规则引擎）',
    desc: '可编程的状态机护栏，强制大模型遵循企业审批流与合规逻辑，不再任由模型自由发挥。',
    icon: <Lock className="h-6 w-6" />,
  },
  {
    name: 'MCP Gateway（集成枢纽）',
    desc: 'AI 时代的 Service Mesh，为智能体提供安全隔离的调用环境，将非标系统桥接为标准化工具。',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    name: 'AIO（可观测与评估）',
    desc: '将提示词管理与全链路监控结合，支持热更新和 A/B 测试，让 AI 真正具备可运维性。',
    icon: <Search className="h-6 w-6" />,
  },
];

function EngineMatrix() {
  return (
    <section className="bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D1D1F] lg:text-4xl">AirBit 矩阵的强大驱动力</h2>
          <p className="text-lg text-[#86868B]">向技术决策者展示 Portal 背后的硬核基础设施。</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {engines.map((eng, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0071E3]/10 text-[#0071E3] transition-transform group-hover:scale-110">
                  {eng.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F]">{eng.name}</h3>
              </div>
              <p className="leading-relaxed text-[#86868B]">{eng.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    title: '场景 1：自然语言 OA 审批',
    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
    desc: 'Portal 自动提取发票信息，调用后台财务接口创建单据，并将审批流推送给主管跟进，大幅减少碎片化操作时间。',
    mockPrompt: '帮我报销去北京的机票，附件已上传。',
    mockResponse: '已识别机票发票，金额为 1,200 元。报销单 OA-2023-401 已创建，并已推送至部门主管张经理审批。',
    tool: 'OA 报销接口',
  },
  {
    title: '场景 2：数据隔离的对话式 BI',
    icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
    desc: '严格结合 IAM 权限，Portal 动态生成可视化图表，确保高管看全局、区域经理看局部，防止越权查询。',
    mockPrompt: '对比华南和华北上季度的利润率。',
    mockResponse: '已生成 Q3 利润率对比图。华南利润率为 18.2%，华北利润率为 15.4%，点击可查看详细明细。',
    tool: 'BI 数据查询工具',
  },
  {
    title: '场景 3：零幻觉的智能客服外脑',
    icon: <HelpCircle className="h-5 w-5 text-emerald-600" />,
    desc: '不仅给出答案，还会精准附带内部知识库的文档来源链接。如查无此据，系统会礼貌拒答，杜绝编造事实。',
    mockPrompt: '我们最新产品的保修条款是什么？',
    mockResponse: '根据《2023 硬件产品保修手册 v2.1》，最新产品提供 3 年有限保修，人为损坏不在保修范围内。来源：内部知识库 Doc#402。',
    tool: '企业知识库 RAG',
  },
];

function Scenarios() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D1D1F] lg:text-4xl">把 AI 转化为现实生产力</h2>
          <p className="text-lg text-[#86868B]">在实际业务中释放大模型的真正价值。</p>
        </div>

        <div className="space-y-16">
          {scenarios.map((scene, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div className={cn('order-2', idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2')}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-2">{scene.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F]">{scene.title}</h3>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-[#86868B]">{scene.desc}</p>
                <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-[#FAFAFC] px-3 py-1.5 text-sm font-medium text-[#1D1D1F]">
                  <Activity className="h-4 w-4 text-green-500" />
                  调用工具：{scene.tool}
                </div>
              </div>

              <div className={cn('order-1 rounded-3xl border border-gray-100 bg-[#FAFAFC] p-6 lg:p-8', idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1')}>
                <div className="flex h-[320px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs font-medium text-gray-500">AirBit Portal</div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="mb-6 flex max-w-[85%] self-end flex-row-reverse items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="rounded-2xl rounded-tr-sm bg-[#0071E3] px-4 py-3 text-sm leading-relaxed text-white shadow-sm">
                        {scene.mockPrompt}
                      </div>
                    </div>
                    <div className="flex max-w-[85%] items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm border border-gray-100 bg-[#FAFAFC] px-4 py-3 text-sm leading-relaxed text-[#1D1D1F]">
                        {scene.mockResponse}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-black/5 bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1D1D1F] lg:text-5xl">开启企业 AI 进化</h2>
        <p className="mb-10 text-xl leading-relaxed text-[#86868B]">
          让 AI 懂规则、知边界、能干活。AirBit Portal 是企业拥抱大模型的最后一块拼图。
        </p>
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-full bg-[#0071E3] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约产品演示
          </button>
          <button className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-3.5 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制企业专属接入方案
          </button>
        </div>
        <div className="mx-auto flex w-max items-center justify-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-4 py-2 text-sm text-[#86868B]">
          <ShieldCheck className="h-4 w-4 text-[#0071E3]" />
          支持完全私有化部署，数据 100% 不出内网
        </div>
      </div>
    </section>
  );
}

export function AirBitPortalPage() {
  useSEO({
    title: 'AirBit Portal - 企业级 AI 业务统一门户 | AirBit',
    description: '告别玩具式大模型对话。AirBit Portal 基于全栈 AI 基础设施，为企业打造安全、受控、直连业务的超级智能体交互中心。',
    path: '/airbit-portal',
    keywords: 'AirBit Portal, AI 企业门户, 企业级 AI, 智能体门户, AI 安全护栏, 企业 AI 落地',
    image: '/og-airbit.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AirBit Portal',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: '面向企业的 AI 业务统一门户，帮助企业在安全可控前提下连接模型、工具与业务系统。',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY',
      },
      publisher: {
        '@type': 'Organization',
        name: 'AirBit',
      },
    },
  });

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans selection:bg-[#0071E3] selection:text-white">
      <Hero />
      <PainPoints />
      <CoreValue />
      <EngineMatrix />
      <Scenarios />
      <CTA />
    </div>
  );
}
