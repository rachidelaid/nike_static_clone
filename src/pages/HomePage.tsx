import { CollectionStory } from "../components/CollectionStory";
import { EditorialTiles } from "../components/EditorialTiles";
import { HeroSection } from "../components/HeroSection";
import { MembershipPromo } from "../components/MembershipPromo";
import { ProductCarousel } from "../components/ProductCarousel";
import {
  collectionStory,
  editorialTiles,
  heroData,
  membershipPromo,
  products,
} from "../data/mockData";
import { useCartActions } from "../hooks/useCartActions";

export interface HomePageProps extends Readonly<Record<string, never>> {}

export function HomePage(_props: HomePageProps) {
  const { addedItem, handleQuickAdd, handleJoin } = useCartActions();
  const membershipStatus = addedItem?.includes("APEX+") ? addedItem : null;

  return (
    <main>
      <HeroSection data={heroData} onQuickAdd={handleQuickAdd} />
      <ProductCarousel products={products} addedItem={addedItem} onQuickAdd={handleQuickAdd} />
      <CollectionStory data={collectionStory} />
      <EditorialTiles tiles={editorialTiles} />
      <MembershipPromo
        data={membershipPromo}
        statusMessage={membershipStatus}
        onJoin={handleJoin}
      />
    </main>
  );
}
