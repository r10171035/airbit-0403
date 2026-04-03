import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  DollarSign,
  FileText,
  Package,
  Shield,
  Users,
  WalletCards,
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
    title: '审批流转慢，待办件积山',
    sub: 'Approval Bottleneck',
    desc: '差旅审批、经费报销、采购申请、合同用印……每天待审件越积越多。负责人出差只能等回来再批，一个流程卡在某个环节，连领导都不知道卡谁。',
    quote: '我出差不在，回来发现积了 30 多条，光审批就花了半天。',
    icon: FileText,
    color: 'text-orange-500',
  },
  {
    title: '公文检索靠记忆，文件找不到最新版',
    sub: 'Document Retrieval Gap',
    desc: '上级来文的转办进度不清楚、历史文件检索靠记忆、制度政策找不到最新版本。上级来文快到期了，承办室还不知道。',
    quote: '发的文件一个星期没回音，承办室说没看到。',
    icon: BookOpen,
    color: 'text-blue-500',
  },
  {
    title: '预算执行进度无感知',
    sub: 'Budget Visibility Gap',
    desc: '年初批了预算，平时查不到实时执行情况。某个科目快超了，某科执行率太低——两头为难，直到年底结算的时候才发现问题，但已经来不及了。',
    quote: '每年结算的时候才发现问题，但已经来不及了。',
    icon: WalletCards,
    color: 'text-purple-500',
  },
  {
    title: 'AI 想用不敢用——数据绝对不能出局',
    sub: 'Security And Compliance',
    desc: '保密要求、涉密管理、部门数据绝对不能发给公有云模型。但确实需要 AI 提高办公效率。必须私网部署。',
    quote: '我们很想用 AI 提效，但安全红线碰不得，必须私网部署。',
    icon: Shield,
    color: 'text-rose-500',
  },
];

