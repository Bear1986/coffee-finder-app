/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, 
 reactStrictMode: false,  //I set this to false because of a rendering issue I'm having with React 18
  images: {
    domains: ["images.unsplash.com"],
  },
  
}


module.exports = nextConfig
