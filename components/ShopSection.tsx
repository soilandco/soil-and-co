import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/ui/Button';
import { shop } from '@/lib/site-config';

/**
 * GOODS/SHOPの単体ブロック(h2見出し)。
 * 現在ホームページではDiscoverSectionが同等の役割を担っているため未使用ですが、
 * 今後ホームページ構成を見直す際などにそのまま利用できるよう残しています。
 * /shop ページ自体はh1を確保するためPageHeroベースの構成を採用しています。
 */

export default function ShopSection() {
  return (
    <section className="section-padding bg-cream-soft">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle eyebrow="PRIORITY 05 / GOODS & SHOP" title={shop.lead} subtitle={shop.description} />

        <div className="flex flex-col items-center gap-3 rounded-xl2 border border-brand-navy/10 bg-white p-8 text-center">
          <p className="text-sm leading-relaxed text-brand-navy/70">{shop.externalShop.note}</p>
          <Button href={shop.externalShop.url} variant="primary">
            {shop.externalShop.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
