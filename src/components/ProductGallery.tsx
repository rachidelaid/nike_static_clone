import type { ProductGalleryImage } from "../data/mockData";

export interface ProductGalleryProps {
  readonly images: readonly ProductGalleryImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [heroImage, ...detailImages] = images;

  return (
    <div className="space-y-4">
      {heroImage ? (
        <div className="aspect-[4/5] overflow-hidden bg-surface-container">
          <img className="size-full object-cover" src={heroImage.src} alt={heroImage.alt} />
        </div>
      ) : null}
      <div className="grid grid-cols-3 gap-4">
        {detailImages.map((image) => (
          <div className="aspect-square overflow-hidden bg-surface-container" key={image.src}>
            <img className="size-full object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
