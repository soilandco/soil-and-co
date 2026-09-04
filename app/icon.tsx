import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#5B6E46',
          borderRadius: '16px',
          color: '#FAF8F2',
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        s&amp;
      </div>
    ),
    { ...size }
  );
}
