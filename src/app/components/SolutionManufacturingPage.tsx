import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  DollarSign,
  FlaskConical,
  Package,
  Search,
  Settings,
  Shield,
  Truck,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';

type IconType = React.ComponentType<{ className?: string }>;

interface PainPoint {
  title: string;
  sub: string;
  desc: string;
  quote: string;
  icon: IconType;
  color: string;
}

interface ScenarioCard {
  role: string;
  quote: string;
  solution: string;
  systems: string[];
}

interface ScenarioGroup {
  id: string;
  title: string;
  subtitle: string;
  positioning: string;
  coreSystems: string[];
  icon: IconType;
  color: string;
  cards: ScenarioCard[];
}

const painPoints: PainPoint[] = [
  {
    title: '产线状态靠跑车间，异常事后才知道',
    sub: 'Shopfloor Blind Spot',
    desc: '产线 OEE、设备故障、物料断供、质量异常——关键信息散落在 MES、SCADA、ERP 中，生产总监要掌握全貌得靠跑车间或等汇报。',
    quote: '3 号线停了 40 分钟才知道，因为报警信息在 SCADA 里没人看。',
    icon: Activity,
    color: 'text-orange-500',
  },
  {
    title: '质量追溯要跨多个系统，手工拼链路花一天',
    sub: 'Traceability Bottleneck',
    desc: '客户投诉一个产品，要从 CRM 查投诉 → QMS 查批次 → MES 查生产 → LIMS 查检测 → SRM 查原料供应商，手工拼接花整整一天。',
    quote: '客户要求 4 小时内回复追溯报告，我们实际要花一天。',
    icon: Search,
    color: 'text-blue-500',
  },
  {
    title: '设备非计划停机，损失大但提前不知道',
    sub: 'Reactive Maintenance',
    desc: '高价值设备的维保计划靠经验、不精准。故障预兆信号在 SCADA 里，但没人实时监测，往往设备坏了才维修，一次非计划停机损失 50 万。',
    quote: '一次非计划停机损失 50 万，事后发现设备前一天就有异常信号。',
    icon: Wrench,
    color: 'text-purple-500',
  },
  {
    title: 'AI 想用不敢用——工艺参数和客户报价是核心机密',
    sub: 'Security And IP Risk',
    desc: '工艺参数、BOM、客户报价、供应商信息都是企业核心竞争力，公有云模型绝对碰不得，必须私有化部署才能用 AI。',
    quote: '我们的工艺参数就是竞争口粮，绝对无法泄露这个风险。',
    icon: Shield,
    color: 'text-rose-500',
  },
];

