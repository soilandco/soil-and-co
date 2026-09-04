import PageHero from '@/components/ui/PageHero';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { event, instagram } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'EVENT',
  description: event.description,
  path: '/event',
});

export default function EventPage() {
  return (
    <>
      <PageHero
        eyebrow="EVENT"
        title={event.lead}
        description={event.description}
        icon="🎶"
        tone="mixed"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {event.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-cream-soft px-4 py-1.5 text-xs font-bold text-brand-navy/70"
              >
                {category}
              </span>
            ))}
          </div>

          {event.upcoming.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {event.upcoming.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl2 border border-brand-navy/10 bg-cream-soft p-6"
                >
                  <p className="text-xs font-bold tracking-widest text-brand-orange">
                    {item.date}
                  </p>
                  <p className="mt-1 text-lg font-bold text-brand-navy">{item.title}</p>
                  <p className="mt-2 text-sm text-brand-navy/70">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 rounded-xl2 border border-dashed border-brand-navy/20 p-10 text-center">
              <p className="text-sm font-semibold text-brand-navy/60">
                現在開催予定のイベントはありません。
              </p>
              <p className="text-xs text-brand-navy/45">
                開催が決まり次第、こちらのページとInstagram({instagram.handle})でお知らせします。
              </p>
            </div>
          )}
        </div>
      </section>

      <CrossLinkSection page="event" />
    </>
  );
}
