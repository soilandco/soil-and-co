'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/lib/site-config';
import Button from '@/components/ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand-navy" onClick={() => setOpen(false)}>
          soil<span className="text-brand-moss">&amp;</span>co.
        </Link>

        {/* PC nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-brand-navy/80 transition-colors hover:text-brand-moss"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kitchen-car" className="!py-2.5 !text-xs">
            KITCHEN CAR
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-brand-navy/10 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-brand-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-5 bg-brand-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-5 bg-brand-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-brand-navy/5 bg-cream px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col divide-y divide-brand-navy/5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-brand-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
