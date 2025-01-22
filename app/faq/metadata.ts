import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about NextWave app, features, and community.',
  openGraph: {
    title: 'NextWave FAQ',
    description: 'Find answers to frequently asked questions about NextWave app, features, and community.',
    images: [
      {
        url: 'https://nextwave.app/faq-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextWave FAQ'
      }
    ]
  }
};