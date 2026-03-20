import { HeroSection } from './HeroSection';
import { ValueProposition } from './ValueProposition';
import { AirBitPortalHighlight } from './AirBitPortalHighlight';
import { ProductMatrix } from './ProductMatrix';
import { DeveloperExperience } from './DeveloperExperience';
import { TrustSection } from './TrustSection';
import { useSEO } from '../hooks/useSEO';

export function HomePage() {
  useSEO({
    title: 'AirBit - 企业级 AI 基础设施', 
    description: 'AirBit 是一个企业级 AI 基础设施平台，致力于为企业提供安全、高效的 AI 应用落地解决方案。',
    path: '/',
    keywords: 'AirBit, API网关, AI网关, 大模型网关, 企业级架构, 微服务'
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
