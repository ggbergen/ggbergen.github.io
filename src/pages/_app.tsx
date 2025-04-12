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
  const displayName = (Component as ExtendedComponent).displayName;
  const subTitle =
    displayName ||
    navPaths.find((navPath) => navPath.href == router.asPath)?.text ||
    '';
  const title = `GG Bergen - ${subTitle}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-background flex min-h-screen flex-col bg-global bg-cover bg-fixed bg-blend-multiply">
        <GGHeader title={subTitle} />
        <main className="container flex-1">
          <Component {...pageProps} />
        </main>
        <GGFooter />
      </div>
    </>
  );
}
