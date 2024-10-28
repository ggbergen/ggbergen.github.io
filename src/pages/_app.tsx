import GGHeader from '@/components/GGHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-background">
        <GGHeader />
        <main className="container relative flex-1">
          <Component {...pageProps} />
        </main>
        <footer>
          <p>GG Bergen</p>
        </footer>
      </div>
    </>
  );
}
