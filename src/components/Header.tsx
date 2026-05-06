import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

interface HeaderData {
  readonly announcement: string;
  readonly announcementAction: string;
  readonly navItems: readonly string[];
  readonly brandName: string;
  readonly bagCount: number;
}

export interface HeaderProps {
  readonly data: HeaderData;
}

export function Header({ data }: HeaderProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2 text-center font-label text-[10px] font-bold uppercase tracking-[0.22em] text-on-primary">
        <span>{data.announcement}</span>
        <Link
          className="text-action-volt underline underline-offset-4 transition hover:text-on-primary"
          to="/products"
        >
          {data.announcementAction}
        </Link>
      </div>
      <header className="sticky top-0 z-50 border-b border-surface-variant bg-surface/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-6">
          <nav className="hidden items-center gap-8 font-label text-xs font-bold uppercase tracking-[0.14em] lg:flex">
            {data.navItems.map((item) => (
              <Link
                className={
                  item === "New Drops"
                    ? "flex items-center gap-2 text-secondary-container transition hover:text-primary"
                    : "text-on-background transition hover:text-on-surface-variant"
                }
                to="/products"
                key={item}
              >
                {item}
                {item === "New Drops" ? (
                  <span className="size-1.5 rounded-full bg-action-volt" />
                ) : null}
              </Link>
            ))}
          </nav>
          <button
            className="rounded-lg p-2 text-on-background transition hover:bg-surface-container lg:hidden"
            type="button"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-primary" />
            <span className="mt-1.5 block h-0.5 w-5 bg-primary" />
          </button>
          <Link
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-primary transition hover:text-on-surface-variant"
            to="/"
          >
            <LogoMark />
            <span className="font-headline text-2xl font-bold tracking-[-0.06em]">
              {data.brandName}
            </span>
          </Link>
          <div className="flex items-center gap-3 text-sm font-semibold lg:gap-6">
            <button
              className="hidden text-on-background transition hover:text-on-surface-variant sm:inline"
              type="button"
            >
              Search
            </button>
            <button
              className="hidden text-on-background transition hover:text-on-surface-variant md:inline"
              type="button"
            >
              Account
            </button>
            <button
              className="relative rounded-full px-2 py-1 text-on-background transition hover:bg-surface-container"
              type="button"
            >
              Bag
              <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-action-volt px-1 text-[10px] font-black text-primary">
                {data.bagCount}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
