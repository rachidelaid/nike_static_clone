interface FeaturedProduct {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
}

interface HeroData {
  readonly eyebrow: string;
  readonly titleLines: readonly string[];
  readonly body: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly featuredProduct: FeaturedProduct;
}

export interface HeroSectionProps {
  readonly data: HeroData;
  readonly onQuickAdd: (productName: string) => void;
}

export function HeroSection({ data, onQuickAdd }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[calc(100vh-96px)] flex-col bg-surface lg:flex-row"
      id="top"
    >
      <div className="z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
            {data.eyebrow}
          </p>
          <h1 className="mb-6 font-headline text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] text-primary sm:text-7xl lg:text-[88px]">
            {data.titleLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="mb-10 max-w-md text-lg font-medium leading-relaxed text-on-surface-variant md:text-xl">
            {data.body}
          </p>
          <div className="flex flex-wrap items-center gap-4 font-label">
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold uppercase tracking-[0.12em] text-on-primary transition hover:bg-on-surface-variant"
              href="#products"
            >
              {data.primaryCta}
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg border border-primary px-8 text-sm font-bold uppercase tracking-[0.12em] text-primary transition hover:bg-surface-variant"
              href="#stories"
            >
              {data.secondaryCta}
            </a>
          </div>
        </div>
      </div>
      <div className="relative min-h-[560px] flex-1 lg:min-h-full">
        <img
          className="absolute inset-0 size-full object-cover object-center"
          src={data.imageUrl}
          alt={data.imageAlt}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/30 to-transparent lg:hidden" />
        <div className="absolute bottom-6 right-6 flex max-w-sm items-center gap-4 rounded-lg border border-surface-variant bg-surface-container-lowest/90 p-4 shadow-2xl backdrop-blur sm:bottom-8 sm:right-8">
          <img
            className="h-20 w-16 rounded-lg bg-surface-variant object-cover"
            src={data.featuredProduct.imageUrl}
            alt={data.featuredProduct.imageAlt}
          />
          <div className="min-w-0 flex-1">
            <h2 className="font-headline text-base font-bold text-primary">
              {data.featuredProduct.name}
            </h2>
            <p className="text-sm text-on-surface-variant">{data.featuredProduct.price}</p>
          </div>
          <button
            className="h-10 whitespace-nowrap rounded-lg bg-primary px-4 font-label text-xs font-bold uppercase tracking-[0.12em] text-on-primary transition hover:bg-on-surface-variant"
            type="button"
            onClick={() => onQuickAdd(data.featuredProduct.name)}
          >
            Quick Add
          </button>
        </div>
      </div>
    </section>
  );
}
