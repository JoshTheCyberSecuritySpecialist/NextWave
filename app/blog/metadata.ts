import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest news, insights, and stories from the NextWave community.',
  openGraph: {
    title: 'NextWave Blog',
    description: 'Stay updated with the latest news, insights, and stories from the NextWave community.',
    images: [
      {
        url: 'https://nextwave.app/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextWave Blog'
      }
    ]
  }
};