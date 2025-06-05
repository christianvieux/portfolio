/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'christianvportfolio.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    
  },
};

export default nextConfig;
