import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

export type SolutionIconType = React.ComponentType<{ className?: string }>;

export interface SolutionPainPoint {
  title: string;
  sub: string;
  desc: string;
  icon: SolutionIconType;
  color: string;
}

export interface SolutionScenarioCard {
  role: string;
  quote: string;
  solution: string;
  systems: string[];
}

export interface SolutionScenarioGroup {
  id: string;
  title: string;
  subtitle: string;
  positioning: string;
  coreSystems: string[];
  icon: SolutionIconType;
  color: 'blue' | 'green' | 'amber' | 'purple';
  cards: SolutionScenarioCard[];
}

interface SolutionTemplateProps {
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroTags: { label: string; icon: React.ReactNode }[];
  visualTitle: string;
  visualSubtitle: string;
  visualPoints: string[];
  challengeTitle: string;
  challengeDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  platformTitle: string;
  platformDescription: string;
  platformItems: { title: string; desc: string; icon: SolutionIconType }[];
  ctaTitle: string;
  ctaDescription: string;
  painPoints: SolutionPainPoint[];
  scenarios: SolutionScenarioGroup[];
}

const colorMap: Record<SolutionScenarioGroup['color'], { panel: string; accent: string; tag: string }> = {
  blue: {
    panel: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-600',
    tag: 'bg-blue-100 text-blue-700',
  },
  green: {
    panel: 'bg-green-50 border-green-200',
    accent: 'text-green-600',
    tag: 'bg-green-100 text-green-700',
  },
  amber: {
    panel: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-600',
    tag: 'bg-amber-100 text-amber-700',
  },
  purple: {
    panel: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-600',
    tag: 'bg-purple-100 text-purple-700',
  },
};

