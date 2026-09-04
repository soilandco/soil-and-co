import Hero from '@/components/Hero';
import ConceptStrip from '@/components/ConceptStrip';
import KitchenCarSection from '@/components/KitchenCarSection';
import DiscoverSection from '@/components/DiscoverSection';
import SpaceSection from '@/components/SpaceSection';
import GardenSection from '@/components/GardenSection';
import EventSection from '@/components/EventSection';
import AboutSummarySection from '@/components/AboutSummarySection';
import InstagramSection from '@/components/InstagramSection';
import AccessSection from '@/components/AccessSection';
import ContactSection from '@/components/ContactSection';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConceptStrip />
      <KitchenCarSection />
      <DiscoverSection />
      <SpaceSection />
      <GardenSection />
      <EventSection />
      <AboutSummarySection />
      <InstagramSection />
      <AccessSection />
      <section id="contact" className="section-padding bg-white">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <SectionTitle eyebrow="CONTACT" title="お問い合わせ" />
          <ContactSection />
        </div>
      </section>
    </>
  );
}
