import Link from 'next/link';
import Image from 'next/image';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

type ServiceCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  tone?: 'moss' | 'green' | 'navy' | 'mixed';
  imageSrc?: string;
};

export default function ServiceCard({
  href,
  eyebrow,
  title,
  description,
  icon,
  tone = 'mixed',
  imageSrc,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl2 bg-white shadow-soft transition-transform duration-200 hover:-translate-y-1"
    >
      {imageSrc ? (
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={eyebrow}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <PlaceholderImage label={eyebrow} icon={icon} tone={tone} aspect="aspect-[5/4]" />
      )}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs font-bold tracking-widest text-brand-moss">
          {eyebrow}
        </span>
        <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
        <p className="text-sm leading-relaxed text-brand-navy/70">{description}</p>
        <span className="mt-auto pt-3 text-sm font-bold text-brand-green group-hover:underline">
          詳しく見る →
        </span>
      </div>
    </Link>
  );
}