export function SolutionTemplate({
  badge,
  heroTitle,
  heroHighlight,
  heroDescription,
  heroTags,
  visualTitle,
  visualSubtitle,
  visualPoints,
  challengeTitle,
  challengeDescription,
  overviewTitle,
  overviewDescription,
  platformTitle,
  platformDescription,
  platformItems,
  ctaTitle,
  ctaDescription,
  painPoints,
  scenarios,
}: SolutionTemplateProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeScenario = scenarios[activeIndex];
  const theme = colorMap[activeScenario.color];
  const ActiveIcon = activeScenario.icon;

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenarios.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [isPaused, scenarios.length]);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <section className="relative overflow-hidden bg-[#FAFAFC] pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0071E3]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0071E3]" />
              </span>
              {badge}
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-[#1D1D1F] lg:text-7xl">
              {heroTitle}
              <br />
              <span className="bg-gradient-to-r from-[#0071E3] to-[#34C759] bg-clip-text text-transparent">{heroHighlight}</span>
            </h1>
            <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-[#86868B]">{heroDescription}</p>
            <div className="mb-10 grid max-w-md grid-cols-2 gap-4">
              {heroTags.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-[#424245]">
                  <div className="rounded border border-[#E5E5EA] bg-white p-1.5 text-[#0071E3] shadow-sm">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#0077ED] hover:shadow-lg">
                预约行业演示 <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#overview" className="flex items-center justify-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-8 py-3.5 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] hover:shadow-md">
                查看全链路方案
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <div className="rounded-[36px] border border-[#E5E5EA] bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#1D1D1F]">{visualTitle}</div>
                  <div className="text-xs text-[#86868B]">{visualSubtitle}</div>
                </div>
                <div className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0071E3]">实时联动</div>
              </div>
              <div className="space-y-4 rounded-[28px] bg-[#FAFAFC] p-5">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-semibold text-[#0071E3]">业务提问</div>
                  <div className="text-sm leading-relaxed text-[#1D1D1F]">帮我汇总当前关键业务状态，并给出优先处理建议。</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="mb-2 text-xs font-semibold text-[#0071E3]">AI 分析结果</div>
                  <ul className="space-y-2 text-sm leading-relaxed text-[#424245]">
                    {visualPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['实时数据', '自动串联', '可审计'].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#E5E5EA] bg-white px-4 py-3 text-center text-xs font-medium text-[#1D1D1F]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">{challengeTitle}</h2>
            <p className="text-[#86868B]">{challengeDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-[#E5E5EA] bg-[#FAFAFC] p-8 shadow-sm"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-[#E5E5EA] bg-white p-3 shadow-sm">
                      <Icon className={`h-6 w-6 ${point.color}`} />
                    </div>
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-[#1D1D1F]">{point.title}</h3>
                      <div className="text-xs font-medium uppercase tracking-wider text-[#86868B]">{point.sub}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#86868B]">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[#FAFAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 text-center">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#0071E3]">Overview</div>
            <h2 className="mb-6 text-4xl font-bold text-[#1D1D1F] md:text-5xl">{overviewTitle}</h2>
            <p className="mx-auto max-w-3xl text-[#86868B]">{overviewDescription}</p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {scenarios.map((scenario, index) => {
              const cardTheme = colorMap[scenario.color];
              const Icon = scenario.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-[28px] border p-6 text-left transition-all ${
                    isActive ? `${cardTheme.panel} shadow-md` : 'border-[#E5E5EA] bg-white hover:border-[#C7D2FE]'
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className={`h-5 w-5 ${cardTheme.accent}`} />
                  </div>
                  <div className="mb-2 text-lg font-bold text-[#1D1D1F]">{scenario.title}</div>
                  <div className="text-sm leading-relaxed text-[#86868B]">{scenario.subtitle}</div>
                </button>
              );
            })}
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`rounded-[36px] border p-8 lg:p-10 ${theme.panel}`}
          >
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <ActiveIcon className={`h-6 w-6 ${theme.accent}`} />
                </div>
                <h3 className="mb-3 text-4xl font-bold text-[#1D1D1F]">{activeScenario.title}</h3>
                <p className="max-w-2xl text-lg leading-relaxed text-[#86868B]">{activeScenario.positioning}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeScenario.coreSystems.map((system) => (
                  <span key={system} className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}>
                    {system}
                  </span>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="grid gap-6 lg:grid-cols-3"
              >
                {activeScenario.cards.map((card) => (
                  <div key={card.role} className="rounded-[28px] border border-[#E5E5EA] bg-white p-6 shadow-sm">
                    <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}>{card.role}</div>
                    <p className="mb-5 border-l-2 border-[#E5E5EA] pl-4 text-base leading-relaxed text-[#1D1D1F]">“{card.quote}”</p>
                    <div className="rounded-2xl bg-[#F5F5F7] p-4">
                      <div className="mb-2 text-sm font-bold uppercase tracking-wide text-[#0071E3]">AirBit 方案</div>
                      <p className="text-sm leading-relaxed text-[#1D1D1F]">{card.solution}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.systems.map((system) => (
                        <span key={system} className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs text-[#86868B]">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                type="button"
                aria-label={scenario.title}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#0071E3]' : 'w-2.5 bg-[#D1D1D6]'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1D1D1F]">{platformTitle}</h2>
            <p className="mx-auto max-w-3xl text-[#86868B]">{platformDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {platformItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-[#E5E5EA] bg-[#FAFAFC] p-7 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-[#0071E3]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#1D1D1F]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#86868B]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAFAFC] py-24">
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1D1D1F] lg:text-5xl">{ctaTitle}</h2>
          <p className="mb-10 text-xl font-light leading-relaxed text-[#86868B]">{ctaDescription}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="w-full rounded-full bg-[#0071E3] px-8 py-4 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5] sm:w-auto">
              预约产品演示
            </Link>
            <Link to="/contact" className="w-full rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC] sm:w-auto">
              定制企业专属接入方案
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-4 py-2 text-sm text-[#6E6E73]">
            <CheckCircle2 className="h-4 w-4 text-[#0071E3]" />
            <span>支持私有化部署、权限隔离和全链路审计</span>
          </div>
        </div>
      </section>
    </div>
  );
}
