export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  image?: string;
}

export interface HeroSlide {
  bgDesktop: string;
  bgMobile: string;
  link: string;
}

export interface QuickLinkCard {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Step {
  number: string;
  title: string;
  image: string;
  description: string;
  cta?: string;
  ctaHref?: string;
}

export interface InvestBlock {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaHref: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  body: string;
}

export interface GuaranteeCard {
  icon: string;
  title: string;
  body: string;
}

export interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  href: string;
  category?: string;
}

export interface FooterColumn {
  title?: string;
  links: { label: string; href: string }[];
}
