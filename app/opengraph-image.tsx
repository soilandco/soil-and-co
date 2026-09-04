import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          background: 'linear-gradient(135deg, #F6D9B8 0%, #FBF6EC 50%, #DCE8DA 100%)',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 900, color: '#1F2A38' }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, fontWeight: 700, color: '#E8792E' }}>{siteConfig.tagline}</div>
        <div style={{ fontSize: 24, color: '#1F2A38', opacity: 0.7 }}>
          {siteConfig.brandMessage.ja}
        </div>
      </div>
    ),
    { ...size }
  );
}
