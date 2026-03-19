import { motion } from 'motion/react';
import { Activity, BarChart2, Eye, ArrowRight, GitBranch } from 'lucide-react';
import { Link } from 'react-router';

export function ValueProposition() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1D1D1F] mb-2 tracking-tight">
              AirBit AIO
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#AF52DE]">
                看见黑盒
              </span>
              ，<br />
              也就是一瞬间的事。
            </h3>
            
            <p className="text-lg text-[#86868B] mb-8 leading-relaxed font-normal max-w-lg">
              全链路 Trace 追踪，Prompt 版本回滚，幻觉评估。
              <br />
              它不只是监控，更是 AI 应用的黑匣子与指挥塔。
            </p>

            <Link to="#" className="inline-flex items-center text-[#0071E3] hover:underline font-medium text-base mb-12 group">
              探索 AIO 的能力 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-1">全链路追踪</h4>
                  <p className="text-[#86868B] text-sm">瀑布流可视化，定位性能瓶颈</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-6 h-6 text-[#AF52DE]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-1">Prompt 管理</h4>
                  <p className="text-[#86868B] text-sm">版本控制、A/B 测试、一键回滚</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#34C759]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-1">幻觉评估</h4>
                  <p className="text-[#86868B] text-sm">自动检测模型输出质量</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-[#F5F5F7] rounded-[24px] p-8 shadow-2xl border border-white/50 relative overflow-hidden backdrop-blur-xl">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-auto text-xs text-[#86868B] font-medium">AirBit AIO Dashboard</div>
              </div>

              {/* Bars Graphic */}
              <div className="space-y-4 mb-12">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-[#0071E3] to-[#AF52DE] opacity-90"
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-[#0071E3] to-[#AF52DE] opacity-80"
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-[#0071E3] to-[#AF52DE] opacity-70"
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-[#0071E3] to-[#AF52DE] opacity-60"
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-[#0071E3] to-[#AF52DE] opacity-50"
                />
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D2D2D7]/50">
                <div>
                  <div className="text-2xl font-bold text-[#1D1D1F]">99.9%</div>
                  <div className="text-xs text-[#86868B]">可用性</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1D1D1F]">32ms</div>
                  <div className="text-xs text-[#86868B]">平均延迟</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1D1D1F]">15K</div>
                  <div className="text-xs text-[#86868B]">请求/秒</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
