import Link from 'next/link';
import { navigation, siteConfig, instagram, access } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.2fr,1fr,1fr]">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold">
            soil<span className="text-brand-moss">&amp;</span>co.
          </span>
          <p className="text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
          <p className="pt-2 text-sm font-semibold tracking-wide text-white/90">
            {siteConfig.brandMessage.en}
            <br />
            {siteConfig.brandMessage.ja}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="mb-2 text-xs font-bold tracking-widest text-white/50">MENU</span>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-brand-moss"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-bold tracking-widest text-white/50">ACCESS</span>
          <p className="text-sm leading-relaxed text-white/80">{access.address}</p>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-moss"
          >
            Instagram {instagram.handle}
          </a>
          <Link
            href="/contact"
            className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-moss"
          >
            お問い合わせ
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name} All Rights Reserved.
      </div>
    </footer>
  );
}
