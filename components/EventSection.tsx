import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/SectionTitle';
import { event } from '@/lib/site-config';

export default function EventSection() {
  return (
    <section id="event" className="section-padding bg-cream-soft">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle
          eyebrow="PRIORITY 06 / EVENT"
          title={event.lead}
          subtitle={event.description}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/images/event-hero.png"
              alt="Music Forest - Soil&Co.のDJイベント"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {event.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-brand-navy/70 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-brand-navy/70">
              開催予定のイベントはEVENTページでご案内します。最新情報はInstagramでも発信予定です。
            </p>
            <Button href="/event" className="self-start">
              EVENTを見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
