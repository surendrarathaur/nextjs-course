/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: '', //allows you to set a path prefix for the application
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'my-value',
  },
}
module.exports = nextConfig;
// module.exports = {
//   nextConfig,
//   images: {
//     formats: ['image/png', 'image/jpg'],
//   },
// }
