import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-moss text-white hover:bg-brand-moss/90 shadow-soft',
  secondary:
    'bg-brand-green text-white hover:bg-brand-green/90 shadow-soft',
  outline:
    'bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
