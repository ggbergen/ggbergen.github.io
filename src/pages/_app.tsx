import GGFooter from '@/components/GGFooter';
import GGHeader from '@/components/GGHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navPaths from '@/nav.json';
import { Toaster } from '@/components/ui/sonner';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

type ExtendedComponent = AppProps['Component'] & { prettyName: string };

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const displayName = (Component as ExtendedComponent).displayName;
  const subTitle =
    displayName ||
    navPaths.find((navPath) => navPath.href == router.asPath)?.text ||
    '';
  const title = `GG Bergen - ${subTitle}`;

  useEffect(() => {
    toast(
      'Deler av nettsiden bruker cookies for rent funksjonelle deler, blant annet kalenderen og kartet.',
      {
        duration: Infinity,
        icon: '🍪',
        cancel: {
          label: 'Den er grei',
          onClick: () => {},
        },
      },
    );
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-background bg-global flex min-h-screen flex-col bg-cover bg-fixed bg-blend-multiply">
        <GGHeader title={subTitle} />
        <main className="container flex-1">
          <Component {...pageProps} />
        </main>
        <GGFooter />
        <Toaster expand position="bottom-center" />
      </div>
    </>
  );
}
