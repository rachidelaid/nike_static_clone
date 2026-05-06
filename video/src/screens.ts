export type ScreenData = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  width: number;
  height: number;
  durationSeconds: number;
  accent: string;
};

export const screens: ScreenData[] = [
  {
    id: "home",
    title: "Launch Campaign Home",
    description:
      "A cinematic storefront introduces the spring performance drop with editorial product imagery and clear shopping paths.",
    imagePath: "assets/screens/home.png",
    width: 1440,
    height: 1200,
    durationSeconds: 5,
    accent: "Spring Drop",
  },
  {
    id: "products",
    title: "Performance Essentials Collection",
    description:
      "The catalog view combines campaign storytelling, filters, sorting controls, and a focused product grid.",
    imagePath: "assets/screens/products.png",
    width: 1440,
    height: 1200,
    durationSeconds: 5,
    accent: "Browse",
  },
  {
    id: "product-detail",
    title: "Product Detail Conversion Flow",
    description:
      "The product page pairs large technical imagery with size selection, store reservation, and add-to-bag actions.",
    imagePath: "assets/screens/product-detail.png",
    width: 1440,
    height: 1200,
    durationSeconds: 5,
    accent: "Select",
  },
  {
    id: "cart",
    title: "Secure Checkout Bag",
    description:
      "The bag screen summarizes selected products, shipping benefits, and a high-contrast checkout call to action.",
    imagePath: "assets/screens/cart.png",
    width: 1440,
    height: 1200,
    durationSeconds: 5,
    accent: "Checkout",
  },
];
