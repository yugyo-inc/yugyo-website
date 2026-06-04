/** @type {import('next').NextConfig} */
const pbUrl = process.env.NEXT_PUBLIC_PB_URL;

let pbHost = null;
try {
  if (pbUrl) pbHost = new URL(pbUrl).hostname;
} catch {
  pbHost = null;
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      ...(pbHost
        ? [{ protocol: "https", hostname: pbHost }]
        : []),
    ],
  },
};

export default nextConfig;
