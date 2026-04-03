import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  DollarSign,
  Package,
  ShoppingBag,
  Store,
  Truck,
  Users,
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
    title: '商品企划靠经验',
    sub: 'Merch Planning Blind Spot',
    desc: '新品预测、尺码配比和区域铺货依赖经验判断，错配就会直接变成滞销和断码。',
    icon: ShoppingBag,
    color: 'text-orange-500',
  },
  {
    title: '多系统数据分散',
    sub: 'Fragmented Systems',
    desc: 'PLM、OMS、WMS、POS、CRM 各说各话，跨渠道库存、订单和会员数据难以统一。',
    icon: Package,
    color: 'text-blue-500',
  },
  {
    title: '门店响应滞后',
    sub: 'Retail Latency',
    desc: '店长、督导和运营团队看不到实时经营状态，补货、调拨和活动复盘都慢半拍。',
    icon: Store,
    color: 'text-purple-500',
  },
  {
    title: 'AI 落地顾虑重',
    sub: 'Security And Cost Anxiety',
    desc: '会员数据、供应商报价和销售策略都很敏感，企业既担心数据泄露，也担心成本失控。',
    icon: Users,
    color: 'text-rose-500',
  },
];

const scenarios: ScenarioGroup[] = [
  {
    id: 'product',
    title: '商品优化与企划',
    subtitle: '让数据驱动选款，不再凭经验赌款',
    positioning: '让数据驱动选款，不再凭经验赌款',
    coreSystems: ['PLM', 'POS', 'OMS', 'SCM', 'ERP', 'BI'],
    icon: ShoppingBag,
    color: 'blue',
    cards: [
      {
        role: '商品总监',
        quote: '去年秋冬女鞋类 Top 20 款式的销定数据、返货的补库存时机？',
        solution: 'AI 同时查询 PLM（款式信息）+ POS（销定数据）+ OMS（返货数据），30 秒生成历史款式销售复盘，为新款优化提供数据支撑。',
        systems: ['PLM', 'POS', 'OMS', 'BI'],
      },
      {
        role: '产品经理',
        quote: '新款 A 款的 BOM 材料成本测算，预计加工比多少，目标毛利率能达到吗？',
        solution: 'AI 查询 PLM（BOM 数据）+ ERP（物料成本），自动计算成本结构和预估毛利率，即时回馈。',
        systems: ['PLM', 'ERP'],
      },
      {
        role: '商品总监',
        quote: '汇总各区域对接下季度的预估订货量，对比去年同期实际销定。',
        solution: 'AI 汇总 OMS（订货预估）+ POS（历史同期销定），生成订货优化数据对比分析，辅助决策。',
        systems: ['OMS', 'POS', 'BI'],
      },
    ],
  },
  {
    id: 'supply',
    title: '采购与供应链',
    subtitle: '供应商交期、预测成本、生产进度，问一句话全掌控',
    positioning: '供应商交期、预测成本、生产进度，问一句话全掌控',
    coreSystems: ['SCM', 'SRM', 'ERP', 'PLM', 'WMS', '质检'],
    icon: Truck,
    color: 'green',
    cards: [
      {
        role: '供应链总监',
        quote: '哪些供应商的交期达成率低于 90%，影响了哪些在产订单？',
        solution: 'AI 查询 SRM（供应商交期记录）+ OMS（在产订单关联），生成交期达成率排名并标注受影响订单。',
        systems: ['SRM', 'OMS', 'ERP'],
      },
      {
        role: '采购经理',
        quote: '这款预制鞋的 5 家供应商报价、交期和历史质量评分对比？',
        solution: 'AI 调用 SRM（供应商档案）+ ERP（报价记录）+ 质检系统（历史质量数据），生成供应商比价分析表。',
        systems: ['SRM', 'ERP', '质检'],
      },
      {
        role: 'CFO',
        quote: '本季预计采购成本对比上季变化，哪些品类涨幅最大？',
        solution: 'AI 查询 ERP（采购成本数据）+ BI（趋势分析），按品类分解成本变化，定位异常涨幅。',
        systems: ['ERP', 'SCM', 'BI'],
      },
    ],
  },
  {
    id: 'inventory',
    title: '库存与仓储',
    subtitle: '全渠道库存一句话掌控，断码预警、调拨建议、滞销处理全自动',
    positioning: '全渠道库存一句话掌控，断码预警、调拨建议、滞销处理全自动',
    coreSystems: ['WMS', 'OMS', 'ERP', 'DRP', 'POS', 'TMS'],
    icon: Package,
    color: 'amber',
    cards: [
      {
        role: '运营总监',
        quote: 'A 款当前在全渠道库存分布：总仓、区域仓、电商仓、门店各多少？',
        solution: 'AI 同时查询 WMS（仓库库存）+ OMS（在途锁定库存），一句话返回全渠道库存分布全景。',
        systems: ['WMS', 'OMS'],
      },
      {
        role: '商品经理',
        quote: '哪些鞋码款出现了断码断色，影响多少门店？',
        solution: 'AI 交叉分析 POS（销售数据标记缺款）+ WMS（库存 SKU 明细），输出断码预警清单和受影响门店列表。',
        systems: ['WMS', 'POS', 'OMS'],
      },
      {
        role: '区域经理',
        quote: '杭州仓的 B 款断码了，哪个仓有库存可以调拨？',
        solution: 'AI 查询 WMS（全国仓该款库存）+ DRP（调拨规则和成本），推荐最优调拨方案。',
        systems: ['WMS', 'DRP', 'TMS'],
      },
    ],
  },
  {
    id: 'retail',
    title: '零售与门店',
    subtitle: '门店经营数据随时问，陈列诊断、导购管理、数字试穿一目了然',
    positioning: '门店经营数据随时问，陈列诊断、导购管理、数字试穿一目了然',
    coreSystems: ['POS', 'CRM', 'CDP', 'BI', 'SHR', 'WMS'],
    icon: Store,
    color: 'purple',
    cards: [
      {
        role: '零售总监',
        quote: '今天全国门店销定额 Top 10 和 Bottom 10，对比昨天分析？',
        solution: 'AI 实时查询 POS 销定数据，生成门店表现对比视图。',
        systems: ['POS', 'BI'],
      },
      {
        role: '区域经理',
        quote: '北京王府井店上个月的客流、转化率、客单价、连带率？',
        solution: 'AI 调用 POS（交易数据）+ CRM（客流会员数据），生成单店经营诊断报告。',
        systems: ['POS', 'CRM', 'BI'],
      },
      {
        role: '加盟管理部',
        quote: '根据加盟商 X 的历史销定和当地消费偏好，推荐本季订货方案？',
        solution: 'AI 综合分析 POS（该加盟商历史销定）+ CDP（当地客群画像）+ DRP（订货模型），生成个性化订货建议。',
        systems: ['POS', 'CDP', 'DRP', 'BI'],
      },
    ],
  },
  {
    id: 'omni',
    title: '全渠道订单',
    subtitle: '直营、电商、加盟订单统一可见，异常秒级发现',
    positioning: '直营、电商、加盟订单统一可见，异常秒级发现',
    coreSystems: ['OMS', 'WMS', 'POS', '电商中台', 'TMS'],
    icon: BarChart3,
    color: 'cyan',
    cards: [
      {
        role: '运营总监',
        quote: '今天全渠道的订单量和销定额对比，线上线下占比变化？',
        solution: 'AI 查询 OMS（全渠道订单）+ POS（门店交易）+ 电商中台（线上订单），生成渠道对比视图。',
        systems: ['OMS', 'POS', '电商中台'],
      },
      {
        role: '客服主管',
        quote: '今天有哪些订单超过 48 小时未发货，各自原因和责任归属？',
        solution: 'AI 交叉查询 OMS（订单状态）+ WMS（仓库发货记录），定位超时订单并归因。',
        systems: ['OMS', 'WMS'],
      },
      {
        role: '管控经理',
        quote: '本月退货率最高的 Top 10 SKU，退货原因分布？',
        solution: 'AI 分析 OMS（退货数据）+ POS（关联销定数据）+ 质检（质量记录），输出退货高频 SKU 和根因分析。',
        systems: ['OMS', 'POS', '质检'],
      },
    ],
  },
  {
    id: 'member',
    title: '会员与营销',
    subtitle: 'VIP 流失预警、精准触达、活动 ROI 分析，AI 驱动会员增长',
    positioning: 'VIP 流失预警、精准触达、活动 ROI 分析，AI 驱动会员增长',
    coreSystems: ['CRM', 'CDP', 'MAP', 'POS', '导购SCRM'],
    icon: Users,
    color: 'rose',
    cards: [
      {
        role: 'CRM 经理',
        quote: '最近 90 天消费超 3000 但近 60 天没复购的 VIP 客户名单？',
        solution: 'AI 查询 CDP（客户行为数据）+ POS（消费记录），生成流失风险客户名单，可一键触发营销流程。',
        systems: ['CDP', 'POS', 'CRM'],
      },
      {
        role: '营销总监',
        quote: '上次会员节活动的触达率、转化率和 ROI，分渠道效果对比？',
        solution: 'AI 综合 MAP（活动数据）+ POS（转化销定）+ CDP（客户归因），生成活动 ROI 多维度分析。',
        systems: ['MAP', 'POS', 'CDP', 'BI'],
      },
      {
        role: '营销总监',
        quote: '对即将流失的 VIP 客户自动发送一张优惠券并通知对应导购跟进。',
        solution: '流程引擎自动执行：CDP 识别流失客户 → MAP 发送优惠券 → 导购 SCRM 推送跟进任务 → 全程可追踪。',
        systems: ['CDP', 'MAP', '导购SCRM', 'Eips（流程引擎）'],
      },
    ],
  },
  {
    id: 'finance',
    title: '财务与经营分析',
    subtitle: 'CEO 的经营日报、CFO 的毛利分析、渠道盈利对比，问一句话即达',
    positioning: 'CEO 的经营日报、CFO 的毛利分析、渠道盈利对比，问一句话即达',
    coreSystems: ['ERP', 'BI', 'POS', 'OMS', 'SAP'],
    icon: DollarSign,
    color: 'emerald',
    cards: [
      {
        role: 'CEO',
        quote: '帮我出本周经营日报：营收、毛利率、库存周转、门店排名。',
        solution: 'AI 综合 ERP（财务数据）+ POS（门店数据）+ WMS（库存数据）+ BI，自动生成周度经营日报。',
        systems: ['ERP', 'POS', 'WMS', 'BI'],
      },
      {
        role: 'CFO',
        quote: '按品类、按渠道的毛利率趋势，哪些品类毛利在下降？',
        solution: 'AI 查询 ERP（成本和收入数据）+ POS/OMS（渠道销定明细），按品类×渠道维度拆解毛利率。',
        systems: ['ERP', 'POS', 'OMS', 'BI'],
      },
      {
        role: 'CEO',
        quote: '直营、电商、加盟三个渠道的收入和利润贡献对比，趋势变化？',
        solution: 'AI 汇总 ERP + POS + OMS 数据，生成渠道盈利结构和趋势对比视图。',
        systems: ['ERP', 'POS', 'OMS', 'BI'],
      },
    ],
  },
  {
    id: 'internal',
    title: '内部协作与管理',
    subtitle: '审批一句话搞定，制度随时问，门店人员配置一目了然',
    positioning: '审批一句话搞定，制度随时问，门店人员配置一目了然',
    coreSystems: ['OA', 'SHR', 'KMS', 'ITSM', 'LMS'],
    icon: Building2,
    color: 'slate',
    cards: [
      {
        role: '上级管理者',
        quote: '帮我查看待审批事项并批准一张小王的出差申请。',
        solution: 'AI 调用 OA 系统查询待审批列表，用户确认后自动执行审批并通知相关人员。',
        systems: ['OA', 'SHR'],
      },
      {
        role: '区域经理',
        quote: '加盟商门店下周的排班情况，有没有人手不足的门店？',
        solution: 'AI 查询 SHR（排班数据）+ POS（门店客流预测），对比排班人员和预估客流，标注人手不足的门店。',
        systems: ['SHR', 'POS'],
      },
      {
        role: '员工',
        quote: '加盟商返换货政策是什么？最新检核规定？',
        solution: 'AI 检索企业知识库（RAG），基于最新制度文档给出准确答复并标注来源。',
        systems: ['KMS（知识库）'],
      },
    ],
  },
];

