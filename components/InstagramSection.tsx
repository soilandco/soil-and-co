import Button from '@/components/ui/Button';
import TopicImage from '@/components/ui/TopicImage';
import SectionTitle from '@/components/SectionTitle';
import { instagram } from '@/lib/site-config';

export default function InstagramSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <SectionTitle
          eyebrow="INSTAGRAM"
          title="Soil&Co.の日常。"
          subtitle={`コーヒー、キッチンカー、植物、レンタルスペース、DIY、イベントなど、日々の様子を${instagram.handle}で発信しています。`}
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {instagram.topics.map((topic, index) => (
            <TopicImage
              key={topic}
              topic={topic}
              icon={['☕', '🚚', '🪴', '⛺️', '🔨', '🎉', '🌤️'][index % 7]}
              tone={(['moss', 'green', 'navy', 'mixed'] as const)[index % 4]}
              aspect="aspect-square"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={instagram.url}>Instagramをフォローする</Button>
        </div>
      </div>
    </section>
  );
}
