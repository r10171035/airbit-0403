import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  DollarSign,
  FlaskConical,
  GraduationCap,
  Shield,
  Users,
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
    title: '学生咨询量大，80% 是重复问题',
    sub: 'Repetitive Inquiry Overload',
    desc: '"转专业条件是什么？""入学需要什么时候办？""挂科怎么补修？" 辅导员每天被相同的问题淹没，真正需要关注的学生反而顾不上。',
    quote: '开学第一周就回答了 200 多次同样的问题。',
    icon: Users,
    color: 'text-orange-500',
  },
  {
    title: '系统多而孤立，一个数据要登录多个系统',
    sub: 'Fragmented Systems',
    desc: '教务系统查成绩、学工系统查奖惩、财务系统查缴费、科研系统查项目——25+ 套系统各自独立，一个学生的综合情况要跨三个系统才能拼出来。',
    quote: '想看一个学生的全貌，要开三个浏览器窗口。',
    icon: BarChart3,
    color: 'text-blue-500',
  },
  {
    title: '科研经费管理严，报个费要找财务',
    sub: 'Research Overhead',
    desc: '科研人员把头埋在研究里，结果一半时间在想"这笔钱能不能报""还剩多少额度""绩效报告需要从哪个系统导出"。经费报告有时需要花整整一天。',
    quote: '绩效报告最后的汇总，花了我整整一天。',
    icon: DollarSign,
    color: 'text-purple-500',
  },
  {
    title: 'AI 想用不敢用——学生数据是红线',
    sub: 'Privacy And Compliance',
    desc: '学生成绩、家庭情况、健康信息都是敏感数据，绝对不能越权。公有云模型无法保证安全性，这个风险学校拿不起来。',
    quote: '学生数据泄露了谁负责，这个风险我们拿不起来。',
    icon: Shield,
    color: 'text-rose-500',
  },
];

