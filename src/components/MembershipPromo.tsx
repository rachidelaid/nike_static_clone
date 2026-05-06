import { useState } from "react";
import type { FormEvent } from "react";

interface MembershipPromoData {
  readonly title: string;
  readonly body: string;
  readonly placeholder: string;
  readonly cta: string;
}

export interface MembershipPromoProps {
  readonly data: MembershipPromoData;
  readonly statusMessage?: string | null;
  readonly onJoin: (email: string) => void;
}

export function MembershipPromo({ data, statusMessage, onJoin }: MembershipPromoProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onJoin(email);
  }

  return (
    <section className="bg-warm-canvas px-6 py-20 sm:px-10 lg:px-20" id="membership">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-xl bg-primary lg:grid-cols-2">
        <div className="p-8 text-on-primary sm:p-12 lg:p-16">
          <p className="mb-4 font-label text-xs font-black uppercase tracking-[0.24em] text-action-volt">
            APEX+ Membership
          </p>
          <h2 className="font-headline text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            {data.title}
          </h2>
        </div>
        <div className="flex flex-col justify-center bg-surface-container-lowest p-8 sm:p-12 lg:p-16">
          <p className="mb-8 max-w-md text-lg font-medium leading-relaxed text-on-surface-variant">
            {data.body}
          </p>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
            <input
              className="min-h-12 flex-1 rounded-lg border border-outline-variant bg-surface px-4 text-primary outline-none transition placeholder:text-on-surface-variant focus:border-primary"
              placeholder={data.placeholder}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className="min-h-12 rounded-lg bg-primary px-6 font-label text-xs font-black uppercase tracking-[0.16em] text-on-primary transition hover:bg-on-surface-variant"
              type="submit"
            >
              {data.cta}
            </button>
          </form>
          {statusMessage ? (
            <p className="mt-4 text-sm font-semibold text-secondary">{statusMessage}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
