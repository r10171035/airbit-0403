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
    image: '/og-airbit.svg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AirBit',
        url: 'https://www.tlin.cn/',
        logo: 'https://www.tlin.cn/og-airbit.svg',
        description: 'AirBit 是一个企业级 AI 基础设施平台，致力于为企业提供安全、高效的 AI 应用落地解决方案。',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AirBit',
        url: 'https://www.tlin.cn/',
        inLanguage: 'zh-CN',
      },
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
