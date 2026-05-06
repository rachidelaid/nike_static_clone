import { Link } from "@tanstack/react-router";
import type { ProductDetail } from "../data/mockData";

export interface ProductPurchasePanelProps {
  readonly product: ProductDetail;
  readonly selectedColor: string;
  readonly selectedSize: string;
  readonly statusMessage: string | null;
  readonly onSelectColor: (colorClass: string) => void;
  readonly onSelectSize: (size: string) => void;
  readonly onAddToBag: () => void;
  readonly onReserveInStore: () => void;
}

export function ProductPurchasePanel({
  product,
  selectedColor,
  selectedSize,
  statusMessage,
  onSelectColor,
  onSelectSize,
  onAddToBag,
  onReserveInStore,
}: ProductPurchasePanelProps) {
  const selectedColorName =
    product.colorSwatches.find((swatch) => swatch.className === selectedColor)?.name ??
    product.selectedColorName;

  return (
    <aside className="lg:sticky lg:top-28">
      <nav className="mb-5 flex flex-wrap gap-3 font-label text-[10px] font-black uppercase tracking-[0.22em] text-on-surface-variant">
        {product.breadcrumbs.map((crumb, index) => (
          <span className="flex items-center gap-3" key={crumb}>
            {index > 0 ? <span>/</span> : null}
            <span className={index === product.breadcrumbs.length - 1 ? "text-primary" : ""}>
              {crumb}
            </span>
          </span>
        ))}
      </nav>
      <h1 className="font-headline text-5xl font-black leading-none tracking-[-0.07em] text-primary lg:text-6xl">
        {product.name}
      </h1>
      <div className="mt-8 flex flex-col justify-between gap-4 border-b border-outline-variant/40 pb-8 sm:flex-row sm:items-center">
        <p className="font-headline text-3xl font-black text-primary">{product.price}</p>
        <p className="font-label text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant">
          Rating {product.rating} ({product.reviewCount})
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="font-label text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            Color: <span className="font-medium text-on-surface-variant">{selectedColorName}</span>
          </h2>
          <div className="mt-5 flex gap-4">
            {product.colorSwatches.map((swatch) => (
              <button
                className={`${swatch.className} size-11 rounded-full border border-outline-variant ${
                  selectedColor === swatch.className
                    ? "ring-2 ring-primary ring-offset-4 ring-offset-background"
                    : ""
                }`}
                type="button"
                key={swatch.className}
                onClick={() => onSelectColor(swatch.className)}
                aria-label={`Select ${swatch.name}`}
              />
            ))}
          </div>
        </section>
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="font-label text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              Select Size
            </h2>
            <Link
              className="font-label text-[10px] font-black uppercase tracking-[0.18em] underline underline-offset-4 transition hover:text-primary"
              to="/contact"
            >
              Size & Fit Guide
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.sizes.map((size) => (
              <button
                className={
                  selectedSize === size
                    ? "border border-primary bg-primary py-5 text-xs font-black text-on-primary"
                    : "border border-outline-variant py-5 text-xs font-black text-primary transition hover:border-primary"
                }
                type="button"
                key={size}
                onClick={() => onSelectSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </section>
        <section className="space-y-3">
          <button
            className="w-full bg-primary py-6 font-label text-xs font-black uppercase tracking-[0.2em] text-on-primary transition hover:opacity-90"
            type="button"
            onClick={onAddToBag}
          >
            Add To Bag
          </button>
          <button
            className="w-full bg-action-volt py-6 font-label text-xs font-black uppercase tracking-[0.2em] text-primary transition hover:opacity-90"
            type="button"
            onClick={onReserveInStore}
          >
            Reserve In Store
          </button>
          {statusMessage ? (
            <p className="pt-2 text-sm font-semibold text-secondary">{statusMessage}</p>
          ) : null}
        </section>
        <section className="space-y-3 pt-2">
          {product.shippingNotes.map((note) => (
            <p
              className="font-label text-[11px] uppercase tracking-[0.16em] text-on-surface-variant"
              key={note}
            >
              {note}
            </p>
          ))}
        </section>
      </div>
    </aside>
  );
}
