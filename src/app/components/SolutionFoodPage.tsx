import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ClipboardList,
  DollarSign,
  FlaskConical,
  Package,
  Search,
  Shield,
  ShoppingCart,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';

type IconType = React.ComponentType<{ className?: string }>;

interface PainPoint {
  title: string;
  sub: string;
  desc: string;
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
    title: '追溯链条长，手工拼接花整整两天',
    sub: 'Traceability Bottleneck',
    desc: '食品安全法要求"正向追踪、反向追溯"，但数据散落在 MES、WMS、QMS、LIMS、SCM 等系统中，一次追溯报告要手工拼接整整两天。',
    icon: Search,
    color: 'text-orange-500',
  },
  {
    title: '临期预警靠人工，冷链断链事后才发现',
    sub: 'Cold Chain Blind Spot',
    desc: '保质期是食品的生命线，但临期预警依赖人工查点；冷链车辆温控告警分散在 SCADA 和 TMS 中，超温发现时已损失数十万。',
    icon: Truck,
    color: 'text-blue-500',
  },
  {
    title: '合规资料准备重，审计前整整一周在凑材料',
    sub: 'Audit Preparation Burden',
    desc: 'GMP、HACCP、SC 许可、ISO 22000……每次外审都是临窗突击，生产记录、检测报告、SOP 文件散在四个系统里，每次外审准备至少一周。',
    icon: ClipboardList,
    color: 'text-purple-500',
  },
  {
    title: 'AI 想用不敢用——配方和供应商来价是核心机密',
    sub: 'IP And Data Security',
    desc: '配方参数、供应商来价、质检数据分给外部模型，Token 成本快速增长但无法归口。配方和报价是核心机密，这些数据绝对不能出厂。',
    icon: Shield,
    color: 'text-rose-500',
  },
];

