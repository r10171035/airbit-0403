import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Phone, ArrowRight, CheckCircle2, Send, ChevronDown } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { useSEO } from '../hooks/useSEO';

export function ContactPage() {
  useSEO({ 
    title: '联系我们 | AirBit', 
    description: '无论是产品咨询、技术支持还是商务合作，我们随时为您提供帮助。',
    path: '/contact'
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      // In a real app, this would send to an API. 
      // For now, we simulate the experience.
      // We also provide the direct email link as requested.
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans text-[#1D1D1F] pt-20 relative">
      {/* 与首页一致的网格背景 */}
      <div className="absolute inset-x-0 top-0 h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              联系我们
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              无论是产品咨询、技术支持还是商务合作，我们随时为您提供帮助。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
             
             {/* Direct Contact Cards */}
             <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-[#F5F5F7] hover:bg-[#F0F0F2] transition-colors group">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071E3] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">商务合作</h3>
                   <p className="text-[#86868B] mb-6 text-sm">
                     寻求企业版部署、定制化开发或战略合作。
                   </p>
                   <a href="mailto:contact@tlin.cn" className="text-[#0071E3] font-medium flex items-center gap-2 hover:underline">
                     contact@tlin.cn <ArrowRight className="w-4 h-4" />
                   </a>
                </div>

                <div className="p-8 rounded-3xl bg-[#F5F5F7] hover:bg-[#F0F0F2] transition-colors group">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071E3] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">技术支持</h3>
                   <p className="text-[#86868B] mb-6 text-sm">
                     使用过程中遇到问题？我们的工程师团队在线待命。
                   </p>
                   <a href="#" className="text-[#0071E3] font-medium flex items-center gap-2 hover:underline">
                     提交工单 <ArrowRight className="w-4 h-4" />
                   </a>
                </div>
             </div>

             {/* Office Info */}
             <div>
                <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#86868B]" /> 办公地点
                </h4>
                <div className="space-y-4 text-[#86868B]">
                   <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#0071E3] shrink-0"></div>
                      <div>
                        <strong className="block text-[#1D1D1F] mb-1">厦门总部</strong>
                        <p className="text-sm">福建省厦门市思明区莲前街道软件园二期望海路65#2-A902单元</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-gray-300 shrink-0"></div>
                      <div>
                        <strong className="block text-[#1D1D1F] mb-1">上海研发中心</strong>
                        <p className="text-sm">上海市浦东新区张江高科</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
             <div className="bg-white rounded-[40px] shadow-2xl shadow-black/5 border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                {/* Form Background Blob */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

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
                     <form onSubmit={async (e) => {
                        e.preventDefault();
                        
                        // Security: Rate limiting check
                        const lastSubmit = sessionStorage.getItem('airbit_contact_submit_time');
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
                                type: formData.get('type'),
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
                                sessionStorage.setItem('airbit_contact_submit_time', Date.now().toString());
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

                        {/* Row 3: Consultation Type (Full Width) */}
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

                        {/* Row 4: Message */}
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-[#86868B] ml-1">留言内容</label>
                           <textarea 
                              rows={5}
                              name="message"
                              required
                              className="w-full px-4 py-4 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#0071E3] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-[#1D1D1F]"
                              placeholder="请描述您的需求..."
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

        </div>
      </section>

    </div>
  );
}
