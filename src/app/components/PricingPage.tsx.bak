import { Check, Minus, X, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';

export function PricingPage() {
  useSEO({ 
    title: '定价计划 | AirBit', 
    description: '选择适合您团队的版本。从探索验证到企业级规模落地，AirBit 都能提供完美的支持。',
    path: '/pricing'
  });

  const plans = [
    {
      name: '轻量版',
      price: '免费',
      description: '适合个人开发者或小微型项目进行概念验证与早期探索。',
      buttonText: '立即使用',
      buttonPrimary: false,
    },
    {
      name: '标准版',
      price: '￥5,000',
      period: '/每服务',
      description: '为中小型企业量身打造，满足基本商业化运营及安全合规需求。',
      buttonText: '开始订阅',
      buttonPrimary: true,
    },
    {
      name: '企业版',
      price: '联系我们',
      description: '专为大型企业与复杂业务架构设计，提供私有化部署及定制服务。',
      buttonText: '联系销售',
      buttonPrimary: false,
      href: '/contact'
    }
  ];

  const categories = [
    {
      title: '基本信息',
      features: [
        { name: '许可证类型', tiers: ['社区版许可证', '商业版许可证', '商业版许可证'] },
        { name: '授权', tiers: ['永久', '订阅/永久', '订阅/永久'] },
        { name: '升级有效期', tiers: ['-', '1 年', '1 年'] },
      ]
    },
    {
      title: '使用限制',
      features: [
        { name: '不限制用户数量', tiers: [true, true, true] },
        { name: '不限制应用数量', tiers: [true, true, true] },
        { name: '不限制数据量', tiers: [true, true, true] },
        { name: '为客户开发上层应用', tiers: [true, true, true] },
        { name: '在界面上使用自己的品牌信息', tiers: [false, true, true] },
        { name: '服务数限制', tooltip: '服务”：指本软件创建的独立逻辑服务单元，每一逻辑服务单元具有唯一 Service ID，并具备独立的访问入口、上游目标地址、鉴权或配额策略之一，API 服务、AI 模型代理服务、MCP 工具服务及其他通过网关对外暴露的能力均视为服务单元，服务数量以系统后台“服务管理”统计为准。', tiers: ['5', '订阅/买断', '订阅/买断'] },
        { name: '私有化', tiers: [true, true, true] },
      ]
    },
    {
      title: '架构',
      features: [
        { name: '插件化架构', tiers: [true, true, true] },
        { name: '信创支持', tiers: [false, '-', true] },
        { name: '迁移和发布管理', tiers: [false, '-', true] },
        { name: '多应用', tiers: [true, true, true] },
        { name: '集群架构', tiers: [false, '-', true] },
        { name: '可观测', tooltip: '权限校验、策略集成、敏感操作拦截\n调用日志、Trace、性能指标采集', tiers: [true, true, true] },
      ]
    },
    {
      title: '数据源',
      features: [
        { name: 'MySQL', tiers: [true, true, true] },
        { name: 'PostgreSQL', tiers: [true, true, true] },
        { name: 'Oracle', tiers: [true, true, true] },
        { name: 'MariaDB', tiers: ['-', true, true] },
        { name: 'Rest API', tiers: ['-', true, true] },
        { name: 'KingBaseES', tiers: ['-', true, true] },
        { name: 'ClickHouse', tiers: ['-', true, true] },
        { name: 'Doris', tiers: ['-', true, true] },
        { name: '其他', tiers: ['-', true, true] },
      ]
    },
    {
      title: 'AirBit AI Gateway',
      features: [
        { name: '多模型管理', tooltip: '将不同厂商API接口统一为OpenAI兼容格式\n自动重组HTTP Body和Header', tiers: [true, true, true] },
        { name: '语义缓存', tooltip: '基于向量相似度的缓存\n减少Token消耗，降低响应延迟', tiers: [false, false, true] },
        { name: 'AI防火墙', tooltip: '数据进出企业边界的清洗', tiers: [true, true, true] },
        { name: 'PII敏感数据脱敏', tooltip: '识别并替换敏感信息', tiers: [true, true, true] },
        { name: '内容审核与阻断', tooltip: '拦截特定关键词的Prompt', tiers: [true, true, true] },
        { name: '模型级故障转移', tooltip: '主备模型链路配置', tiers: [true, true, true] },
        { name: '加权负载均衡', tooltip: '分配不同模型的访问权重', tiers: [true, true, true] },
        { name: 'Token级限流', tooltip: '统计Token数量，配置消费限制', tiers: [true, true, true] },
        { name: '成本管理', tooltip: '成本透明化与对比决策支持', tiers: [true, true, true] },
      ]
    },
    {
      title: 'AirBit AIO',
      features: [
        { name: 'LLM 调用全链路追踪', tooltip: '可追踪关键信息：输入、Prompt、RAG、模型、输出、性能、成本', tiers: [true, true, true] },
        { name: '多调用方式支持', tooltip: '支持多种调用方式：OpenAI SDK、自定义HTTP等', tiers: [true, true, true] },
        { name: 'Prompt 管理', tooltip: '将 Prompt 当作可管理资产\n多版本管理与在线编辑\n预定义Prompt结构\n强制添加系统提示', tiers: [true, true, true] },
        { name: 'RAG 专项可观测性', tooltip: '透明化检索过程', tiers: [false, false, true] },
        { name: '质量评估', tooltip: '人工/自动评估\n形成评估指标', tiers: [false, false, true] },
        { name: '用户与行为分析', tooltip: '用户提问与反馈分析', tiers: [false, '-', true] },
      ]
    },
    {
      title: 'AirBit Apis',
      features: [
        { name: '多协议支持', tooltip: 'HTTP/1.1, HTTP/2, HTTP/3 (QUIC), gRPC, WebSocket, MQTT, TCP/UDP, Dubbo', tiers: [true, true, true] },
        { name: 'gRPC转码', tooltip: '自动转码为gRPC请求', tiers: [true, true, true] },
        { name: '动态流量管理', tooltip: '轮询、带权轮询、一致性哈希、指数加权移动平均、最小连接数', tiers: [true, true, true] },
        { name: '高级路由策略', tooltip: '基于 Host、URI、Header、Cookie、Method、IP、参数的精确匹配', tiers: [true, true, true] },
        { name: '灰度发布', tooltip: '按流量百分比或用户ID、地区进行金丝雀发布', tiers: [false, true, true] },
        { name: '流量镜像', tooltip: '真实流量复制至测试服务', tiers: [false, true, true] },
        { name: '健康检查', tooltip: '主动和被动健康检查，自动剔除故障节点', tiers: [true, true, true] },
        { name: '服务熔断', tooltip: '上游服务不可用时快速失败，防止雪崩', tiers: [true, true, true] },
        { name: '全动态能力', tooltip: '路由、SSL证书、插件配置热加载', tiers: [true, true, true] },
        { name: '安全防护', tooltip: '身份认证：Key Auth、Basic Auth等\nOAuth/SSO：OpenID Connect对接\n网络防护：IP限制、URI拦截等\n数据脱敏：data-mask', tiers: [true, true, true] },
        { name: '流量控制', tooltip: '限流、请求/响应重写', tiers: [true, true, true] },
        { name: '链路追踪', tooltip: 'SkyWalking、Zipkin、Jaeger、OpenTelemetry', tiers: [true, true, true] },
        { name: '指标监控', tooltip: 'Prometheus、Datadog', tiers: [true, true, true] },
        { name: '日志集成', tooltip: 'Kafka、RocketMQ、Elasticsearch、Google Cloud Logging', tiers: [true, true, true] },
        { name: 'Serverless集成', tooltip: '直接触发云函数：AWS Lambda、Azure Functions等', tiers: [true, true, true] },
        { name: '应用地图', tooltip: '观察企业内部各个系统的引用关系', tiers: [true, true, true] },
      ]
    },
    {
      title: 'AirBit Eips',
      features: [
        { name: '企业集成模式(EIP)', tooltip: '路由控制: Content-Based Router等\n消息转换: Message Translator等\n错误处理: Dead Letter Channel等', tiers: [true, true, true] },
        { name: '连接器生态', tooltip: '支持协议: HTTP/HTTPS\n支持服务: Kafka, Pulsar, AWS等', tiers: [true, true, true] },
        { name: '触发器', tooltip: '轮训、定时任务、MQ、WebHook', tiers: [true, true, true] },
        { name: 'JSON DSL', tiers: [true, true, true] },
        { name: 'AI自然语言转DSL', tiers: [false, '-', true] },
        { name: '数据格式与类型转换', tooltip: '支持类型转换: 自动类型转换\n支持数据格式: JSON, XML, YAML等', tiers: [true, true, true] },
      ]
    },
    {
      title: 'AirBit Guardrails',
      features: [
        { name: '可编程围栏', tooltip: '定义讨论话题限制\n强制输出风格和结构\n拦截危险内容\n执行条件操作', tiers: [false, false, true] },
        { name: '输入与输出 Rail 类型', tooltip: '分类保护逻辑：输入、对话、输出', tiers: [false, false, true] },
        { name: '多种围栏库与插件', tooltip: '越狱检测、内容审核、事实核查等', tiers: [false, false, true] },
        { name: 'RAG 与事实一致性', tooltip: '验证生成内容与知识的一致性', tiers: [false, false, true] },
        { name: '流式输出支持', tooltip: '保证安全检测与低延迟响应', tiers: [false, false, true] },
        { name: '多模型与多框架兼容', tooltip: '支持主流 LLM 包括 GPT 系列、LLaMA-2 等', tiers: [false, false, true] },
      ]
    },
    {
      title: 'AirBit MCP Gateway',
      features: [
        { name: 'MCP 路由管理', tooltip: '解析请求、多后端支持、工具路由', tiers: [true, true, true] },
        { name: '工具注册与管理', tooltip: '工具注册、版本管理、Prompt 管理', tiers: [true, true, true] },
        { name: '协议桥接', tooltip: 'REST、gRPC、CLI、SSE等协议转换为MCP', tiers: [true, true, true] },
        { name: '会话与上下文管理', tooltip: '多轮对话、会话隔离、生命周期管理', tiers: [true, true, true] },
      ]
    },
    {
      title: '其他',
      features: [
        { name: '告警', tooltip: '多维度告警规则和告警记录且支持钉钉、企微、飞书、邮件', tiers: [true, true, true] },
        { name: '告警通道定制', tiers: [false, '-', true] },
      ]
    },
    {
      title: '支持',
      features: [
        { name: '邮件支持', tiers: [true, true, true] },
        { name: '专属和及时的 bug 修复', tiers: [false, true, true] },
        { name: '专属的使用咨询', tiers: [false, '-', true] },
        { name: '专属的扩展开发咨询', tiers: [false, '-', true] },
        { name: '优先排期新功能', tiers: [false, '-', true] },
        { name: '电话支持', tiers: [false, '-', true] },
        { name: '实时聊天支持', tiers: [false, false, true] },
        { name: '支持有效期', tiers: [false, '1年', '1年'] },
        { name: '咨询工单数量', tiers: [false, '无限制', '无限制'] },
        { name: '扩展开发方案支持', tiers: [false, '-', true] },
        { name: '首次响应时间', tiers: [false, '24H', '4H'] },
      ]
    }
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-[#34C759] mx-auto" strokeWidth={3} />;
    if (value === false) return <X className="w-5 h-5 text-[#86868B] mx-auto" strokeWidth={2.5} />;
    if (value === '-') return <span className="inline-flex items-center justify-center px-2.5 py-1 bg-[#F5F5F7] text-[#86868B] text-[11px] font-medium rounded-full">付费支持</span>;
    return <span className="text-[13px] text-[#1D1D1F] font-medium">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1D1F] pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              定价计划
            </h1>
            <p className="text-xl text-[#86868B] font-light max-w-2xl mx-auto leading-relaxed">
              选择适合您团队的版本。从探索验证到企业级规模落地，AirBit 都能提供完美的支持。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {plans.map((plan, idx) => {
            const overrides = [
              {
                desc: "适合个人开发者和小型团队进行初步探索与测试。",
                btnText: "免费试用",
                btnClass: "bg-white text-[#1D1D1F] border border-[#E5E5EA] hover:border-[#D1D1D6] hover:bg-[#F5F5F7]",
                cardClass: "border border-[#F5F5F7] shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                badge: null
              },
              {
                desc: "适合成长型企业和中型应用，提供完整的核心功能与商业支持。",
                btnText: "立即购买",
                btnClass: "bg-[#0071E3] text-white hover:bg-[#0077ED] shadow-md shadow-blue-500/20",
                cardClass: "border-2 border-[#0071E3] shadow-[0_12px_40px_rgba(0,113,227,0.12)]",
                badge: "推荐选择"
              },
              {
                desc: "适合大型企业和核心业务场景，提供专属的高级功能、集群架构及SLA保障。",
                btnText: "联系销售",
                btnClass: "bg-[#1D1D1F] text-white hover:bg-black shadow-md",
                cardClass: "border border-[#F5F5F7] shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                badge: null
              }
            ][idx] || {};

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-8 lg:p-10 flex flex-col relative ${overrides.cardClass}`}
              >
                {overrides.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0071E3] text-white text-[13px] font-medium px-4 py-1.5 rounded-full z-10 whitespace-nowrap">
                    {overrides.badge}
                  </div>
                )}
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-[#1D1D1F]">{plan.name}</h3>
                <p className="text-[#86868B] text-[13px] lg:text-[14px] leading-relaxed mb-8 min-h-[42px]">
                  {overrides.desc}
                </p>
                
                <div className="mb-8 flex items-baseline gap-1 mt-auto">
                  <span className="text-[36px] lg:text-[40px] font-bold tracking-tight text-[#1D1D1F] leading-none">{plan.price}</span>
                  {plan.period && <span className="text-[#86868B] text-[13px] lg:text-[14px] font-medium ml-1">{plan.period}</span>}
                </div>
                
                <Link 
                  to={plan.href || '#'}
                  className={`w-full py-3.5 rounded-full text-center font-medium text-[15px] transition-all flex items-center justify-center ${overrides.btnClass}`}
                >
                  {overrides.btnText}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">全面功能对比</h2>
          <p className="text-[#86868B]">了解每个版本的详细功能差异</p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-black/10 sticky top-[48px] bg-white/90 backdrop-blur-md z-20 px-6">
              <div className="col-span-1 font-semibold text-[#1D1D1F] flex items-end">功能特性</div>
              {plans.map((plan, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-semibold text-lg text-[#1D1D1F]">{plan.name}</div>
                  <div className="text-sm text-[#86868B] mt-1">{plan.price}</div>
                </div>
              ))}
            </div>

            {/* Table Body */}
            <div className="border border-black/5 rounded-2xl overflow-hidden bg-white mt-4">
              {categories.map((category, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Category Header Row */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 px-6 bg-[#FAFAFA] border-y border-black/5 mt-[-1px]">
                    <div className="col-span-4 text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
                      {category.title}
                    </div>
                  </div>
                  
                  {/* Feature Rows */}
                  <div className="divide-y divide-black/5 bg-white">
                    {category.features.map((feature, fIdx) => (
                      <div key={fIdx} className="grid grid-cols-4 gap-4 py-4 px-6 hover:bg-[#F9F9FA] transition-colors items-center group">
                        <div className="col-span-1 flex items-center gap-1.5">
                          <span className="text-[13px] font-medium text-[#151414]">{feature.name}</span>
                          {feature.tooltip && (
                            <div className="relative flex items-center group/tooltip">
                                <Info className="w-3.5 h-3.5 text-[#86868B] cursor-help" />
                                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-56 p-2.5 bg-[#1D1D1F] text-white text-[11px] rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-30 shadow-xl pointer-events-none leading-relaxed">
                                    {feature.tooltip.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
                                    {/* Triangle arrow */}
                                    <div className="absolute top-1/2 -translate-y-1/2 right-full border-[5px] border-transparent border-r-[#1D1D1F]"></div>
                                </div>
                            </div>
                          )}
                        </div>
                        {feature.tiers.map((tier, tIdx) => (
                          <div key={tIdx} className="text-center flex justify-center items-center">
                            {renderValue(tier)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
