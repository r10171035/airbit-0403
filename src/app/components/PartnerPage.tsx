import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Send,
  ChevronDown,
  TrendingUp,
  Wrench,
  Cpu,
  ShieldCheck,
  BookOpen,
  HeadphonesIcon,
  Gift,
  Award,
} from 'lucide-react';
import { Link } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { useSEO } from '../hooks/useSEO';

// ---- Data ---------------------------------------------------------------

const partnershipModels = [
  {
    id: 'reseller',
    label: '渠道销售',
    title: '渠道销售',
    desc: '推广销售 AirBit 产品，根据终身累计销售额获取阶梯佣金。',
    highlights: [
      { bold: '15% - 40%', text: ' 阶梯佣金比例' },
      { bold: '终身累计', text: '，无时间限制' },
      { bold: '佣金比例', text: '向上只增不减' },
      { text: '提供销售赋能资料' },
    ],
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'bg-blue-100 text-[#0071E3]',
    icon: TrendingUp,
  },
  {
    id: 'service',
    label: '服务实施',
    title: '服务实施',
    desc: '提供部署、定制、集成和培训服务，获取基于项目的服务收入。',
    highlights: [
      { bold: '服务收入 100%', text: ' 归你所有，无需向 AirBit 支付费用' },
      { text: '服务定价完全自主' },
      { text: '根据交付项目数量升级等级' },
      { text: '高级别伙伴享有优先商机推荐' },
    ],
    color: 'bg-indigo-50 border-indigo-200',
    iconColor: 'bg-indigo-100 text-indigo-600',
    icon: Wrench,
  },
];

const whyAirbit = [
  {
    icon: Cpu,
    color: 'bg-blue-100 text-[#0071E3]',
    title: 'AI 业务场景驱动',
    desc: '支持复杂企业级 AI 业务逻辑，契合企业 AI 转型趋势，支持各类差异化定制特点。',
  },
  {
    icon: Gift,
    color: 'bg-purple-100 text-purple-600',
    title: '插件化架构',
    desc: '高度可定制，服务空间大、深度定制驱动高毛利的服务收入。',
  },
  {
    icon: Award,
    color: 'bg-amber-100 text-amber-600',
    title: '一次性授权',
    desc: '不限用户数和应用数，客户授权成本可控，更容易保持签约。',
  },
  {
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600',
    title: '数据安全掌控',
    desc: '私有化部署，代码和数据安全自主。满足企业安全合规要求。',
  },
];

const supportItems = [
  {
    icon: BookOpen,
    color: 'bg-blue-100 text-[#0071E3]',
    title: '销售赋能',
    desc: '产品手册、宣传素材、客户案例和竞争对比分析资料。',
  },
  {
    icon: HeadphonesIcon,
    color: 'bg-indigo-100 text-indigo-600',
    title: '技术支持',
    desc: '专属支持渠道，高级别伙伴享有优先响应和答疑。',
  },
  {
    icon: ArrowRight,
    color: 'bg-purple-100 text-purple-600',
    title: '商机推荐',
    desc: 'AirBit 官方客户推荐，高级伙伴享有优先分配和商机。',
  },
  {
    icon: Award,
    color: 'bg-amber-100 text-amber-600',
    title: '品牌授权',
    desc: '官方伙伴证书、Logo 使用权和联合营销机会。',
  },
];

// ---- Component ----------------------------------------------------------

export function PartnerPage() {
  useSEO({
    title: '成为合作伙伴 | AirBit - 合作伙伴计划',
    description: '加入 AirBit 合作伙伴计划，两种灵活合作模式，渠道销售可获高达 40% 阶梯佣金，服务收入 100% 归你所有。',
    path: '/partner',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans text-[#1D1D1F] pt-20 relative">
      {/* 与首页一致的网格背景 */}
      <div className="absolute inset-x-0 top-0 h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold text-[#0071E3] uppercase tracking-widest mb-4 px-3 py-1 bg-blue-50 rounded-full">
              合作伙伴计划
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              与 AirBit 一起增长共赢
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              两种灵活的合作模式，渠道销售可获高达 40% 阶梯佣金，服务收入 100% 归你所有。无论你专注销售、实施还是两者兼顾，我们随时欢迎。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#0071E3] text-white rounded-full font-medium hover:bg-[#0077ED] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                联系我们 <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#partnership-models"
                className="px-8 py-3.5 bg-[#F5F5F7] text-[#1D1D1F] rounded-full font-medium hover:bg-[#E8E8ED] transition-all flex items-center justify-center"
              >
                了解详情
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: 两种合作模式 ──────────────────────────────────── */}
      <section id="partnership-models" className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">两种灵活的合作模式</h2>
          <p className="text-[#86868B] max-w-xl mx-auto">
            选择一种模式或两者兼顾，最大化您的收益
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnershipModels.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 lg:p-10 border-2 ${model.color} flex flex-col gap-6`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${model.iconColor}`}>
                  <model.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{model.title}</h3>
              </div>
              <p className="text-[#424245] leading-relaxed">{model.desc}</p>
              <ul className="space-y-3">
                {model.highlights.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-3 h-3 text-[#0071E3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#1D1D1F] text-sm leading-snug">
                      {item.bold && <strong>{item.bold}</strong>}{item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Section 2: 为什么选择 AirBit ─────────────────────────────── */}
      <section className="bg-[#FAFAFC] border-y border-[#F5F5F7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">为什么选择 AirBit</h2>
            <p className="text-[#86868B] max-w-xl mx-auto">
              为高价值项目打造的产品，具备强大的伙伴经济模型
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyAirbit.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm flex flex-col gap-4"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5">{item.title}</h3>
                  <p className="text-[#424245] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: 全方位支持体系 ────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">全方位伙伴支持体系</h2>
          <p className="text-[#86868B] max-w-xl mx-auto">
            丰富的资源和支持助您成长
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#F5F5F7] rounded-3xl p-7 flex flex-col gap-4"
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">{item.title}</h3>
                <p className="text-[#424245] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Section 4: CTA + Form ─────────────────────────────────────── */}
      <section className="bg-[#FAFAFC] border-t border-[#F5F5F7] py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">准备好成为合作伙伴了吗？</h2>
            <p className="text-[#86868B] max-w-xl mx-auto">
              加入我们壮大的 AirBit 技术伙伴生态。无论您是系统集成商、咨询公司还是技术服务商，这里都有您的一席之地。
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

                    const lastSubmit = sessionStorage.getItem('airbit_partner_submit_time');
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
                        sessionStorage.setItem('airbit_partner_submit_time', Date.now().toString());
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
