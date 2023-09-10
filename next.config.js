/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.dog.ceo', 'clipart-library.com', 'res.cloudinary.com'] 
    },
    experimental: {
        appDir: true
    }
     
}

module.exports = nextConfig
