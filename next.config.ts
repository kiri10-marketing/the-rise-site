import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: { remotePatterns: [new URL("https://d8j0ntlcm91z4.cloudfront.net/user_3IQWYugObr2b97xnqTXaoi7FtNm/**")] },
  async rewrites() {
    return [
      { source: "/marketing", destination: "/marketing.html" },
      // Higgsfield stills, used by the ads page and brochure links
      { source: "/media/hero-poster.jpg", destination: "https://d8j0ntlcm91z4.cloudfront.net/user_3IQWYugObr2b97xnqTXaoi7FtNm/hf_20261007_193213_99502311-52d6-4e57-b00e-8edd5889e24e.png" },
      { source: "/media/greenery-still.jpg", destination: "https://d8j0ntlcm91z4.cloudfront.net/user_3IQWYugObr2b97xnqTXaoi7FtNm/hf_20261007_193312_bbf85751-1e50-4266-91eb-20bf43013f38.png" },
    ];
  },
  /* config options here */
};

export default nextConfig;
