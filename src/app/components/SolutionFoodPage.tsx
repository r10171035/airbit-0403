import { BarChart3, Package, Search, Shield, Truck, Users, Wheat, ClipboardList } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { SolutionTemplate } from './SolutionTemplate';

export function SolutionFoodPage() {
  useSEO({
    title: '食品行业 AI 解决方案 | AirBit',
    description: 'AirBit 为食品企业提供质量追溯、冷链监控、供应链协同、合规审计和经营分析的 AI 解决方案，帮助企业在安全可控前提下提升效率。',
    path: '/solution-food',
    keywords: '食品行业 AI 解决方案, 食品安全 AI, 冷链 AI, 质量追溯 AI, 食品供应链 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: '食品行业 AI 解决方案', description: 'AirBit 为食品企业提供质量追溯、冷链监控、供应链协同和经营分析的 AI 解决方案。', url: 'https://www.tlin.cn/solution-food' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: '食品行业', item: 'https://www.tlin.cn/solution-food' },
      ] },
    ],
  });

  return (
    <SolutionTemplate
      badge="Food Industry Solution"
      heroTitle="从原料到餐桌"
      heroHighlight="让每一批次都可追溯"
      heroDescription="AirBit 帮助食品企业用自然语言联动 QMS、MES、LIMS、ERP、WMS 和冷链系统，让 AI 进入质控、追溯、仓配和经营管理主流程。"
      heroTags={[
        { label: '质量追溯', icon: <Search className="h-4 w-4" /> },
        { label: '冷链监控', icon: <Truck className="h-4 w-4" /> },
        { label: '合规审计', icon: <Shield className="h-4 w-4" /> },
        { label: '经营分析', icon: <BarChart3 className="h-4 w-4" /> },
      ]}
      visualTitle="AirBit Food Copilot"
      visualSubtitle="QMS · MES · LIMS · ERP · WMS"
      visualPoints={[
        '自动串联批次、检测、仓配和投诉链路。',
        '识别冷链异常和临期风险。',
        '生成合规和经营周报。',
      ]}
      challengeTitle="食品企业 AI 落地的关键挑战"
      challengeDescription="食品行业关心的不只是效率，更是批次可追溯、冷链稳定和审计合规。"
      overviewTitle="三类重点场景，覆盖食品业务主链路"
      overviewDescription="从质量追溯到供应链仓配，再到经营与合规，团队可以直接问业务、拿结果。"
      platformTitle="把质量、冷链和经营系统接成一套 AI 平台"
      platformDescription="AirBit 让食品企业现有系统被统一治理，让 AI 的回答可追溯、可审计、可落地。"
      platformItems={[
        { title: 'Portal', desc: '质量经理、仓储经理和经营负责人都能直接问业务。', icon: ClipboardList },
        { title: 'MCP Gateway', desc: '把 QMS、MES、LIMS、WMS、ERP 和冷链系统接成 AI 工具。', icon: Package },
        { title: 'Guardrails', desc: '敏感批次、客户与质量数据统一做权限隔离和脱敏。', icon: Shield },
        { title: 'AIO', desc: '调用成本、结果质量和审计日志统一可观测。', icon: BarChart3 },
      ]}
      ctaTitle="让食品安全、效率和合规一起提升"
      ctaDescription="从投诉追溯、冷链预警到经营分析，AirBit 帮你用一套平台把食品业务真正串起来。"
      painPoints={[
        { title: '追溯链条长', sub: 'Traceability Pressure', desc: '一个投诉要查原料、检测、生产和物流，跨多个系统串联费时费力。', icon: Search, color: 'text-orange-500' },
        { title: '冷链异常难监控', sub: 'Cold Chain Blind Spot', desc: '温控告警散落在系统和设备里，异常很难及时闭环。', icon: Truck, color: 'text-blue-500' },
        { title: '合规资料准备重', sub: 'Audit Burden', desc: '外部审计、客户抽查和监管要求都需要快速准备完整证据链。', icon: Shield, color: 'text-purple-500' },
        { title: '经营决策滞后', sub: 'Operational Delay', desc: '质量、库存、订单和损耗数据无法实时联动，决策速度不够快。', icon: Users, color: 'text-rose-500' },
      ]}
      scenarios={[
        {
          id: 'trace', title: '质量追溯与投诉闭环', subtitle: '从序列号到根因，30 秒串联全链路。', positioning: '把批次追溯和投诉响应从人工拼接变成一条完整数字链路。', coreSystems: ['QMS', 'MES', 'LIMS', 'CRM'], icon: Search, color: 'blue',
          cards: [
            { role: '质量总监', quote: '客户投诉批次能追到原料、生产和检测记录吗？', solution: 'AI 联查 QMS、MES、LIMS 与 CRM，生成完整追溯报告。', systems: ['QMS', 'MES', 'LIMS', 'CRM'] },
            { role: '品控经理', quote: '本周不良率最高的批次和根因是什么？', solution: 'AI 汇总检测结果和过程数据，输出趋势和重点风险。', systems: ['QMS', 'MES', 'BI'] },
            { role: '客服经理', quote: '投诉工单现在到了哪一步？', solution: 'AI 联查 CRM 与质控流程，实时返回责任环节和处理进度。', systems: ['CRM', 'OA', 'QMS'] },
          ],
        },
        {
          id: 'chain', title: '冷链与仓配协同', subtitle: '温控、库存和发运状态一屏串联。', positioning: '把冷链风险、临期风险和仓配执行放进同一个决策视图。', coreSystems: ['WMS', 'TMS', 'ERP', 'IoT'], icon: Truck, color: 'green',
          cards: [
            { role: '仓储经理', quote: '哪些批次临期，需要优先出库？', solution: 'AI 汇总 WMS 与批次信息，自动标记临期库存和优先出库建议。', systems: ['WMS', 'ERP'] },
            { role: '物流主管', quote: '今天哪些冷链车辆有温控异常？', solution: 'AI 联查 TMS 与 IoT 数据，识别异常运输节点并推送预警。', systems: ['TMS', 'IoT'] },
            { role: '供应链负责人', quote: '哪些订单会受库存或运输异常影响？', solution: 'AI 综合订单、库存和运输状态，输出延迟风险与建议。', systems: ['OMS', 'WMS', 'TMS'] },
          ],
        },
        {
          id: 'ops', title: '合规与经营分析', subtitle: '监管抽查和经营周报都能快速准备。', positioning: '既满足审计要求，也让经营团队更快看到异常和机会。', coreSystems: ['ERP', 'BI', 'OA', 'QMS'], icon: Wheat, color: 'amber',
          cards: [
            { role: '合规负责人', quote: '本次审计要的批次和检测资料能否一键汇总？', solution: 'AI 按清单汇总质控和文档记录，快速生成审计资料包。', systems: ['QMS', 'DMS', 'OA'] },
            { role: '经营总监', quote: '本周损耗、退货和库存周转有什么异常？', solution: 'AI 汇总 ERP、BI 与仓储数据，自动生成经营周报。', systems: ['ERP', 'BI', 'WMS'] },
            { role: 'CEO', quote: '哪些品类利润在下降，主要原因是什么？', solution: 'AI 分析成本、质量和销售数据，输出利润下滑原因和重点动作。', systems: ['ERP', 'BI', 'QMS'] },
          ],
        },
      ]}
    />
  );
}
