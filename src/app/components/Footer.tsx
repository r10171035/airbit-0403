import { Github } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoSvg from '../../imports/logo.svg';

const wechatIcon = '';

function WeChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.691 14.137c-.636 0-1.22-.102-1.745-.286L5.33 15.006l.542-1.742c-1.127-.852-1.807-2.022-1.807-3.325 0-2.454 2.379-4.444 5.312-4.444 2.934 0 5.312 1.99 5.312 4.444 0 2.454-2.378 4.444-5.312 4.444zm9.352-2.585c-.476 0-.94.056-1.38.158.12.443.185.908.185 1.39 0 2.937-2.618 5.317-5.848 5.317-.463 0-.91-.05-1.341-.143-1.037.98-2.428 1.638-3.966 1.776.417.848 1.442 1.488 2.677 1.488 1.096 0 2.067-.5 2.766-1.27l2.67 1.365-.776-2.19c1.699-1.002 2.77-2.607 2.77-4.385 0-1.872-1.187-3.546-3.056-4.43-.284.288-.475.602-.697.924z" />
    </svg>
  );
}

function Zhihu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-20 pb-12 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <ImageWithFallback
                src={logoSvg}
                alt="AirBit Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold text-[#1D1D1F] tracking-tight">AirBit</span>
            </div>
            <p className="text-[#6E6E73] text-sm leading-relaxed mb-8 max-w-[280px]">
              AirBit 是一个企业级 AI 基础设施平台，致力于为企业提供安全、高效的 AI 应用落地解决方案。
            </p>
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-[#1D1D1F]/5 text-[#1D1D1F] overflow-hidden"
              >
                <ImageWithFallback
                  src={wechatIcon}
                  alt="WeChat"
                  className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </span>
              <a
                href="mailto:contact@tlin.cn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1D1D1F]/5 text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <span
                aria-hidden="true"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1D1D1F]/5 text-[#1D1D1F]"
              >
                <Github className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">产品</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/airbit-portal" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit Portal</Link></li>
                <li><Link to="/airbit-ai-gateway" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit AI Gateway</Link></li>
                <li><Link to="/airbit-guardrails" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit Guardrails</Link></li>
                <li><Link to="/airbit-aio" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit AIO</Link></li>
                <li><Link to="/airbit-mcp-gateway" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit MCP Gateway</Link></li>
                <li><Link to="/airbit-apis" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit APIs</Link></li>
                <li><Link to="/airbit-eips" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit EIPs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">市场</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="text-[#6E6E73]">插件包</span></li>
                <li><span className="text-[#6E6E73]">第三方插件</span></li>
                <li><Link to="/solution-manufacturing" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">制造业</Link></li>
                <li><Link to="/solution-fashion" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">鞋服行业</Link></li>
                <li><Link to="/solution-food" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">食品行业</Link></li>
                <li><Link to="/solution-education" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">教育行业</Link></li>
                <li><Link to="/solution-public" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">事业单位</Link></li>
                <li><span className="text-[#6E6E73]">查找伙伴</span></li>
                <li><Link to="/partner" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">成为伙伴</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">资料</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="text-[#6E6E73]">文档 4.x</span></li>
                <li><span className="text-[#6E6E73]">协议许可</span></li>
                <li><Link to="/company" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">公司介绍</Link></li>
                <li><Link to="/contact" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">联系我们</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#86868B]">
          <p>AirBit 版权所有 © 2026 基础资源和备案服务由天临科技提供</p>
        </div>
      </div>
    </footer>
  );
}
