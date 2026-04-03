import { Activity, BarChart3, Building2, Package, Search, Settings, Shield, Store } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { SolutionTemplate } from './SolutionTemplate';

export function SolutionManufacturingPage() {
  useSEO({
    title: '制造业 AI 解决方案 | AirBit',
    description: 'AirBit 为制造企业提供生产排程、质量追溯、设备维护、供应链与经营分析的 AI 解决方案，帮助工厂在安全可控的前提下提升效率。',
    path: '/solution-manufacturing',
    keywords: '制造业 AI 解决方案, 工业 AI, 工厂 AI, 生产排程 AI, 质量追溯 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: '制造业 AI 解决方案', description: 'AirBit 为制造企业提供生产排程、质量追溯、设备维护、供应链与经营分析的 AI 解决方案。', url: 'https://www.tlin.cn/solution-manufacturing' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: '制造业', item: 'https://www.tlin.cn/solution-manufacturing' },
      ] },
    ],
  });

  return (
    <SolutionTemplate
      badge="Manufacturing Solution"
      heroTitle="从产线到经营层"
      heroHighlight="让每一个环节都透明可控"
      heroDescription="AirBit 帮助制造企业用自然语言联动 MES、ERP、QMS、SCADA、WMS 和 APS，让 AI 真正进入生产、质量、设备和供应链主流程。"
      heroTags={[
        { label: '生产排程', icon: <Activity className="h-4 w-4" /> },
        { label: '质量追溯', icon: <Search className="h-4 w-4" /> },
        { label: '设备维护', icon: <Settings className="h-4 w-4" /> },
        { label: '经营分析', icon: <BarChart3 className="h-4 w-4" /> },
      ]}
      visualTitle="AirBit Manufacturing Copilot"
      visualSubtitle="MES · ERP · QMS · SCADA · WMS"
      visualPoints={[
        '自动识别产线异常与停机风险。',
        '串联质量、批次和供应商追溯链。',
        '生成跨工厂经营简报和关键预警。',
      ]}
      challengeTitle="制造企业 AI 落地的核心障碍"
      challengeDescription="真正阻碍 AI 落地的，不是没有模型，而是链路太碎、系统太多、数据又很敏感。"
      overviewTitle="三类关键场景，覆盖制造主链路"
      overviewDescription="从生产排程到质量与设备，再到供应链和经营分析，现场管理者都能直接问业务。"
      platformTitle="用统一平台把业务系统真正接进 AI"
      platformDescription="AirBit 不是新的孤岛，而是把制造企业现有系统接成可治理、可审计、可持续优化的 AI 业务平台。"
      platformItems={[
        { title: 'Portal', desc: '产线负责人、质量经理和 CFO 都能直接用自然语言查询业务。', icon: Building2 },
        { title: 'MCP Gateway', desc: '把 MES、ERP、QMS、SCADA、WMS 和 APS 接成 AI 可调用工具。', icon: Package },
        { title: 'Guardrails', desc: '工艺参数、BOM、报价和权限统一隔离，满足制造场景安全要求。', icon: Shield },
        { title: 'AIO', desc: '模型成本、效果和日志统一归因，方便经营和审计。', icon: BarChart3 },
      ]}
      ctaTitle="把 AI 真正带进工厂现场和经营决策"
      ctaDescription="从排程、追溯到设备维护和经营分析，AirBit 帮你用一套平台把制造业务跑起来。"
      painPoints={[
        { title: '生产状态不透明', sub: 'Shopfloor Blind Spot', desc: '产线状态、告警和 OEE 分散在多个系统里，问题往往发生后才被看见。', icon: Activity, color: 'text-orange-500' },
        { title: '质量追溯链太长', sub: 'Traceability Bottleneck', desc: '投诉到根因要跨多个系统手工拼链路，响应慢且容易遗漏。', icon: Search, color: 'text-blue-500' },
        { title: '设备维护偏被动', sub: 'Maintenance Crisis', desc: '异常信号已经出现，却没有被及时发现和串联成可执行动作。', icon: Settings, color: 'text-purple-500' },
        { title: '数据与成本顾虑高', sub: 'Security And Cost Anxiety', desc: '工艺参数、报价和客户信息都很敏感，企业必须先解决安全和成本问题。', icon: Shield, color: 'text-rose-500' },
      ]}
      scenarios={[
        {
          id: 'production', title: '生产排程与执行', subtitle: '工单、物料、进度一屏串联。', positioning: '让生产计划、车间执行和交付风险实时联动。', coreSystems: ['MES', 'APS', 'ERP', 'SCADA'], icon: Activity, color: 'blue',
          cards: [
            { role: '生产总监', quote: '今天哪些产线存在停机或延期风险？', solution: 'AI 联查 MES、APS 与 SCADA，输出风险产线、原因和建议动作。', systems: ['MES', 'APS', 'SCADA'] },
            { role: '计划员', quote: '未来两天哪些工单会因物料短缺受影响？', solution: 'AI 汇总 APS、ERP 与库存数据，自动识别缺料工单和交期影响。', systems: ['APS', 'ERP', 'WMS'] },
            { role: '工厂厂长', quote: '帮我生成本周产能利用率和 OEE 简报。', solution: 'AI 汇总 MES 与 BI，自动生成跨车间经营简报。', systems: ['MES', 'BI'] },
          ],
        },
        {
          id: 'quality', title: '质量追溯与合规', subtitle: '投诉到根因 30 秒串联全链路。', positioning: '把质量事件从手工追查变成实时追溯和可审计闭环。', coreSystems: ['QMS', 'MES', 'LIMS', 'SRM'], icon: Search, color: 'green',
          cards: [
            { role: '质量总监', quote: '客户投诉批次能追到原料和检测数据吗？', solution: 'AI 联查 QMS、MES、LIMS 与 SRM，直接生成完整追溯链。', systems: ['QMS', 'MES', 'LIMS', 'SRM'] },
            { role: '品控经理', quote: '本周不良率最高的产线和根因是什么？', solution: 'AI 汇总质量记录与过程数据，输出趋势和根因分布。', systems: ['QMS', 'MES', 'BI'] },
            { role: '体系工程师', quote: '审核资料能否一键准备？', solution: 'AI 按清单汇总体系和质量数据，生成审计资料包。', systems: ['QMS', 'DMS', 'OA'] },
          ],
        },
        {
          id: 'supply', title: '设备与供应链协同', subtitle: '设备维护、备件和交期联动预警。', positioning: '让设备、备件和供应链信息形成一套可执行的日常协同机制。', coreSystems: ['CMMS', 'WMS', 'ERP', 'SRM'], icon: Store, color: 'amber',
          cards: [
            { role: '设备主管', quote: '下周有哪些关键设备要做预防性维保？', solution: 'AI 汇总 CMMS 与告警数据，自动列出维保计划和影响范围。', systems: ['CMMS', 'SCADA'] },
            { role: '仓储经理', quote: '备件够不够支持本周维保和抢修？', solution: 'AI 联查 WMS、CMMS 与 ERP，识别缺件风险并给出处置建议。', systems: ['WMS', 'CMMS', 'ERP'] },
            { role: '供应链负责人', quote: '哪些供应商交期波动会影响主计划？', solution: 'AI 汇总 SRM、ERP 与订单信息，生成供应风险与优先级。', systems: ['SRM', 'ERP', 'OMS'] },
          ],
        },
      ]}
    />
  );
}
