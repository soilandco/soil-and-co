import Link from 'next/link';
import { siteConfig, about } from '@/lib/site-config';

/**
 * ヒーロー直後に置く「soil&co.とは何か」の要約帯。
 * ABOUTページのフルストーリーを読まずにスクロールをやめてしまう訪問者にも、
 * soil&co.が単なるコーヒートラックではなく1つの世界観であることを最初に伝える。
 */
export default function ConceptStrip() {
  return (
    <section className="border-y border-brand-navy/5 bg-brand-green-light/40">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 px-6 py-14 text-center md:px-10">
        <p className="text-sm font-bold tracking-[0.2em] text-brand-green">
          {siteConfig.brandMessage.en}
        </p>
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
          {siteConfig.brandMessage.ja}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-brand-navy/75 md:text-base">
          {about.paragraphs[0]} {about.paragraphs[1]}
        </p>
        <Link
          href="/about"
          className="text-sm font-bold text-brand-green underline underline-offset-4"
        >
          soil&amp;co.について →
        </Link>
      </div>
    </section>
  );
}
