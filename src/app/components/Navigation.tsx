import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const products = [
    {
      category: '治理与运维',
      items: [
        { name: 'AirBit Guardrails', desc: '可编程安全护栏', href: '/airbit-guardrails' },
        { name: 'AirBit AIO', desc: '全栈可观测平台', href: '/airbit-aio' },
      ]
    },
    {
      category: '连接与集成',
      items: [
        { name: 'AirBit Apis', desc: '云原生动态网关', href: '/airbit-apis' },
        { name: 'AirBit Eips', desc: '集成模式框架', href: '/airbit-eips' },
      ]
    },
    {
      category: 'AI 基础设施',
      items: [
        { name: 'AirBit AI Gateway', desc: '智能流量管家', href: '/airbit-ai-gateway' },
        { name: 'AirBit MCP Gateway', desc: '智能体治理网关', href: '/airbit-mcp-gateway' },
      ]
    },
    {
      category: '企业级应用',
      items: [
        { name: 'AirBit Portal', desc: '企业级 AI 业务统一门户', href: '/airbit-portal' },
      ]
    }
  ];

  const marketplace = [
    {
      category: '解决方案',
      items: [
        { name: '制造业', pending: false, href: '/solution-manufacturing' },
        { name: '鞋服行业', pending: false, href: '/solution-fashion' },
        { name: '食品行业', pending: false, href: '/solution-food' },
        { name: '教育行业', pending: false, href: '/solution-education' },
        { name: '事业单位', pending: false, href: '/solution-public' },
      ]
    },
    {
      category: '合作伙伴',
      items: [
        { name: '寻找伙伴', pending: true },
        { name: '成为合作伙伴', pending: false, href: '/partner' },
      ]
    }
  ];

  const resources = [
    { name: '文档 4.x', href: '#' },
    { name: '协议许可', href: '#' },
    { name: '公司介绍', href: '/company' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
              AirBit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
            
            {/* Products Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${activeDropdown === 'products' ? 'text-[#0071E3]' : 'text-[#1D1D1F] hover:text-[#0071E3]'}`}>
                产品
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[640px] bg-white rounded-2xl shadow-2xl border border-black/5 p-8 cursor-default"
                  >
                    <div className="grid grid-cols-3 gap-x-12 gap-y-8">
                      {products.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-[11px] uppercase text-[#86868B] mb-4 tracking-wider font-semibold">
                            {category.category}
                          </h4>
                          <div className="flex flex-col gap-3">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.href || '#'}
                                className="group block"
                              >
                                <div className="text-[#1D1D1F] text-sm group-hover:text-[#0071E3] transition-colors font-medium mb-0.5">{item.name}</div>
                                {item.desc && <div className="text-[11px] text-[#86868B] leading-tight">{item.desc}</div>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Marketplace Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('marketplace')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${activeDropdown === 'marketplace' ? 'text-[#0071E3]' : 'text-[#1D1D1F] hover:text-[#0071E3]'}`}>
                方案
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'marketplace' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'marketplace' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] bg-white rounded-2xl shadow-2xl border border-black/5 p-8 cursor-default"
                  >
                     <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                      {marketplace.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-[11px] uppercase text-[#86868B] mb-4 tracking-wider font-semibold">
                            {category.category}
                          </h4>
                          <div className="flex flex-col gap-3">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.href || '#'}
                                className={`group block ${item.pending ? 'cursor-not-allowed opacity-60' : ''}`}
                                onClick={(e) => item.pending && e.preventDefault()}
                              >
                                <div className="flex items-center gap-2">
                                   <span className={`text-sm font-medium ${item.pending ? 'text-[#86868B]' : 'text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors'}`}>
                                     {item.name}
                                   </span>
                                   {item.pending && (
                                     <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#F5F5F7] text-[#86868B] border border-[#E5E5EA]">即将推出</span>
                                   )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${activeDropdown === 'resources' ? 'text-[#0071E3]' : 'text-[#1D1D1F] hover:text-[#0071E3]'}`}>
                资料
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[200px] bg-white rounded-2xl shadow-2xl border border-black/5 p-2 cursor-default"
                  >
                    <div className="flex flex-col">
                      {resources.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="px-4 py-2.5 rounded-lg hover:bg-[#F5F5F7] text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-[16px]">定价</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-medium">
            <Link to="/contact" className="px-4 py-1.5 bg-[#0071E3] text-white rounded-full hover:bg-[#0077ED] transition-colors">
              联系我们
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#1D1D1F]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden pb-6 bg-white border-t border-black/5 absolute top-12 left-0 right-0 shadow-xl px-6"
            >
              <div className="flex flex-col gap-1 pt-4 text-sm font-medium">
                <div className="py-2 border-b border-[#F5F5F7]">
                  <div className="text-[#86868B] text-xs mb-2 uppercase tracking-wider">产品</div>
                  {products.map(cat => (
                    <div key={cat.category} className="mb-3">
                      <div className="text-xs text-[#86868B] mb-1">{cat.category}</div>
                      {cat.items.map(item => (
                        <Link key={item.name} to={item.href || '#'} className="block py-1 pl-2 text-[#1D1D1F]" onClick={() => setIsOpen(false)}>{item.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
                 <div className="py-2 border-b border-[#F5F5F7]">
                  <div className="text-[#86868B] text-xs mb-2 uppercase tracking-wider">方案</div>
                  {marketplace.map(cat => (
                    <div key={cat.category} className="mb-3">
                      <div className="text-xs text-[#86868B] mb-1">{cat.category}</div>
                      {cat.items.map(item => (
                        <Link key={item.name} to={item.href || '#'} className={`block py-1 pl-2 ${item.pending ? 'text-[#86868B]' : 'text-[#1D1D1F]'}`} onClick={(e) => { if (item.pending) { e.preventDefault(); } else { setIsOpen(false); } }}>
                          {item.name} {item.pending && '(即将推出)'}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                 <div className="py-2 border-b border-[#F5F5F7]">
                  <div className="text-[#86868B] text-xs mb-2 uppercase tracking-wider">资料</div>
                  {resources.map(item => (
                    <Link key={item.name} to={item.href || '#'} className="block py-1 pl-2 text-[#1D1D1F]" onClick={() => setIsOpen(false)}>{item.name}</Link>
                  ))}
                </div>
                <Link to="/pricing" className="py-3 text-[#1D1D1F]" onClick={() => setIsOpen(false)}>定价</Link>
                
                <div className="flex flex-col gap-3 pt-4 border-t border-[#F5F5F7] mt-2">
                  <Link to="/contact" className="w-full py-2.5 bg-[#0071E3] text-white rounded-lg text-sm font-medium text-center block" onClick={() => setIsOpen(false)}>
                    联系我们
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
