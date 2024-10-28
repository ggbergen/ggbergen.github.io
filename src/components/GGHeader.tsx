import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';

export default function GGHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-border/40 bg-red-600 text-white">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <MainNav />
          <MobileNav />
        </div>
      </header>
    </>
  );
}
