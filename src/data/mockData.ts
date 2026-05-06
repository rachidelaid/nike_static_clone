import heroImageUrl from "../assets/images/remote-image-69d000919bac.png";
import productImageUrl from "../assets/images/remote-image-e66dc4d60c1f.png";
import kineticShortImageUrl from "../assets/images/remote-image-0d33a28ce01c.png";
import cityTraversePantImageUrl from "../assets/images/remote-image-0ef8537bc606.png";
import relatedShoeImageUrl from "../assets/images/remote-image-1fbfeed8be84.png";
import productGalleryMotionImageUrl from "../assets/images/remote-image-32f296403c96.png";
import productListingHeroImageUrl from "../assets/images/remote-image-39db1f1184f9.png";
import relatedTeeImageUrl from "../assets/images/remote-image-3db62544ec97.png";
import commuterMidLayerImageUrl from "../assets/images/remote-image-4222a7843745.png";
import storyImageUrl from "../assets/images/remote-image-57bfb70d5429.png";
import productGalleryFabricImageUrl from "../assets/images/remote-image-6be276040c82.png";
import seamlessBaseLsImageUrl from "../assets/images/remote-image-7932b544d173.png";
import productGalleryHeroImageUrl from "../assets/images/remote-image-88ee683e529b.png";
import aeroKnitCoreTeeImageUrl from "../assets/images/remote-image-ac1d92d78fb3.png";
import relatedCapImageUrl from "../assets/images/remote-image-bf3d99cb8d44.png";
import productGalleryZipperImageUrl from "../assets/images/remote-image-c593d5907137.png";
import zephyrWindShellImageUrl from "../assets/images/remote-image-c636cb13fde5.png";
import relatedPantImageUrl from "../assets/images/remote-image-eb3ee1da4a3a.png";

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

export interface FilterOption {
  readonly label: string;
  readonly count?: number;
}

export interface FilterSection {
  readonly id: string;
  readonly title: string;
  readonly options: readonly FilterOption[];
}

export interface ColorSwatch {
  readonly name: string;
  readonly className: string;
}

export interface CatalogProduct {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly material: string;
  readonly price: string;
  readonly badge?: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly colors: readonly string[];
  readonly sizes: readonly string[];
}

export interface ProductSpec {
  readonly title: string;
  readonly body: string;
}

export interface ProductGalleryImage {
  readonly src: string;
  readonly alt: string;
}

export interface ProductDetail {
  readonly id: string;
  readonly breadcrumbs: readonly string[];
  readonly name: string;
  readonly price: string;
  readonly rating: string;
  readonly reviewCount: string;
  readonly selectedColorName: string;
  readonly colorSwatches: readonly ColorSwatch[];
  readonly sizes: readonly string[];
  readonly selectedSize: string;
  readonly gallery: readonly ProductGalleryImage[];
  readonly shippingNotes: readonly string[];
  readonly specs: readonly ProductSpec[];
  readonly fitCare: readonly string[];
  readonly sustainability: readonly string[];
  readonly storyTitle: string;
  readonly storyBody: string;
  readonly storyImageUrl: string;
  readonly storyImageAlt: string;
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

export const productListingData = {
  breadcrumbs: ["Home", "Men", "Performance Essentials"],
  eyebrow: "Spring System 26",
  title: "Performance Essentials",
  body: "Technical layers engineered for commute, studio, and recovery. Built with high-performance fabrics to keep you moving through the city.",
  resultCount: "48 Products",
  sortOptions: ["Featured", "Newest", "Price: High to Low", "Price: Low to High"],
  activeChips: ["New Arrivals", "Best Sellers"],
  heroImageUrl: productListingHeroImageUrl,
  heroImageAlt: "High-contrast editorial athlete image for the Performance Essentials collection.",
  campaignTitle: "Built for motion. Cut for the street.",
  campaignCta: "Explore Performance",
} as const;

export const productFilters: readonly FilterSection[] = [
  {
    id: "category",
    title: "Category",
    options: [
      { label: "T-Shirts & Tops", count: 12 },
      { label: "Hoodies & Sweatshirts", count: 8 },
      { label: "Jackets & Vests", count: 5 },
      { label: "Pants & Tights", count: 15 },
    ],
  },
  {
    id: "size",
    title: "Size",
    options: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "XXL" },
    ],
  },
  {
    id: "color",
    title: "Color",
    options: [{ label: "Ink" }, { label: "Cloud" }, { label: "Volt" }, { label: "Technical Grey" }],
  },
] as const;

