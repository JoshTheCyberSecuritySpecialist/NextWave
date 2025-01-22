import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AnalyticsProvider } from '@/components/analytics-provider';
import { SkipLink } from '@/components/skip-link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextWave - Share Your Story',
  description: 'Share your story in seconds with NextWave, the next generation short-form video platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'NextWave',
              applicationCategory: 'SocialNetworkingApplication',
              operatingSystem: 'iOS, Android',
              description: 'Share your story in seconds with NextWave, the next generation short-form video platform.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '150000'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider>
          <SkipLink />
          <Navigation />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}