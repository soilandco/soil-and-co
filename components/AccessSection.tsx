import { access } from '@/lib/site-config';
import SectionTitle from '@/components/SectionTitle';

export default function AccessSection() {
  return (
    <section id="access" className="section-padding bg-cream-soft">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle eyebrow="ACCESS" title="Soil&Co.への行き方。" subtitle={access.note} />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 bg-brand-navy/5">
            {access.googleMapsEmbedUrl ? (
              <iframe
                src={access.googleMapsEmbedUrl}
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Soil&Co. Google Maps"
              />
            ) : (
              <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-2 text-brand-navy/40">
                <span className="text-4xl" aria-hidden="true">
                  🗺️
                </span>
                <span className="text-xs font-bold tracking-widest">GOOGLE MAP 準備中</span>
              </div>
            )}
          </div>

          <dl className="grid gap-6 self-start rounded-xl2 border border-brand-navy/10 bg-white p-8">
            <div>
              <dt className="text-xs font-bold tracking-widest text-brand-moss">ADDRESS</dt>
              <dd className="mt-1 text-base text-brand-navy/80">{access.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-brand-moss">
                OPENING HOURS
              </dt>
              <dd className="mt-1 text-base text-brand-navy/80">{access.openingHours}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-brand-moss">PARKING</dt>
              <dd className="mt-1 text-base text-brand-navy/80">{access.parking}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-brand-moss">
                ACCESS INFO
              </dt>
              <dd className="mt-1 text-base text-brand-navy/80">
                キッチンカーをご利用の方も、レンタルスペースをご利用の方も、まずはこちらの地図をご確認ください。
              </dd>
            </div>
            <a
              href={access.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-brand-green underline underline-offset-4"
            >
              Google Mapsで開く →
            </a>
          </dl>
        </div>
      </div>
    </section>
  );
}
