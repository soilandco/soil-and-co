import Button from '@/components/ui/Button';
import { about, siteConfig } from '@/lib/site-config';

/**
 * ホームページ内のABOUTセクション(#11)。
 * ConceptStripが「要約」なのに対し、こちらはご指定の文章をベースにしたフルバージョン。
 */
export default function AboutSummarySection() {
  return (
    <section id="about" className="section-padding bg-brand-navy text-white">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-8 px-6 text-center md:px-10">
        <span className="text-xs font-bold tracking-widest text-brand-orange">ABOUT</span>
        <h2 className="text-3xl font-bold md:text-4xl">{about.lead}</h2>

        <p className="text-lg leading-loose text-white/90">
          {about.story.map((line, index) => (
            <span key={line}>
              {line}
              {index < about.story.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="flex max-w-2xl flex-col gap-4 text-sm leading-relaxed text-white/75 md:text-base">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="pt-2 text-base font-bold tracking-wide">
          {siteConfig.brandMessage.en}
          <br />
          <span className="font-normal text-white/70">{siteConfig.brandMessage.ja}</span>
        </p>

        <Button href="/about" variant="primary">
          soil&amp;co.についてもっと見る
        </Button>
      </div>
    </section>
  );
}
