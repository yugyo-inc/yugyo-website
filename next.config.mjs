/** @type {import('next').NextConfig} */
const pbUrl = process.env.NEXT_PUBLIC_PB_URL;

let pbHost = null;
try {
  if (pbUrl) pbHost = new URL(pbUrl).hostname;
} catch {
  pbHost = null;
}

// 基本的なセキュリティヘッダ（クリックジャッキング / MIME sniffing / referrer 漏洩対策）
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      ...(pbHost
        ? [{ protocol: "https", hostname: pbHost }]
        : []),
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // 旧プレビュー /v2.html は本番トップへ恒久リダイレクト
    return [{ source: "/v2.html", destination: "/", permanent: true }];
  },
};

export default nextConfig;