const scenarios: ScenarioGroup[] = [
  {
    id: 'academic',
    title: '教务与教学管理',
    subtitle: '学业完成、成绩异常、教师工作量，问一句话全掌控',
    positioning: '让辅导员、教学院长和教务处长实时掌握教学动态',
    coreSystems: ['教务系统', '在线教学平台', '实验管理', '人事系统', 'BI'],
    icon: GraduationCap,
    color: 'blue',
    cards: [
      {
        role: '辅导员',
        quote: '张同学的学业完成情况和绩点，还差哪些必修课没修？',
        solution: 'AI 查询教务系统（学业数据、绩点数据），按毕业方案校验完成情况，返回缺修课程。',
        systems: ['教务系统', 'BI'],
      },
      {
        role: '教学院长',
        quote: '本学院本学期哪些学生成绩超过 3 门不及格，按年级统计？',
        solution: 'AI 按条件筛选教务系统成绩数据，多维度统计并生成预警名单。',
        systems: ['教务系统', 'BI'],
      },
      {
        role: '教务处长',
        quote: '各学院教师本学期教学课时统计，和人事系统编制对比？',
        solution: 'AI 查询教务系统（授课数据）+ 人事系统（教师编制），生成院际教学工作量对比。',
        systems: ['教务系统', '人事系统', 'BI'],
      },
    ],
  },
  {
    id: 'student',
    title: '学生事务与服务',
    subtitle: '80% 重复咨询 AI 即时应答，学生综合画像跨系统一键汇总',
    positioning: '让辅导员把时间留给真正需要关注的学生',
    coreSystems: ['学工系统', '教务系统', '一卡通', 'KMS', '就业系统'],
    icon: Users,
    color: 'green',
    cards: [
      {
        role: '学生',
        quote: '转专业需要什么条件和流程？入学需要什么时候办理？',
        solution: 'AI 检索学校知识库（RAG），基于最新学生手册和规章制度给出准确答复并标注来源文件和条款。',
        systems: ['KMS（RAG）'],
      },
      {
        role: '辅导员',
        quote: '看看张同学的综合情况：成绩、奖惩记录、一卡通消费异常、心理咨询记录？',
        solution: 'AI 同时查询教务（成绩）+ 学工（奖惩及心理）+ 一卡通（消费数据），生成学生综合画像。数据权限隔离，仅辅导员可见管辖范围学生。',
        systems: ['教务系统', '学工系统', '一卡通'],
      },
      {
        role: '就业指导中心',
        quote: '本届毕业生签约率，和各学院对比，未签约学生名单？',
        solution: 'AI 查询就业系统（签约数据）+ 学工系统（学生信息），生成就业统计和未签约名单。',
        systems: ['就业系统', '学工系统', 'BI'],
      },
    ],
  },
  {
    id: 'enrollment',
    title: '招生管理',
    subtitle: '历年各省录取数据一句话呈现，招生趋势与专业生源质量一目了然',
    positioning: '让招生办用数据精准决策，把精力放在提升生源质量上',
    coreSystems: ['招生系统', 'BI', 'KMS'],
    icon: BookOpen,
    color: 'amber',
    cards: [
      {
        role: '招生办主任',
        quote: '汇总过去 3 年各省份的录取线和录取人数趋势，哪些省份的生源质量在上升？',
        solution: 'AI 查询招生系统历史数据，按省份×年份维度生成录取线趋势和生源质量分析。',
        systems: ['招生系统', 'BI'],
      },
      {
        role: '招生老师',
        quote: '今年计算机专业志愿填报量，对比去年同期，哪个省份报考最踊跃？',
        solution: 'AI 查询当年招生数据 + 历史同期数据，生成专业报考热度省份分布对比。',
        systems: ['招生系统', 'BI'],
      },
      {
        role: '咨询顾问',
        quote: '课程设置、学费标准、奖学金政策和报名流程能自动回答吗？',
        solution: 'AI 检索招生知识库实时回答常见问题，标注来源政策文件，80% 重复咨询即时应答。',
        systems: ['KMS（RAG）', '招生系统'],
      },
    ],
  },
  {
    id: 'research',
    title: '科研与项目管理',
    subtitle: '科研经费随时自查，著作成果一键统计，绩效汇总从一天到 30 分钟',
    positioning: '让科研人员把精力还给研究，把行政负担交给 AI',
    coreSystems: ['科研管理', '财务系统', '论文/著作管理', 'OA', 'BI'],
    icon: FlaskConical,
    color: 'purple',
    cards: [
      {
        role: '项目负责人',
        quote: '我的国家自然科学基金项目经费还剩多少，各科目已支出和剩余额度？',
        solution: 'AI 查询科研管理系统（项目信息）+ 财务系统（经费明细），按科目分类展示已支出和剩余额度。',
        systems: ['科研管理', '财务系统'],
      },
      {
        role: '院长',
        quote: '本学院今年 SCI 论文发表量，和去年对比，哪些学科发表数量在上升？',
        solution: 'AI 查询论文/著作管理系统，按学院统计并对比分析。',
        systems: ['论文/著作管理', 'BI'],
      },
      {
        role: '项目负责人',
        quote: '帮我汇总绩效报告需要的全部材料：立项书、中期报告、经费决算、成果清单。',
        solution: 'AI 从科研管理 + 财务 + 论文/著作系统自动汇总绩效报告所需的全部数据和材料。',
        systems: ['科研管理', '财务', '论文/著作管理'],
      },
    ],
  },
  {
    id: 'hr',
    title: '师资与人事管理',
    subtitle: '职称评审条件多维汇总，编制空缺一键查询，退休预警提前规划',
    positioning: '让人事处从手工查数中解放，把重心放在人才发展上',
    coreSystems: ['人事系统', '教务系统', '科研管理', '论文/著作管理'],
    icon: Users,
    color: 'cyan',
    cards: [
      {
        role: '人事处',
        quote: '符合副教授晋升评审条件的教师名单，每人教学、科研和论文数据？',
        solution: 'AI 综合人事（基本信息）+ 教务（教学工作量）+ 科研（项目和经费）+ 论文/著作（发表记录），按评审条件筛选并汇总多维度数据。',
        systems: ['人事', '教务', '科研', '论文/著作'],
      },
      {
        role: '人事处长',
        quote: '各学院的在编人数和空缺情况，哪些院系缺编最多？',
        solution: 'AI 查询人事系统统计各学院在编教师及空缺岗位数量。',
        systems: ['人事系统'],
      },
      {
        role: '人事处',
        quote: '未来 12 个月将到退休年龄的教师名单，涉及哪些关键岗位？',
        solution: 'AI 查询人事系统筛选即将到龄人员并标注岗位。',
        systems: ['人事系统'],
      },
    ],
  },
  {
    id: 'finance',
    title: '财务与预算管理',
    subtitle: '各部门经费执行率实时可见，学费收缴异常快速定位',
    positioning: '让财务处和各部门实时掌握经费全貌，消除信息不对称',
    coreSystems: ['财务', '预算管理', '科研管理', 'OA', 'BI'],
    icon: DollarSign,
    color: 'emerald',
    cards: [
      {
        role: '财务处长',
        quote: '各部门今年预算执行进度，哪些科目已超预算？',
        solution: 'AI 查询预算管理 + 财务系统，生成各部门执行率和超预算预警清单。',
        systems: ['预算管理', '财务', 'BI'],
      },
      {
        role: '财务老师',
        quote: '本学院学生学费收缴情况，欠缴学生名单，按学院和年级汇报？',
        solution: 'AI 查询财务系统（学费数据）+ 学工系统（学生信息），生成收缴统计和欠费名单。',
        systems: ['财务', '学工系统', 'BI'],
      },
    ],
  },
  {
    id: 'assets',
    title: '资产与校园设施',
    subtitle: '设备使用率到账实时可查，大型仪器闲置预警自动推送',
    positioning: '让实验中心和资产管理处摆脱手工台账，实现设备数字化运营',
    coreSystems: ['AMS', '实验管理', '财务', '采购管理'],
    icon: Building2,
    color: 'rose',
    cards: [
      {
        role: '实验中心主任',
        quote: '各大型仪器设备的使用情况，哪些长期闲置？',
        solution: 'AI 查询实验管理系统（使用记录）+ AMS（设备台账），生成使用率分析并标注闲置设备。',
        systems: ['实验管理', 'AMS', 'BI'],
      },
      {
        role: '资产管理员',
        quote: '哪些实验仪器已超过检定年限？按类别和金额统计？',
        solution: 'AI 查询 AMS + 财务系统，生成超年限资产清单。',
        systems: ['AMS', '财务'],
      },
    ],
  },
  {
    id: 'executive',
    title: '数据分析与领导决策',
    subtitle: '校务核心数据一句话即达，学科评估数据跨系统一键汇总',
    positioning: '让校领导和职能部门告别等报表，随时驾驭全局数据',
    coreSystems: ['BI', '教务', '就业', '科研', '财务', '人事', '招生'],
    icon: BarChart3,
    color: 'slate',
    cards: [
      {
        role: '校长',
        quote: '帮我看一下本学年核心数据：在校人数、就业率、科研经费和预算执行率。',
        solution: 'AI 综合查询教务 + 就业 + 科研 + 财务系统，一次返回多维度校务概览。',
        systems: ['BI', '教务', '就业', '科研', '财务'],
      },
      {
        role: '学科办',
        quote: '帮我汇总 A 学科申请评估需要的数据：师资、科研、教学、人才培养。',
        solution: 'AI 从人事 + 科研 + 教务 + 论文/著作系统自动汇总学科评估所需全部数据指标。',
        systems: ['人事', '科研', '教务', '论文/著作', 'BI'],
      },
      {
        role: '副校长',
        quote: '帮我查有哪些待审批事项，批准一份教学设备采购申请。',
        solution: 'AI 调用 OA 查询待审批列表，用户确认后自动执行审批并通知相关人员。',
        systems: ['OA'],
      },
    ],
  },
];

