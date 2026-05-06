export interface CommerceStoryBandProps {
  readonly title: string;
  readonly body?: string;
  readonly cta?: string;
}

export function CommerceStoryBand({ title, body, cta }: CommerceStoryBandProps) {
  return (
    <section className="bg-primary px-8 py-24 text-center text-on-primary sm:px-12 lg:py-32">
      <h2 className="mx-auto max-w-3xl font-headline text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-on-primary sm:text-6xl">
        {title}
      </h2>
      {body ? (
        <p className="mx-auto mt-7 max-w-2xl font-label text-xs uppercase leading-loose tracking-[0.22em] text-primary-fixed-dim">
          {body}
        </p>
      ) : null}
      {cta ? (
        <button
          className="mt-10 bg-action-volt px-10 py-5 font-label text-xs font-black uppercase tracking-[0.2em] text-primary transition hover:opacity-85"
          type="button"
        >
          {cta}
        </button>
      ) : null}
    </section>
  );
}
