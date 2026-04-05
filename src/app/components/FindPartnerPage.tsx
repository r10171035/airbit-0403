import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Zap,
  Wrench,
  BrainCircuit,
  Network,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Send,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { useSEO } from '../hooks/useSEO';

// ---- Data ---------------------------------------------------------------

const painCards = [
  {
    icon: Users,
    color: 'bg-blue-100 text-[#0071E3]',
    title: '团队技术缺口不足',
    desc: '当您的内部团队缺乏 AI、IoT 或数字化系统的实施经验与开发能力时，合作伙伴可以快速填补技术缺口，确保项目按计划推进。',
  },
  {
    icon: Zap,
    color: 'bg-amber-100 text-amber-600',
    title: '业务系统需要快速交付',
    desc: '如果交付时间紧迫，合作伙伴的专业服务能大幅缩短从需求规划到系统上线的全程，有效降低实施风险。',
  },
  {
    icon: Wrench,
    color: 'bg-purple-100 text-purple-600',
    title: '需要持续的定制开发与运维支持',
    desc: '如果您的需求不止于软件本身，还需要持续的技术支持、员工培训和系统维护，选择合作伙伴服务是更可靠的选择。',
  },
];

const serviceCards = [
  {
    icon: BrainCircuit,
    color: 'bg-blue-100 text-[#0071E3]',
    title: 'AI 应用与智能系统开发',
    desc: '基于 Airbit AI 产品矩阵，为您量身定制智能应用方案。从需求分析、模型选型、方案设计到开发交付，提供全流程专业服务。',
  },
  {
    icon: Network,
    color: 'bg-indigo-100 text-indigo-600',
    title: '系统集成与部署',
    desc: '将 Airbit 平台与您现有的 ERP、MES、SCADA 等系统无缝对接，消除数据孤岛，实现设备互联与业务流程自动化管控。',
  },
  {
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-600',
    title: '企业数字化全咨询与交付',
    desc: '提供从数字化转型规划、系统架构设计到落地实施的一站式服务，帮助企业建立可持续演进的数字化基础设施。',
  },
  {
    icon: ShieldCheck,
    color: 'bg-rose-100 text-rose-600',
    title: '技术支持与运维保障',
    desc: '提供系统部署、版本升级、性能优化和故障排除服务，确保您的 Airbit 系统长期稳定、高效运行。',
  },
];

// ---- Component ----------------------------------------------------------

