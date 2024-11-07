import GGFooter from '@/components/GGFooter';
import GGHeader from '@/components/GGHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navPaths from '@/nav.json';

type ExtendedComponent = AppProps['Component'] & { prettyName: string };

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const prettyName = (Component as ExtendedComponent).prettyName;
  const title = `GG Bergen - ${
    prettyName ||
    navPaths.find((navPath) => navPath.href == router.asPath)?.text ||
    ''
  }`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
