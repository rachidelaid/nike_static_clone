import { createContext, createElement, useContext, useState } from "react";
import type { ReactNode } from "react";
import { catalogProducts, heroData, products, relatedProducts } from "../data/mockData";

export interface CartItem {
  readonly id: string;
  readonly productId: string;
  readonly name: string;
  readonly category: string;
  readonly price: string;
  readonly priceValue: number;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly hasDetailPage: boolean;
  readonly colorClass: string;
  readonly colorName: string;
  readonly size: string;
  readonly quantity: number;
}

export interface AddToCartOptions {
  readonly selectedColor?: string;
  readonly selectedSize?: string;
}

export interface UseCartActionsResult {
  readonly addedItem: string | null;
  readonly cartItems: readonly CartItem[];
  readonly bagCount: number;
  readonly cartSubtotal: number;
  readonly handleQuickAdd: (productName: string, options?: AddToCartOptions) => void;
  readonly handleJoin: (email: string) => void;
  readonly updateQuantity: (cartItemId: string, quantity: number) => void;
  readonly removeItem: (cartItemId: string) => void;
}

export interface CartActionsProviderProps {
  readonly children: ReactNode;
  readonly initialBagCount: number;
}

const CartActionsContext = createContext<UseCartActionsResult | null>(null);

const colorNamesByClass: Readonly<Record<string, string>> = {
  "bg-action-volt": "Volt",
  "bg-outline": "Graphite",
  "bg-outline-variant": "Concrete",
  "bg-primary": "Ink",
  "bg-secondary-container": "Moss",
  "bg-surface-container": "Stone",
  "bg-surface-container-highest": "Smoke",
  "bg-surface-container-lowest": "Cloud",
  "bg-technical-grey": "Technical Grey",
  "bg-warm-canvas": "Canvas",
};

const defaultSizesByCategory: Readonly<Record<string, string>> = {
  Accessories: "One Size",
  Footwear: "10",
};

function priceValue(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function colorNameForClass(colorClass: string) {
  return colorNamesByClass[colorClass] ?? "Color";
}

function defaultSizeForProduct(category: string, sizes?: readonly string[]) {
  return sizes?.[0] ?? defaultSizesByCategory[category] ?? "M";
}

function cartItemId(productId: string, colorClass: string, size: string) {
  return `${productId}:${colorClass}:${size}`;
}

function findCartProduct(productName: string) {
  const catalogProduct = [...catalogProducts, ...relatedProducts].find(
    (product) => product.name === productName,
  );

  if (catalogProduct) {
    return catalogProduct;
  }

  const homeProduct = products.find((product) => product.name === productName);
  if (homeProduct) {
    return {
      ...homeProduct,
      material: homeProduct.category,
      sizes: [defaultSizeForProduct(homeProduct.category)],
    };
  }

  if (heroData.featuredProduct.name === productName) {
    return {
      ...heroData.featuredProduct,
      category: "Outerwear",
      material: "Technical Shell",
      colors: ["bg-primary", "bg-action-volt"],
      sizes: ["S", "M", "L", "XL"],
    };
  }

  return undefined;
}

function createCartItem(productName: string, options?: AddToCartOptions): CartItem | null {
  const product = findCartProduct(productName);

  if (!product) return null;

  const colorClass = options?.selectedColor ?? product.colors[0] ?? "bg-primary";
  const size = options?.selectedSize ?? defaultSizeForProduct(product.category, product.sizes);

  return {
    id: cartItemId(product.id, colorClass, size),
    productId: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    priceValue: priceValue(product.price),
    imageUrl: product.imageUrl,
    imageAlt: product.imageAlt,
    hasDetailPage: catalogProducts.some((catalogProduct) => catalogProduct.id === product.id),
    colorClass,
    colorName: colorNameForClass(colorClass),
    size,
    quantity: 1,
  };
}

function createInitialCartItems(initialBagCount: number) {
  return catalogProducts.slice(0, initialBagCount).flatMap((product) => {
    const item = createCartItem(product.name);

    return item ? [item] : [];
  });
}

export function CartActionsProvider({ children, initialBagCount }: CartActionsProviderProps) {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<readonly CartItem[]>(() =>
    createInitialCartItems(initialBagCount),
  );
  const bagCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.priceValue * item.quantity,
    0,
  );

  function handleQuickAdd(productName: string, options?: AddToCartOptions) {
    const itemToAdd = createCartItem(productName, options);

    if (!itemToAdd) return;

    setAddedItem(productName);
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === itemToAdd.id);

      if (!existingItem) {
        return [...currentItems, itemToAdd];
      }

      return currentItems.map((item) =>
        item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function handleJoin(email: string) {
    setAddedItem(email ? "APEX+ invite requested" : "Enter an email to join APEX+");
  }

  function updateQuantity(cartItemId: string, quantity: number) {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== cartItemId) return [item];

        return quantity > 0 ? [{ ...item, quantity }] : [];
      }),
    );
  }

  function removeItem(cartItemId: string) {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== cartItemId));
  }

  return createElement(
    CartActionsContext.Provider,
    {
      value: {
        addedItem,
        cartItems,
        bagCount,
        cartSubtotal,
        handleQuickAdd,
        handleJoin,
        updateQuantity,
        removeItem,
      },
    },
    children,
  );
}

export function useCartActions(): UseCartActionsResult {
  const context = useContext(CartActionsContext);

  if (!context) {
    throw new Error("useCartActions must be used within CartActionsProvider");
  }

  return context;
}
