import { HeroSection } from './HeroSection';
import { ValueProposition } from './ValueProposition';
import { AirBitPortalHighlight } from './AirBitPortalHighlight';
import { ProductMatrix } from './ProductMatrix';
import { DeveloperExperience } from './DeveloperExperience';
import { TrustSection } from './TrustSection';
import { useSEO } from '../hooks/useSEO';

export function HomePage() {
  useSEO({
    title: 'AirBit - 企业级 AI 基础设施平台',
    description: 'AirBit 为企业提供 AI 网关、MCP 网关、安全护栏、集成平台与行业解决方案，帮助 AI 应用安全、高效落地。',
    path: '/',
    keywords: 'AirBit, 企业级AI, AI基础设施, AI网关, API网关, MCP网关, AI安全, AI集成平台',
    image: '/og-airbit.png',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AirBit',
        url: 'https://www.tlin.cn/',
        logo: 'https://www.tlin.cn/og-airbit.png',
        description: 'AirBit 是一个企业级 AI 基础设施平台，致力于为企业提供安全、高效的 AI 应用落地解决方案。',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AirBit',
        url: 'https://www.tlin.cn/',
        inLanguage: 'zh-CN',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AirBit - 企业级 AI 基础设施平台',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.hero-description'],
        },
        url: 'https://www.tlin.cn/',
      },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'AirBit 是什么？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 是企业级 AI 基础设施平台，提供 AI Gateway（大模型网关）、MCP Gateway（智能体治理网关）、Guardrails（安全护栏）、APIs（API 网关）、EIPs（集成框架）和 AIO（可观测平台），帮助企业安全高效地落地 AI 应用。' } },
        { '@type': 'Question', name: 'AirBit 和其他 AI 平台有什么区别？', acceptedAnswer: { '@type': 'Answer', text: 'AirBit 专注于企业 AI 基础设施治理层，解决多模型统一调度、企业系统零改造接入、数据安全隔离和 AI 成本管控四大核心问题，而非提供 AI 模型本身。' } },
        { '@type': 'Question', name: 'AirBit 支持私有化部署吗？', acceptedAnswer: { '@type': 'Answer', text: '支持。AirBit 完整支持私有化部署，企业数据全程不出内网，满足金融、政务、制造等高安全合规场景的要求。' } },
      ]},
    ],
  });

  return (
    <>
      <HeroSection />
      <ValueProposition />
      <AirBitPortalHighlight />
      <ProductMatrix />
      <DeveloperExperience />
      <TrustSection />
    </>
  );
}
