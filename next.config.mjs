/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        //   port: '',
        //   pathname: '/account123/**',
      },
    ],
  },
  env: {
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_GRAPHQL_ENDPOINT: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    CONTENTFUL_MANAGEMENT_ENDPOINT: process.env.CONTENTFUL_MANAGEMENT_ENDPOINT,
    CONTENTFUL_MANAGEMENET_TOKEN: process.env.CONTENTFUL_MANAGEMENET_TOKEN,
    CONTENTFULL_REVALIDATE_SECRET: process.env.CONTENTFULL_REVALIDATE_SECRET,
  },
};

/**
 * Vanilla extract Next.js setup
 * @see https://vanilla-extract.style/documentation/integrations/next/
 */
const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
