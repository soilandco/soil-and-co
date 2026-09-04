import PlaceholderImage from '@/components/ui/PlaceholderImage';
import SectionTitle from '@/components/SectionTitle';
import { buildMetadata } from '@/lib/metadata';
import { about, siteConfig } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'ABOUT',
  description: siteConfig.description,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pb-14 pt-16 md:pb-16">
        <div className="mx-auto grid w-full max-w-content items-center gap-10 px-6 md:px-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="ABOUT" title={about.lead} align="left" as="h1" />
            <p className="text-lg leading-loose text-brand-navy/85">
              {about.story.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < about.story.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <PlaceholderImage label="soil&co.の日常" icon="🌱" tone="mixed" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="section-padding bg-brand-navy text-white">
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-6 px-6 text-center md:px-10">
          <div className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-white/85">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="pt-2 text-lg font-bold tracking-wide">
            {siteConfig.brandMessage.en}
            <br />
            <span className="text-base font-normal text-white/70">
              {siteConfig.brandMessage.ja}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
