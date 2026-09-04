import PlaceholderImage from '@/components/ui/PlaceholderImage';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/ui/Button';
import { plants } from '@/lib/site-config';

/**
 * PLANTSの単体ブロック(h2見出し)。
 * 現在ホームページではDiscoverSectionが同等の役割を担っているため未使用ですが、
 * 今後ホームページ構成を見直す際などにそのまま利用できるよう残しています。
 * /plants ページ自体はh1を確保するためPageHeroベースの構成を採用しています。
 */

export default function PlantSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PlaceholderImage label="植物・グリーン販売" icon="🪴" tone="green" aspect="aspect-[4/3]" />
          <div>
            <SectionTitle eyebrow="PRIORITY 04 / PLANTS" title={plants.lead} align="left" />
            <p className="mb-8 text-base leading-relaxed text-brand-navy/75">{plants.description}</p>
            <Button href="/garden" variant="secondary">
              庭づくりの相談もできます
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
