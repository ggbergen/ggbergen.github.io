import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';

export default function GGHeader({ title }: { title: string }) {
  return (
    <>
      <header className="border-border/40 sticky top-0 z-50 w-full bg-red-600">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <MainNav />
          <MobileNav title={title} />
        </div>
      </header>
    </>
  );
}
