/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/Home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
