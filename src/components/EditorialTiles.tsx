interface EditorialTile {
  readonly title: string;
  readonly label: string;
  readonly caption: string;
  readonly imageUrl: string;
}

export interface EditorialTilesProps {
  readonly tiles: readonly EditorialTile[];
}

export function EditorialTiles({ tiles }: EditorialTilesProps) {
  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-20 lg:py-28" id="stories">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-8">
          <h2 className="font-headline text-5xl font-black uppercase leading-none tracking-[-0.06em] text-primary md:text-7xl">
            Field notes
          </h2>
          <p className="hidden max-w-xs text-sm font-medium text-on-surface-variant md:block">
            Capsules, campaigns, and styling systems from the APEX FORM performance floor.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-[220px_220px]">
          {tiles.map((tile, index) => (
            <article
              className={
                index === 0
                  ? "group relative overflow-hidden rounded-xl bg-primary lg:row-span-2"
                  : "group relative overflow-hidden rounded-xl bg-primary"
              }
              key={tile.title}
            >
              <img
                className="size-full min-h-[320px] object-cover opacity-80 transition duration-500 group-hover:scale-105 lg:min-h-0"
                src={tile.imageUrl}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-primary">
                <p className="mb-3 font-label text-[10px] font-black uppercase tracking-[0.2em] text-action-volt">
                  {tile.label}
                </p>
                <h3 className="font-headline text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {tile.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-inverse-on-surface">
                  {tile.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
