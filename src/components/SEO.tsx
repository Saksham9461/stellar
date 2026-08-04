import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'antview, software engineering, custom software, generative AI, react development, vite typescript, sass, cloud scale',
  ogType = 'website',
  canonicalUrl
}) => {
  const siteTitle = `${title} | Antview Technologies`;
  const url = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Standard SEO Headers */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Protocol nodes */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Antview Technologies" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" />

      {/* Twitter Cards tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" />

      {/* Schema.org Structured Metadata (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Antview Technologies',
          'url': 'https://antview.tech',
          'logo': 'https://antview.tech/logo.svg',
          'description': 'Engineering premium, enterprise-grade software architectures, customized cognitive pipelines, and visually stunning interactive experiences for global innovators.',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Connaught Place',
            'addressLocality': 'New Delhi',
            'addressRegion': 'Delhi',
            'postalCode': '110001',
            'addressCountry': 'IN'
          },
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-11-5555-0199',
            'contactType': 'sales',
            'areaServed': 'IN',
            'availableLanguage': 'en'
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
