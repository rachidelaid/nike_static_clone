import type { CatalogProduct } from "../data/mockData";

export interface RelatedProductsProps {
  readonly products: readonly CatalogProduct[];
  readonly onQuickAdd: (productName: string) => void;
}

export function RelatedProducts({ products, onQuickAdd }: RelatedProductsProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-6">
      <h2 className="mb-12 font-headline text-4xl font-black tracking-[-0.06em] text-primary">
        Complete The Kit
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article className="group" key={product.id}>
            <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-surface-container-low">
              <img
                className="size-full object-cover transition duration-500 group-hover:scale-105"
                src={product.imageUrl}
                alt={product.imageAlt}
              />
              <button
                className="absolute bottom-4 right-4 rounded-full bg-surface-container-lowest p-3 text-primary opacity-100 shadow-lg transition hover:bg-action-volt lg:opacity-0 lg:group-hover:opacity-100"
                type="button"
                onClick={() => onQuickAdd(product.name)}
                aria-label={`Quick add ${product.name}`}
              >
                +
              </button>
            </div>
            <h3 className="font-label text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              {product.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-primary">{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
