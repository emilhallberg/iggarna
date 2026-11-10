/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "arkiv.iggesundsik.se" },
      { protocol: "https", hostname: "arkiv.iggesundsik.se" },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
