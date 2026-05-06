import { Link, useParams } from "@tanstack/react-router";
import { CommerceStoryBand } from "../components/CommerceStoryBand";
import { ProductGallery } from "../components/ProductGallery";
import { ProductInfoSections } from "../components/ProductInfoSections";
import { ProductPurchasePanel } from "../components/ProductPurchasePanel";
import { RelatedProducts } from "../components/RelatedProducts";
import { getProductDetail, relatedProducts } from "../data/mockData";
import { useCartActions } from "../hooks/useCartActions";
import { useProductSelection } from "../hooks/useProductSelection";

export interface ProductDetailPageProps extends Readonly<Record<string, never>> {}

export function ProductDetailPage(_props: ProductDetailPageProps) {
  const { productId } = useParams({ from: "/products/$productId" });
  const productDetail = getProductDetail(productId);
  const selectedProduct = productDetail ?? getProductDetail("aero-knit-core-tee")!;
  const selection = useProductSelection(
    selectedProduct.colorSwatches[0]?.className ?? "bg-primary",
    selectedProduct.selectedSize,
    selectedProduct.name,
  );
  const { handleQuickAdd } = useCartActions();

  if (!productDetail) {
    return (
      <main className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-6">
        <p className="mb-4 font-label text-xs font-black uppercase tracking-[0.22em] text-secondary">
          Product not found
        </p>
        <h1 className="font-headline text-5xl font-black uppercase tracking-[-0.06em] text-primary">
          This product is no longer in the drop.
        </h1>
        <Link
          className="mt-8 inline-flex bg-primary px-8 py-4 font-label text-xs font-black uppercase tracking-[0.16em] text-on-primary"
          to="/products"
        >
          Back to products
        </Link>
      </main>
    );
  }

  const currentProduct = productDetail;

  function handleAddToBag() {
    selection.handleAddToBag();
    handleQuickAdd(currentProduct.name, {
      selectedColor: selection.selectedColor,
      selectedSize: selection.selectedSize,
    });
  }

  return (
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.35fr_0.9fr] lg:px-6 lg:py-16">
        <ProductGallery images={currentProduct.gallery} />
        <ProductPurchasePanel
          product={currentProduct}
          selectedColor={selection.selectedColor}
          selectedSize={selection.selectedSize}
          statusMessage={selection.statusMessage}
          onSelectColor={selection.selectColor}
          onSelectSize={selection.selectSize}
          onAddToBag={handleAddToBag}
          onReserveInStore={selection.handleReserveInStore}
        />
      </section>
      <ProductInfoSections product={currentProduct} />
      <CommerceStoryBand title={currentProduct.storyTitle} body={currentProduct.storyBody} />
      <RelatedProducts products={relatedProducts} onQuickAdd={handleQuickAdd} />
    </main>
  );
}
