import { cn } from '@/lib/utils';
import { useFullscreen } from 'ahooks';
import { useRef } from 'react';

const imgStyle =
  'aspect-video w-[45%] border border-solid border-teal-400 object-cover';

const Rules = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [
    isFullscreen,
    { enterFullscreen, exitFullscreen, toggleFullscreen, isEnabled },
  ] = useFullscreen(ref);

  return (
    <div
      className="relative flex flex-col content-center justify-center bg-black"
      ref={ref}
    >
      <div className="relative aspect-video">
        <video
          src="/rules/melee.webm"
          autoPlay
          loop
          muted
          className="pointer-events-none absolute max-h-fit min-h-full min-w-full object-cover"
        ></video>
        <div className="relative flex h-full flex-col text-white">
          <h1 className="text-center text-5xl">Super Smash Bros. Melee</h1>
          <div className="flex flex-grow">
            <div className="flex h-full flex-1 flex-wrap content-center justify-center gap-4">
              <img
                className={imgStyle}
                src="/rules/melee/finaldestination-ssbm.png"
              ></img>
              <img
                className={imgStyle}
                src="/rules/melee/battlefield-ssbm.jpg"
              ></img>
              <img
                className={imgStyle}
                src="/rules/melee/yoshisstory-ssbm.png"
              ></img>
              <img
                className={imgStyle}
                src="/rules/melee/dreamland-ssbm.jpg"
              ></img>
              <img
                className={imgStyle}
                src="/rules/melee/fountainofdreams-ssbm.png"
              ></img>
              <img
                className={cn(imgStyle, 'border- border-4')}
                src="/rules/melee/pokemonstadium-ssbm.png"
              ></img>
            </div>
            <div className="flex-1">
              <button onClick={enterFullscreen}>Full</button>
              <h2>Regler</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Melee: GamePage = () => {
  return (
    <>
      <p>Melee</p>
      <Rules></Rules>
    </>
  );
};

Melee.displayName = 'Super Smash Bros. Melee';

export default Melee;
