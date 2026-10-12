import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexora — Websites That Work',
  description: 'Nexora creates modern, high-performing websites for businesses, creators, and ambitious projects.',
  robots: 'index, follow',
  verification: {
    google: 'gzkrTeD7bDP6uwYKuhNYBqmTFXIU_TvKlnXH8oJn40Y',
  },
  icons: {
    icon: '/resources/nexora-favicon-round.svg?v=6',
    apple: '/resources/nexora-favicon.jpg?v=4',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}