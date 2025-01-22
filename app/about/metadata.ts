import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NextWave\'s mission to empower creators and build the future of creative expression.',
  openGraph: {
    title: 'About NextWave',
    description: 'Learn about NextWave\'s mission to empower creators and build the future of creative expression.',
    images: [
      {
        url: 'https://nextwave.app/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About NextWave'
      }
    ]
  }
};