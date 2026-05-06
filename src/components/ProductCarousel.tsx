import type { Product } from "../data/mockData";

export interface ProductCarouselProps {
  readonly products: readonly Product[];
  readonly addedItem: string | null;
  readonly onQuickAdd: (productName: string) => void;
}

export function ProductCarousel({ products, addedItem, onQuickAdd }: ProductCarouselProps) {
  return (
    <section className="bg-warm-canvas px-6 py-20 sm:px-10 lg:px-20 lg:py-28" id="products">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
              Featured Drop
            </p>
            <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-[-0.05em] text-primary md:text-6xl">
              Spring performance system
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-on-surface-variant">
            A precise edit of technical layers, oversized recovery fits, and utility silhouettes
            built for motion.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              className="group rounded-xl bg-surface-container-lowest p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              key={product.id}
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
                <img
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                  src={product.imageUrl}
                  alt={product.imageAlt}
                />
                <span className="absolute left-3 top-3 rounded-full bg-action-volt px-3 py-1 font-label text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                  {product.badge}
                </span>
              </div>
              <div className="px-1 pb-1">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-label text-[10px] font-black uppercase tracking-[0.16em] text-on-surface-variant">
                      {product.category}
                    </p>
                    <h3 className="mt-1 font-headline text-xl font-bold tracking-[-0.04em] text-primary">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-bold text-primary">{product.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {product.colors.map((colorClass) => (
                      <span
                        className={`${colorClass} size-4 rounded-full border border-outline-variant`}
                        key={`${product.id}-${colorClass}`}
                      />
                    ))}
                  </div>
                  <button
                    className="rounded-lg bg-primary px-4 py-2 font-label text-[10px] font-black uppercase tracking-[0.16em] text-on-primary transition hover:bg-on-surface-variant"
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
      </div>
    </section>
  );
}
