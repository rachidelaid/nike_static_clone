interface CollectionStoryData {
  readonly title: string;
  readonly body: string;
  readonly cta: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly features: readonly string[];
}

export interface CollectionStoryProps {
  readonly data: CollectionStoryData;
}

export function CollectionStory({ data }: CollectionStoryProps) {
  return (
    <section className="bg-primary px-6 py-20 text-on-primary sm:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 font-label text-xs font-black uppercase tracking-[0.24em] text-action-volt">
            Performance Story
          </p>
          <h2 className="max-w-3xl font-headline text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            {data.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-inverse-on-surface">
            {data.body}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {data.features.map((feature) => (
              <div
                className="rounded-xl border border-on-surface-variant/40 bg-surface-container-lowest/5 p-5"
                key={feature}
              >
                <p className="font-label text-xs font-black uppercase tracking-[0.18em] text-action-volt">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <a
            className="mt-10 inline-flex rounded-full bg-action-volt px-6 py-3 font-label text-xs font-black uppercase tracking-[0.16em] text-primary"
            href="#membership"
          >
            {data.cta}
          </a>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-tertiary-container">
          <img
            className="aspect-[5/4] size-full object-cover opacity-80 mix-blend-luminosity"
            src={data.imageUrl}
            alt={data.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-action-volt/20 via-transparent to-primary/80" />
        </div>
      </div>
    </section>
  );
}
