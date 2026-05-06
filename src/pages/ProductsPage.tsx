import { CatalogControls } from "../components/CatalogControls";
import { CatalogHero } from "../components/CatalogHero";
import { CatalogProductGrid } from "../components/CatalogProductGrid";
import { CommerceStoryBand } from "../components/CommerceStoryBand";
import { ProductFilterRail } from "../components/ProductFilterRail";
import { catalogProducts, productFilters, productListingData } from "../data/mockData";
import type { CatalogProduct } from "../data/mockData";
import { useCartActions } from "../hooks/useCartActions";
import { useProductFilters } from "../hooks/useProductFilters";

export interface ProductsPageProps extends Readonly<Record<string, never>> {}

const colorClassByLabel: Readonly<Record<string, string>> = {
  Cloud: "bg-surface-container-lowest",
  Ink: "bg-primary",
  "Technical Grey": "bg-technical-grey",
  Volt: "bg-action-volt",
};

function priceValue(product: CatalogProduct) {
  return Number(product.price.replace(/[^0-9]/g, ""));
}

function sortProducts(products: readonly CatalogProduct[], selectedSort: string) {
  const sortedProducts = [...products];

  if (selectedSort === "Newest") {
    return sortedProducts.sort(
      (first, second) => Number(Boolean(second.badge)) - Number(Boolean(first.badge)),
    );
  }
  if (selectedSort === "Price: High to Low") {
    return sortedProducts.sort((first, second) => priceValue(second) - priceValue(first));
  }
  if (selectedSort === "Price: Low to High") {
    return sortedProducts.sort((first, second) => priceValue(first) - priceValue(second));
  }

  return sortedProducts;
}

export function ProductsPage(_props: ProductsPageProps) {
  const { addedItem, handleQuickAdd } = useCartActions();
  const filters = useProductFilters();
  const filteredProducts = catalogProducts.filter((product) => {
    const matchesCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(product.category);
    const matchesSize = !filters.selectedSize || product.sizes.includes(filters.selectedSize);
    const selectedColorClasses = filters.selectedColors.map(
      (color) => colorClassByLabel[color] ?? color,
    );
    const matchesColor =
      selectedColorClasses.length === 0 ||
      product.colors.some((colorClass) => selectedColorClasses.includes(colorClass));

    return matchesCategory && matchesSize && matchesColor;
  });
  const sortedProducts = sortProducts(filteredProducts, filters.selectedSort);
  const visibleProducts = sortedProducts.slice(0, filters.visibleCount);
  const leadingProducts = visibleProducts.slice(0, 3);
  const remainingProducts = visibleProducts.slice(3);
  const hasMoreProducts = visibleProducts.length < sortedProducts.length;

  function handleChipSelect(chip: string) {
    filters.setSelectedSort(chip === "New Arrivals" ? "Newest" : "Featured");
  }

  return (
    <main>
      <CatalogHero data={productListingData} />
      <CatalogControls
        resultCount={`${sortedProducts.length} ${sortedProducts.length === 1 ? "Product" : "Products"}`}
        sortOptions={productListingData.sortOptions}
        activeChips={productListingData.activeChips}
        selectedSort={filters.selectedSort}
        selectedView={filters.selectedView}
        onSortChange={filters.setSelectedSort}
        onViewChange={filters.setSelectedView}
        onChipSelect={handleChipSelect}
      />
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-3">
          <ProductFilterRail
            sections={productFilters}
            selectedCategories={filters.selectedCategories}
            selectedSize={filters.selectedSize}
            selectedColors={filters.selectedColors}
            onToggleCategory={filters.toggleCategory}
            onSelectSize={filters.selectSize}
            onToggleColor={filters.toggleColor}
          />
        </div>
        <div className="space-y-20 lg:col-span-9">
          <CatalogProductGrid
            products={leadingProducts}
            addedItem={addedItem}
            view={filters.selectedView}
            onQuickAdd={handleQuickAdd}
          />
          {visibleProducts.length > 0 ? (
            <CommerceStoryBand
              title={productListingData.campaignTitle}
              cta={productListingData.campaignCta}
            />
          ) : null}
          {remainingProducts.length > 0 ? (
            <CatalogProductGrid
              products={remainingProducts}
              addedItem={addedItem}
              view={filters.selectedView}
              onQuickAdd={handleQuickAdd}
            />
          ) : null}
          {visibleProducts.length === 0 ? (
            <div className="bg-surface-container p-10 text-center">
              <p className="font-headline text-3xl font-black uppercase tracking-[-0.05em] text-primary">
                No products match these filters.
              </p>
            </div>
          ) : null}
          {hasMoreProducts ? (
            <div className="flex justify-center">
              <button
                className="border border-primary px-12 py-5 font-label text-xs font-black uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-on-primary"
                type="button"
                onClick={filters.loadMore}
              >
                Load More
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
