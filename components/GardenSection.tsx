import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/SectionTitle';
import { garden } from '@/lib/site-config';

export default function GardenSection() {
  return (
    <section id="garden" className="section-padding bg-white">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle
              eyebrow="PRIORITY 03 / GARDEN & GREEN"
              title={garden.lead}
              subtitle={garden.description}
              align="left"
            />

            <ul className="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-brand-navy/75">
              {garden.services.map((service) => (
                <li key={service.title} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                  {service.title}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button href="/garden" variant="secondary">
                GARDEN SERVICEを見る
              </Button>
              <Button href="/contact" variant="outline">
                相談する
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="/images/garden-section.png"
                alt="soil&co. GARDENINGのブランドカード"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
