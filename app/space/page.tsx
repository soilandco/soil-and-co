import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import AccessSection from '@/components/AccessSection';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { rentalSpace } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'RENTAL SPACE',
  description: rentalSpace.description,
  path: '/space',
});

export default function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="RENTAL SPACE"
        title={rentalSpace.lead}
        description={rentalSpace.description}
        icon="⛺️"
        tone="navy"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rentalSpace.features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-4 rounded-xl2 border border-brand-navy/10 bg-cream-soft p-5"
              >
                <span className="text-3xl" aria-hidden="true">
                  {feature.icon}
                </span>
                <div>
                  <p className="text-sm font-bold tracking-widest text-brand-moss">
                    {feature.label}
                  </p>
                  <p className="text-sm text-brand-navy/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-xl2 border border-brand-navy/10 bg-cream-soft p-8 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-brand-navy/70">
              {rentalSpace.usageNote}
            </p>
            <Button href="/contact">レンタルスペースについて問い合わせる</Button>
          </div>
        </div>
      </section>

      <AccessSection />
      <CrossLinkSection page="space" />
    </>
  );
}
