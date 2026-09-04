import PlaceholderImage from '@/components/ui/PlaceholderImage';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  tone?: 'moss' | 'green' | 'navy' | 'mixed';
};

/**
 * 各サービスページ共通のページ先頭ブロック。
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  icon = '🌿',
  tone = 'mixed',
}: PageHeroProps) {
  return (
    <section className="section-padding pb-14 pt-16 md:pb-16">
      <div className="mx-auto grid w-full max-w-content items-center gap-10 px-6 md:px-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-bold tracking-widest text-brand-moss">{eyebrow}</span>
          <h1 className="text-3xl font-bold leading-snug text-brand-navy md:text-4xl">{title}</h1>
          <p className="text-base leading-relaxed text-brand-navy/75">{description}</p>
        </div>
        <PlaceholderImage label={title} icon={icon} tone={tone} aspect="aspect-[4/3]" />
      </div>
    </section>
  );
}
