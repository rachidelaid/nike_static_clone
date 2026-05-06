interface CatalogHeroData {
  readonly breadcrumbs: readonly string[];
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly heroImageUrl: string;
  readonly heroImageAlt: string;
}

export interface CatalogHeroProps {
  readonly data: CatalogHeroData;
}

export function CatalogHero({ data }: CatalogHeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-primary px-6 py-24 text-on-primary sm:px-10 lg:px-20 lg:py-32">
      <img
        className="absolute inset-0 size-full object-cover opacity-60 grayscale"
        src={data.heroImageUrl}
        alt={data.heroImageAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-surface-container-high/30" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-7 flex flex-wrap items-center gap-3 font-label text-xs font-bold uppercase tracking-[0.22em] text-on-primary/75">
          {data.breadcrumbs.map((crumb, index) => (
            <span className="flex items-center gap-3" key={crumb}>
              {index > 0 ? <span>/</span> : null}
              <span>{crumb}</span>
            </span>
          ))}
        </div>
        <span className="mb-7 inline-flex bg-action-volt px-4 py-2 font-label text-[11px] font-black uppercase tracking-[0.18em] text-primary">
          {data.eyebrow}
        </span>
        <h1 className="max-w-4xl font-headline text-6xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[118px]">
          {data.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-primary/90 sm:text-xl">
          {data.body}
        </p>
      </div>
    </section>
  );
}
