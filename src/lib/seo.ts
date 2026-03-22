export const SITE_URL = 'https://rumica.com.ar';
export const SITE_NAME = 'Rumica';
export const DEFAULT_TITLE = 'Rumica | Software a medida, automatizaciones y chatbots para empresas';
export const DEFAULT_DESCRIPTION =
  'Desarrollamos software a medida, automatizaciones con n8n y chatbots para empresas y organismos de Tucuman, el NOA y toda Argentina.';
export const DEFAULT_OG_IMAGE = '/og-image.svg';

export const DEFAULT_KEYWORDS = [
  'software a medida',
  'desarrollo de software',
  'automatizaciones con n8n',
  'chatbots para empresas',
  'whatsapp business api',
  'sistemas para empresas',
  'desarrollo web tucuman',
  'software para financieras',
  'software para empresas argentina',
  'desarrollo de sistemas noa',
];

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rumica',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.svg`,
  email: 'hola@rumica.com.ar',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tucuman',
    addressCountry: 'AR',
  },
  sameAs: [
    'https://linkedin.com/company/rumica',
    'https://github.com/rumica',
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Argentina',
    },
  ],
  knowsAbout: [
    'Desarrollo de software a medida',
    'Automatizaciones con n8n',
    'Chatbots para empresas',
    'WhatsApp Business API',
    'Integracion de sistemas',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'es-AR',
};

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}
