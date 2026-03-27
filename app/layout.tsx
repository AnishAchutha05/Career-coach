import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Buoyancee — India\'s Premier Identity & Leadership Coach',
  description: 'Ajit Kaikini has spent 30+ years unlocking human excellence across 6 languages. Transforming people from the inside out — since 1992.',
  keywords: 'Buoyancee, Ajit Kaikini, identity coaching, soft skills, corporate training, Bangalore, personality development',
  openGraph: {
    title: 'Buoyancee — Transform from Within',
    description: 'India\'s premier identity and leadership institute. 30+ years, 6 languages, 50,000+ lives changed.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}