const scenarios: ScenarioGroup[] = [
  {
    id: 'procurement',
    title: '原料采购与供应商管理',
    subtitle: '价格走势、质量履约、资质预警，问一句话全掌控',
    positioning: '价格走势、质量履约、资质预警，问一句话全掌控',
    coreSystems: ['SCM', 'SRM', 'ERP', 'QMS', 'LIMS', 'BI'],
    icon: ShoppingCart,
    color: 'blue',
    cards: [
      {
        role: '采购总监',
        quote: '面粉主要供应商的采购价格近 6 个月走势，哪家性价比最高？',
        solution: 'AI 调用 SRM（供应商档案）+ ERP（历史采购价格）+ BI（趋势分析），30 秒生成供应商价格走势对比和性价比评分。',
        systems: ['SRM', 'ERP', 'BI'],
      },
      {
        role: '品控总监',
        quote: '某批原料供应商最近 3 个月的进货批次检验合格率趋势？',
        solution: 'AI 交叉查询 QMS（检验记录）+ LIMS（检测数据）+ SRM（供应商档案），生成供应商质量履约率和趋势。',
        systems: ['QMS', 'LIMS', 'SRM'],
      },
      {
        role: '采购经理',
        quote: '哪些供应商的 SC 许可证、ISO 认证即将到期？',
        solution: 'AI 查询 SRM（供应商资质）+ DMS（证书文档）+ GRC（资质预警），输出即将到期清单并可触发通知流程。',
        systems: ['SRM', 'DMS', 'GRC'],
      },
    ],
  },
  {
    id: 'production',
    title: '生产制造与工艺管控',
    subtitle: '产线状态、工艺参数、CIP 清洁、配料合规，实时在线',
    positioning: '产线状态、工艺参数、CIP 清洁、配料合规，实时在线',
    coreSystems: ['MES', 'QMS', 'SCADA', 'EMS', 'PLM', 'ERP'],
    icon: Package,
    color: 'green',
    cards: [
      {
        role: '车间主任',
        quote: '蒸煮工序的温度和时间是否在标准范围？有没有异常记录？',
        solution: 'AI 实时查询 MES（工序记录）+ SCADA（温度/时间参数），对比标准参数范围，异常自动高亮。',
        systems: ['MES', 'SCADA'],
      },
      {
        role: '品控经理',
        quote: '今天各产线的 CIP 清洁记录是否完整？清洁参数是否达标？',
        solution: 'AI 查询 MES（CIP 清洁执行记录）+ QMS（清洁标准参数），逐线校验完整性和达标情况。',
        systems: ['MES', 'QMS'],
      },
      {
        role: '研发经理',
        quote: '这款新添加剂的用量是否符合 GB 标准限量要求？',
        solution: 'AI 查询配方系统/PLM（配方数据）+ KMS（GB 标准知识库），自动校验每种添加剂是否在限量范围内。',
        systems: ['PLM', 'KMS', 'QMS'],
      },
    ],
  },
  {
    id: 'quality',
    title: '质量管控与检测',
    subtitle: '质检数据一句话串联，从原料到批次到产线到投诉',
    positioning: '质检数据一句话串联，从原料到批次到产线到投诉',
    coreSystems: ['QMS', 'LIMS', 'MES', 'SRM', 'CRM', 'KMS'],
    icon: FlaskConical,
    color: 'amber',
    cards: [
      {
        role: '品控经理',
        quote: '批次号 BT-20240315 的全部质检数据，微生物、理化、感官评价？',
        solution: 'AI 调用 QMS（检验记录）+ LIMS（实验室检测数据），汇总该批次全部检测项目和结果。',
        systems: ['QMS', 'LIMS'],
      },
      {
        role: '质量总监',
        quote: '最近收到的客户质量投诉涉及哪些批次？对应的生产记录和质检数据？',
        solution: 'AI 串联 CRM（投诉记录）→ QMS（批次关联）→ MES（生产记录）→ LIMS（检测数据），30 秒完成投诉-批次-产线-质检的全链路关联。',
        systems: ['CRM', 'QMS', 'MES', 'LIMS'],
      },
      {
        role: '合规经理',
        quote: '最新 GB 标准对这类产品的添加剂限量和标签要求？',
        solution: 'AI 检索法规知识库（RAG），基于最新 GB 标准给出准确答复并标注来源文件和条款。',
        systems: ['KMS（RAG）', 'GRC'],
      },
    ],
  },
  {
    id: 'traceability',
    title: '批次追溯与食品安全',
    subtitle: '一个批次号，30 秒串联从原料到消费者的全链路',
    positioning: '一个批次号，30 秒串联从原料到消费者的全链路——正向追踪、反向追溯',
    coreSystems: ['MES', 'WMS', 'QMS', 'LIMS', 'SCM', 'OMS'],
    icon: Search,
    color: 'purple',
    cards: [
      {
        role: '质量总监',
        quote: '批次号 BT-0315 的原料来源、生产工艺记录、质检结果和流向去向？',
        solution: 'AI 同时调用 SCM（原料批次和供应商）+ MES（生产记录和工艺参数）+ QMS/LIMS（质检数据）+ WMS（出入库记录）+ OMS（发货订单），30 秒生成完整反向追溯链。',
        systems: ['MES', 'WMS', 'QMS', 'LIMS', 'SCM', 'OMS'],
      },
      {
        role: '质量总监',
        quote: '如果要召回批次 BT-0315，影响多少库存、多少已发货订单、涉及哪些渠道？',
        solution: 'AI 查询 WMS（该批次剩余库存量和位置）+ OMS（已发货订单和渠道清单），秒级完成召回影响评估。',
        systems: ['WMS', 'OMS', 'CRM'],
      },
      {
        role: '合规经理',
        quote: '帮我准备本次监管层检查需要的生产记录、质检报告和追溯链数据。',
        solution: 'AI 汇总 MES（生产记录）+ QMS/LIMS（质检报告）+ DMS（SOP 和证书）+ GRC（合规记录），一键生成检查资料包。',
        systems: ['MES', 'QMS', 'LIMS', 'DMS', 'GRC'],
      },
    ],
  },
  {
    id: 'inventory',
    title: '仓储与库存管理',
    subtitle: '临期预警、冷库温湿度在线、补货建议可执行',
    positioning: '临期实时预警、冷库温湿度在线、调拨补货建议可执行',
    coreSystems: ['WMS', 'SCADA/IoT', 'OMS', 'POS', 'DRP', 'ERP'],
    icon: Package,
    color: 'cyan',
    cards: [
      {
        role: '仓库主管',
        quote: '30 天内即将到期的产品有哪些？数量、批次和存放位置？',
        solution: 'AI 查询 WMS（库存效期数据），按紧急程度输出临期清单，标注批次、数量和库位。',
        systems: ['WMS'],
      },
      {
        role: '供应链总监',
        quote: '临期产品对应哪些门店还有在售？建议调拨到哪些渠道促销？',
        solution: 'AI 交叉分析 WMS（临期库存）+ POS（门店在售数据）+ DRP（调拨规划），生成临期多处理建议方案。',
        systems: ['WMS', 'POS', 'OMS', 'DRP'],
      },
      {
        role: '仓储经理',
        quote: '各冷库当前温湿度是否在合规范围？今天有没有超温记录？',
        solution: 'AI 实时查询 SCADA/IoT（温湿度传感器数据），对比合规阈值，超温记录自动高亮。',
        systems: ['WMS', 'SCADA/IoT'],
      },
    ],
  },
  {
    id: 'logistics',
    title: '物流与冷链配送',
    subtitle: '冷链温控全程可视，断链秒级告警，配送费用可控',
    positioning: '冷链温控全程可视，断链秒级告警，签收异常根因分析',
    coreSystems: ['TMS', 'IoT', 'OMS', 'ERP', 'QMS'],
    icon: Truck,
    color: 'emerald',
    cards: [
      {
        role: '物流经理',
        quote: '在途冷链车辆有没有温度异常？哪辆车、什么时候发生的？',
        solution: 'AI 查询 TMS（在途车辆）+ IoT（车载温控数据），定位异常车辆、异常时间段和当时温度曲线。',
        systems: ['TMS', 'IoT'],
      },
      {
        role: '物流总监',
        quote: '上个月承运商结算运费和实际成本对比，本月运费总额对比预算？',
        solution: 'AI 查询 TMS（承运商结算数据）+ ERP（运费预算），生成承运商综合评估和费用分析。',
        systems: ['TMS', 'ERP', 'BI'],
      },
      {
        role: '客服主管',
        quote: '本周的签收异常订单有多少，主要异常原因是什么？',
        solution: 'AI 分析 TMS（签收数据）+ OMS（订单关联）+ QMS（质量原因），输出签收率统计和异常根因分析。',
        systems: ['TMS', 'OMS', 'QMS'],
      },
    ],
  },
  {
    id: 'sales',
    title: '营销与渠道管理',
    subtitle: '全渠道促销对比、经销商达成、新品铺市追踪，问一句即达',
    positioning: '全渠道促销效果、经销商目标达成、新品铺市数据一句到达',
    coreSystems: ['OMS', 'POS', 'CRM', 'CDP', 'DRP', 'BI'],
    icon: BarChart3,
    color: 'rose',
    cards: [
      {
        role: '营销VP',
        quote: '今天各渠道（超市/电商/餐饮/团购）的促销额和订单量对比？',
        solution: 'AI 查询 OMS（全渠道订单）+ POS（门店交易），生成渠道对比视图。',
        systems: ['OMS', 'POS', 'BI'],
      },
      {
        role: '大区经理',
        quote: '各经销商本季度促销达成率的表现情况，哪些未完成目标？',
        solution: 'AI 查询 CRM（经销商档案和目标）+ OMS（实际促销数据），生成达成率表现并标注差距。',
        systems: ['CRM', 'OMS', 'BI'],
      },
      {
        role: '市场经理',
        quote: '新品 A 的铺市率，各区域门店和电商平台的在售和库存反馈数据？',
        solution: 'AI 综合 OMS（铺市订单）+ POS（在售数据）+ DRP（补货速度），生成新品上市追踪报告。',
        systems: ['OMS', 'POS', 'DRP'],
      },
    ],
  },
  {
    id: 'finance',
    title: '财务与经营分析',
    subtitle: 'CEO 的经营日报、CFO 的成本拆解、渠道利润对比，问一句话即达',
    positioning: 'CEO 的经营日报、CFO 的成本拆解、渠道盈利对比，问一句话即达',
    coreSystems: ['ERP', 'BI', 'POS', 'OMS', 'MES', 'WMS'],
    icon: DollarSign,
    color: 'slate',
    cards: [
      {
        role: 'CEO',
        quote: '帮我看全局经营日报：营收、毛利率、产能利用率、库存周转核心指标。',
        solution: 'AI 综合 ERP（财务数据）+ MES（产能数据）+ WMS（库存数据）+ BI，自动生成全局经营日报。',
        systems: ['ERP', 'MES', 'WMS', 'BI'],
      },
      {
        role: 'CFO',
        quote: 'A 产品的成本构成：原料、包材、人工、能耗各占多少，对比上季度趋势？',
        solution: 'AI 查询 ERP（成本数据）+ MES（能耗和人工工时），完整成本项拆解并对比趋势。',
        systems: ['ERP', 'MES', 'BI'],
      },
      {
        role: '供应链VP',
        quote: '本季度因临期/退货/质量问题导致的库损金额，对比去年同期？',
        solution: 'AI 汇总 WMS（报损记录）+ QMS（质量原因）+ ERP（损耗核算），输出库损分析和同比对比。',
        systems: ['WMS', 'QMS', 'ERP', 'BI'],
      },
    ],
  },
];

