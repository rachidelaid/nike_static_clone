import { Link } from "@tanstack/react-router";
import { contactData } from "../data/mockData";
import { useContactForm } from "../hooks/useContactForm";

export interface ContactPageProps extends Readonly<Record<string, never>> {}

export function ContactPage(_props: ContactPageProps) {
  const { status, handleSubmit } = useContactForm();

  return (
    <main className="bg-background">
      <section className="grid min-h-[calc(100vh-96px)] bg-surface lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
          <Link
            className="mb-10 inline-flex w-fit rounded-full border border-outline-variant px-4 py-2 font-label text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant transition hover:border-primary hover:text-primary"
            to="/"
          >
            Back to store
          </Link>
          <p className="mb-5 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
            {contactData.eyebrow}
          </p>
          <h1 className="max-w-4xl font-headline text-6xl font-black uppercase leading-[0.86] tracking-[-0.06em] text-primary md:text-8xl">
            {contactData.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-on-surface-variant md:text-xl">
            {contactData.body}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {contactData.stats.map((stat) => (
              <div className="rounded-xl bg-surface-container p-5" key={stat}>
                <p className="font-label text-xs font-black uppercase tracking-[0.18em] text-primary">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden bg-primary">
          <img
            className="absolute inset-0 size-full object-cover opacity-80"
            src={contactData.imageUrl}
            alt={contactData.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-on-surface-variant/40 bg-primary/70 p-6 text-on-primary backdrop-blur-xl">
            <p className="font-label text-xs font-black uppercase tracking-[0.22em] text-action-volt">
              Priority channels
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactData.contactMethods.map((method) => (
                <div key={method.label}>
                  <p className="font-label text-[10px] font-black uppercase tracking-[0.18em] text-inverse-on-surface">
                    {method.label}
                  </p>
                  <p className="mt-2 font-headline text-lg font-bold tracking-[-0.04em]">
                    {method.value}
                  </p>
                  <p className="mt-1 text-sm text-inverse-on-surface">{method.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-warm-canvas px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl bg-primary p-8 text-on-primary sm:p-10">
            <p className="mb-4 font-label text-xs font-black uppercase tracking-[0.24em] text-action-volt">
              Choose your lane
            </p>
            <div className="grid gap-3">
              {contactData.topics.map((topic) => (
                <div
                  className="rounded-lg border border-on-surface-variant/40 px-5 py-4 font-headline text-2xl font-black uppercase tracking-[-0.05em]"
                  key={topic}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
          <form
            className="rounded-xl bg-surface-container-lowest p-6 shadow-sm sm:p-10"
            onSubmit={handleSubmit}
          >
            <div className="mb-8">
              <p className="mb-3 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
                {contactData.formTitle}
              </p>
              <p className="max-w-xl text-on-surface-variant">{contactData.formBody}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 font-label text-xs font-black uppercase tracking-[0.16em] text-primary">
                Name
                <input
                  className="min-h-12 rounded-lg border border-outline-variant bg-surface px-4 font-body text-base font-medium normal-case tracking-normal outline-none focus:border-primary"
                  name="name"
                  required
                />
              </label>
              <label className="grid gap-2 font-label text-xs font-black uppercase tracking-[0.16em] text-primary">
                Email
                <input
                  className="min-h-12 rounded-lg border border-outline-variant bg-surface px-4 font-body text-base font-medium normal-case tracking-normal outline-none focus:border-primary"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label className="grid gap-2 font-label text-xs font-black uppercase tracking-[0.16em] text-primary md:col-span-2">
                Topic
                <select
                  className="min-h-12 rounded-lg border border-outline-variant bg-surface px-4 font-body text-base font-medium normal-case tracking-normal outline-none focus:border-primary"
                  name="topic"
                  defaultValue="Order support"
                >
                  {contactData.topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 font-label text-xs font-black uppercase tracking-[0.16em] text-primary md:col-span-2">
                Message
                <textarea
                  className="min-h-36 rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body text-base font-medium normal-case tracking-normal outline-none focus:border-primary"
                  name="message"
                  required
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-on-surface-variant">{status}</p>
              <button
                className="min-h-12 rounded-lg bg-primary px-8 font-label text-xs font-black uppercase tracking-[0.16em] text-on-primary transition hover:bg-on-surface-variant"
                type="submit"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
