/**
 * 実際の写真が用意できるまでの仮素材コンポーネント。
 * 「写真を大きく使う」というデザイン方針に合わせて、レイアウト上は写真と同じ比率・余白で
 * 表示されるようにしています。実際の撮影素材が揃ったら、このコンポーネントの呼び出し箇所を
 * next/image の <Image src="/images/xxx.jpg" ... /> に置き換えてください。
 */

type PlaceholderImageProps = {
  label: string;
  icon?: string;
  tone?: 'moss' | 'green' | 'navy' | 'mixed';
  className?: string;
  aspect?: string; // Tailwindのaspect-*クラス
};

const toneStyles: Record<NonNullable<PlaceholderImageProps['tone']>, string> = {
  moss: 'from-brand-moss-light via-cream to-brand-moss/30',
  green: 'from-brand-green-light via-cream to-brand-green/20',
  navy: 'from-brand-navy/10 via-cream to-brand-moss-light',
  mixed: 'from-brand-moss-light via-brand-green-light to-cream',
};

export default function PlaceholderImage({
  label,
  icon = '🌿',
  tone = 'mixed',
  className = '',
  aspect = 'aspect-[4/3]',
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl2 bg-gradient-to-br ${toneStyles[tone]} ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-navy/50">
        <span className="text-5xl" aria-hidden="true">
          {icon}
        </span>
        <span className="text-xs font-bold tracking-widest">PHOTO PLACEHOLDER</span>
      </div>
      <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-brand-navy/70 backdrop-blur">
        {label}
      </span>
    </div>
  );
}
