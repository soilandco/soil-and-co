import Image from 'next/image';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  tone?: 'moss' | 'green' | 'navy' | 'mixed';
  imageSrc?: string;
  imageAlt?: string;
  // 'cover'(既定): 枠いっぱいに写真を敷き詰める(実写真向け)
  // 'contain': 余白を残して全体を収める(テキスト入りグラフィックなど、切れると困る画像向け)
  imageFit?: 'cover' | 'contain';
  // 画像枠の比率。既定は4:3。画像の実際の比率に合わせて変更できる(例: 正方形の画像なら 'aspect-square')
  imageAspect?: string;
};

/**
 * 各サービスページ共通のページ先頭ブロック。
 * imageSrc を渡すとプレースホルダーの代わりに実写真を表示する。
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  icon = '🌿',
  tone = 'mixed',
  imageSrc,
  imageAlt,
  imageFit = 'cover',
  imageAspect = 'aspect-[4/3]',
}: PageHeroProps) {
  return (
    <section className="section-padding pb-14 pt-16 md:pb-16">
      <div className="mx-auto grid w-full max-w-content items-center gap-10 px-6 md:px-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-bold tracking-widest text-brand-moss">{eyebrow}</span>
          <h1 className="text-3xl font-bold leading-snug text-brand-navy md:text-4xl">{title}</h1>
          <p className="text-base leading-relaxed text-brand-navy/75">{description}</p>
        </div>
        {imageSrc ? (
          <div className={`relative w-full overflow-hidden rounded-xl2 bg-cream-soft shadow-soft ${imageAspect}`}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
            />
          </div>
        ) : (
          <PlaceholderImage label={title} icon={icon} tone={tone} aspect={imageAspect} />
        )}
      </div>
    </section>
  );
}
