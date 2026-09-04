import Link from 'next/link';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { instagram } from '@/lib/site-config';

/**
 * KITCHEN CARセクション内に置く小さなInstagram証拠ブロック。
 * 「実際に営業している場所である」ことを写真で補強する目的。
 * 全topicsを見せる大きなグリッドはInstagramSectionとして別途下部に用意している。
 */
export default function InstagramTeaser() {
  const preview = instagram.topics.slice(0, 4);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-2">
        {preview.map((topic, index) => (
          <PlaceholderImage
            key={topic}
            label={topic}
            icon={['☕', '🚚', '🪴', '🎉'][index % 4]}
            tone={(['orange', 'green', 'navy', 'mixed'] as const)[index % 4]}
            aspect="aspect-square"
          />
        ))}
      </div>
      <Link
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-bold text-brand-navy/60 underline underline-offset-4 hover:text-brand-orange"
      >
        今日の様子をInstagramで見る({instagram.handle})
      </Link>
    </div>
  );
}
