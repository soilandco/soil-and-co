import SectionTitle from '@/components/SectionTitle';
import ContactSection from '@/components/ContactSection';
import { buildMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'CONTACT',
  description: `${siteConfig.name}へのお問い合わせはこちらから。`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle
          eyebrow="CONTACT"
          title="お問い合わせ"
          subtitle="キッチンカー・レンタルスペース・庭のご相談・植物・イベントなど、カテゴリーを選んでお気軽にご連絡ください。"
          as="h1"
        />
        <ContactSection />
      </div>
    </section>
  );
}
