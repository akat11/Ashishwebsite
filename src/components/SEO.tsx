import { useEffect } from 'react';

const BASE_URL = 'https://vinayaksurgicals.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/images/categories/distal-radius-locking-plates.jpg`;

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  keywords,
  noindex = false,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper functions
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Format absolute URLs
    const fullCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`
      : undefined;

    const fullImage = image
      ? image.startsWith('http')
        ? image
        : `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`
      : DEFAULT_IMAGE;

    // 2. Standard Meta
    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }
    setMeta(
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // 3. Open Graph
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', type);
    setOg('og:image', fullImage);
    if (fullCanonical) {
      setOg('og:url', fullCanonical);
    }

    // 4. Twitter / X
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', fullImage);

    // 5. Canonical
    if (fullCanonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', fullCanonical);
    }

    // 6. JSON-LD Structured Data
    const schemaScriptId = 'page-jsonld-schema';
    let scriptEl = document.getElementById(schemaScriptId);
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.setAttribute('id', schemaScriptId);
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up page-specific JSON-LD on unmount
      const s = document.getElementById(schemaScriptId);
      if (s) {
        s.remove();
      }
    };
  }, [title, description, canonical, image, type, keywords, noindex, jsonLd]);

  return null;
}
