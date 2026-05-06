import { useEffect, useState } from "react";

export interface UseProductSelectionResult {
  readonly selectedColor: string;
  readonly selectedSize: string;
  readonly statusMessage: string | null;
  readonly selectColor: (colorClass: string) => void;
  readonly selectSize: (size: string) => void;
  readonly handleAddToBag: () => void;
  readonly handleReserveInStore: () => void;
}

export function useProductSelection(
  initialColor: string,
  initialSize: string,
  productName: string,
): UseProductSelectionResult {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedColor(initialColor);
    setSelectedSize(initialSize);
    setStatusMessage(null);
  }, [initialColor, initialSize, productName]);

  function selectColor(colorClass: string) {
    setSelectedColor(colorClass);
  }

  function selectSize(size: string) {
    setSelectedSize(size);
  }

  function handleAddToBag() {
    setStatusMessage(`${productName} in ${selectedSize} added to bag.`);
  }

  function handleReserveInStore() {
    setStatusMessage(`${productName} reserved for in-store pickup.`);
  }

  return {
    selectedColor,
    selectedSize,
    statusMessage,
    selectColor,
    selectSize,
    handleAddToBag,
    handleReserveInStore,
  };
}
