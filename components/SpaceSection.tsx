import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/SectionTitle';
import { rentalSpace } from '@/lib/site-config';

export default function SpaceSection() {
  return (
    <section id="space" className="section-padding bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle
          eyebrow="PRIORITY 02 / RENTAL SPACE"
          title={rentalSpace.lead}
          subtitle={rentalSpace.description}
          light
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rentalSpace.features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-4 rounded-xl2 bg-white/5 p-5 backdrop-blur"
            >
              <span className="text-3xl" aria-hidden="true">
                {feature.icon}
              </span>
              <div>
                <p className="text-sm font-bold tracking-widest text-brand-moss">
                  {feature.label}
                </p>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/images/space-hero.png"
              alt="レンタルスペースで食事を楽しむ様子"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-sm leading-relaxed text-white/70">{rentalSpace.usageNote}</p>
            <Button href="/space" variant="primary">
              RENTAL SPACEを見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