const scenarios: ScenarioGroup[] = [
  {
    id: 'document',
    title: '公文管理与办文',
    subtitle: '来文进度一句话查清，超期自动预警，起草参考历史模板',
    positioning: '让办公室主任和秘书科实时掌握每一份文件的流转状态',
    coreSystems: ['OA', '公文管理', 'KMS', '档案管理', 'BI'],
    icon: FileText,
    color: 'blue',
    cards: [
      {
        role: '办公室主任',
        quote: '上周转发的 3 份文件，各到承办室哪一步了？',
        solution: 'AI 调用公文管理系统查询来文转办状态，返回每份文件所在承办室、当前环节和已办天数。',
        systems: ['OA', '公文管理'],
      },
      {
        role: '秘书科长',
        quote: '哪些来文快到办结时限了，还有几天，承办人是谁？',
        solution: 'AI 查询公文管理系统的办结时限数据，筛选即将到期来文并按紧急程度排序，可一键触发公函催办。',
        systems: ['OA', '公文管理'],
      },
      {
        role: '综合处文秘',
        quote: '帮我起草一份关于端午节放假安排的通知，参考去年的格式。',
        solution: 'AI 检索档案管理系统和知识库中的历史同类公文，参考格式和内容生成草稿，符合 GB/T 9704 公文格式规范。',
        systems: ['KMS', '档案管理', 'OA'],
      },
    ],
  },
  {
    id: 'approval',
    title: '流程审批与公告',
    subtitle: '一句话批量审批，流程卡点一目了然，自动公告',
    positioning: '让领导和经办人告别反复登录系统，审批更高效',
    coreSystems: ['OA', 'SHR', '合同管理', '电子签章'],
    icon: Building2,
    color: 'green',
    cards: [
      {
        role: '分管领导',
        quote: '帮我查看待审批事项，批准小王的差旅申请和那笔经费报销。',
        solution: 'AI 调用 OA 系统查询待审批列表，用户确认后自动执行审批并通知相关人员，全程审计留痕。',
        systems: ['OA'],
      },
      {
        role: '项目负责人',
        quote: '我发起的 3 个流程，卡在哪里了？帮我催一下。',
        solution: 'AI 查询 OA 流程状态，定位卡点环节和滞留时长，可一键发送催办通知给当前审批人。',
        systems: ['OA', 'SHR'],
      },
      {
        role: '法务处',
        quote: '这份合同的审批进度，法务签章到哪一步了，用到没有？',
        solution: 'AI 串联合同管理系统（审批状态）+ OA（流程环节）+ 电子签章系统（用章记录），一次查清全部进度。',
        systems: ['合同管理', 'OA', '电子签章'],
      },
    ],
  },
  {
    id: 'finance',
    title: '预算与财务管理',
    subtitle: '预算执行率实时可见，科目超支提前预警，报销进度随时查',
    positioning: '让财务处和各部门实时掌握经费全貌，消除预算盲区',
    coreSystems: ['财务', '预算管理', '项目管理', 'OA', 'BI'],
    icon: DollarSign,
    color: 'amber',
    cards: [
      {
        role: '财务处长',
        quote: '各部门今年预算执行进度，哪些科目快超了？',
        solution: 'AI 查询预算管理 + 财务系统，生成各部门执行率和超预算科目预警清单。',
        systems: ['预算管理', '财务', 'BI'],
      },
      {
        role: '项目负责人',
        quote: '我负责的科研项目经费还剩多少，各科目余额？',
        solution: 'AI 查询财务系统（项目经费明细）+ 项目管理系统（项目信息），按科目分类展示已支出和剩余额度。',
        systems: ['财务', '项目管理'],
      },
      {
        role: '经办人',
        quote: '我上周提交的差旅报销到哪一步了，预计什么时候到账？',
        solution: 'AI 查询财务系统（报销单状态）+ OA（审批环节），返回当前进度和预计到账时间。',
        systems: ['财务', 'OA'],
      },
    ],
  },
  {
    id: 'hr',
    title: '人事与编制管理',
    subtitle: '编制空位一键查询，退休预警提前规划，培训达标一目了然',
    positioning: '让人事处从手工台账中解放，把重心放在人才发展上',
    coreSystems: ['SHR', 'LMS', '绩效考核', 'BI'],
    icon: Users,
    color: 'purple',
    cards: [
      {
        role: '人事处长',
        quote: '本单位当前在编人数、编制空位情况，各处室人员分布？',
        solution: 'AI 查询 SHR（编制台账和人员数据），按处室统计在编人数和空位编制。',
        systems: ['SHR'],
      },
      {
        role: '人事处',
        quote: '未来 12 个月将到退休年龄的人员名单，涉及哪些关键岗位？',
        solution: 'AI 查询 SHR 筛选即将到龄人员并标注岗位，辅助提前规划继任。',
        systems: ['SHR'],
      },
      {
        role: '培训主管',
        quote: '今年干部培训的各处室完成率，哪些人的必修学时还没达标？',
        solution: 'AI 查询 SHR（人员档案）+ LMS（培训记录和学时），生成完成率统计和未达标人员名单。',
        systems: ['SHR', 'LMS'],
      },
    ],
  },
  {
    id: 'assets',
    title: '资产管理',
    subtitle: '资产台账实时可查，报废到期自动预警，审计数据一键汇总',
    positioning: '让行政处摆脱手工台账，实现资产数字化运营',
    coreSystems: ['AMS', '财务', '公务用车管理', 'OA', 'BI'],
    icon: Package,
    color: 'cyan',
    cards: [
      {
        role: '行政处长',
        quote: '全单位笔记本电脑的数量、使用年限分布和使用人？',
        solution: 'AI 查询 AMS（资产台账），按设备类型、使用年限和使用人统计。',
        systems: ['AMS'],
      },
      {
        role: '资产管理员',
        quote: '哪些固定资产已超过折旧年限？按类别和金额统计？',
        solution: 'AI 查询 AMS（折旧信息）+ 财务（资产价值），生成超年限资产清单和金额统计。',
        systems: ['AMS', '财务'],
      },
      {
        role: '办公室',
        quote: '各部门本月公务用车的使用次数、里程和油耗？',
        solution: 'AI 查询公务用车管理系统，按部门汇总用车数据。',
        systems: ['公务用车管理'],
      },
    ],
  },
  {
    id: 'project',
    title: '项目与任务管理',
    subtitle: '项目进度实时透明，经费执行全盘可见，督办事项自动追踪',
    positioning: '让分管领导和办公室主任实时掌握重点工作推进情况',
    coreSystems: ['项目管理', '财务', '督办系统', 'DMS', 'OA', 'BI'],
    icon: BarChart3,
    color: 'rose',
    cards: [
      {
        role: '分管领导',
        quote: '当前在研的重点项目有多少，各自进度和下一个里程碑？',
        solution: 'AI 查询项目管理系统，返回在研项目的进度状态和关键节点。',
        systems: ['项目管理'],
      },
      {
        role: '办公室主任',
        quote: '主任交办的 5 项重点工作，责任处室还有哪些没有进展？',
        solution: 'AI 查询督办系统（交办事项和进度），逐项返回状态并标注滞后项。',
        systems: ['督办系统', 'OA'],
      },
      {
        role: '项目负责人',
        quote: '帮我汇总这个项目的绩效材料：立项批复、中期报告、经费决算、成果清单。',
        solution: 'AI 从项目管理系统 + 财务系统 + DMS 中自动汇总绩效材料所需的全部数据和文件。',
        systems: ['项目管理', '财务', 'DMS'],
      },
    ],
  },
  {
    id: 'knowledge',
    title: '政策法规与知识管理',
    subtitle: '内部制度、上级文件、法律法规——问 AI 即得，答复带标注来源',
    positioning: '让每位员工随时获取准确、有出处的制度和政策依据',
    coreSystems: ['KMS', '档案管理', '公文管理'],
    icon: BookOpen,
    color: 'emerald',
    cards: [
      {
        role: '普通员工',
        quote: '出差补贴标准是多少，需要哪些审批流程？',
        solution: 'AI 检索企业知识库（RAG），基于最新内部制度文件给出准确答复并标注来源文件和条款编号。',
        systems: ['KMS（RAG）'],
      },
      {
        role: '业务骨干',
        quote: '最新的政府采购法对单一来源采购的条件和限额规定？',
        solution: 'AI 检索法规知识库（RAG），返回具体条款内容、适用条件和限额标准。',
        systems: ['KMS（RAG）'],
      },
      {
        role: '新入职员工',
        quote: '我是新入职的，需要办哪些手续？各系统怎么开通？',
        solution: 'AI 检索入职办理知识库，返回完整的入职手续清单和系统开通流程。',
        systems: ['KMS（RAG）', 'SHR'],
      },
    ],
  },
  {
    id: 'audit',
    title: '监察审计与内控',
    subtitle: '审计数据一键汇总，三公经费实时可见，整改进度自动追踪',
    positioning: '让审计和纪检工作从事后补材料变成实时掌握风险',
    coreSystems: ['GRC', '财务', 'AMS', 'OA', 'BI'],
    icon: Shield,
    color: 'slate',
    cards: [
      {
        role: '审计处',
        quote: '帮我准备今年经济责任审计需要的全部财务数据和资产数据。',
        solution: 'AI 按审计清单自动汇总 GRC + 财务 + AMS 数据，生成审计底稿资料。',
        systems: ['GRC', '财务', 'AMS'],
      },
      {
        role: '纪检监察',
        quote: '今年三公经费的逐月支出明细，对比预算，有没有超标或异常项？',
        solution: 'AI 查询财务系统（三公经费明细）+ 预算管理（预算额度），按科目对比执行并标注异常项。',
        systems: ['财务', '预算管理', 'BI'],
      },
      {
        role: '审计处',
        quote: '上次审计发现的问题整改进度，哪些还没关闭？',
        solution: 'AI 查询 GRC（审计问题台账）+ OA（整改流程状态），逐项返回整改进度并标注未关闭项。',
        systems: ['GRC', 'OA'],
      },
    ],
  },
];

