export interface PageContent {
  brand: {
    name: string;
  };
  nav: {
    deliverables: string;
    review: string;
    process: string;
    faq: string;
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
    helperTitle: string;
    helperBody: string;
    plainTitle: string;
    plainBody: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  pain: {
    eyebrow: string;
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
    subheading: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
    ctaLabel: string;
  };
  opportunities: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    subheading: string;
    groups: {
      title: string;
      label: string;
      subtitle: string;
      items: {
        name: string;
        desc: string;
      }[];
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
    eyebrow: string;
    heading: string;
    body: string;
    fitLabel: string;
    fitBody: string;
    ctaLabel: string;
    footnote: string;
  };
  footer: {
    description: string;
    contactLabel: string;
    legalLabel: string;
    copyright: string;
    tagline: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
  };
  calendlyUrl: string;
}
