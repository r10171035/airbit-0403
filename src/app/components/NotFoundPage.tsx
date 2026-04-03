import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';

export function NotFoundPage() {
  useSEO({
    title: '404 - 页面未找到 | AirBit',
    description: '您访问的页面不存在或已被移动，请返回首页继续浏览 AirBit 的产品与行业解决方案。',
    path: '/404.html',
    robots: 'noindex,follow',
  });

  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] px-6 pt-32 pb-24 text-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_72%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#0071E3]">404</div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#1D1D1F] lg:text-7xl">页面未找到</h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#86868B]">
          这个地址可能已经失效，或者页面路径发生了变化。你可以返回首页，继续查看 AirBit 的产品、价格和行业解决方案。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-[#005bb5]"
          >
            返回首页 <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-8 py-3.5 font-medium text-[#1D1D1F] shadow-sm transition-all hover:scale-105 hover:bg-[#FAFAFC]"
          >
            联系我们
          </Link>
        </div>
      </div>
    </section>
  );
}
