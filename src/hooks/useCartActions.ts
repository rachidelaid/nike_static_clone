import { createContext, createElement, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface UseCartActionsResult {
  readonly addedItem: string | null;
  readonly bagCount: number;
  readonly handleQuickAdd: (productName: string) => void;
  readonly handleJoin: (email: string) => void;
}

export interface CartActionsProviderProps {
  readonly children: ReactNode;
  readonly initialBagCount: number;
}

const CartActionsContext = createContext<UseCartActionsResult | null>(null);

export function CartActionsProvider({ children, initialBagCount }: CartActionsProviderProps) {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [bagCount, setBagCount] = useState(initialBagCount);

  function handleQuickAdd(productName: string) {
    setAddedItem(productName);
    setBagCount((current) => current + 1);
  }

  function handleJoin(email: string) {
    setAddedItem(email ? "APEX+ invite requested" : "Enter an email to join APEX+");
  }

  return createElement(
    CartActionsContext.Provider,
    { value: { addedItem, bagCount, handleQuickAdd, handleJoin } },
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
