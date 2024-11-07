import GGFooter from '@/components/GGFooter';
import GGHeader from '@/components/GGHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

type ExtendedComponent = AppProps['Component'] & { prettyName: string };

export default function App({ Component, pageProps }: AppProps) {
  const prettyName = (Component as ExtendedComponent).prettyName;
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background bg-blue-950">
        <GGHeader title={prettyName} />
        <main className="container flex-1 text-white">
          <Component {...pageProps} />
        </main>
        <GGFooter />
      </div>
    </>
  );
}
