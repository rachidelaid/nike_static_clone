import { ChevronDown } from "lucide-react";
import type { FilterSection } from "../data/mockData";

export interface ProductFilterRailProps {
  readonly sections: readonly FilterSection[];
  readonly selectedCategories: readonly string[];
  readonly selectedSize: string;
  readonly selectedColors: readonly string[];
  readonly onToggleCategory: (category: string) => void;
  readonly onSelectSize: (size: string) => void;
  readonly onToggleColor: (color: string) => void;
}

const colorClassByLabel: Readonly<Record<string, string>> = {
  Cloud: "bg-surface-container-lowest",
  Ink: "bg-primary",
  "Technical Grey": "bg-technical-grey",
  Volt: "bg-action-volt",
};

export function ProductFilterRail({
  sections,
  selectedCategories,
  selectedSize,
  selectedColors,
  onToggleCategory,
  onSelectSize,
  onToggleColor,
}: ProductFilterRailProps) {
  return (
    <aside className="lg:sticky lg:top-40 lg:self-start">
      <div className="space-y-8">
        {sections.map((section) => (
          <section className="border-b border-outline-variant/45 pb-6" key={section.id}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-label text-sm font-black uppercase tracking-[0.18em] text-primary">
                {section.title}
              </h2>
              <ChevronDown className="size-4 text-outline" aria-hidden="true" strokeWidth={2.4} />
            </div>
            {section.id === "category" ? (
              <div className="space-y-3 text-sm text-on-surface-variant">
                {section.options.map((option) => {
                  const checked = selectedCategories.includes(option.label);

                  return (
                    <label
                      className="flex cursor-pointer items-center gap-3 transition hover:text-primary"
                      key={option.label}
                    >
                      <input
                        className="size-4 border-outline-variant accent-primary"
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleCategory(option.label)}
                      />
                      <span>
                        {option.label}
                        {option.count ? ` (${option.count})` : ""}
                      </span>
                    </label>
                  );
                })}
              </div>
            ) : null}
            {section.id === "size" ? (
              <div className="grid grid-cols-3 gap-2">
                {section.options.map((option) => {
                  const selected = selectedSize === option.label;

                  return (
                    <button
                      className={
                        selected
                          ? "border border-primary bg-primary py-3 text-sm font-semibold text-on-primary"
                          : "border border-outline-variant py-3 text-sm text-on-surface-variant transition hover:border-primary hover:text-primary"
                      }
                      type="button"
                      key={option.label}
                      onClick={() => onSelectSize(option.label)}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            ) : null}
            {section.id === "color" ? (
              <div className="flex gap-3">
                {section.options.map((option) => {
                  const selected = selectedColors.includes(option.label);
                  const colorClass = colorClassByLabel[option.label] ?? "bg-outline";

                  return (
                    <button
                      className={`${colorClass} size-7 rounded-full border border-outline-variant ${
                        selected ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                      }`}
                      type="button"
                      key={option.label}
                      onClick={() => onToggleColor(option.label)}
                      aria-label={`Filter ${option.label}`}
                    />
                  );
                })}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </aside>
  );
}
