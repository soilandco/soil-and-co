import Image from 'next/image';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-content items-center gap-10 px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-brand-moss-light px-4 py-1.5 text-xs font-bold tracking-widest text-brand-moss">
            {siteConfig.name}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg leading-relaxed text-brand-navy/80">
            自然の中で、コーヒーを。
            <br />
            植物と遊び、人とつながる。
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/kitchen-car" variant="primary">
              KITCHEN CAR
            </Button>
            <Button href="#access" variant="outline">
              ACCESS
            </Button>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl2 bg-cream-soft shadow-soft">
          <Image
            src="/images/hero-feel-the-green.png"
            alt="HEK CAFE(Soil&Co.のキッチンカー)のブランドビジュアル"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
