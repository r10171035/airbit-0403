import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export function useSEO({ title, description, path, keywords, image, jsonLd }: SEOProps) {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'https://www.tlin.cn';
    const normalizedImage = image
      ? (image.startsWith('http') ? image : `${baseUrl}${image}`)
      : `${baseUrl}/og-airbit.png`;

    document.title = title;

    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    const removeElement = (selector: string) => {
      const element = document.querySelector(selector);
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index,follow');

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    } else {
      removeElement('meta[name="keywords"]');
    }

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'AirBit');
    setMetaTag('property', 'og:locale', 'zh_CN');
    setMetaTag('property', 'og:image', normalizedImage);
    setMetaTag('property', 'og:image:alt', title);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', normalizedImage);

    if (path !== undefined) {
      const canonicalUrl = `${baseUrl}${path}`;

      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
      setMetaTag('property', 'og:url', canonicalUrl);
    } else {
      removeElement('link[rel="canonical"]');
      removeElement('meta[property="og:url"]');
    }

    const scriptId = 'seo-json-ld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    setTimeout(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      if (typeof window !== 'undefined' && (window as any).snapSaveState) {
        (window as any).snapSaveState();
      }
    }, 100);
  }, [title, description, path, keywords, image, jsonLd]);
}
