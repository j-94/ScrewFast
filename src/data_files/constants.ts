import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "JMB Floors",
  tagline: "Premier B2B Flooring Solutions",
  description: "JMB Floors provides premier B2B flooring solutions tailored to your business needs. Schedule a free site visit today and discover how we can transform your space with our expert flooring services.",
  description_short: "JMB Floors offers expert B2B flooring solutions tailored to your business needs.",
  url: "https:jmbfloors.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Premier Flooring Solutions`,
  description: "Unlock exclusive flooring solutions! Schedule a free site visit today and discover how we can transform your space. Our expert team is ready to assist you with top-tier flooring solutions at no initial cost. Don't miss out on this limited-time offer to elevate your business environment.",
  image: ogImageSrc,
};