const metrics = [
  {
    value: '80%',
    label: '审批效率提升',
    desc: '从"逐个登录系统点"到"一句话批量审批"，出差途中也能实时处理待审件',
  },
  {
    value: '1周 → 1天',
    label: '审计数据准备时间',
    desc: '经济责任审计、三公经费核查，从"各部门联动一周"到"AI 一键汇总"',
  },
  {
    value: '20+',
    label: '套系统零改造接入',
    desc: 'OA · 财务 · 人事 · 资产 · 项目管理 · 档案 · 公文 · 督办 · 后勤 · 用车……现有系统不改一行代码',
  },
  {
    value: '100%',
    label: '数据不出局',
    desc: '全面私有化部署，满足保密要求。涉密信息自动拦截，全量操作审计日志可追溯',
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
            Public Institution Solution
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
            让公文审批与日常管理
            <br />
            <span className="text-[#0071E3]">像说一句话一样简单</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">
            AirBit 帮助事业单位用自然语言联动 OA、财务、人事、资产等 20+ 套业务系统，
            让 AI 真正进入公文、预算、审批和综合办公主流程，数据不出局，安全可审计。
          </p>
          <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
            {[
              { label: '公文审批', icon: <FileText className="h-4 w-4" /> },
              { label: '预算管理', icon: <WalletCards className="h-4 w-4" /> },
              { label: '人事编制', icon: <Users className="h-4 w-4" /> },
              { label: '内控审计', icon: <Shield className="h-4 w-4" /> },
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
                <div className="text-sm font-semibold text-[#1D1D1F]">AirBit Public Copilot</div>
                <div className="text-xs text-[#86868B]">OA · 财务 · 人事 · 资产 · 知识库</div>
              </div>
              <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">分管领导</div>
                <div className="text-sm leading-relaxed text-[#1D1D1F]">帮我查看待审批事项，批准小王的差旅申请和那笔经费报销。</div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 执行结果</div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                  <li>共有 5 项待审批，已为您优先展示紧急项。</li>
                  <li>差旅申请已审批通过，通知已发送给王某。</li>
                  <li>经费报销审批完成，预计 3 个工作日到账。</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['公文进度', '预算执行', '审计准备'].map((item) => (
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
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">事业单位正在面临的 AI 落地难题</h2>
          <p className="text-[#86868B]">流程多、合规严、系统分散且数据敏感，只有先把治理边界和系统接起来，AI 才能真正落地。</p>
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
          <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">八大场景，覆盖事业单位全业务链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            从公文审批到监察审计，从预算管理到知识问答，AirBit 用自然语言串联 20+ 套业务系统，让每个岗位都能用 AI 做完了。
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
      desc: '领导用自然语言审批和查数据，办公室主任查公文进度，财务查预算执行，员工查制度政策。不是聊天窗口，是能操作 20+ 套系统的办公助理。',
    },
    {
      product: 'MCP Gateway',
      role: '内部系统零改造接入',
      desc: '将 OA/财务/人事/资产/项目管理/档案等系统通过协议桥接转化为 AI 可调用的工具。现有系统不改一行代码。这是 AI 能"查公文进度"和"批审批"的基础。',
    },
    {
      product: 'AI Gateway',
      role: '多模型统一调度',
      desc: '支持国产模型（DeepSeek/混元/文心/通义），也支持私有化部署的本地模型。按场景智能选择模型。语义缓存：高频制度查询直接命中缓存，降低 30-50% 成本。',
    },
    {
      product: 'Guardrails',
      role: 'AI 安全策略引擎',
      desc: '内部数据自动脱敏后才发给模型；数据权限按处室/层级隔离（各处室只能看自己的数据）；涉密信息识别和拦截；操作类指令需确认后再执行。满足保密三级/二级要求。',
    },
    {
      product: 'Eips',
      role: '自动化流程编排',
      desc: '公文超期 → 自动公函催办通知；资产到期 → 自动触发报废审批流程；新人入职 → 自动开通各系统账号。业务人员拖拽即建，不需要 IT 开发。',
    },
    {
      product: 'AIO',
      role: '全栈可观测',
      desc: 'Token 成本归因到处室和应用；AI 答复质量评估；全量交互审计日志，审计时一键导出。信息中心一个界面管控所有 AI 能力。',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">AirBit 平台如何支撑事业单位全业务链</h2>
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
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0071E3]">某省级事业单位</div>
            <h3 className="mb-2 text-2xl font-bold text-[#1D1D1F]">在编人员 800+，下设 15 个处室</h3>
            <p className="text-sm text-[#86868B]">运行 OA · 公文管理 · 财务 · 人事 · 资产管理 · 项目管理 · 档案管理 · 督办 · 合同管理 · 后勤管理等 16 套核心系统。保密二级要求，数据严禁出局。</p>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">核心痛点</h4>
              <ul className="space-y-3">
                {[
                  '领导待办件积压严重，出差期间审批审批全部积压',
                  '来文转办进度不清楚，超期情况事先无感知',
                  '预算执行进度无法实时查看，调整时机往往已晚',
                  '制度文件散落多个系统，员工找不到最新版本',
                  '审计数据准备需要多部门联动，耗时超过一周',
                  '对 AI 有迫切需求但数据安全红线不可碰，必须私网部署',
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
                  '私网私有化部署，数据安全不出局，满足保密要求',
                  'MCP Gateway 桥接 16 套系统，后端零改造',
                  'Portal 为领导、办公室、财务、人事等提供自然语言操作入口',
                  'Guardrails 全链路安全：数据权限按处室隔离、涉密信息自动拦截',
                  'Eips 自动化流程：来文超期 → 自动催办，资产到期 → 自动触发审批',
                  '知识库（RAG）沉淀全部内部制度和常见问答',
                  'AIO 全量审计日志可一键导出',
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
                  { v: '16 套系统', l: '零改造接入' },
                  { v: '80%', l: '审批效率提升（待审件处理时间大幅缩短）' },
                  { v: '90%', l: '来文按时办结率（此前 65%）' },
                  { v: '1周 → 1天', l: '审计数据准备时间' },
                  { v: '100%', l: '数据不出局，满足保密要求' },
                  { v: '0', l: '上线后信息安全事件' },
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
          让 AI 成为事业单位的高效办公助理
          <br />
          数据不出局，安全可审计
        </h2>
        <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">
          从公文审批、预算管控到内控审计，AirBit 帮助事业单位把 AI 真正用在业务主流程里。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约事业单位专项演示
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制机构专属接入方案
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionPublicPage() {
  useSEO({
    title: '事业单位 AI 解决方案 | AirBit',
    description: 'AirBit 为事业单位提供公文审批、预算管理、人事编制、资产管理和内控审计的 AI 解决方案，帮助机构在安全可控前提下提升效率。',
    path: '/solution-public',
    keywords: '事业单位 AI 解决方案, 政务办公 AI, 公文审批 AI, 预算管理 AI, 内控审计 AI, AirBit',
    image: '/og-airbit.png',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '事业单位 AI 解决方案',
        description: 'AirBit 为事业单位提供公文审批、预算管理、知识问答和内控审计的 AI 解决方案。',
        url: 'https://www.tlin.cn/solution-public',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 2, name: '方案', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 3, name: '事业单位', item: 'https://www.tlin.cn/solution-public' },
        ],
      },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'AirBit 如何帮助事业单位提升审批效率？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 让分管领导用自然语言查询待审批事项并执行审批，AI 自动调用 OA 系统完成审批流程，将审批效率提升 80%，减少人工登录系统查找的繁琐步骤。' } },
        { '@type': 'Question', name: '事业单位的公文和数据使用 AirBit 安全吗？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 支持私有化部署，所有数据不出局。Guardrails 实现数据权限隔离，敏感公文和财务数据不会发送给任何外部模型，满足党政机关数据安全要求。' } },
        { '@type': 'Question', name: 'AirBit 能帮助事业单位对接哪些系统？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 可对接 OA 审批系统、财务系统、人事编制系统、资产管理系统、项目管理系统等 20+ 套事业单位常用系统，前端零改造。' } },
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
