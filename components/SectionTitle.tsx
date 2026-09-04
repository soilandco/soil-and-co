type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  /** そのページの唯一のh1として使う場合に 'h1' を指定(デフォルトはh2)。 */
  as?: 'h1' | 'h2';
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  as = 'h2',
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div
      className={`mb-12 flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <span
          className={`text-xs font-bold tracking-[0.2em] ${
            light ? 'text-white/70' : 'text-brand-moss'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={`text-3xl font-bold leading-snug md:text-4xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`max-w-xl text-base leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-navy/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
