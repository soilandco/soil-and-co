import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/SectionTitle';
import MenuList from '@/components/ui/MenuList';
import InstagramTeaser from '@/components/InstagramTeaser';
import { kitchenCar, instagram } from '@/lib/site-config';

export default function KitchenCarSection() {
  return (
    <section id="kitchen-car" className="section-padding bg-white">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle eyebrow="PRIORITY 01 / KITCHEN CAR" title={kitchenCar.lead} align="center" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl2 bg-cream-soft shadow-soft">
            <Image
              src="/images/insta-kitchen-car.png"
              alt="HEK CAFEのキッチンカー出店スケジュール"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-brand-navy/80">{kitchenCar.description}</p>
            <MenuList />
            <p className="text-xs leading-relaxed text-brand-navy/50">{kitchenCar.hours.note}</p>

            <InstagramTeaser />

            <div className="flex flex-wrap gap-4">
              <Button href="/kitchen-car">KITCHEN CARを見る</Button>
              <Button href={instagram.url} variant="outline">
                Instagramをチェック
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