const scenarios: ScenarioGroup[] = [
  {
    id: 'production',
    title: '生产制造与排程',
    subtitle: '产线 OEE、生产进度、物料齐套，问一句话全掌控',
    positioning: '让生产总监、计划员和车间主任实时掌握每条产线的状态',
    coreSystems: ['MES', 'ERP', 'APS', 'SCADA', 'WMS', 'OMS'],
    icon: Activity,
    color: 'blue',
    cards: [
      {
        role: '生产总监',
        quote: '各产线今天的运行状态、产出量和 OEE，哪条线效率最低？',
        solution: 'AI 查询 MES（产线数据）+ SCADA（设备状态），实时返回各线 OEE 和异常标注。',
        systems: ['MES', 'SCADA', 'BI'],
      },
      {
        role: '计划员',
        quote: '本周生产的 5 个工单，物料齐套情况，哪些还没到？',
        solution: 'AI 交叉查询 APS（生产计划）+ WMS（库存）+ SCM（在途采购），按工单返回物料齐套状态和缺料清单。',
        systems: ['APS', 'WMS', 'SCM', 'ERP'],
      },
      {
        role: '计划经理',
        quote: '订单 X 的生产进度，当前到哪道工序，预计什么时候完工？',
        solution: 'AI 查询 MES（工单进度）+ OMS（订单信息），返回当前工序、完成比例和预计完工时间。',
        systems: ['MES', 'OMS', 'ERP'],
      },
    ],
  },
  {
    id: 'quality',
    title: '质量管控与追溯',
    subtitle: '一个批次号 30 秒串联全链路——从原料到客户，从投诉到根因',
    positioning: '把质量追溯从手工拼接一天变成 AI 30 秒自动生成',
    coreSystems: ['QMS', 'MES', 'LIMS', 'SRM', 'CRM', 'SPC'],
    icon: Search,
    color: 'green',
    cards: [
      {
        role: '质量总监',
        quote: '客户投诉的批次号 SN-8856，追溯到原料批次、生产记录和检测数据？',
        solution: 'AI 同时调用 CRM（投诉记录）→ QMS（批次关联）→ MES（生产记录）→ LIMS（检测数据）→ SRM（原料供应商），30 秒生成完整追溯链。',
        systems: ['CRM', 'QMS', 'MES', 'LIMS', 'SRM'],
      },
      {
        role: '质量总监',
        quote: '本月产线的不良率趋势，Top 5 不良类型和根因分布？',
        solution: 'AI 综合 QMS（不良记录）+ MES（产线数据）+ SPC（控制图），输出不良趋势分析和根因 Pareto 图。',
        systems: ['QMS', 'MES', 'SPC', 'BI'],
      },
      {
        role: '来料主管',
        quote: '各供应商最近 3 个月的来料合格率趋势，PPM 值？',
        solution: 'AI 查询 QMS（IQC 检验记录）+ SRM（供应商档案），生成供应商质量排名和 PPM 趋势。',
        systems: ['QMS', 'SRM', 'LIMS'],
      },
    ],
  },
  {
    id: 'equipment',
    title: '设备管理与维护',
    subtitle: '设备状态、OEE、维保计划、备件库存全盘可见，从"故障后维修"到"主动预防"',
    positioning: '让设备主管在故障发生前就知道该做什么',
    coreSystems: ['EMS', 'CMMS', 'MES', 'SCADA', 'WMS'],
    icon: Settings,
    color: 'amber',
    cards: [
      {
        role: '设备主管',
        quote: '各关键设备当前运行状态，有没有异常告警？',
        solution: 'AI 查询 EMS（设备台账）+ SCADA（实时运行参数），标注异常设备和告警详情。',
        systems: ['EMS', 'SCADA'],
      },
      {
        role: '维修主管',
        quote: '下周需要做预防性维保的设备清单，需要哪些备件，备件库存够不够？',
        solution: 'AI 查询 CMMS（维保计划）+ WMS（备件库存），生成维保计划并校验备件齐套。',
        systems: ['CMMS', 'WMS'],
      },
      {
        role: '设备经理',
        quote: 'A 设备最近半年的故障记录和停机时长，有没有规律性故障？',
        solution: 'AI 分析 EMS（故障记录）+ CMMS（维修工单）+ SCADA（参数历史），输出故障频次和趋势分析。',
        systems: ['EMS', 'CMMS', 'SCADA', 'BI'],
      },
    ],
  },
  {
    id: 'supply',
    title: '供应链与采购',
    subtitle: '供应商交期、质量、成本多维评估，物料短缺风险提前预警',
    positioning: '让供应链团队从被动救火变成主动管控',
    coreSystems: ['SCM', 'SRM', 'ERP', 'QMS', 'WMS', 'APS'],
    icon: Truck,
    color: 'purple',
    cards: [
      {
        role: '供应链总监',
        quote: '各供应商最近 3 个月的按时交货率，影响了哪些生产工单？',
        solution: 'AI 查询 SRM（交货记录）+ ERP（采购订单）+ OMS（关联影响工单），生成交期达成率排名和影响分析。',
        systems: ['SRM', 'ERP', 'OMS'],
      },
      {
        role: '计划员',
        quote: '未来两周哪些物料存在短缺风险，影响哪些工单？',
        solution: 'AI 交叉查询 WMS（库存）+ APS（生产需求）+ SCM（在途采购），识别短缺风险并按紧急程度排序。',
        systems: ['WMS', 'APS', 'SCM', 'ERP'],
      },
      {
        role: 'CFO',
        quote: '本季各品类原材料采购成本对比上季，哪些涨幅最大？',
        solution: 'AI 查询 ERP（采购成本）+ SCM（品类分类），按品类分解成本变化并标注异常涨幅。',
        systems: ['ERP', 'SCM', 'BI'],
      },
    ],
  },
  {
    id: 'inventory',
    title: '仓储与物流',
    subtitle: '多仓库存统一视图，呆滞预警，发货追踪实时可查',
    positioning: '让仓储和物流信息随时可见，告别人工查询',
    coreSystems: ['WMS', 'ERP', 'OMS', 'TMS', 'MES'],
    icon: Package,
    color: 'cyan',
    cards: [
      {
        role: '供应链VP',
        quote: '各仓库的库存水位，哪些原材料低于安全库存？',
        solution: 'AI 查询 WMS + ERP，按仓库和物料类别汇总并标注低位预警。',
        systems: ['WMS', 'ERP'],
      },
      {
        role: '客服经理',
        quote: '客户 A 的订单发货了吗，物流单号和预计到达时间？',
        solution: 'AI 查询 OMS（订单状态）+ TMS（物流信息），返回发货状态和物流追踪。',
        systems: ['OMS', 'TMS', 'WMS'],
      },
    ],
  },
  {
    id: 'rd',
    title: '研发与工程管理',
    subtitle: 'BOM 查询秒级响应，ECN 变更影响范围自动评估，图纸 SOP 随时获取',
    positioning: '让研发、工程和车间工人都能即时获取准确的技术信息',
    coreSystems: ['PLM', 'ERP', 'MES', 'WMS', 'DMS'],
    icon: FlaskConical,
    color: 'rose',
    cards: [
      {
        role: '研发经理',
        quote: '这次 ECN 变更影响多少在制品，多少库存，多少采购订单需要调整？',
        solution: 'AI 同时查询 PLM（变更内容）+ MES（在制品）+ WMS（库存）+ ERP（采购订单），快速评估变更影响范围。',
        systems: ['PLM', 'MES', 'WMS', 'ERP'],
      },
      {
        role: '工程师',
        quote: '产品 A 的完整 BOM，关键物料和供应商？',
        solution: 'AI 查询 PLM（BOM 数据）+ ERP（供应商信息），返回多级 BOM 和关键物料供应商。',
        systems: ['PLM', 'ERP'],
      },
      {
        role: '车间工人',
        quote: '产品 B 的最新版装配图纸和作业指导书？',
        solution: 'AI 查询 DMS/PLM 中的最新版本文档并返回。',
        systems: ['DMS', 'PLM'],
      },
    ],
  },
  {
    id: 'safety',
    title: '安全生产与环保',
    subtitle: '安检整改闭环率、特种作业证到期、能耗异常，AI 主动预警',
    positioning: '让安全管理从被动响应变成主动防控',
    coreSystems: ['HSE', 'EMS', 'SCADA', 'SHR', '能耗管理'],
    icon: Shield,
    color: 'emerald',
    cards: [
      {
        role: '安全总监',
        quote: '本月各车间的安全检查数量和整改闭环率，还有哪些未关闭？',
        solution: 'AI 查询 HSE（检查台账），按车间统计并标注未闭环整改项。',
        systems: ['HSE', 'OA'],
      },
      {
        role: '厂区负责人',
        quote: '各车间的单位产品能耗对比，哪条线能耗异常偏高？',
        solution: 'AI 查询能耗管理系统 + MES（产出数据）+ SCADA（能耗数据），生成单位能耗对比和异常标注。',
        systems: ['能耗管理', 'MES', 'SCADA', 'BI'],
      },
    ],
  },
  {
    id: 'finance',
    title: '财务与经营分析',
    subtitle: 'CEO 的经营日报、CFO 的成本拆解、跨工厂对标，问一句话即达',
    positioning: '让管理层告别等报表，随时驾驭经营全局',
    coreSystems: ['ERP', 'BI', 'MES', 'WMS', '能耗管理', 'CRM'],
    icon: DollarSign,
    color: 'slate',
    cards: [
      {
        role: 'CEO',
        quote: '帮我看本周经营日报：营收、毛利率、OEE、库存周转、交付准时率。',
        solution: 'AI 综合 ERP + MES + WMS + OMS + BI 数据，自动生成周度经营日报。',
        systems: ['ERP', 'MES', 'WMS', 'BI'],
      },
      {
        role: 'COO',
        quote: '各工厂产能利用率、良率、能耗、人均产值对比，哪个工厂表现最好？',
        solution: 'AI 汇总各工厂 MES + ERP + 能耗数据，生成跨工厂对标分析，数据权限按工厂隔离。',
        systems: ['MES', 'ERP', '能耗管理', 'BI'],
      },
      {
        role: 'CFO',
        quote: '产品 A 的成本拆解：材料、人工、制造费用、能耗各占多少？',
        solution: 'AI 查询 ERP + MES + 能耗管理，按成本项精准拆解并对比趋势。',
        systems: ['ERP', 'MES', '能耗管理', 'BI'],
      },
    ],
  },
];