const metrics = [
  {
    value: '80%',
    label: '学生重复咨询由 AI 即时应答',
    desc: '"转专业条件""入学需要什么时候办" 这类高频问题直接命中语义缓存，辅导员从重复答题中解放',
  },
  {
    value: '3天 → 30分钟',
    label: '职称评审数据汇总时间',
    desc: '从"手动登录四个系统导出 Excel"到"AI 一键汇总"，每次评审节省数天人工',
  },
  {
    value: '25+',
    label: '套系统零改造接入',
    desc: '教务 · 学工 · 科研 · 财务 · 人事 · 图书馆 · 一卡通 · 就业 · OA · 实验室……现有系统不改一行代码',
  },
  {
    value: '100%',
    label: '数据不出校园',
    desc: '全面私有化部署，满足个人信息保护法要求。学生成绩、家庭信息全链路脱敏，全量操作审计日志可追溯',
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
            Education Industry Solution
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
            让师生问业务
            <br />
            <span className="text-[#0071E3]">像发消息一样简单</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">
            AirBit 帮助学校用自然语言联动教务、学工、科研、财务、人事等 25+ 套业务系统，
            让 AI 真正进入业务主流程，既能提效，也能守住安全和成本边界。
          </p>
          <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
            {[
              { label: '学生事务', icon: <Users className="h-4 w-4" /> },
              { label: '教务管理', icon: <GraduationCap className="h-4 w-4" /> },
              { label: '科研项目', icon: <FlaskConical className="h-4 w-4" /> },
              { label: '校务分析', icon: <BarChart3 className="h-4 w-4" /> },
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
                <div className="text-sm font-semibold text-[#1D1D1F]">AirBit Education Copilot</div>
                <div className="text-xs text-[#86868B]">教务 · 学工 · 科研 · 财务 · 人事</div>
              </div>
              <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">辅导员</div>
                <div className="text-sm leading-relaxed text-[#1D1D1F]">张同学本学期成绩和出勤情况，还差哪些必修课没修？</div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 分析结果</div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                  <li>本学期 GPA 2.8，高等数学低于预警线。</li>
                  <li>缺勤率 18%，近两周连续缺课。</li>
                  <li>还差《大学英语 III》未修，影响毕业。</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['成绩预警', '出勤分析', '学业进度'].map((item) => (
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
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">学校正在面临的 AI 落地难题</h2>
          <p className="text-[#86868B]">问题不在于没有模型，而在于系统多、角色多、数据敏感，只有把系统和权限一起接起来，AI 才能真正用起来。</p>
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
          <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">八大场景，覆盖学校全业务链</h2>
          <p className="mx-auto max-w-3xl text-[#86868B]">
            从教务管理到学生服务，从科研经费到校务决策，AirBit 用自然语言串联 25+ 套业务系统，让每个角色都能用 AI 做完了。
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
      role: '每个校园角色的自然语言操作入口',
      desc: '学生问办事流程、辅导员看学生综合情况、科研老师查经费、校长看校务简报。不是聊天窗口，是能操作 25+ 套系统的校园助理。',
    },
    {
      product: 'MCP Gateway',
      role: '校内系统零改造接入',
      desc: '将教务/学工/科研/财务/人事/图书馆/一卡通等系统通过协议桥接转化为 AI 可调用的工具。现有系统不改一行代码。这是 AI 能"做事"而不只是"聊天"的基础。',
    },
    {
      product: 'AI Gateway',
      role: '多模型统一调度',
      desc: '统一调用 GPT / Claude / DeepSeek / 国产模型，按场景智能选择。学生知识问答用轻量模型，数据分析用高端模型。语义缓存大幅降低重复咨询的 Token 成本。',
    },
    {
      product: 'Guardrails',
      role: 'AI 安全策略引擎',
      desc: '学生成绩、家庭信息自动脱敏后才发给模型；数据权限按角色隔离（辅导员只能看自己管辖的学生）；操作类指令需确认后再执行。满足个人信息保护法要求。',
    },
    {
      product: 'Eips',
      role: '自动化流程编排',
      desc: '学生成绩超 3 门不及格 → 自动推送辅导员预警；科研经费即将用完 → 自动通知项目负责人；新生入学 → 自动发送宿舍/一卡通/系统账号。200+ 预置连接器。',
    },
    {
      product: 'AIO',
      role: '全栈可观测',
      desc: 'Token 成本归因到学院/部门/应用；AI 答复质量评估；全量操作审计日志，审计时一键导出。信息中心一个界面管控所有 AI 能力。',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">AirBit 平台如何支撑学校全业务链</h2>
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
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0071E3]">某省属综合性大学</div>
            <h3 className="mb-2 text-2xl font-bold text-[#1D1D1F]">在校生 25000+，教职工 2000+，下设 20 个学院</h3>
            <p className="text-sm text-[#86868B]">运行教务系统 · 学工系统 · 科研管理 · 财务系统 · 人事系统 · 图书馆 · 一卡通 · 就业系统 · OA · 资产管理 · 后勤管理 · 实验管理等 22 套核心系统</p>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">核心痛点</h4>
              <ul className="space-y-3">
                {[
                  '每学期开学辅导员被学生重复咨询淹没，真正需要关注的学生反而顾不上',
                  '看一个学生的综合情况要跨教务、学工、一卡通三个系统手动拼',
                  '科研人员报绩效汇总材料需要花整整一天从多系统导出拼装',
                  '校领导想看校务核心数据要等 IT 出报表，无法实时掌握',
                  '学科评估数据汇总涉及 5 个系统，人工整理耗时一周',
                  '学生数据安全红线不可碰，公有云模型无法使用',
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
                  '校内私有化部署，数据安全不出校园',
                  'MCP Gateway 桥接 22 套系统，后端零改造',
                  'Portal 为学生提供自助问答入口（知识库 RAG），80% 重复咨询 AI 即时应答',
                  'Portal 为辅导员、科研、财务、校领导等提供自然语言操作入口',
                  'Guardrails 全链路安全：学生数据按辅导员管辖范围权限隔离、敏感信息自动脱敏',
                  'Eips 自动化流程：成绩预警 → 通知辅导员，经费超支 → 通知项目负责人',
                  'AIO 成本归因到学院 + 全量操作审计日志',
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
                  { v: '22 套系统', l: '零改造接入' },
                  { v: '80%', l: '学生重复咨询由 AI 即时应答' },
                  { v: '3天 → 30分钟', l: '职称评审数据汇总时间' },
                  { v: '1周 → 1天', l: '学科评估数据汇总时间' },
                  { v: '50%', l: 'Token 成本降低（高频重复咨询命中语义缓存）' },
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
          让 AI 成为学校的智能校务助理
          <br />
          师生办事更简单，校务管理更高效
        </h2>
        <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">
          从学生服务到校务决策，再到科研经费，AirBit 帮你把业务系统和 AI 真正连起来。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
            预约教育行业演示
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
            定制学校专属接入方案
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionEducationPage() {
  useSEO({
    title: '教育行业 AI 解决方案 | AirBit',
    description: 'AirBit 为高校和中学提供教务管理、学生事务、科研管理、财务预算和校务决策的 AI 解决方案，帮助学校在安全可控的前提下提效。',
    path: '/solution-education',
    keywords: '教育行业 AI 解决方案, 高校 AI, 教务 AI, 科研管理 AI, 校务分析 AI, AirBit',
    image: '/og-airbit.png',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '教育行业 AI 解决方案',
        description: 'AirBit 为教育机构提供教务、学生事务、科研、财务和校务决策的 AI 解决方案。',
        url: 'https://www.tlin.cn/solution-education',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 2, name: '方案', item: 'https://www.tlin.cn/' },
          { '@type': 'ListItem', position: 3, name: '教育行业', item: 'https://www.tlin.cn/solution-education' },
        ],
      },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'AirBit 如何帮助高校减少重复性事务咨询？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit Portal 让师生用自然语言查询教务、学籍、财务等信息，AI 自动从 22+ 套系统中提取准确答案，将 80% 的重复性咨询转为 AI 自动应答，释放行政人员精力。' } },
        { '@type': 'Question', name: '高校学生数据使用 AirBit 是否合规？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 支持私有化部署，所有数据不出校园。Guardrails 实现数据权限隔离，学生只能查询自己的数据，辅导员只能查询本院系数据，满足教育数据安全合规要求。' } },
        { '@type': 'Question', name: 'AirBit 能帮助高校对接哪些系统？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 可对接教务系统、学工系统、财务系统、科研管理系统、人事系统、资产系统等 25+ 套高校常用系统，前端零改造。' } },
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
