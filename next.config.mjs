/** Static export for GitHub Pages (user site: https://arandomguy9786.github.io/). */
const nextConfig = {
  output: "export",
  trailingSlash: true,          // /work/ammunity/ -> work/ammunity/index.html, which Pages serves directly
  images: { unoptimized: true } // no image server on Pages; assets are pre-sized WebP
};
export default nextConfig;
