import { Inter } from 'next/font/google';

import Header from '@/components/header/Header';
import Provider from '@/components/provider/Provider';
import { Toaster } from '@/components/ui/toaster';

import type { Metadata } from 'next';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'simple-payment',
  description: '간단한 결제 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
