import { SITE_URL, SITE_NAME } from './seo';

interface FAQItem {
  question: string;
  answer: string;
}

interface PriceOffer {
  name: string;
  price: number;
  priceCurrency: string;
  priceType?: 'recurring' | 'one_time';
  billingPeriod?: 'month' | 'year';
  availability?: 'https://schema.org/InStock';
}

interface ServiceItem {
  name: string;
  description: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string | string[];
  priceRange?: string;
}

/**
 * Genera FAQPage Schema para páginas de FAQs
 * Útil para obtener rich snippets en Google
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Genera Offer Schema para Pricing
 * Útil para mostrar precios en rich snippets
 */
export function generateOfferSchema(offer: PriceOffer) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: offer.name,
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    priceType: offer.priceType || 'recurring',
    billingDuration: offer.billingPeriod,
    availability: offer.availability || 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
    seller: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Genera AggregateOffer Schema para múltiples planes
 */
export function generateAggregateOfferSchema(offers: PriceOffer[], lowPrice: number, highPrice: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    lowPrice,
    highPrice,
    priceCurrency: 'ARS',
    offerCount: offers.length,
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      priceType: offer.priceType || 'recurring',
      billingDuration: offer.billingPeriod,
      availability: offer.availability || 'https://schema.org/InStock',
    })),
  };
}

/**
 * Genera Service Schema para páginas de servicios
 */
export function generateServiceSchema(service: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: service.provider || {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: Array.isArray(service.areaServed)
      ? service.areaServed
      : service.areaServed
      ? [{ '@type': 'Country', name: service.areaServed }]
      : [{ '@type': 'Country', name: 'Argentina' }],
    priceRange: service.priceRange || '$$',
    url: `${SITE_URL}/services`,
    sameAs: [
      'https://linkedin.com/company/rumica',
      'https://github.com/rumica',
    ],
  };
}

/**
 * Genera SoftwareApplication Schema para productos SaaS
 */
export function generateSoftwareSchema(name: string, description: string, applicationCategory?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: applicationCategory || 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };
}

/**
 * Genera ContactPage Schema
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rumica',
    description: 'Contáctanos para consultas sobre desarrollo de software, automatizaciones y chatbots.',
    url: `${SITE_URL}/contact`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+543815000000',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
      email: 'hola@rumica.com.ar',
    },
  };
}

/**
 * Genera AboutPage Schema
 */
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Rumica',
    description: 'Sobre Rumica - Desarrollo de software a medida, automatizaciones y chatbots para empresas.',
    url: `${SITE_URL}/company`,
  };
}

/**
 * Genera PostalAddress Schema para local business
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Miguel de Tucumán',
      addressRegion: 'Tucumán',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-26.8324',
      longitude: '-65.2072',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}