const metrics = [
  {
    value: '30 秒',
    label: '质量全链路追溯',
    desc: '从"跨 5 个系统手工拼接花一天"到"一个批次号 30 秒串联原料→生产→检测→客户"',
  },
  {
    value: '25+',
    label: '套系统零改造接入',
    desc: 'MES · ERP · PLM · QMS · SCADA · WMS · APS · EMS · LIMS · SRM · TMS · HSE · SPC……现有系统不改一行代码',
  },
  {
    value: '30–50%',
    label: 'AI 调用成本降低',
    desc: '语义缓存拦截高频重复查询 + 模型智能调度，"查设备 OEE""查工单进度"直接命中缓存',
  },
  {
    value: '60%+',
    label: '跨系统数据查询效率提升',
    desc: '生产总监查 OEE、计划员查物料齐套、CFO 查成本拆解，从"跑车间/跑多个系统"到"一句话 30 秒"',
  },
  {
    value: '100%',
    label: '数据不出厂',
    desc: '工艺参数、BOM、客户报价全部脱敏保护。私有化部署，满足保密和客户审计要求',
  },
];

const colorMap: Record<string, { panel: string; accent: string; tag: string }> = {
  blue:    { panel: 'bg-blue-50 border-blue-200',    accent: 'text-blue-600',    tag: 'bg-blue-100 text-blue-700' },
  green:   { panel: 'bg-green-50 border-green-200',  accent: 'text-green-600',   tag: 'bg-green-100 text-green-700' },
  amber:   { panel: 'bg-amber-50 border-amber-200',  accent: 'text-amber-600',   tag: 'bg-amber-100 text-amber-700' },
  purple:  { panel: 'bg-purple-50 border-purple-200',accent: 'text-purple-600',  tag: 'bg-purple-100 text-purple-700' },
  cyan:    { panel: 'bg-cyan-50 border-cyan-200',    accent: 'text-cyan-600',    tag: 'bg-cyan-100 text-cyan-700' },
  rose:    { panel: 'bg-rose-50 border-rose-200',    accent: 'text-rose-600',    tag: 'bg-rose-100 text-rose-700' },
  emerald: { panel: 'bg-emerald-50 border-emerald-200', accent: 'text-emerald-600', tag: 'bg-emerald-100 text-emerald-700' },
  slate:   { panel: 'bg-slate-50 border-slate-200',  accent: 'text-slate-600',   tag: 'bg-slate-100 text-slate-700' },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0071E3]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0071E3]" />
            </span>
            Manufacturing Solution
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
            从产线到 Boardroom
            <br />
            <span className="text-[#0071E3]">每一个环节都透明可控</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">
            AirBit 帮助制造企业用自然语言联动 25+ 套业务系统，
            让 AI 真正进入生产、质量、设备和供应链主流程，数据不出厂，全链路可追溯。
          </p>
          <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
            {[
              { label: '生产排程', icon: <Activity className="h-4 w-4" /> },
              { label: '质量追溯', icon: <Search className="h-4 w-4" /> },
              { label: '设备维护', icon: <Settings className="h-4 w-4" /> },
              { label: '经营分析', icon: <BarChart3 className="h-4 w-4" /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-[#424245]">
                <div className="rounded border border-[#E5E5EA] bg-white p-1.5 text-[#0071E3] shadow-sm">{item.icon}</div>
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#0077ED] hover:shadow-lg">
              预约行业演示 <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#overview" className="flex items-center justify-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-8 py-3.5 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] hover:shadow-md">
              查看全链路方案
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="rounded-[36px] border border-[#E5E5EA] bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#1D1D1F]">AirBit Manufacturing Copilot</div>
                <div className="text-xs text-[#86868B]">MES · ERP · QMS · SCADA · WMS</div>
              </div>
              <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">质量总监</div>
                <div className="text-sm leading-relaxed text-[#1D1D1F]">客户投诉批次号 SN-8856，追溯到原料批次、生产记录和检测数据？</div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 追溯结果</div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                  <li>原料批次：RAW-2024-0318，供应商：华东精密。</li>
                  <li>生产日期：3月19日，3号产线，操作员：李某。</li>
                  <li>LIMS 检测：硬度值偏低，超出 ±0.2 控制限。</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['根因分析', '影响范围', '隔离建议'].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#E5E5EA] bg-white px-4 py-3 text-center text-xs font-medium text-[#1D1D1F]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">制造企业 AI 落地的核心障碍</h2>
          <p className="text-[#86868B]">真正阻碍 AI 落地的，不是没有模型，而是链路太碎、系统太多、数据又很敏感。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-[#E5E5EA] bg-[#FAFAFC] p-8 shadow-sm"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-[#E5E5EA] bg-white p-3 shadow-sm">
                    <Icon className={`h-6 w-6 ${point.color}`} />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-[#1D1D1F]">{point.title}</h3>
                    <div className="text-xs font-medium uppercase tracking-wider text-[#86868B]">{point.sub}</div>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#86868B]">{point.desc}</p>
                <p className="border-l-2 border-[#E5E5EA] pl-3 text-xs italic text-[#86868B]">"{point.quote}"</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScenarioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeScenario = scenarios[activeIndex];
  const theme = colorMap[activeScenario.color];
  const ActiveIcon = activeScenario.icon;

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenarios.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="overview" className="bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#0071E3]">Overview</div>
          <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">八大场景，覆盖制造全价值链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            从生产排程到经营分析，从质量追溯到安全环保，AirBit 用自然语言串联 25+ 套业务系统，让每个岗位都能用 AI 做完了。
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {scenarios.map((scenario, index) => {
            const cardTheme = colorMap[scenario.color];
            const Icon = scenario.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[28px] border p-6 text-left transition-all ${
                  isActive ? `${cardTheme.panel} shadow-md` : 'border-[#E5E5EA] bg-white hover:border-[#C7D2FE]'
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className={`h-5 w-5 ${cardTheme.accent}`} />
                </div>
                <div className="mb-2 text-lg font-bold text-[#1D1D1F]">{scenario.title}</div>
                <div className="text-sm leading-relaxed text-[#86868B]">{scenario.subtitle}</div>
              </button>
            );
          })}
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`rounded-[36px] border p-8 lg:p-10 ${theme.panel}`}
        >
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <ActiveIcon className={`h-6 w-6 ${theme.accent}`} />
              </div>
              <h3 className="mb-3 text-4xl font-bold text-[#1D1D1F]">{activeScenario.title}</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-[#86868B]">{activeScenario.positioning}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeScenario.coreSystems.map((system) => (
                <span key={system} className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}>
                  {system}
                </span>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeScenario.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {activeScenario.cards.map((card) => (
                <div key={card.role} className="rounded-[28px] border border-[#E5E5EA] bg-white p-6 shadow-sm">
                  <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}>{card.role}</div>
                  <p className="mb-5 border-l-2 border-[#E5E5EA] pl-4 text-base leading-relaxed text-[#1D1D1F]">"{card.quote}"</p>
                  <div className="rounded-2xl bg-[#F5F5F7] p-4">
                    <div className="mb-2 text-sm font-bold uppercase tracking-wide text-[#0071E3]">AirBit 方案</div>
                    <p className="text-sm leading-relaxed text-[#1D1D1F]">{card.solution}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.systems.map((system) => (
                      <span key={system} className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs text-[#86868B]">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {scenarios.map((scenario, index) => (
            <button
              key={scenario.id}
              type="button"
              aria-label={scenario.title}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#0071E3]' : 'w-2.5 bg-[#D1D1D6]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const capabilities = [
    {
      product: 'Portal',
      role: '每个岗位的自然语言操作入口',
      desc: '生产总监查产线 OEE，质量总监做追溯，设备主管看维保计划，CEO 看经营日报。不是聊天窗口，是能操作 25+ 套系统的生产管理助理。',
    },
    {
      product: 'MCP Gateway',
      role: '工厂系统零改造接入',
      desc: '将 MES/ERP/PLM/QMS/SCADA/WMS/APS/EMS 等系统通过协议桥接转化为 AI 可调用的工具。后端零改造。这是"一个批次号 30 秒串联全链路"的基础——AI 需要同时调用 5-6 个系统。',
    },
    {
      product: 'AI Gateway',
      role: '多模型统一调度',
      desc: '支持国产模型和私有化部署的本地模型。简单查询用轻量模型，复杂分析用高端模型。语义缓存："查设备 OEE""查工单进度"这类高频查询直接命中缓存。',
    },
    {
      product: 'Guardrails',
      role: 'AI 安全策略引擎',
      desc: '工艺参数、BOM、客户报价自动脱敏后才发给模型；数据权限按工厂/车间隔离；操作类指令需确认后再执行。满足保密和客户审计要求。',
    },
    {
      product: 'Eips',
      role: '自动化流程编排',
      desc: '设备告警 → 自动判断严重程度 → 派工 → 检查备件；质量异常 → 自动触发隔离流程 → 通知品控。200+ 预置连接器，业务人员拖拽即建。',
    },
    {
      product: 'AIO',
      role: '全栈可观测',
      desc: 'Token 成本归因到工厂/部门/应用；AI 答复质量评估；全量操作审计日志。体系审计时 AI 操作记录可一键导出。',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">AirBit 平台如何支撑制造全价值链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            场景落地是统一平台的成果——每个产品组件各司其职，通过一个平台联动。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.product}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-[#E5E5EA] bg-[#FAFAFC] p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm font-bold text-[#0071E3]">{cap.product}</span>
                <span className="text-[#D1D1D6]">·</span>
                <span className="text-xs text-[#86868B]">{cap.role}</span>
              </div>
              <p className="text-sm leading-relaxed text-[#86868B]">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-t border-[#F5F5F7] bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">可量化的业务价值</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-[#E5E5EA] bg-white p-8 text-center shadow-sm"
            >
              <div className="mb-2 text-4xl font-bold text-[#0071E3]">{m.value}</div>
              <div className="mb-2 text-sm font-semibold text-[#1D1D1F]">{m.label}</div>
              <div className="text-xs leading-relaxed text-[#86868B]">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#1D1D1F]">客户案例</h2>
        <div className="overflow-hidden rounded-3xl border border-[#E5E5EA] shadow-sm">
          <div className="border-b border-[#D1E4FF] bg-[#EBF3FF] px-10 py-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0071E3]">某大型汽车零部件制造集团</div>
            <h3 className="mb-2 text-2xl font-bold text-[#1D1D1F]">年营收 120 亿+，3 个生产基地，员工 8000+</h3>
            <p className="text-sm text-[#86868B]">产品涵盖工程机械和核心零部件。运行 SAP · MES · PLM · QMS · LIMS · WMS · SCADA · EMS · APS · CRM · OMS · TMS · HSE 等 20 套核心系统。通过 IATF 16949 和 ISO 14001 认证。</p>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">核心痛点</h4>
              <ul className="space-y-3">
                {[
                  '客户投诉追溯需要跨 5 个系统手工拼接，无法在 4 小时内回复',
                  '设备非计划停机频发，故障前一天已有异常信号但无人监测',
                  '跨工厂对标缺乏统一数据视图，总部决策靠手工汇总',
                  '工程变更影响评估需研发/生产/采购三部门协调耗时 2-3 天',
                  '工艺参数和客户报价是核心机密，AI 安全顾虑大',
                  'Token 成本增长快但无法归因到工厂和部门',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#86868B]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#86868B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">AirBit 方案</h4>
              <ul className="space-y-3">
                {[
                  '私有化部署，数据安全不出厂',
                  'MCP Gateway 桥接 20 套系统，后端零改造',
                  'Portal 为生产、质量、设备、供应链、研发、财务团队提供自然语言入口',
                  'Guardrails 全链路安全：工艺参数和客户数据自动脱敏、数据权限按工厂隔离',
                  'Eips 搭建自动化流程：设备告警 → 自动派工 → 检查备件；质量异常 → 自动隔离 → 通知品控',
                  'AIO 成本归因到工厂/部门 + 体系审计日志一键导出',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#1D1D1F]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#34C759]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">实施成果</h4>
              <div className="space-y-4">
                {[
                  { v: '20 套系统', l: '零改造接入' },
                  { v: '30 秒', l: '质量全链路追溯（此前花一天）' },
                  { v: '40%', l: '非计划停机减少（维保 + 备件预警）' },
                  { v: '2天 → 2小时', l: '工程变更影响评估时间' },
                  { v: '45%', l: 'Token 成本降低' },
                  { v: '0', l: '上线后数据安全事件' },
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="flex-shrink-0 text-2xl font-bold text-[#0071E3]">{item.v}</span>
                    <span className="text-sm text-[#86868B]">{item.l}</span>
                  </div>
                ))}
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
    <section className="border-t border-black/5 bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-[860px] px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1D1D1F] lg:text-5xl">
          让 AI 成为制造企业的数字化生产台
          <br />
          从产线到 Boardroom，一个平台全面赋能
        </h2>
        <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">
          从排程、追溯到设备维护和经营分析，AirBit 帮你把制造业务系统和 AI 真正连起来。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约制造业专项演示
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制工厂专属接入方案
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionManufacturingPage() {
  useSEO({
    title: '制造业 AI 解决方案 | AirBit',
    description: 'AirBit 为制造企业提供生产排程、质量追溯、设备维护、供应链与经营分析的 AI 解决方案，帮助工厂在安全可控的前提下提升效率。',
    path: '/solution-manufacturing',
    keywords: '制造业 AI 解决方案, 工业 AI, 工厂 AI, 生产排程 AI, 质量追溯 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '制造业 AI 解决方案',
        description: 'AirBit 为制造企业提供生产排程、质量追溯、设备维护、供应链与经营分析的 AI 解决方案。',
        url: 'https://www.tlin.cn/solution-manufacturing',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 3, name: '制造业', item: 'https://www.tlin.cn/solution-manufacturing' },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <Hero />
      <PainPoints />
      <ScenarioShowcase />
      <PlatformSection />
      <Metrics />
      <CaseStudy />
      <CTA />
    </div>
  );
}
