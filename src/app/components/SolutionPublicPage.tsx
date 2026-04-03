import { BarChart3, BookOpen, Building2, FileText, Package, Shield, Users, WalletCards } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { SolutionTemplate } from './SolutionTemplate';

export function SolutionPublicPage() {
  useSEO({
    title: '事业单位 AI 解决方案 | AirBit',
    description: 'AirBit 为事业单位提供公文审批、预算管理、知识问答、内控审计和综合办公的 AI 解决方案，帮助机构在安全可控前提下提升效率。',
    path: '/solution-public',
    keywords: '事业单位 AI 解决方案, 政务办公 AI, 公文审批 AI, 预算管理 AI, 内控审计 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: '事业单位 AI 解决方案', description: 'AirBit 为事业单位提供公文审批、预算管理、知识问答和内控审计的 AI 解决方案。', url: 'https://www.tlin.cn/solution-public' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: '事业单位', item: 'https://www.tlin.cn/solution-public' },
      ] },
    ],
  });

  return (
    <SolutionTemplate
      badge="Public Institution Solution"
      heroTitle="让公文审批与日常管理"
      heroHighlight="像说一句话一样简单"
      heroDescription="AirBit 帮助事业单位用自然语言联动 OA、财务、人事、资产和知识系统，让 AI 进入公文、预算、审批和综合办公主流程。"
      heroTags={[
        { label: '公文审批', icon: <FileText className="h-4 w-4" /> },
        { label: '预算管理', icon: <WalletCards className="h-4 w-4" /> },
        { label: '知识问答', icon: <BookOpen className="h-4 w-4" /> },
        { label: '内控审计', icon: <Shield className="h-4 w-4" /> },
      ]}
      visualTitle="AirBit Public Copilot"
      visualSubtitle="OA · 财务 · 人事 · 资产 · 知识库"
      visualPoints={[
        '待办审批自动汇总和提醒。',
        '预算、资产和公文信息一键串联。',
        '审计资料和办公简报快速生成。',
      ]}
      challengeTitle="事业单位 AI 落地最难的几件事"
      challengeDescription="流程多、合规严、系统分散且数据敏感，只有先把治理边界和系统接起来，AI 才能真正落地。"
      overviewTitle="三类核心场景，覆盖事业单位办公链路"
      overviewDescription="从公文和审批到预算与审计，再到知识问答和综合管理，团队都能直接问业务。"
      platformTitle="让办公系统和治理能力一起接入 AI"
      platformDescription="AirBit 让既有 OA、财务、人事和知识系统在不大改造的前提下接成一个可治理、可审计的平台。"
      platformItems={[
        { title: 'Portal', desc: '办公室、财务、人事和分管领导都能直接用自然语言处理日常工作。', icon: Building2 },
        { title: 'MCP Gateway', desc: '把 OA、财务、人事、资产、公文和知识系统接成 AI 工具。', icon: Package },
        { title: 'Guardrails', desc: '敏感信息、审批动作和权限边界统一控制，符合高安全要求。', icon: Shield },
        { title: 'AIO', desc: '调用记录、审批轨迹和成本效果统一观测，方便治理与审计。', icon: BarChart3 },
      ]}
      ctaTitle="让安全合规前提下的办公效率真正提升"
      ctaDescription="从公文审批、预算管控到内控审计，AirBit 帮助事业单位把 AI 用在真实办公主流程里。"
      painPoints={[
        { title: '审批流转慢', sub: 'Approval Bottleneck', desc: '差旅、报销、采购和合同等流程链路长，负责人出差时容易卡住。', icon: FileText, color: 'text-orange-500' },
        { title: '制度检索难', sub: 'Knowledge Retrieval', desc: '制度、公文和历史资料分散在各处，找起来慢且难确认最新版本。', icon: BookOpen, color: 'text-blue-500' },
        { title: '预算执行不透明', sub: 'Budget Visibility', desc: '预算批了但过程难跟踪，往往到后期才发现执行偏差。', icon: WalletCards, color: 'text-purple-500' },
        { title: '合规与安全要求高', sub: 'Compliance First', desc: '内部数据和涉敏信息不能外泄，所有动作都需要留痕和可审计。', icon: Shield, color: 'text-rose-500' },
      ]}
      scenarios={[
        {
          id: 'approval', title: '公文审批与综合办公', subtitle: '待办、流程和通知统一汇总。', positioning: '让领导、办公室和业务部门都能更快处理待办和流转事务。', coreSystems: ['OA', '公文系统', '消息中心'], icon: FileText, color: 'blue',
          cards: [
            { role: '办公室主任', quote: '帮我汇总今天待办审批和即将超时事项。', solution: 'AI 汇总 OA 与公文系统待办，按紧急程度自动排序。', systems: ['OA', '公文系统'] },
            { role: '分管领导', quote: '我在外出差，能批掉紧急申请吗？', solution: 'AI 先汇总关键审批信息，再在确认后触发审批动作。', systems: ['OA', '移动办公'] },
            { role: '综合岗', quote: '帮我生成本周办公例会简报。', solution: 'AI 自动汇总通知、公文和待办处理进度，形成例会简报。', systems: ['OA', '公文系统', 'BI'] },
          ],
        },
        {
          id: 'finance', title: '预算与内控审计', subtitle: '预算执行、审计资料和风险项联动可见。', positioning: '让预算执行和审计准备从事后补资料变成实时掌握进度。', coreSystems: ['财务', '预算', '审计', 'OA'], icon: WalletCards, color: 'green',
          cards: [
            { role: '财务负责人', quote: '当前预算执行偏差最大的项目有哪些？', solution: 'AI 汇总预算和执行数据，定位偏差项目和主要原因。', systems: ['预算', '财务', 'BI'] },
            { role: '审计专员', quote: '年度审计要的资料能快速准备吗？', solution: 'AI 按清单汇总合同、报销、预算和流程记录，形成审计包。', systems: ['审计', 'OA', '财务'] },
            { role: '内控负责人', quote: '哪些流程存在长时间未闭环的风险？', solution: 'AI 识别流程卡点和异常留痕，输出重点风险项。', systems: ['OA', '审计', 'BI'] },
          ],
        },
        {
          id: 'knowledge', title: '制度知识与人员协同', subtitle: '制度问答、办事指南和综合管理统一入口。', positioning: '让老师傅经验、制度文件和办事流程都能被直接问出来。', coreSystems: ['知识库', '人事', '资产', 'OA'], icon: Users, color: 'amber',
          cards: [
            { role: '人事专员', quote: '新员工入职、请假和培训流程怎么走？', solution: 'AI 基于制度库和人事系统返回统一办事指南。', systems: ['知识库', '人事'] },
            { role: '资产管理员', quote: '这批资产当前状态和使用人是谁？', solution: 'AI 联查资产系统与审批记录，直接返回状态和责任人。', systems: ['资产', 'OA'] },
            { role: '普通员工', quote: '帮我找最新差旅报销制度。', solution: 'AI 从知识库检索最新制度版本并标注出处。', systems: ['知识库', 'DMS'] },
          ],
        },
      ]}
    />
  );
}