const metrics = [
  {
    value: '60%+',
    label: '跨系统数据查询效率提升',
    desc: '从"登录三个系统花天汇总"到"一句话 30 秒"',
  },
  {
    value: '30–50%',
    label: 'AI 调用成本降低',
    desc: '语义缓存拦截重复问题 + 模型智能调度',
  },
  {
    value: '20+',
    label: '套系统零改造接入',
    desc: 'SAP · ERP · OMS · WMS · POS · PLM · CRM · CDP · SHR · OA · BI · SCM …',
  },
  {
    value: '≈0',
    label: '数据泄露风险',
    desc: '供应商报价、客户信息自动脱敏 + 权限隔离 + 全量审计',
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,113,227,0.08),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,149,0,0.08),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_72%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0071E3]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0071E3]" />
            </span>
            Fashion Industry Solution
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
            从商品企划到门店增长
            <br />
            <span className="bg-gradient-to-r from-[#0071E3] to-[#FF9500] bg-clip-text text-transparent">让每个决策都更快更准</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">
            AirBit 帮助鞋服企业用自然语言联动商品、供应链、库存、零售和会员系统，
            让 AI 真正进入业务主流程，既能提效，也能守住安全和成本边界。
          </p>
          <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
            {[
              { label: '商品企划', icon: <ShoppingBag className="h-4 w-4" /> },
              { label: '库存调拨', icon: <Package className="h-4 w-4" /> },
              { label: '门店运营', icon: <Store className="h-4 w-4" /> },
              { label: '会员增长', icon: <Users className="h-4 w-4" /> },
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
                <div className="text-sm font-semibold text-[#1D1D1F]">AirBit Fashion Copilot</div>
                <div className="text-xs text-[#86868B]">PLM · OMS · WMS · POS · CRM</div>
              </div>
              <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">商品总监</div>
                <div className="text-sm leading-relaxed text-[#1D1D1F]">帮我看本季女鞋系列哪些颜色销量高、退货低，适合加单？</div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 分析结果</div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                  <li>黑色与燕麦色连带率最高，建议优先补货。</li>
                  <li>华东区域 38 / 39 码断码风险上升。</li>
                  <li>高退货 SKU 集中在版型偏瘦的款式。</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['销量趋势', '库存预警', '会员偏好'].map((item) => (
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
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">鞋服行业 AI 落地的真实难点</h2>
          <p className="text-[#86868B]">问题不在于没有模型，而在于业务链条太长、决策窗口太短。</p>
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
          <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">八大场景，覆盖鞋服全价值链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            从商品企划到门店运营，从供应链到会员营销，AirBit 用自然语言串联 20+ 套业务系统，让每个业务角色都能用 AI 做完了。
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
                <div className={`mb-2 text-lg font-bold ${isActive ? '#1D1D1F' : 'text-[#1D1D1F]'}`}>{scenario.title}</div>
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
                  <p className="mb-5 border-l-2 border-[#E5E5EA] pl-4 text-base leading-relaxed text-[#1D1D1F]">“{card.quote}”</p>
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
      desc: '商品总监用自然语言查历史款式销定，CEO 用自然语言看经营日报，区域经理查门店表现。不是聊天窗口，是能操作 20+ 套系统的业务助理。',
    },
    {
      product: 'MCP Gateway',
      role: '企业系统零改造接入',
      desc: '将 SAP/ERP/OMS/WMS/POS/PLM/CRM 等系统通过协议桥接转化为 AI 可调用的工具。后端零改造。这是 AI 能"做事"而不只是"聊天"的关键。',
    },
    {
      product: 'AI Gateway',
      role: '多模型统一调度',
      desc: '统一调用 GPT / Claude / DeepSeek / 混元等模型，按场景智能选择（简单查询用轻量级模型，复杂分析用高端模型）。语义缓存降低 30–50% Token 成本。',
    },
    {
      product: 'Guardrails',
      role: 'AI 安全策略引擎',
      desc: '供应商报价、客户数据自动脱敏后才发给模型；数据权限隔离（区域经理只能看自己区域的数据）；操作类指令需确认后再执行，防止误操作。',
    },
    {
      product: 'Eips',
      role: '自动化流程编排',
      desc: 'VIP 客户流失预警 → 自动发优惠券 → 通知导购跟进；新款上市 → 自动同步到 OMS/WMS/POS → 通知门店。200+ 预置连接器，业务人员拖拽即建。',
    },
    {
      product: 'AIO',
      role: '全栈可观测',
      desc: 'Token 成本归因到部门/门店/应用；AI 答复质量评估；全量交互审计日志。CEO 和 CFO 最关心的问题："AI 花了多少钱，用了有没有效果"——AIO 给答案。',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">AirBit 平台如何支撑鞋服全价值链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            场景落地是统一平台的成果——每个产品组件各司其职，通过一个平台联动。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            return (
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
            );
          })}
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
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0071E3]">某知名鞋服集团</div>
            <h3 className="mb-2 text-2xl font-bold text-[#1D1D1F]">年营收 50 亿+，全国 2000+ 门店（直营 + 加盟）</h3>
            <p className="text-sm text-[#86868B]">覆盖 SAP · OMS · WMS · POS · PLM · CRM 等 15 套核心系统</p>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">核心痛点</h4>
              <ul className="space-y-3">
                {[
                  '商品总监查历史销定数据要跨 3 个系统手动汇总，耗时半天',
                  '区域经理无法实时掌握门店库存和断码情况',
                  '全渠道库存信息不对称，调拨滞后导致线下断货线上积压',
                  'AI 安全顾虑：供应商报价和会员数据不敢发送给外部模型',
                  'Token 成本快速增长但无法归因到部门',
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
                  '私有化部署，数据安全不出墙',
                  'MCP Gateway 桥接 15 套系统，后端零改造',
                  'Portal 为商品、供应链、零售、财务等团队提供自然语言操作入口',
                  'Guardrails 全链路安全：供应商报价自动脱敏、数据权限按区域隔离',
                  'Eips 搭建自动化流程：断码预警 → 自动生成调拨建议 → 通知审批',
                  'AIO 成本归因到部门 + 质量评估',
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
                  { v: '15 套系统', l: '零改造接入' },
                  { v: '70%', l: '跨系统查询效率提升' },
                  { v: '40%', l: 'Token 成本降低（语义缓存 + 模型调度）' },
                  { v: '3天 → 2小时', l: '新款上市数据同步到全渠道的时间' },
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
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1D1D1F] lg:text-5xl">让鞋服业务先跑起来，再把 AI 做深</h2>
        <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">
          从爆款企划、库存协同到门店增长，AirBit 帮你把业务系统和 AI 真正连起来。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约产品演示
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制企业专属接入方案
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionFashionPage() {
  useSEO({
    title: '鞋服行业 AI 解决方案 | AirBit',
    description: 'AirBit 为鞋服企业提供商品企划、供应链、库存、门店运营和会员增长的 AI 解决方案，帮助品牌在安全可控的前提下提效增收。',
    path: '/solution-fashion',
    keywords: '鞋服行业 AI 解决方案, 服装行业 AI, 鞋服供应链 AI, 门店运营 AI, 会员增长 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '鞋服行业 AI 解决方案',
        description: 'AirBit 为鞋服企业提供商品企划、供应链、库存、门店运营和会员增长的 AI 解决方案。',
        url: 'https://www.tlin.cn/solution-fashion',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 3, name: '鞋服行业', item: 'https://www.tlin.cn/solution-fashion' },
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
