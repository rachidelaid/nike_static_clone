import { Link } from "@tanstack/react-router";

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface FooterProps {
  readonly columns: readonly FooterColumn[];
}

export function Footer({ columns }: FooterProps) {
  return (
    <footer className="bg-primary px-6 py-14 text-on-primary sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <h2 className="font-headline text-3xl font-black tracking-[-0.06em]">APEX FORM</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-inverse-on-surface">
            Premium athletic layers engineered for movement, pressure, and presence.
          </p>
          <p className="mt-8 font-label text-[10px] font-black uppercase tracking-[0.2em] text-action-volt">
            © 2026 APEX FORM
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-label text-xs font-black uppercase tracking-[0.2em] text-action-volt">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-inverse-on-surface">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "/contact" || link.href === "/products" ? (
                      <Link className="transition hover:text-on-primary" to={link.href}>
                        {link.label}
                      </Link>
                    ) : (
                      <a className="transition hover:text-on-primary" href={link.href}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
