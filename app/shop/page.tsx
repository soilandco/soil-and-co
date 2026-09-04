import PageHero from '@/components/ui/PageHero';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import Button from '@/components/ui/Button';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { shop } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'SHOP',
  description: shop.description,
  path: '/shop',
});

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="GOODS / SHOP"
        title={shop.lead}
        description={shop.description}
        icon="🛍️"
        tone="moss"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {shop.categories.map((category, index) => (
              <PlaceholderImage
                key={category}
                label={category}
                icon={['👕', '☕', '🪴'][index % 3]}
                tone={(['moss', 'navy', 'green'] as const)[index % 3]}
                aspect="aspect-[5/4]"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 rounded-xl2 border border-brand-navy/10 bg-cream-soft p-8 text-center">
            <p className="text-sm leading-relaxed text-brand-navy/70">{shop.externalShop.note}</p>
            <Button href={shop.externalShop.url} variant="primary">
              {shop.externalShop.label}
            </Button>
          </div>
        </div>
      </section>

      <CrossLinkSection page="shop" />
    </>
  );
}
