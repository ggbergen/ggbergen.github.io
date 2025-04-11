import GGHero from '@/components/GGHero';
import HjemContent from '#/hjem.mdx';

export default function Index() {
  return (
    <>
      <GGHero />
      <article className="prose">
        <HjemContent></HjemContent>
      </article>
    </>
  );
}
