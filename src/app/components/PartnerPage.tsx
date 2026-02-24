import { useState } from 'react';
import { motion } from 'motion/react';
import { Handshake, Layers, Cpu, CheckCircle2, Send, ChevronDown, ArrowRight } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function PartnerPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1D1F] pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center overflow-hidden">
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              AirBit 合作伙伴生态体系
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              携手共建智能未来，共享数字化转型机遇
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="space-y-12">
            {/* 1. Resellers */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-12"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    <div className="w-16 h-16 bg-blue-100 text-[#0071E3] rounded-2xl flex items-center justify-center shrink-0">
                        <Handshake className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">1. 经销商 (Resellers)</h2>
                        <div className="text-[#424245] leading-relaxed space-y-4">
                            <p>
                                AirBit 的经销商伙伴将自有的客户应用软件、网络安全解决方案、IT 硬件基础设施或专业咨询服务，与 AirBit 的企业级 API 及 AI 基础设施深度结合。通过这种合作模式，企业客户只需一次采购，即可满足从传统微服务治理到大模型应用落地的全链路 IT 需求。
                            </p>
                            <p>
                                经销商将 AirBit 的高性能 API 网关以及 AIO（AI 可观测性平台）等核心解决方案与自身的客户服务体系相融合进行分发，为客户交付具备极高附加值的一站式智能化转型方案。
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. System Integrators */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-12"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Layers className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">2. 系统集成商 (System Integrators)</h2>
                        <div className="text-[#424245] leading-relaxed space-y-4">
                            <p>
                                系统集成合作伙伴提供专业的系统集成服务、各类横向与纵向的业务软件，并依托 AirBit 的底座平台（如具备 300+ 现成组件的 AirBit Eips 企业集成框架），帮助企业构建统一的数字化与 AI 基础设施。这有助于企业打通数据孤岛，快速挖掘并释放 AI 大模型的业务潜力。
                            </p>
                            <p>
                                我们的系统集成商拥有丰富的行业与技术实施知识，能够确保复杂的 AI 架构（包括结合 AirBit Guardrails 实现的严格合规管控）平滑落地，并帮助企业快速取得切实的降本增效成果。
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. OEM Partners */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-12"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Cpu className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">3. OEM 伙伴 (OEM Partners)</h2>
                        <div className="text-[#424245] leading-relaxed space-y-4">
                            <p>
                                OEM 合作伙伴将 AirBit 的解决方案（如 AI Gateway 流量管家或 Guardrails 安全护栏）无缝嵌入到他们自有的商业软件或产品中，从而为客户打造更强大、更定制化的 AI 解决方案。
                            </p>
                            <p>
                                OEM 合作伙伴可以充分利用我们工业级的高性能网关架构和全动态的热更新能力，无需从零研发底层 AI 治理逻辑，即可为客户提供卓越的可扩展性、敏捷性，以及企业级的数据隔离与安全审查功能。
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#FAFAFA] py-24 border-t border-black/5">
         <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">成为合作伙伴</h2>
               <p className="text-[#86868B]">
                  填写下方表单，我们的渠道经理将尽快与您联系，探讨合作机会。
               </p>
            </div>

            <div className="bg-white rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 p-8 md:p-12 relative overflow-hidden">
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
                           感谢您的申请。我们的团队已收到您的信息，将尽快与您联系。
                        </p>
                        <button 
                          onClick={() => setFormState('idle')}
                          className="px-6 py-2 bg-white border border-green-200 text-green-700 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                        >
                           提交新的申请
                        </button>
                     </motion.div>
                   ) : (
                     <form onSubmit={async (e) => {
                        e.preventDefault();
                        
                        // Security: Rate limiting check
                        const lastSubmit = sessionStorage.getItem('airbit_partner_submit_time');
                        if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
                             alert('提交过于频繁，请稍后再试');
                             return;
                        }

                        // Security: Honeypot check
                        const formData = new FormData(e.currentTarget);
                        const honeypot = formData.get('site_url'); // Hidden field
                        if (honeypot) {
                            console.log('Bot detected');
                            setFormState('success'); // Fake success
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
                                type: '合作伙伴申请', // Hardcoded type for this page
                                message: formData.get('message')
                            };

                            const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a1c4eef0/contact`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${publicAnonKey}`
                                },
                                body: JSON.stringify(data)
                            });

                            if (res.ok) {
                                sessionStorage.setItem('airbit_partner_submit_time', Date.now().toString());
                                setFormState('success');
                            } else {
                                console.error('Failed to submit');
                                setFormState('idle');
                                alert('提交失败，请稍后重试');
                            }
                        } catch (err) {
                            console.error(err);
                            setFormState('idle');
                            alert('提交出错，请检查网络');
                        }
                     }} className="space-y-8">
                        
                        {/* Security: Honeypot Field (Invisible to users) */}
                        <div className="absolute opacity-0 -z-10 select-none pointer-events-none" aria-hidden="true">
                            <input type="text" name="site_url" tabIndex={-1} autoComplete="off" />
                        </div>

                        {/* Row 1: Identity & Email */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name & Title Group */}
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

                            {/* Email */}
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

                        {/* Row 2: Contact Method (Full Width) */}
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

                        {/* Row 4: Message */}
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-[#86868B] ml-1">合作意向/留言</label>
                           <textarea 
                               rows={5}
                               name="message"
                               required
                               className="w-full px-4 py-4 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F]"
                               placeholder="请描述您的公司情况及合作意向..."
                           ></textarea>
                        </div>

                        <button 
                           type="submit"
                           disabled={formState === 'submitting'}
                           className="w-full py-4 rounded-full bg-[#0071E3] text-white font-medium text-lg hover:bg-[#0077ED] transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                           {formState === 'submitting' ? (
                             <>
                               <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                               提交中...
                             </>
                           ) : (
                             <>
                               提交申请 <Send className="w-4 h-4" />
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
      </section>

    </div>
  );
}
