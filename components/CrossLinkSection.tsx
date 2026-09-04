import Link from 'next/link';
import { crossLinks } from '@/lib/site-config';

/**
 * 下層ページ共通の「他サービスへの導線」モジュール。
 * ホームページ経由ではなく、検索やSNSから直接このページに来た訪問者にも
 * soil&co.の他の楽しみ方を発見してもらうために、全下層ページの末尾(Footer直前)に置く。
 */
export default function CrossLinkSection({ page }: { page: keyof typeof crossLinks }) {
  const data = crossLinks[page];
  if (!data) return null;

  return (
    <section className="section-padding bg-cream-soft">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <p className="mb-8 text-center text-sm font-bold tracking-widest text-brand-moss">
          {data.lead}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-4 rounded-xl2 border border-brand-navy/10 bg-white p-6 transition-colors hover:border-brand-moss"
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-green">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-brand-navy/70">{item.description}</p>
              </div>
              <span className="text-brand-moss transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
