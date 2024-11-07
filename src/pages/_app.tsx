import GGFooter from '@/components/GGFooter';
import GGHeader from '@/components/GGHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background bg-blue-950">
        <GGHeader />
        <main className="container flex-1 text-white">
          <Component {...pageProps} />
        </main>
        <GGFooter />
      </div>
    </>
  );
}
