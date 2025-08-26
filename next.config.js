/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 put it at the root, no http://
  allowedDevOrigins: [
    '192.168.1.235:3000',
    'localhost:3000',
    // '*.my-dev-domain.test', // wildcards allowed
  ],
};

module.exports = nextConfig;
