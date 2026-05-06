import { Check } from "lucide-react";
import type { ProductDetail } from "../data/mockData";

export interface ProductInfoSectionsProps {
  readonly product: ProductDetail;
}

export function ProductInfoSections({ product }: ProductInfoSectionsProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-6">
      <div className="grid gap-8 border-t border-outline-variant/40 pt-16 md:grid-cols-2 lg:grid-cols-4">
        {product.specs.map((spec) => (
          <article className="space-y-4" key={spec.title}>
            <h2 className="font-label text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              {spec.title}
            </h2>
            <p className="text-sm leading-relaxed text-on-surface-variant">{spec.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-16">
          <DetailList title="Fit & Care" items={product.fitCare} />
          <DetailList title="Sustainability" items={product.sustainability} />
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-surface-container-high">
          <img
            className="size-full object-cover"
            src={product.storyImageUrl}
            alt={product.storyImageAlt}
          />
        </div>
      </div>
    </section>
  );
}

interface DetailListProps {
  readonly title: string;
  readonly items: readonly string[];
}

function DetailList({ title, items }: DetailListProps) {
  return (
    <section>
      <h2 className="mb-8 font-headline text-4xl font-black tracking-[-0.06em] text-primary">
        {title}
      </h2>
      <ul className="space-y-5 text-on-surface-variant">
        {items.map((item) => (
          <li className="flex items-start gap-4" key={item}>
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-action-volt text-primary">
              <Check className="size-3.5" aria-hidden="true" strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
