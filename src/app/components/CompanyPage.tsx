import { motion } from 'motion/react';
import { Network, Layers, Bot, ShieldCheck, Activity, Cpu, LayoutDashboard } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function CompanyPage() {
  useSEO({ 
    title: '公司介绍 | AirBit - 厦门天临科技有限公司', 
    description: '厦门天临科技有限公司是一家领先的企业级 API 与 AI 基础设施解决方案提供商。',
    path: '/company'
  });

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              厦门天临科技有限公司
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              构建企业级数字底座，连接智能未来
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-6"
           >
              <h2 className="text-3xl font-bold tracking-tight">公司概览</h2>
              <div className="space-y-4 text-lg text-[#424245] leading-relaxed">
                <p>
                  厦门天临科技有限公司是一家领先的企业级 API 与 AI 基础设施解决方案提供商。我们致力于帮助企业解决从传统微服务治理到大模型应用落地（LLM Ops）全过程中的连接、管理、安全与观测难题。
                </p>
                <p>
                  通过打造现代化的数字底座，天临科技赋能企业在数字化与智能化转型中实现安全、高效、可控的业务增长。
                </p>
              </div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative h-[400px] rounded-3xl overflow-hidden bg-[#F5F5F7]"
           >
              {/* Abstract tech background or office image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                 <div className="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-multiply"></div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Core Competitiveness: AirBit Product Matrix */}
      <section className="bg-[#FAFAFC] border-y border-[#F5F5F7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">核心竞争力：AirBit 产品矩阵</h2>
            <p className="text-[#86868B] max-w-2xl mx-auto">
              依托自主研发的 Airbit 产品矩阵，我们为企业构建了一套完整的数字生态系统，确保 AI 能力真正转化为生产力。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: AirBit Apis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 text-[#0071E3] rounded-2xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit Apis</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                高性能 API 网关。作为云原生的动态 API 网关，它负责接管进入企业的所有流量，并处理身份认证、负载均衡与限流熔断，如同把控企业数字主干道的“全能交警”。
              </p>
            </motion.div>

            {/* Card 2: AirBit Eips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit Eips</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                企业集成框架。基于企业集成模式的框架，拥有超过 300 个组件，如同“万能胶水”般将企业内各种异构系统与接口无缝粘合，打破数据孤岛。
              </p>
            </motion.div>

            {/* Card 3: AirBit AI Gateway */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit AI Gateway</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                AI 流量管家。位于企业应用与大模型之间的智能中间件，通过统一接口解决厂商锁定问题，并利用语义缓存大幅降低昂贵的 Token 成本。
              </p>
            </motion.div>

            {/* Card 4: AirBit Guardrails */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow lg:col-span-1.5"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit Guardrails</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                AI 安全护栏。这是一个可编程的规则引擎，通过强制规则拦截越狱攻击和过滤敏感内容，充当企业 AI 的“严苛合规官”，确保模型输出安全可控。
              </p>
            </motion.div>

            {/* Card 5: AirBit AIO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit AIO</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                AI 可观测性与工程平台。面向大模型应用的 APM 与评测平台，提供全链路追踪，让企业清晰掌握运行成本与数据流向。支持版本控制与 Prompt 优化。
              </p>
            </motion.div>

            {/* Card 6: AirBit MCP Gateway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit MCP Gateway</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                智能体治理网关。为 AI 模型提供规范化的外部工具调用能力，支持多后端路由、协议桥接与统一鉴权，让 AI 智能体安全可控地访问企业内外部系统。
              </p>
            </motion.div>

            {/* Card 7: AirBit Portal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AirBit Portal</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">
                企业 AI 业务统一门户。不是简单聊天框，而是企业大模型的方向盘和刹车片。基于全栈 AI 基础设施，为企业打造安全、受控、直连业务的超级智能体交互中心。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">权威认证与合规保障</h2>
          <p className="text-[#86868B] max-w-2xl mx-auto">
            通过国际权威认证，以严格的管理体系为企业客户提供可信赖的质量、服务与安全保障。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: '/iso-9001.png',  label: 'ISO 9001',  desc: '质量管理体系认证，确保产品研发与交付全流程符合国际质量标准。' },
            { img: '/iso-20000.png', label: 'ISO 20000', desc: 'IT 服务管理体系认证，保障服务持续性与高可用性，满足企业级 SLA 要求。' },
            { img: '/iso-27001.png', label: 'ISO 27001', desc: '信息安全管理体系认证，以系统化安全控制保护企业数据资产与隐私合规。' },
          ].map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="bg-[#F5F5F7] rounded-3xl p-10 text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-6 h-36">
                <img src={cert.img} alt={cert.label} className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.label}</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
