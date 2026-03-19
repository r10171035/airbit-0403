import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string; // 用于生成 Canonical 规范链接
  keywords?: string;
}

export function useSEO({ title, description, path, keywords }: SEOProps) {
  useEffect(() => {
    // 1. 更新网页标题
    document.title = title;

    // 辅助函数：动态更新或创建 Meta 标签
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. 更新基础 Meta 标签
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. 更新 Open Graph (OG) 协议标签，优化社交媒体（微信、钉钉等）分享卡片
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'AirBit');

    // 4. 更新 Canonical 规范链接，防止产生重复内容导致权重分散
    if (path !== undefined) {
      // 假设主域名为 tlin.cn，根据您的实际域名修改
      const baseUrl = 'https://www.tlin.cn'; 
      const canonicalUrl = `${baseUrl}${path}`;
      
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
      setMetaTag('property', 'og:url', canonicalUrl);
    }

    // 5. 触发 SSG（静态预渲染）的就绪事件，通知 Puppeteer 开始截图
    // 这对于 vite-plugin-prerender 非常重要，确保内容和路由都准备好了
    setTimeout(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
    }, 100);

  }, [title, description, path, keywords]);
}
