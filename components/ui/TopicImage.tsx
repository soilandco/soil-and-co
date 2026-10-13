import Image from 'next/image';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

type TopicImageProps = {
  topic: string;
  icon?: string;
  tone?: 'moss' | 'green' | 'navy' | 'mixed';
  aspect?: string;
  sizes?: string;
};

/**
 * instagram.topics の各トピックに対応する実写真があればそれを表示し、
 * なければ PlaceholderImage にフォールバックする共通コンポーネント。
 * 写真が揃い次第 topicImageMap にエントリを追加するだけで差し替えられる。
 */
export const topicImageMap: Record<string, string> = {
  'コーヒー': '/images/insta-coffee.png',
  'キッチンカー': '/images/insta-kitchen-car.png',
  '植物': '/images/insta-plants.png',
  'レンタルスペース': '/images/insta-rental-space.png',
};

export default function TopicImage({
  topic,
  icon = '🌿',
  tone = 'mixed',
  aspect = 'aspect-square',
  sizes = '(min-width: 768px) 25vw, 50vw',
}: TopicImageProps) {
  const src = topicImageMap[topic];

  if (!src) {
    return <PlaceholderImage label={topic} icon={icon} tone={tone} aspect={aspect} />;
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-xl2 bg-cream-soft shadow-soft ${aspect}`}>
      <Image src={src} alt={topic} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