const metrics = [
  {
    value: '30 秒',
    label: '批次全链路追溯',
    desc: '从"跨系统拼接花两天"到"一个批次号 30 秒串联全链路"——原料来源、生产记录、质检数据、流向去向一次查清',
  },
  {
    value: '30–50%',
    label: 'AI 调用成本降低',
    desc: '语义缓存拦截高频重复查询 + 模型智能调度，"批次质检结果"类查询直接命中缓存',
  },
  {
    value: '22+',
    label: '套系统零改造接入',
    desc: 'MES · WMS · QMS · LIMS · ERP · OMS · SCADA SCM · TMS · POS · CRM · GRC ……通过协议桥接，前端零改造',
  },
  {
    value: '≈0',
    label: '数据泄露风险',
    desc: '配方参数、供应商来价自动脱敏不投给模型；数据权限隔离 + 操作确认 + 全量审计',
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
            Food Industry Solution
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
            从原料到餐桌
            <br />
            <span className="text-[#0071E3]">让每一批次都可追溯</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">
            AirBit 帮助食品企业用自然语言驱动 22+ 套业务系统，让 AI 进入采购、生产、质检、追溯、冷链、营销全链路，全观察审计，安全不出厂。
          </p>
          <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
            {[
              { label: '批次追溯', icon: <Search className="h-4 w-4" /> },
              { label: '冷链监控', icon: <Truck className="h-4 w-4" /> },
              { label: '合规审计', icon: <ClipboardList className="h-4 w-4" /> },
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
                <div className="text-sm font-semibold text-[#1D1D1F]">AirBit Food Copilot</div>
                <div className="text-xs text-[#86868B]">MES · WMS · QMS · LIMS · ERP · OMS</div>
              </div>
              <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">质量总监</div>
                <div className="text-sm leading-relaxed text-[#1D1D1F]">批次号 BT-0315 的原料来源、生产工艺记录、质检结果和流向去向？</div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 分析结果</div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                  <li>原料：面粉-华粮农产 2024-03-10，大豆油-益海嘉里 2024-03-08。</li>
                  <li>生产：2 号线 2024-03-15，蒸煮 95°C × 8min，CIP 已完成。</li>
                  <li>质检：微生物✓ 理化✓ 感官✓ 全项合格；已发货 1200 箱，涉及华东 KA × 8 订单。</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['批次追溯', '冷链预警', '合规审计'].map((item) => (
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
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">食品企业 AI 落地的真实难点</h2>
          <p className="text-[#86868B]">问题不在于没有模型，而在于批次可追溯、冷链稳定、审计合规和数据安全。</p>
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
                <p className="text-sm leading-relaxed text-[#86868B]">{point.desc}</p>
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
    if (isPaused) {
      return undefined;
    }

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
          <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">八大场景，覆盖食品全价值链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            从原料采购到生产质检，从批次追溯到冷链配送，从营销渠道到财务经营，AirBit 用自然语言串联 22+ 套业务系统，让每个业务角色都能用 AI 做完了。
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
      role: '业务用户的自然语言操作入口',
      desc: '品控总监用自然语言查批次追溯链，CEO 用自然语言看经营日报，车间主任查 CIP 清洁记录。不是聊天窗口，是能操作 22+ 套系统的业务助理。',
    },
    {
      product: 'MCP Gateway',
      role: '企业系统零改造接入',
      desc: '将 MES/WMS/QMS/LIMS/ERP/OMS/SCADA 等系统通过协议桥接转化为 AI 可调用的工具。前端零改造。这是"一个批次号查全链路"的基础——AI 需要同时调用 5-6 个系统。',
    },
    {
      product: 'AI Gateway',
      role: '多模型统一调度',
      desc: '统一调用 GPT / Claude / DeepSeek / 混元等模型，知识检索用搜索模型，数据分析用推理模型，按场景智能选择。语义缓存让"批次质检结果"类高频查询直接命中缓存，降低 30–50% 成本。',
    },
    {
      product: 'Guardrails',
      role: 'AI 安全策略引擎',
      desc: '配方参数、供应商来价自动脱敏不投给模型；数据权限隔离（工厂只能看自己工厂的数据）；操作类指令需确认后执行，防止误操作。',
    },
    {
      product: 'Eips',
      role: '自动化流程编排',
      desc: '临期预警 → 自动匹配促销渠道 → 生成调拨建议 → 通知审批；供应商资质到期 → 自动通知采购 → 触发续签跟进。200+ 预置连接器，业务人员拖拽即建。',
    },
    {
      product: 'AIO',
      role: '全栈可观测',
      desc: 'Token 成本归口到工厂/部门/应用；AI 答复质量评估；全量交互审计日志。合规审计时，所有 AI 交互记录可一键导出作为证据链。',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">AirBit 平台如何支撑食品全价值链</h2>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0071E3]">某知名食品集团</div>
            <h3 className="mb-2 text-2xl font-bold text-[#1D1D1F]">年营收 80 亿+，旗下 5 家生产工厂</h3>
            <p className="text-sm text-[#86868B]">产品覆盖乳制品、肉制品、休闲食品，覆盖 MES · WMS · QMS · LIMS · ERP · OMS · TMS · SCADA 等 18 套核心系统</p>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">核心痛点</h4>
              <ul className="space-y-3">
                {[
                  '批次追溯需跨 5 个系统手工拼接，一次追溯耗时两天',
                  '临期预警依赖人工巡查，冷链超温事后才发现',
                  '每次外部审计（ISO 22000 / HACCP）准备资料至少一周',
                  'AI 安全顾虑：配方和供应商数据导致大模型无法上线',
                  'Token 成本快速增长但无法归口到工厂和部门',
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
                  '私有化部署，数据安全不出厂，配方绝对隔离',
                  'MCP Gateway 桥接 18 套系统，前端零改造',
                  'Portal 为品控、生产、供应链、财务团队提供自然语言操作入口',
                  'Guardrails 全链路安全：配方脱敏、数据权限隔离',
                  'Eips 搭建自动化流程：临期预警→促销渠道→通知审批；冷链超温→自动告警→生成处置工单',
                  'AIO 成本归口到工厂/部门 + 合规审计日志支持一键导出',
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
                  { v: '18 套系统', l: '零改造接入' },
                  { v: '30 秒', l: '批次全链路追溯（原来两天）' },
                  { v: '60%', l: '临期库损金额减少（AI 预警 + 自动匹配促销）' },
                  { v: '1周 → 1天', l: '外部审计数据准备时间' },
                  { v: '45%', l: 'Token 成本降低（语义缓存 + 模型调度）' },
                  { v: '0', l: '上线后数据安全事故' },
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
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1D1D1F] lg:text-5xl">让 AI 守护从原料到餐桌的每一个环节</h2>
        <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">
          从批次追溯、冷链预警到经营分析，AirBit 帮你用一套平台把食品业务真正串起来。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约食品行业专项演示
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制企业专属接入方案
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionFoodPage() {
  useSEO({
    title: '食品行业 AI 解决方案 | AirBit',
    description: 'AirBit 为食品企业提供批次追溯、冷链监控、质量管控、合规审计和经营分析的 AI 解决方案，帮助企业在安全可控前提下提升效率。',
    path: '/solution-food',
    keywords: '食品行业 AI 解决方案, 食品安全 AI, 冷链 AI, 质量追溯 AI, 食品供应链 AI, AirBit',
    image: '/og-airbit.png',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '食品行业 AI 解决方案',
        description: 'AirBit 为食品企业提供批次追溯、冷链监控、供应链协同和经营分析的 AI 解决方案。',
        url: 'https://www.tlin.cn/solution-food',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 2, name: '方案', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 3, name: '食品行业', item: 'https://www.tlin.cn/solution-food' },
        ],
      },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'AirBit 如何实现食品批次追溯？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 通过 MCP Gateway 同时调用 MES、WMS、QMS、LIMS、SCM 和 OMS，一个批次号 30 秒内串联从原料来源到流向去向的全链路，替代人工跨系统拼接花两天的方式。' } },
        { '@type': 'Question', name: 'AirBit 如何帮助食品企业应对合规审计？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 可按审计清单自动汇总 GRC、QMS、MES、DMS 中的合规记录，将 ISO 22000、HACCP 审计资料准备时间从一周缩短到一天。' } },
        { '@type': 'Question', name: '食品企业的配方数据使用 AirBit 安全吗？', acceptedAnswer: { '@type': 'Answer', text: '安全。AirBit 支持私有化部署，Guardrails 自动识别并脱敏配方参数和供应商来价，这些数据不会发送给任何外部模型。' } },
      ]},
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
