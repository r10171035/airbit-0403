import { motion } from 'motion/react';
import { ArrowRight, Bot, CheckCircle, BarChart, FileText } from 'lucide-react';
import { Link } from 'react-router';

export function AirBitPortalHighlight() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Visual Mockup (Symmetrical Z-pattern with ValueProp) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Visual UI Box representing Portal Chat & BI */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#E5E5EA] relative overflow-hidden z-10">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5F5F7]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D1D1F] flex items-center justify-center shadow-sm">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[#1D1D1F]">AirBit Portal</div>
                    <div className="text-[13px] text-[#34C759] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] inline-block"></span>
                      已直连企业 ERP / BI
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-6 mb-2">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#0071E3] text-white text-[15px] px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm leading-relaxed">
                    帮我查询一下 Q3 华东区的营收，并生成对比报表。
                  </div>
                </div>
                
                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="bg-[#F5F5F7] text-[#1D1D1F] text-[15px] px-5 py-4 rounded-2xl rounded-tl-sm max-w-[95%] border border-[#E5E5EA] leading-relaxed">
                    <p className="mb-4 text-[#1D1D1F]">已为您查询到受控数据。这是基于隔离沙箱生成的营收分析：</p>
                    
                    {/* Simulated BI Chart */}
                    <div className="bg-white rounded-xl p-4 border border-[#E5E5EA] shadow-sm">
                      <div className="flex items-end gap-3 h-28 mt-2">
                        <div className="flex-1 bg-gradient-to-t from-[#0071E3]/20 to-[#0071E3]/40 rounded-t-md h-[45%] relative group hover:opacity-80 transition-opacity"></div>
                        <div className="flex-1 bg-gradient-to-t from-[#0071E3]/30 to-[#0071E3]/50 rounded-t-md h-[65%] relative group hover:opacity-80 transition-opacity"></div>
                        <div className="flex-1 bg-gradient-to-t from-[#0071E3]/50 to-[#0071E3]/70 rounded-t-md h-[85%] relative group hover:opacity-80 transition-opacity"></div>
                        <div className="flex-1 bg-gradient-to-t from-[#0071E3]/80 to-[#0071E3] rounded-t-md h-[100%] relative group hover:opacity-80 transition-opacity"></div>
                      </div>
                      <div className="flex justify-between mt-3 text-[11px] text-[#86868B] font-medium px-1">
                        <span>7月</span>
                        <span>8月</span>
                        <span>9月</span>
                        <span>10月</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-br from-blue-100/60 to-transparent blur-3xl rounded-full" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            
            <h3 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] mb-6 leading-tight tracking-tight">
              将 AI 转化为<br />
              现实生产力。
            </h3>
            
            <p className="text-lg text-[#86868B] mb-10 leading-relaxed font-normal">
              告别“玩具式”大模型对话。基于全栈 AI 基础设施，为您的企业打造安全、受控、直连业务的超级智能体交互中心。
            </p>

            <div className="space-y-4 mb-10">
              {/* Scene 1 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#1D1D1F]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">场景 1：自然语言 OA 审批</h4>
                  <p className="text-[#86868B] text-[15px] leading-snug">无需穿梭于各个系统，一句话完成复杂流程流转与自动填报。</p>
                </div>
              </div>

              {/* Scene 2 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-[#1D1D1F]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">场景 2：数据隔离的对话式 BI</h4>
                  <p className="text-[#86868B] text-[15px] leading-snug">直接在对话中连接业务数据库，实时生成受控的可视化报表。</p>
                </div>
              </div>
            </div>

            <Link to="/airbit-portal" className="inline-flex items-center text-[#0071E3] hover:text-[#0077ED] font-medium text-base group">
              探索更多真实业务场景 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