export const catalogProducts: readonly CatalogProduct[] = [
  {
    id: "aero-knit-core-tee",
    name: "Aero-Knit Core Tee",
    category: "T-Shirts & Tops",
    material: "Tech-Knit Hybrid",
    price: "$85",
    badge: "Limited Drop",
    imageUrl: aeroKnitCoreTeeImageUrl,
    imageAlt: "Black technical athletic tee on a warm studio background.",
    colors: ["bg-primary", "bg-surface-container-lowest", "bg-technical-grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "commuter-mid-layer",
    name: "Commuter Mid-Layer",
    category: "Hoodies & Sweatshirts",
    material: "Thermal Spacer Fleece",
    price: "$145",
    imageUrl: commuterMidLayerImageUrl,
    imageAlt: "Technical grey athletic hoodie in studio product photography.",
    colors: ["bg-technical-grey", "bg-primary"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "city-traverse-pant",
    name: "City Traverse Pant",
    category: "Pants & Tights",
    material: "4-Way Stretch Woven",
    price: "$125",
    imageUrl: cityTraversePantImageUrl,
    imageAlt: "Black technical athletic pants on a warm studio background.",
    colors: ["bg-primary"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "zephyr-wind-shell",
    name: "Zephyr Wind Shell",
    category: "Jackets & Vests",
    material: "Ultra-light Ripstop",
    price: "$185",
    badge: "New",
    imageUrl: zephyrWindShellImageUrl,
    imageAlt: "Off-white technical wind shell jacket on a warm studio background.",
    colors: ["bg-surface-container-lowest", "bg-primary"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kinetic-short",
    name: 'Kinetic 5" Short',
    category: "Pants & Tights",
    material: "Perforated Stretch Woven",
    price: "$65",
    imageUrl: kineticShortImageUrl,
    imageAlt: "Volt athletic training shorts on a warm studio background.",
    colors: ["bg-action-volt", "bg-primary"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "seamless-base-ls",
    name: "Seamless Base LS",
    category: "T-Shirts & Tops",
    material: "Merino-Blend Knit",
    price: "$75",
    imageUrl: seamlessBaseLsImageUrl,
    imageAlt: "Black technical long-sleeve base layer on a warm studio background.",
    colors: ["bg-primary", "bg-technical-grey"],
    sizes: ["XS", "S", "M", "L"],
  },
] as const;

export const productDetail: ProductDetail = {
  id: "aero-knit-core-tee",
  breadcrumbs: ["Home", "Men", "T-Shirts & Tops"],
  name: "Aero-Knit Core Tee",
  price: "$85",
  rating: "5.0",
  reviewCount: "128 Reviews",
  selectedColorName: "Ink",
  colorSwatches: [
    { name: "Ink", className: "bg-primary" },
    { name: "Technical Grey", className: "bg-technical-grey" },
    { name: "Cloud", className: "bg-surface-container-lowest" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  selectedSize: "M",
  gallery: [
    {
      src: productGalleryHeroImageUrl,
      alt: "Male athlete wearing the black Aero-Knit Core Tee in a cinematic urban setting.",
    },
    {
      src: productGalleryFabricImageUrl,
      alt: "Macro close-up of breathable AeroKnit fabric texture.",
    },
    {
      src: productGalleryZipperImageUrl,
      alt: "Close-up of the tee's flatlock seam and technical knit finish.",
    },
    {
      src: productGalleryMotionImageUrl,
      alt: "Athlete in motion demonstrating the jacket's flexible fit.",
    },
  ],
  shippingNotes: ["Free express shipping on orders over $150", "30-day performance guarantee"],
  specs: [
    {
      title: "Breathability",
      body: "Advanced AeroKnit moisture-wicking technology keeps you dry during high-intensity intervals.",
    },
    {
      title: "Thermoregulation",
      body: "Open-knit zones release heat quickly while dense yarn placement keeps the silhouette structured.",
    },
    {
      title: "Mobility",
      body: "Engineered stretch follows shoulder rotation through lifting, running, and daily movement.",
    },
    {
      title: "Materials",
      body: "82% Recycled AeroPolyester, 18% Elastane. Sustainable performance at its peak.",
    },
  ],
  fitCare: [
    "Tailored athletic fit designed to sit close to the body.",
    "Model is 6'2\" wearing size Medium.",
    "Machine wash cold with like colors. Tumble dry low.",
  ],
  sustainability: [
    "Low-impact dye process reduces water waste by 40%.",
    "Carbon neutral shipping on all domestic orders.",
  ],
  storyTitle: "Engineered Quiet. Built For Velocity.",
  storyBody:
    "Redefining the boundaries of movement through technical textile innovation and architectural silhouette design.",
  storyImageUrl,
  storyImageAlt: "Editorial material story image with warm canvas lighting.",
} as const;

const colorNamesByClass: Readonly<Record<string, string>> = {
  "bg-action-volt": "Volt",
  "bg-primary": "Ink",
  "bg-surface-container-lowest": "Cloud",
  "bg-technical-grey": "Technical Grey",
};

function colorNameForClass(colorClass: string) {
  return colorNamesByClass[colorClass] ?? "Color";
}

export function getProductDetail(productId: string): ProductDetail | undefined {
  const catalogProduct = catalogProducts.find((product) => product.id === productId);
  if (!catalogProduct) return undefined;
  if (catalogProduct.id === productDetail.id) return productDetail;

  const colorSwatches = catalogProduct.colors.map((colorClass) => ({
    name: colorNameForClass(colorClass),
    className: colorClass,
  }));

  return {
    ...productDetail,
    id: catalogProduct.id,
    breadcrumbs: ["Home", "Men", catalogProduct.category],
    name: catalogProduct.name,
    price: catalogProduct.price,
    selectedColorName: colorSwatches[0]?.name ?? productDetail.selectedColorName,
    colorSwatches,
    sizes: catalogProduct.sizes,
    gallery: [
      { src: catalogProduct.imageUrl, alt: catalogProduct.imageAlt },
      ...productDetail.gallery.slice(1),
    ],
    storyImageUrl: catalogProduct.imageUrl,
    storyImageAlt: catalogProduct.imageAlt,
  };
}

export const relatedProducts: readonly CatalogProduct[] = [
  {
    id: "apexform-aeropant",
    name: "ApexForm AeroPant",
    category: "Pants & Tights",
    material: "Tapered woven pant",
    price: "$158",
    imageUrl: relatedPantImageUrl,
    imageAlt: "Black technical athletic pants in studio product photography.",
    colors: ["bg-primary"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "apexform-velocity-v1",
    name: "ApexForm Velocity v1",
    category: "Footwear",
    material: "Technical sneaker",
    price: "$190",
    imageUrl: relatedShoeImageUrl,
    imageAlt: "Black technical performance sneaker in studio product photography.",
    colors: ["bg-primary", "bg-technical-grey"],
    sizes: ["8", "9", "10", "11", "12"],
  },
  {
    id: "apexform-comp-tee",
    name: "ApexForm Comp Tee",
    category: "T-Shirts & Tops",
    material: "Technical grey knit",
    price: "$78",
    imageUrl: relatedTeeImageUrl,
    imageAlt: "Technical grey athletic tee in clean studio lighting.",
    colors: ["bg-technical-grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "apexform-aerocap",
    name: "ApexForm AeroCap",
    category: "Accessories",
    material: "Moisture-wicking cap",
    price: "$45",
    imageUrl: relatedCapImageUrl,
    imageAlt: "Black technical running cap in dramatic studio lighting.",
    colors: ["bg-primary"],
    sizes: ["One Size"],
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
      { label: "New Drops", href: "/products" },
      { label: "Men", href: "/products" },
      { label: "Women", href: "/products" },
      { label: "Footwear", href: "/products" },
      { label: "Accessories", href: "/products" },
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
