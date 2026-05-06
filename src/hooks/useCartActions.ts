import { useState } from "react";

export interface UseCartActionsResult {
  readonly addedItem: string | null;
  readonly handleQuickAdd: (productName: string) => void;
  readonly handleJoin: (email: string) => void;
}

export function useCartActions(): UseCartActionsResult {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  function handleQuickAdd(productName: string) {
    setAddedItem(productName);
  }

  function handleJoin(email: string) {
    setAddedItem(email ? "APEX+ invite requested" : "Enter an email to join APEX+");
  }

  return { addedItem, handleQuickAdd, handleJoin };
}
