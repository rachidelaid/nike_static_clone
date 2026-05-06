export interface CatalogControlsProps {
  readonly resultCount: string;
  readonly sortOptions: readonly string[];
  readonly activeChips: readonly string[];
  readonly selectedSort: string;
  readonly selectedView: "grid" | "list";
  readonly onSortChange: (sort: string) => void;
  readonly onViewChange: (view: "grid" | "list") => void;
  readonly onChipSelect: (chip: string) => void;
}

export function CatalogControls({
  resultCount,
  sortOptions,
  activeChips,
  selectedSort,
  selectedView,
  onSortChange,
  onViewChange,
  onChipSelect,
}: CatalogControlsProps) {
  return (
    <div className="sticky top-16 z-30 border-b border-outline-variant/40 bg-background/95 py-5 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-label text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            {resultCount}
          </span>
          <label className="flex items-center gap-3 text-sm text-on-surface-variant">
            <span>Sort by:</span>
            <select
              className="border-none bg-transparent font-semibold text-primary outline-none"
              value={selectedSort}
              onChange={(event) => onSortChange(event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {activeChips.map((chip, index) => (
            <button
              className={
                index === 0
                  ? "bg-action-volt px-5 py-3 font-label text-[11px] font-black uppercase tracking-[0.18em] text-primary transition hover:opacity-85"
                  : "border border-outline-variant px-5 py-3 font-label text-[11px] font-black uppercase tracking-[0.18em] text-primary transition hover:bg-surface-container"
              }
              type="button"
              key={chip}
              onClick={() => onChipSelect(chip)}
            >
              {chip}
            </button>
          ))}
          <div className="ml-2 flex border-l border-outline-variant/50 pl-5">
            <button
              className={selectedView === "grid" ? "px-2 text-primary" : "px-2 text-outline"}
              type="button"
              onClick={() => onViewChange("grid")}
              aria-label="Grid view"
            >
              Grid
            </button>
            <button
              className={selectedView === "list" ? "px-2 text-primary" : "px-2 text-outline"}
              type="button"
              onClick={() => onViewChange("list")}
              aria-label="List view"
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
