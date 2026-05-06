import { useState } from "react";

export interface UseProductFiltersResult {
  readonly selectedCategories: readonly string[];
  readonly selectedSize: string;
  readonly selectedColors: readonly string[];
  readonly selectedSort: string;
  readonly selectedView: "grid" | "list";
  readonly visibleCount: number;
  readonly setSelectedSort: (sort: string) => void;
  readonly setSelectedView: (view: "grid" | "list") => void;
  readonly toggleCategory: (category: string) => void;
  readonly selectSize: (size: string) => void;
  readonly toggleColor: (color: string) => void;
  readonly loadMore: () => void;
}

export function useProductFilters(): UseProductFiltersResult {
  const [selectedCategories, setSelectedCategories] = useState<readonly string[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColors, setSelectedColors] = useState<readonly string[]>([]);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [selectedView, setSelectedView] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(4);

  function selectSort(sort: string) {
    setSelectedSort(sort);
    setVisibleCount(4);
  }

  function toggleCategory(category: string) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
    setVisibleCount(4);
  }

  function selectSize(size: string) {
    setSelectedSize((current) => (current === size ? "" : size));
    setVisibleCount(4);
  }

  function toggleColor(color: string) {
    setSelectedColors((current) =>
      current.includes(color) ? current.filter((item) => item !== color) : [...current, color],
    );
    setVisibleCount(4);
  }

  function loadMore() {
    setVisibleCount((current) => current + 4);
  }

  return {
    selectedCategories,
    selectedSize,
    selectedColors,
    selectedSort,
    selectedView,
    visibleCount,
    setSelectedSort: selectSort,
    setSelectedView,
    toggleCategory,
    selectSize,
    toggleColor,
    loadMore,
  };
}