export function FindPartnerPage() {
  useSEO({
    title: '寻找伙伴 | AirBit - 寻找合作伙伴',
    description:
      'Airbit 拥有覆盖全国的合作伙伴网络，提供基于 Airbit 产品矩阵的 AI 应用开发、IoT 系统集成、企业数字化部署和运维服务，助力您的项目高效落地。',
    path: '/find-partner',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans text-[#1D1D1F] pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center overflow-hidden">
        {/* 与首页一致的网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold text-[#0071E3] uppercase tracking-widest mb-4 px-3 py-1 bg-blue-50 rounded-full">
              寻找合作伙伴
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              找到合适的 AirBit 伙伴<br className="hidden lg:block" />助你成功
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              AirBit 拥有遍布全国的合作伙伴网络，提供基于 AirBit 的AI场景开发、系统开发、系统集成、部署运维等服务，为你的项目保驾护航。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="#contact-form"
                className="px-8 py-3.5 bg-[#0071E3] text-white rounded-full font-medium hover:bg-[#0077ED] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                提交合作需求 <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#partner-types"
                className="px-8 py-3.5 bg-[#F5F5F7] text-[#1D1D1F] rounded-full font-medium hover:bg-[#E8E8ED] transition-all flex items-center justify-center gap-2"
              >
                了解更多
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">哪些情况适合找合作伙伴</h2>
          <p className="text-[#86868B] max-w-xl mx-auto">
            如果你正面临以下情况，Airbit 合作伙伴可以帮助你更高效地推进项目落地。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F5F5F7] rounded-3xl p-8 flex flex-col gap-5"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-[#424245] text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="bg-[#FAFAFC] border-y border-[#F5F5F7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Airbit 合作伙伴能为您提供什么？</h2>
            <p className="text-[#86868B] max-w-xl mx-auto">
              无论是新系统搭建还是现有系统升级，Airbit 合作伙伴为您提供端到端的专业服务。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex gap-6 items-start"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${card.color}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-[#424245] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────── */}
      <section id="contact-form" className="bg-[#FAFAFC] py-24 border-t border-[#F5F5F7]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">提交您的合作需求</h2>
            <p className="text-[#86868B]">
              告诉我们您的项目需求，我们将为您匹配最合适的 Airbit 合作伙伴，助力项目成功。
            </p>
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl shadow-black/5 border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">咨询信息</h3>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F2FBF5] border border-green-100 rounded-3xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">提交成功</h4>
                  <p className="text-green-800/70 mb-8">
                    感谢您的留言。我们的团队已收到您的消息，将尽快与您联系。
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-6 py-2 bg-white border border-green-200 text-green-700 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                  >
                    发送另一条消息
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const lastSubmit = sessionStorage.getItem('airbit_find_partner_submit_time');
                    if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
                      alert('提交过于频繁，请稍后再试');
                      return;
                    }

                    const formData = new FormData(e.currentTarget);
                    const honeypot = formData.get('site_url');
                    if (honeypot) {
                      setFormState('success');
                      return;
                    }

                    setFormState('submitting');

                    try {
                      const data = {
                        name: formData.get('name'),
                        title: formData.get('title'),
                        email: formData.get('email'),
                        contactMethod: formData.get('contactMethod'),
                        contactValue: formData.get('contactValue'),
                        type: formData.get('type'),
                        message: formData.get('message'),
                      };

                      const res = await fetch(
                        `https://${projectId}.supabase.co/functions/v1/make-server-a1c4eef0/contact`,
                        {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${publicAnonKey}`,
                          },
                          body: JSON.stringify(data),
                        }
                      );

                      if (res.ok) {
                        sessionStorage.setItem('airbit_find_partner_submit_time', Date.now().toString());
                        setFormState('success');
                      } else {
                        setFormState('idle');
                        alert('提交失败，请稍后重试');
                      }
                    } catch (err) {
                      console.error(err);
                      setFormState('idle');
                      alert('提交出错，请检查网络');
                    }
                  }}
                  className="space-y-8"
                >
                  {/* Honeypot */}
                  <div className="absolute opacity-0 -z-10 select-none pointer-events-none" aria-hidden="true">
                    <input type="text" name="site_url" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Row 1: 姓名 / 邮箱 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#86868B] ml-1">姓名</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          name="name"
                          required
                          className="flex-1 px-4 py-3.5 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F] placeholder-gray-400 min-w-0"
                          placeholder="您的姓名"
                        />
                        <div className="relative">
                          <select
                            name="title"
                            className="appearance-none h-full px-4 pr-9 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F] font-medium cursor-pointer"
                          >
                            <option value="先生">先生</option>
                            <option value="女士">女士</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#86868B] ml-1">邮箱</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F]"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: 联系方式 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#86868B] ml-1">联系方式</label>
                    <div className="flex gap-3">
                      <div className="relative">
                        <select
                          name="contactMethod"
                          className="appearance-none h-full pl-4 pr-10 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F] font-medium cursor-pointer min-w-[100px]"
                        >
                          <option value="phone">手机</option>
                          <option value="wechat">微信</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      <input
                        type="text"
                        name="contactValue"
                        required
                        className="flex-1 px-4 py-3.5 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F] placeholder-gray-400"
                        placeholder="请输入号码或ID"
                      />
                    </div>
                  </div>

                  {/* Row 3: 咨询类型 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#86868B] ml-1">咨询类型</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {['商务合作', '产品演示', '价格咨询', '技术咨询', '其他'].map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input type="radio" name="type" value={type} defaultChecked={type === '商务合作'} className="peer sr-only" />
                          <div className="text-center px-2 py-3.5 rounded-xl bg-[#F5F5F7] text-sm text-[#86868B] border border-transparent peer-checked:bg-blue-50 peer-checked:text-[#0071E3] peer-checked:border-blue-200 transition-all hover:bg-gray-100">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: 留言 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#86868B] ml-1">留言内容</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-4 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F]"
                      placeholder="请描述您的需求..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-4 rounded-full bg-[#0071E3] text-white font-medium text-lg hover:bg-[#0077ED] transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        提交中...
                      </>
                    ) : (
                      <>
                        发送消息 <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#86868B] text-center mt-4">
                    提交即表示您同意我们的隐私政策。我们会严格保密您的信息。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
