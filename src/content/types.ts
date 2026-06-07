export interface PageContent {
  brand: {
    name: string;
  };
  announcementBar: string;
  credibility: {
    items: string[];
    note: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microcopy: string;
  };
  deliverables: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  pain: {
    heading: string;
    subheading: string;
    items: string[];
    footnote: string;
  };
  whatWeReview: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    cards: {
      name: string;
      description: string;
    }[];
  };
  howItWorks: {
    heading: string;
    headingHighlight: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
    ctaLabel: string;
  };
  opportunities: {
    heading: string;
    headingHighlight: string;
    items: {
      name: string;
    }[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
    footnote: string;
  };
  footer: {
    description: string;
    contactLabel: string;
    legalLabel: string;
    copyright: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
  };
  calendlyUrl: string;
}
