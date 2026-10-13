import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { plants } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'PLANTS',
  description: plants.description,
  path: '/plants',
});

export default function PlantsPage() {
  return (
    <>
      <PageHero
        eyebrow="PLANTS"
        title={plants.lead}
        description={plants.description}
        icon="🪴"
        tone="green"
        imageSrc="/images/card-plants.png"
        imageAlt="Soil&Co.の植物"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 px-6 text-center md:px-10">
          <p className="max-w-xl text-sm leading-relaxed text-brand-navy/70">
            取り扱う植物のラインナップは季節によって変わります。実際に手に取って選べるよう、店頭でのご案内を中心にしています。育て方に迷ったときは、GARDEN
            SERVICEのご相談もあわせてご利用ください。
          </p>
          <Button href="/garden" variant="secondary">
            GARDEN SERVICEを見る
          </Button>
        </div>
      </section>

      <CrossLinkSection page="plants" />
    </>
  );
}
