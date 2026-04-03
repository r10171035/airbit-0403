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
    title: '追溯要跨五个系统，一次追溯花整整一天',
    sub: 'Traceability Bottleneck',
    desc: '食品安全法要求"正向追踪、反向追溯"，但数据散落在 MES、WMS、QMS、LIMS、SCM 等系统中，一次追溯报告要手工拼接整整两天。',
    quote: '监管层来检查，我们准备追溯数据用了整整两天。',
    icon: Search,
    color: 'text-orange-500',
  },
  {
    title: '临期预警靠人工巡查，冷链断链事后才发现',
    sub: 'Cold Chain Blind Spot',
    desc: '保质期是食品的生命线，但临期预警依赖人工查点；冷链车辆温控告警分散在 SCADA 和 TMS 中，超温发现了已损失数十万。',
    quote: '一个周末冷链车超温，等周一发现已经损失了二十万。',
    icon: Truck,
    color: 'text-blue-500',
  },
  {
    title: '合规资料准备重，审计前整整一周在凑材料',
    sub: 'Audit Preparation Burden',
    desc: 'GMP、HACCP、SC 许可、ISO 22000……每次审计都是临窗突击，生产记录、检测报告、SOP 文件散在四个系统里，每次外审准备至少一周。',
    quote: '每年两次外审，每次准备资料至少一周。',
    icon: ClipboardList,
    color: 'text-purple-500',
  },
  {
    title: 'AI 想用不敢用——配方和供应商报价是核心机密',
    sub: 'IP And Data Security',
    desc: '配方参数、供应商来价、质检数据被分给外部模型训练，Token 成本快速增长但无法归口。配方是核心机密，这些数据绝对不能出厂。',
    quote: '配方是核心机密，供应商来价是商业秘密，这些数据绝对不能出厂。',
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
    coreSystems: ['MES', 'WMS', 'QMS', 'LIMS', 'SCM', 'OMS', '溯源平台'],
    icon: Search,
    color: 'purple',
    cards: [
      {
        role: '质量总监',
        quote: '批次号 BT-0315 的原料来源、生产工艺记录、质检结果和流向去向？',
        solution: 'AI 同时调用 SCM（原料批次和供应商）+ MES（生产记录和工艺参数）+ QMS/LIMS（质检数据）+ WMS（库存出入库记录）+ OMS（发货订单），30 秒生成完整的反向追溯链。',
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
    subtitle: '临期预警、冷库温湿度、补货建议，实时可查',
    positioning: '临期实时预警、冷库温湿度在线、补货建议可执行',
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
    subtitle: '冷链温控全程可视，断链秒级告警，签收异常根因分析',
    positioning: '冷链温控全程可视，断链秒级告警，配送费用可控',
    coreSystems: ['TMS', 'IoT', 'OMS', 'ERP', 'QMS'],
    icon: Truck,
    color: 'green',
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
        quote: '本周的签收异常订单，有多少，主要异常原因是什么？',
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
    coreSystems: ['OMS', 'POS', 'CRM', 'CDP', 'DRP', 'BI', 'MAP'],
    icon: BarChart3,
    color: 'orange',
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
    subtitle: 'CEO 的经营日报、CFO 的成本拆解、渠道的利润对比，问一句话即达',
    positioning: 'CEO 的经营日报、CFO 的成本拆解、渠道盈利对比，问一句话即达',
    coreSystems: ['ERP', 'BI', 'POS', 'OMS', 'MES', 'WMS'],
    icon: DollarSign,
    color: 'rose',
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

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  green: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-700', dot: 'bg-cyan-500' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-700', dot: 'bg-rose-500' },
};

export function SolutionFoodPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useSEO({
    title: '食品行业 AI 解决方案 | AirBit',
    description: 'AirBit 为食品企业提供批次追溯、冷链监控、质量管控、合规审计和经营分析的 AI 解决方案，帮助企业在安全可控前提下提升效率。',
    path: '/solution-food',
    keywords: '食品行业 AI 解决方案, 食品安全 AI, 冷链 AI, 质量追溯 AI, 食品供应链 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: '食品行业 AI 解决方案', description: 'AirBit 为食品企业提供批次追溯、冷链监控、供应链协同和经营分析的 AI 解决方案。', url: 'https://www.tlin.cn/solution-food' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: '食品行业', item: 'https://www.tlin.cn/solution-food' },
      ] },
    ],
  });

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCard(prev => {
        const currentScenario = scenarios[activeScenario];
        if (prev < currentScenario.cards.length - 1) return prev + 1;
        setActiveScenario(s => (s + 1) % scenarios.length);
        return 0;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [activeScenario, isPaused]);

  const currentScenario = scenarios[activeScenario];
  const colors = colorMap[currentScenario.color] || colorMap.blue;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1628] pt-24 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                食品行业解决方案
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                从原料到餐桌<br />
                <span className="text-[#0071E3]">让每一批次都可追溯</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                AirBit 帮助食品企业用自然语言驱动 22+ 套业务系统，让 AI 进入采购、生产、质检、追溯、冷链、营销全链路，全观察审计，安全不出厂。
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: '批次追溯', icon: Search },
                  { label: '冷链监控', icon: Truck },
                  { label: '合规审计', icon: ClipboardList },
                  { label: '经营分析', icon: BarChart3 },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-sm">
                    <Icon className="h-4 w-4" />
                    {label}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-colors"
              >
                预约行业演示
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Right: dialog demo */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-white/40 text-xs">AirBit Portal — 食品质量管理</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#0071E3] text-white text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                      批次号 BT-0315 的原料来源、生产工艺记录、质检结果和流向去向？
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#0071E3]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#0071E3] text-xs font-bold">A</span>
                    </div>
                    <div className="bg-white/10 text-white/90 text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-sm">
                      <p className="font-medium text-white mb-2">批次 BT-0315 全链路追溯</p>
                      <div className="space-y-1 text-white/70 text-xs">
                        <p>· <span className="text-green-400">原料来源</span>：面粉-华粮农产 2024-03-10，大豆油-益海嘉里 2024-03-08</p>
                        <p>· <span className="text-blue-400">生产记录</span>：2号线 2024-03-15，蒸煮 95°C × 8min，CIP 已完成</p>
                        <p>· <span className="text-amber-400">质检结果</span>：微生物✓ 理化✓ 感官✓ 全项合格</p>
                        <p>· <span className="text-purple-400">流向去向</span>：已发货 1200箱，涉及 华东KA × 8 订单</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {['SCM', 'MES', 'QMS', 'LIMS', 'WMS', 'OMS'].map(s => (
                          <span key={s} className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">食品企业正在面临的 AI 落地挑战</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">食品行业关心的不只是效率，更是批次可追溯、冷链稳定、审计合规和数据安全。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p.icon className={`h-8 w-8 ${p.color} mb-4`} />
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.sub}</p>
                <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                <blockquote className="border-l-2 border-gray-200 pl-3 text-xs text-gray-400 italic">"{p.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">八大场景，覆盖食品全价值链</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">从原料采购到生产质检，从批次追溯到冷链配送，从营销渠道到财务经营，团队可以直接问业务、拿结果。</p>
          </div>
          {/* Scenario tabs + card demo */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {/* Left: scenario list */}
            <div className="space-y-2">
              {scenarios.map((s, i) => {
                const c = colorMap[s.color] || colorMap.blue;
                return (
                  <button
                    key={s.id}
                    onClick={() => { setActiveScenario(i); setActiveCard(0); }}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${i === activeScenario ? `${c.bg} ${c.border} ${c.text}` : 'bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === activeScenario ? `${c.dot} text-white` : 'bg-gray-200 text-gray-500'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="font-medium text-sm">{s.title}</div>
                        <div className="text-xs opacity-70 mt-0.5">{s.subtitle}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Right: card demo */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-bold ${colors.text}`}>{currentScenario.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{currentScenario.positioning}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end max-w-xs">
                    {currentScenario.coreSystems.map(sys => (
                      <span key={sys} className={`text-xs px-2 py-0.5 rounded ${colors.badge}`}>{sys}</span>
                    ))}
                  </div>
                </div>
                {/* Cards */}
                <div className="space-y-3">
                  {currentScenario.cards.map((card, ci) => (
                    <AnimatePresence key={`${activeScenario}-${ci}`} mode="wait">
                      {ci === activeCard && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-xl p-4 shadow-sm border border-white"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>{card.role}</span>
                          </div>
                          <p className="text-sm text-gray-700 italic mb-2">"{card.quote}"</p>
                          <p className="text-sm text-gray-600 mb-2">{card.solution}</p>
                          <div className="flex flex-wrap gap-1">
                            {card.systems.map(s => (
                              <span key={s} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{s}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>
                {/* Dots */}
                <div className="flex gap-2 mt-4">
                  {currentScenario.cards.map((_, ci) => (
                    <button
                      key={ci}
                      onClick={() => setActiveCard(ci)}
                      className={`w-2 h-2 rounded-full transition-all ${ci === activeCard ? colors.dot : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AirBit 平台如何支撑食品全价值链</h2>
            <p className="text-white/60 max-w-2xl mx-auto">场景背后是统一平台的能力——每个产品组件各司其职，通过一个平台联动。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Portal · 业务用户的自然语言操作入口',
                desc: '品控总监用自然语言查批次追溯链、CEO 用自然语言看经营日报、车间主任查 CIP 清洁记录。不是聊天窗口，是能操作 22+ 套系统的业务利器。',
              },
              {
                title: 'MCP Gateway · 企业系统零改造接入',
                desc: '将 MES/WMS/QMS/LIMS/ERP/OMS/SCADA 等系统通过协议桥接暴露为 AI 可调用的工具，前端零改造。这是"一个批次号查全链路"的基础——AI 需要同时调用 5-6 个系统。',
              },
              {
                title: 'AI Gateway · 多模型统一调度',
                desc: '统一调用 GPT / Claude / DeepSeek / 混元等模型，知识检索用知识搜索模型，数据分析用推理模型，批次追溯场景智能选择。语义缓存让"批次质检结果"类高频查询直接命中缓存，降低 30-50% 成本。',
              },
              {
                title: 'Guardrails · AI 安全策略引擎',
                desc: '配方参数、供应商来价自动脱敏不投给模型；数据权限隔离（工厂只能看自己工厂的数据）；危险类指令需确认后方可执行，防止误操作。',
              },
              {
                title: 'Eips · 自动化流程编排',
                desc: '临期预警 → 自动匹配促销渠道 → 生成调拨建议 → 通知审批；供应商资质到期 → 自动通知采购 → 触发续签跟进。200+ 预置连接器，业务人员拖拽建立。',
              },
              {
                title: 'AIO · 全量可观测',
                desc: 'Token 成本归口到工厂/部门/应用；AI 答复质量评估；全量交互审计日志。合规审计时，所有 AI 交互记录可一键导出作为证据链。',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">可量化的业务价值</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: '30 秒', label: '批次全链路追溯', sub: '从"跨系统拼接花两天"到"一个批次号 30 秒串联全链路"——原料来源、生产记录、质检数据、流向去向一次查清' },
              { value: '22+', label: '套系统零改造接入', sub: 'MES · WMS · QMS · LIMS · ERP · OMS · SCADA SCM · TMS · POS · CRM · GRC ……通过协议桥接，前端零改造' },
              { value: '30-50%', label: 'AI 调用成本降低', sub: '语义缓存拦截高频重复查询 + 模型智能调度"批次质检结果"类查询直接命中缓存' },
              { value: '1 天→1 小时', label: '审计数据准备时间', sub: 'ISO 22000 / HACCP / SC 许可审核资料从"全程突击一周"到"AI 一键汇总"' },
              { value: '≡0', label: '数据泄露风险', sub: '配方参数、供应商来价自动脱敏不投给模型；数据权限隔离 + 操作确认 + 全量审计' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="text-3xl lg:text-4xl font-bold text-[#0071E3] mb-2">{value}</div>
                <div className="font-semibold text-gray-900 mb-2 text-sm">{label}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">客户案例</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left: company */}
              <div className="bg-[#0A1628] p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs mb-6 w-fit">
                  <Building2 className="h-3 w-3" />
                  食品快消行业
                </div>
                <h3 className="text-xl font-bold text-white mb-4">某知名食品集团</h3>
                <div className="space-y-3 text-white/60 text-sm">
                  <p>年营收 <span className="text-white font-medium">80 亿+</span>，旗下 5 家生产工厂</p>
                  <p>产品覆盖乳制品、肉制品、休闲食品</p>
                  <p>营销渠道覆盖线下 KA、电商、餐饮 B2B、社区团购</p>
                  <p>内部运行 MES · WMS · QMS · LIMS · ERP · OMS · TMS · SCADA 等 <span className="text-white font-medium">18 套</span>核心系统</p>
                </div>
              </div>
              {/* Right: challenge + solution + result */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                      核心痛点
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        '批次追溯需跨 5 个系统手工拼接，一次追溯耗时两天',
                        '临期预警依赖人工巡查，冷链超温事后才发现',
                        '每次外部审计（ISO 22000 / HACCP）准备资料至少一周',
                        'AI 安全顾虑：配方和供应商数据导致大模型无法上线',
                        'Token 成本快速增长但无法归口到工厂和部门',
                      ].map(t => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">→</span>
                      AirBit 方案
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        '私有化部署，数据安全不出厂，配方绝对隔离',
                        'MCP Gateway 桥接 18 套系统，前端零改造',
                        'Portal 为品控、生产、供应链、财务团队提供自然语言操作入口',
                        'Guardrails 全链路安全：配方脱敏、数据权限隔离',
                        'Eips 搭建自动化流程：临期预警→促销渠道→通知审批；冷链超温→自动告警→生成处置工单',
                        'AIO 成本归口到工厂/部门 + 合规审计日志支持一键导出',
                      ].map(t => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
                      落地成效
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        ['18 套系统', '零改造接入'],
                        ['30 秒', '批次全链路追溯（原来两天）'],
                        ['60%', '临期库损金额减少（AI 预警 + 自动匹配促销）'],
                        ['1 周→1 天', '外部审计数据准备时间'],
                        ['45%', 'Token 成本降低（语义缓存 + 模型调度）'],
                        ['0', '上线后数据安全事故'],
                      ].map(([v, t]) => (
                        <li key={t} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><span className="font-semibold text-gray-900">{v}</span> {t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            让 AI 守护从原料到餐桌的每一个环节<br />
            <span className="text-white/60 text-2xl">安全可追溯，全观察审计，成本可管控</span>
          </h2>
          <p className="text-white/60 mb-8">从批次追溯、冷链预警到经营分析，AirBit 帮你用一套平台把食品业务真正串起来。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-colors"
            >
              预约食品行业专项演示
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-6">sales@airbit.ai · www.airbit.ai</p>
        </div>
      </section>
    </div>
  );
}
