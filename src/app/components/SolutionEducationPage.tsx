import { BarChart3, BookOpen, GraduationCap, Package, School, Shield, UserRoundCheck, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { SolutionTemplate } from './SolutionTemplate';

export function SolutionEducationPage() {
  useSEO({
    title: '教育行业 AI 解决方案 | AirBit',
    description: 'AirBit 为教育机构提供招生咨询、教务协同、学生服务、知识问答和校务分析的 AI 解决方案，帮助学校和教育机构安全高效地落地 AI。',
    path: '/solution-education',
    keywords: '教育行业 AI 解决方案, 学校 AI, 教务 AI, 招生 AI, 校务分析 AI, AirBit',
    image: '/og-airbit.svg',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: '教育行业 AI 解决方案', description: 'AirBit 为教育机构提供招生咨询、教务协同、学生服务和校务分析的 AI 解决方案。', url: 'https://www.tlin.cn/solution-education' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 2, name: '市场', item: 'https://www.tlin.cn/' },
        { '@type': 'ListItem', position: 3, name: '教育行业', item: 'https://www.tlin.cn/solution-education' },
      ] },
    ],
  });

  return (
    <SolutionTemplate
      badge="Education Solution"
      heroTitle="从招生到校务协同"
      heroHighlight="让每位老师和学生都更轻松"
      heroDescription="AirBit 帮助教育机构用自然语言联动招生、教务、学习平台、知识库和校务系统，让 AI 真正服务教师、学生和管理层。"
      heroTags={[
        { label: '招生咨询', icon: <Users className="h-4 w-4" /> },
        { label: '教务协同', icon: <School className="h-4 w-4" /> },
        { label: '知识问答', icon: <BookOpen className="h-4 w-4" /> },
        { label: '校务分析', icon: <BarChart3 className="h-4 w-4" /> },
      ]}
      visualTitle="AirBit Education Copilot"
      visualSubtitle="CRM · SIS · LMS · OA · KMS"
      visualPoints={[
        '统一回答招生与课程咨询。',
        '联动教务、学习和校务流程。',
        '生成校务简报与重点预警。',
      ]}
      challengeTitle="教育机构 AI 落地最常见的难题"
      challengeDescription="教育场景多、角色多、数据也敏感，只有把系统、权限和知识一起接起来，AI 才能真正用起来。"
      overviewTitle="三类高频场景，覆盖教育主链路"
      overviewDescription="从招生和教务，到学生服务和校务分析，老师、学生和管理团队都能直接问业务。"
      platformTitle="让教育系统变成可调用、可治理的 AI 平台"
      platformDescription="AirBit 把招生、教务、学习和校务系统统一接入，同时保留权限边界、知识来源和审计能力。"
      platformItems={[
        { title: 'Portal', desc: '招生老师、教务老师和校领导都能直接用自然语言获取结果。', icon: GraduationCap },
        { title: 'MCP Gateway', desc: '把 CRM、SIS、LMS、OA 和知识库接成 AI 可调用工具。', icon: Package },
        { title: 'Guardrails', desc: '学生隐私、成绩与敏感信息统一做权限控制和脱敏。', icon: Shield },
        { title: 'AIO', desc: '模型使用、回答质量和日志统一观测，方便持续优化。', icon: BarChart3 },
      ]}
      ctaTitle="让教育服务更及时，让管理协同更顺畅"
      ctaDescription="从招生到教务，再到校务分析，AirBit 帮助教育机构在安全边界内把 AI 真正用起来。"
      painPoints={[
        { title: '咨询量大响应慢', sub: 'Enrollment Pressure', desc: '招生咨询高峰期问题重复且集中，人工回复效率有限。', icon: Users, color: 'text-orange-500' },
        { title: '教务流程碎片化', sub: 'Academic Workflow Friction', desc: '课表、选课、通知、请假和成绩分散在不同系统，协同效率低。', icon: School, color: 'text-blue-500' },
        { title: '知识沉淀难复用', sub: 'Knowledge Silos', desc: '制度、课程和办事指南散落在文档里，学生和老师都不容易找到。', icon: BookOpen, color: 'text-purple-500' },
        { title: '隐私和权限要求高', sub: 'Privacy And Compliance', desc: '学生信息、成绩和内部管理数据都需要明确权限边界。', icon: Shield, color: 'text-rose-500' },
      ]}
      scenarios={[
        {
          id: 'admission', title: '招生咨询与线索转化', subtitle: '重复问题自动应答，重点线索自动识别。', positioning: '让招生团队把时间留给真正高价值的沟通。', coreSystems: ['CRM', '官网', '知识库'], icon: Users, color: 'blue',
          cards: [
            { role: '招生老师', quote: '今天哪些咨询最值得优先跟进？', solution: 'AI 根据咨询意向、来源和历史互动给出高优先级线索名单。', systems: ['CRM', 'BI'] },
            { role: '咨询顾问', quote: '课程、学费和报名政策能自动解答吗？', solution: 'AI 基于知识库和招生系统实时回答常见问题。', systems: ['KMS', 'CRM'] },
            { role: '市场负责人', quote: '不同渠道的线索转化效果怎么样？', solution: 'AI 汇总投放与咨询数据，生成渠道转化对比。', systems: ['CRM', 'BI'] },
          ],
        },
        {
          id: 'academic', title: '教务协同与学生服务', subtitle: '课表、请假、成绩和通知统一联动。', positioning: '让老师、辅导员和学生都能更快完成日常事务。', coreSystems: ['SIS', 'LMS', 'OA'], icon: UserRoundCheck, color: 'green',
          cards: [
            { role: '教务老师', quote: '帮我看本周调课申请和待处理事项。', solution: 'AI 联查 SIS 与 OA，汇总待办并给出处理建议。', systems: ['SIS', 'OA'] },
            { role: '学生服务老师', quote: '某学生最近的考勤、请假和课程风险情况？', solution: 'AI 汇总考勤、请假和学习数据，输出重点风险提示。', systems: ['SIS', 'LMS'] },
            { role: '学生', quote: '补考安排、课程资料和办事流程在哪里看？', solution: 'AI 基于知识库和教务系统提供统一问答入口。', systems: ['KMS', 'SIS', 'LMS'] },
          ],
        },
        {
          id: 'management', title: '校务分析与管理决策', subtitle: '经营、教学和服务数据形成统一视图。', positioning: '帮助管理层更快发现异常、看清趋势、推动改进。', coreSystems: ['BI', '财务', 'OA', 'SIS'], icon: BarChart3, color: 'amber',
          cards: [
            { role: '校领导', quote: '本周招生、出勤和服务投诉的重点变化？', solution: 'AI 生成校务简报，突出关键指标变化和风险点。', systems: ['BI', 'CRM', 'OA'] },
            { role: '运营负责人', quote: '哪些校区的转化和留存表现最好？', solution: 'AI 汇总多校区数据，输出经营对比与建议。', systems: ['BI', 'CRM', '财务'] },
            { role: '信息化负责人', quote: 'AI 的使用效果和成本怎么评估？', solution: 'AIO 提供调用量、效果反馈和成本归因的完整视图。', systems: ['AIO', 'BI'] },
          ],
        },
      ]}
    />
  );
}
