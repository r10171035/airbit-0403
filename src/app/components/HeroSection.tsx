import { motion } from 'motion/react';
import dashboardImg from 'figma:asset/144f50de21826e7132ed5c3c56c36094960deecb.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-11">
      {/* 纯白背景 */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-[980px] mx-auto px-6 w-full text-center">
        {/* 产品名称 - 小标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-xl font-semibold text-[#1D1D1F] tracking-tight">
            AirBit
          </p>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#1D1D1F] mb-6 tracking-tight leading-[1.05]"
        >
          企业级 AI 的
          <br />
          信任基石
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-[#86868B] mb-8 max-w-3xl mx-auto leading-snug font-normal"
        >
          统一的治理、可观测性与连接层。
          <br />
          驯服大模型的复杂与混沌。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="px-6 py-3 bg-[#0071E3] text-white rounded-full hover:bg-[#0077ED] transition-colors text-sm font-normal">
            免费试用
          </button>
          <button className="text-[#0071E3] hover:underline text-sm font-normal">
            了解更多 →
          </button>
        </motion.div>

        {/* 产品视觉占位 - 简洁的渐变卡片代表产品 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] shadow-2xl">
            {/* 产品界面预览 */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <img 
                src={dashboardImg} 
                alt="AirBit Dashboard" 
                className="w-full h-full object-contain rounded-xl shadow-sm bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 底部渐变平滑过渡到下一个区域 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFC] to-transparent pointer-events-none" />
    </section>
  );
}
