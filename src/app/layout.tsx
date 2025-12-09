import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ErrorBoundaryWrapper } from '@/components/error-boundary-wrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Leman Zeynalli - Frontend Developer',
  description: 'Portfolio of Leman Zeynalli, a Frontend Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Leman Zeynalli' }],
  creator: 'Leman Zeynalli',
  openGraph: {
    title: 'Leman Zeynalli - Frontend Developer',
    description: 'Portfolio of Leman Zeynalli, a Frontend Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leman Zeynalli - Frontend Developer',
    description: 'Portfolio of Leman Zeynalli, a Frontend Developer specializing in React, Next.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
