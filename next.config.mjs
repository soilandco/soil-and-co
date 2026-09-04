/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 実際の画像ホスト(CMSやストレージ)を導入する際はここにremotePatternsを追加してください。
    // 例: remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }]
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
