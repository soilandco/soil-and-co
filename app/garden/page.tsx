import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { garden } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'GARDEN & GREEN',
  description: garden.description,
  path: '/garden',
});

export default function GardenPage() {
  return (
    <>
      <PageHero
        eyebrow="GARDEN & GREEN"
        title={garden.lead}
        description={garden.description}
        icon="🌿"
        tone="green"
        imageSrc="/images/garden-hero.png"
        imageAlt="庭の手入れ・剪定・花壇の様子"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {garden.services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl2 border border-brand-navy/10 bg-cream-soft p-5"
              >
                <p className="text-sm font-bold text-brand-navy">{service.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-brand-navy/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-xl2 bg-brand-green-light/40 p-8 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-brand-navy/75">
              「植木屋」としてではなく、暮らしと植物を楽しむためのサービスとしてご相談いただけます。まずはお気軽にお問い合わせください。
            </p>
            <Button href="/contact">相談する</Button>
          </div>
        </div>
      </section>

      <CrossLinkSection page="garden" />
    </>
  );
}
