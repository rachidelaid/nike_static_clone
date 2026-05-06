export interface LogoMarkProps extends Readonly<Record<string, never>> {}

export function LogoMark(_props: LogoMarkProps) {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
