import { motion } from 'motion/react';
import { Layers, DollarSign, Lock } from 'lucide-react';
import { Link } from 'react-router';

export function DeveloperExperience() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            为什么选择 AirBit?
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="text-center flex flex-col items-center group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-[#F5F5F7] group-hover:bg-[#0071E3] flex items-center justify-center mb-8 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30">
              <Layers className="text-[#1D1D1F] group-hover:text-white w-9 h-9 stroke-[2] transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors duration-300">
              架构级解耦
            </h3>
            <p className="text-[#86868B] text-[15px] leading-relaxed max-w-[280px]">
              业务代码与模型供应商彻底分离。换模型？改个配置就行，无需重写代码。
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="text-center flex flex-col items-center group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-[#F5F5F7] group-hover:bg-[#0071E3] flex items-center justify-center mb-8 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30">
              <DollarSign className="text-[#1D1D1F] group-hover:text-white w-9 h-9 stroke-[2] transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors duration-300">
              成本透明化
            </h3>
            <p className="text-[#86868B] text-[15px] leading-relaxed max-w-[280px]">
              Token 级精细限流与账单分析。告别「糊涂账」，每一分钱都花在刀刃上。
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="text-center flex flex-col items-center group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-[#F5F5F7] group-hover:bg-[#0071E3] flex items-center justify-center mb-8 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30">
              <Lock className="text-[#1D1D1F] group-hover:text-white w-9 h-9 stroke-[2] transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors duration-300">
              企业级合规
            </h3>
            <p className="text-[#86868B] text-[15px] leading-relaxed max-w-[280px]">
              私有化部署，数据不出域。满足金融、医疗级严苛审计要求。
            </p>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="bg-[rgb(255,255,255)] rounded-[32px] p-12 md:p-20 text-center transition-shadow hover:shadow-lg duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
            准备好了吗？
          </h2>
          <p className="text-[#86868B] text-lg mb-10 max-w-2xl mx-auto">
            加入全球领先企业的行列，让 AI 真正为业务创造价值。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="#" 
              className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-md hover:shadow-lg min-w-[140px]"
            >
              立即开始
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#D2D2D7] font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-sm hover:shadow-md min-w-[140px]"
            >
              联系我们
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
