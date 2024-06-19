/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/navigation/test",
        destination: "/navigation",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
