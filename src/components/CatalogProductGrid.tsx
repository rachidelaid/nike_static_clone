import { Link } from "@tanstack/react-router";
import type { CatalogProduct } from "../data/mockData";

export interface CatalogProductGridProps {
  readonly products: readonly CatalogProduct[];
  readonly addedItem: string | null;
  readonly view: "grid" | "list";
  readonly onQuickAdd: (productName: string) => void;
}

export function CatalogProductGrid({
  products,
  addedItem,
  view,
  onQuickAdd,
}: CatalogProductGridProps) {
  return (
    <div
      className={
        view === "list" ? "grid gap-6" : "grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3"
      }
    >
      {products.map((product) => (
        <article
          className={
            view === "list"
              ? "group grid gap-5 border-b border-outline-variant/40 pb-6 sm:grid-cols-[220px_1fr]"
              : "group"
          }
          key={product.id}
        >
          <Link className="block" to="/products/$productId" params={{ productId: product.id }}>
            <div
              className={
                view === "list"
                  ? "relative aspect-[4/3] overflow-hidden bg-surface-container sm:aspect-square"
                  : "relative aspect-[3/4] overflow-hidden bg-surface-container"
              }
            >
              <img
                className="size-full object-cover transition duration-500 group-hover:scale-105"
                src={product.imageUrl}
                alt={product.imageAlt}
              />
              {product.badge ? (
                <span className="absolute left-4 top-4 bg-action-volt px-3 py-2 font-label text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  {product.badge}
                </span>
              ) : null}
            </div>
          </Link>
          <div className={view === "list" ? "flex flex-col justify-center" : "mt-5"}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-headline text-lg font-black uppercase tracking-[-0.05em] text-primary">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-outline">
                  {product.category} / {product.material}
                </p>
              </div>
              <p className="text-base font-semibold text-primary">{product.price}</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {product.colors.map((colorClass) => (
                  <span
                    className={`${colorClass} size-5 rounded-full border border-outline-variant ring-offset-background first:ring-1 first:ring-primary first:ring-offset-2`}
                    key={`${product.id}-${colorClass}`}
                  />
                ))}
              </div>
              <button
                className="border border-primary px-4 py-2 font-label text-[10px] font-black uppercase tracking-[0.16em] text-primary opacity-100 transition hover:bg-primary hover:text-on-primary lg:opacity-0 lg:group-hover:opacity-100"
                type="button"
                onClick={() => onQuickAdd(product.name)}
              >
                {addedItem === product.name ? "Added" : "Quick Add"}
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
