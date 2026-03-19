import { motion } from 'motion/react';
import { Shield, Zap, Network, Puzzle, Bot, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function ProductMatrix() {
  const products = [
    {
      name: 'Guardrails',
      subtitle: '安全，是第一要务。',
      description: '输入输出双向护栏，PII 脱敏，合规检测。让模型从此不再「胡说八道」。',
      color: '#FF3B30', // Red/Orange for Security
      icon: Shield
    },
    {
      name: 'Apis',
      subtitle: '强悍，源于底座。',
      description: '基于 Nginx 的全动态高性能网关。热更新、多协议、零信任。每一比特流量，都处理得游刃有余。',
      color: '#0071E3', // Blue for Performance
      icon: Zap,
      href: '#/airbit-apis'
    },
    {
      name: 'MCP Gateway',
      subtitle: '智能体，连接万物。',
      description: '业界首个企业级 MCP 网关。让 Agent 安全调用您的数据库与业务系统。',
      color: '#AF52DE', // Purple for AI/Agent
      icon: Network
    },
    {
      name: 'Eips',
      subtitle: '集成，无所不能。',
      description: '300+ 组件，企业集成的万能胶水。解决系统「语言不通」，打破数据孤岛。',
      color: '#34C759', // Green for Integration
      icon: Puzzle,
      href: '#/airbit-eips'
    },
    {
      name: 'AI Gateway',
      subtitle: '统一，化繁为简。',
      description: '统一代理 OpenAI、Claude 与 Gemini。一站式管理密钥、成本，并提供企业级隐私脱敏功能。',
      color: '#0071E3',
      icon: Bot
    },
    {
      name: 'AIO',
      subtitle: '洞察，毫秒之间。',
      description: '追踪每一个 Token 的流向，可视化全链路延迟、成本与 Prompt 版本性能。',
      color: '#86868B',
      icon: Activity
    }
  ];

  return (
    <section className="py-32 bg-[#F5F5F7]">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
            企业级能力矩阵
          </h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto font-normal">
            从连接到治理，构建完整的企业级 AI 基础设施
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:border-[#0071E3]/20 transition-all duration-300 group border border-[#D2D2D7]/30 flex flex-col items-start cursor-default"
              >
                {/* Icon Box */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out"
                  style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}DD)` }}
                >
                  <Icon className="text-white w-6 h-6 stroke-[2.5px]" />
                </div>

                {/* Slogan / Title */}
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2 tracking-tight group-hover:text-[#0071E3] transition-colors duration-300">
                  {product.subtitle}
                </h3>

                {/* Product Name */}
                <div className="text-sm font-medium text-[#86868B] mb-4">
                  AirBit {product.name}
                </div>

                {/* Description */}
                <p className="text-[#86868B] leading-relaxed mb-8 font-normal text-[15px] flex-grow">
                  {product.description}
                </p>

                {/* Link */}
                <Link 
                  to={product.href?.replace('#', '') || '#'} 
                  className="inline-flex items-center text-[#0071E3] hover:underline font-medium text-sm group-hover:translate-x-1 transition-transform"
                >
                  了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
