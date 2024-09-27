// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.regalfurniturebd.com",
      },
      {
        protocol: "https",
        hostname: "images.othoba.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",

      },
      {
        protocol: "https",
        hostname: "hatil.in"
      },
      {
        protocol: "https",
        hostname: "dtt1c9id3txwq.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "nirmaan.com.bd"
      },
      {
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
