import heroImageUrl from "../assets/images/remote-image-69d000919bac.png";
import productImageUrl from "../assets/images/remote-image-e66dc4d60c1f.png";

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: string;
  readonly badge: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly colors: readonly string[];
}

export const headerData = {
  announcement: "Spring Performance Drop is Live",
  announcementAction: "Shop Now",
  navItems: ["Men", "Women", "Footwear", "Training", "New Drops"],
  brandName: "APEX FORM",
  bagCount: 2,
} as const;

export const heroData = {
  eyebrow: "SP26 Technical Collection",
  titleLines: ["Move Like", "The Future", "Fits You"],
  body: "Technical layers engineered for peak performance. The spring collection redefines athletic precision for city training, travel, and recovery.",
  primaryCta: "Shop New Drop",
  secondaryCta: "Explore Lookbook",
  imageUrl: heroImageUrl,
  imageAlt:
    "Cinematic editorial campaign image of a model wearing a black performance jacket with volt accents.",
  featuredProduct: {
    id: "apex-shell-jacket",
    name: "Apex Shell Jacket",
    price: "$248",
    imageUrl: productImageUrl,
    imageAlt: "Close-up of a black technical shell jacket with volt zipper detailing.",
  },
} as const;

export const products: readonly Product[] = [
  {
    id: "aeroshell-jacket",
    name: "AeroShell Jacket",
    category: "Outerwear",
    price: "$248",
    badge: "Limited",
    imageUrl: productImageUrl,
    imageAlt: "Black technical athletic jacket with volt zipper detailing.",
    colors: ["bg-primary", "bg-action-volt", "bg-outline-variant"],
  },
  {
    id: "velocity-knit-tank",
    name: "Velocity Knit Tank",
    category: "Training",
    price: "$88",
    badge: "New Color",
    imageUrl: heroImageUrl,
    imageAlt: "Premium training layer styled in an editorial athleticwear campaign.",
    colors: ["bg-surface-container-highest", "bg-primary", "bg-secondary-container"],
  },
  {
    id: "formflex-cargo-pant",
    name: "FormFlex Cargo Pant",
    category: "Utility",
    price: "$178",
    badge: "Drop 01",
    imageUrl: productImageUrl,
    imageAlt: "Close-up of technical black performance fabric and utility details.",
    colors: ["bg-primary", "bg-surface-container", "bg-outline"],
  },
  {
    id: "recovery-oversized-hoodie",
    name: "Recovery Oversized Hoodie",
    category: "Recovery",
    price: "$138",
    badge: "Member Early",
    imageUrl: heroImageUrl,
    imageAlt: "Editorial athleticwear campaign image with warm premium lighting.",
    colors: ["bg-warm-canvas", "bg-primary", "bg-action-volt"],
  },
] as const;

export const collectionStory = {
  title: "Built for pressure, cut for presence",
  body: "Storm-ready shells, studio-soft recovery layers, and city-proof silhouettes built around movement data and premium hand feel.",
  cta: "Explore Performance System",
  imageUrl: productImageUrl,
  imageAlt: "Close-up technical fabric texture with black and volt details.",
  features: ["Storm-Sealed", "4-Way Stretch", "Heat-Mapped Venting"],
} as const;

export const editorialTiles = [
  {
    title: "Run Club Capsule",
    label: "Community Pace",
    caption: "Reflective layers and breathable cuts tuned for early miles and late starts.",
    imageUrl: heroImageUrl,
  },
  {
    title: "Training Essentials",
    label: "Studio to Street",
    caption: "Minimal silhouettes with enough structure for daily lifts and daily life.",
    imageUrl: productImageUrl,
  },
  {
    title: "Night Moves Reflective Kit",
    label: "After Dark",
    caption: "Volt accents and low-light detailing designed to announce every stride.",
    imageUrl: heroImageUrl,
  },
] as const;

export const membershipPromo = {
  title: "Access drops before they disappear",
  body: "Join APEX+ for early access, member-only capsules, fit notes, and private training edits.",
  placeholder: "Email address",
  cta: "Join APEX+",
} as const;

export const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "New Drops", href: "/#products" },
      { label: "Men", href: "/#products" },
      { label: "Women", href: "/#products" },
      { label: "Footwear", href: "/#products" },
      { label: "Accessories", href: "/#products" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Order Status", href: "/contact" },
      { label: "Shipping", href: "/contact" },
      { label: "Returns", href: "/contact" },
      { label: "Size Guide", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "APEX FORM",
    links: [
      { label: "Run Club", href: "/#stories" },
      { label: "Membership", href: "/#membership" },
      { label: "Sustainability", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Journal", href: "/#stories" },
    ],
  },
] as const;

export const contactData = {
  eyebrow: "Contact APEX FORM",
  title: "Performance support without the ticket queue",
  body: "Talk to a fit specialist, check drop availability, or get help with an order. Our team answers with the same precision we put into every layer.",
  formTitle: "Send a message",
  formBody: "Share the essentials and an APEX concierge will respond within one business day.",
  topics: ["Order support", "Sizing and fit", "Drop availability", "Partnerships"],
  contactMethods: [
    {
      label: "Concierge Email",
      value: "support@apexform.example",
      detail: "Replies within 24 hours",
    },
    { label: "Text Line", value: "+1 415 000 2048", detail: "Mon-Fri, 9AM-6PM PST" },
    {
      label: "Flagship Studio",
      value: "88 Velocity Ave, San Francisco",
      detail: "Appointments only",
    },
  ],
  stats: ["24h response", "Fit specialist review", "Member priority"],
  imageUrl: heroImageUrl,
  imageAlt: "APEX FORM editorial athlete portrait with premium black performance layers.",
} as const;
