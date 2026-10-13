import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const discoverItems = [
  {
    href: '/plants',
    eyebrow: 'PLANTS',
    title: '植物を、連れて帰る。',
    description: '植物・グリーンの販売。暮らしに寄り添う一鉢を見つけてください。',
    icon: '🪴',
    tone: 'green' as const,
    imageSrc: '/images/card-plants.png',
  },
  {
    href: '/shop',
    eyebrow: 'GOODS',
    title: 'Soil&Co.を、暮らしの中へ。',
    description: 'オリジナルグッズ、コーヒー・植物関連の商品を取り扱っています。オンラインショップでも購入可能です。',
    icon: '🛍️',
    tone: 'moss' as const,
    imageSrc: '/images/card-goods.png',
  },
  {
    href: '/space',
    eyebrow: 'RENTAL SPACE',
    title: 'コーヒーを飲むだけじゃ、もったいない。',
    description: 'BBQ、焚き火、テントサウナ、DIYなど、自然の中で自由な時間を。',
    icon: '⛺️',
    tone: 'navy' as const,
    imageSrc: '/images/card-rental-space.png',
  },
];

export default function DiscoverSection() {
  return (
    <section className="section-padding bg-cream-soft">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle
          eyebrow="DISCOVER SOIL&CO."
          title="コーヒーだけじゃない。"
          subtitle="Soil&Co.には、もう少し楽しみがあります。"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {discoverItems.map((item) => (
            <ServiceCard key={item.href} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
