import GGHero from '@/components/GGHero';
import Hjem from '#/hjem.mdx';

export default function Home() {
  return (
    <>
      <GGHero />
      <div className="prose">
        <Hjem></Hjem>
      </div>
    </>
  );
}
