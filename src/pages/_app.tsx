import { NavBar } from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <header className="block h-12">
        <NavBar className="bg-red-600 t-0 w-full max-h-12 p-3 fixed border-b-4 z-50"/>
    </header>
    <main className='flex justify-center pt-8'>
      <div className='border bg-black opacity-75 p-12 pt-8 pb-8 rounded container'>
        <div className='prose-2xl prose-invert max-w-none'>
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  </>)
}
