import type { Metadata } from 'next';
import { siteConfig } from './site-config';

/**
 * 各ページ共通のmetadataを組み立てるヘルパー。
 * 地域名を含めたSEO(例: 「◯◯市 カフェ」)を後から追加する場合は、
 * page.tsxの呼び出し側でtitle/descriptionに地域名を足すだけで反映されます。
 */
export function buildMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const fullTitle = path === '' ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
