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
          background: '#3E6B4F',
          borderRadius: '16px',
          color: '#FBF6EC',
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
