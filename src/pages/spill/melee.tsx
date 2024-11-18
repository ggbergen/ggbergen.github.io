import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useFullscreen } from 'ahooks';
import { forwardRef, useRef } from 'react';

const imgStyle =
  'aspect-video w-[45%] border border-solid border-teal-400 object-cover';

const stages = [
  {
    name: "Yoshi's Story",
    img: '/rules/melee/yoshisstory-ssbm.png',
  },
  {
    name: 'Fountain of Dreams',
    img: '/rules/melee/fountainofdreams-ssbm.png',
  },
  {
    name: 'Battlefield',
    img: '/rules/melee/battlefield-ssbm.jpg',
  },
  {
    name: 'Final Destination',
    img: '/rules/melee/finaldestination-ssbm.png',
  },
  {
    name: 'Dream Land',
    img: '/rules/melee/dreamland-ssbm.jpg',
  },
  {
    name: 'Pokemon Stadium',
    img: '/rules/melee/pokemonstadium-ssbm.png',
    cn: 'bg-red-800',
  },
];

const Rules = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <div
        className="relative flex flex-col content-center justify-center bg-black"
        ref={ref}
      >
        <div className="relative aspect-video">
          <video
            src="/rules/melee/melee.webm"
            autoPlay
            loop
            muted
            className="pointer-events-none absolute max-h-fit min-h-full min-w-full object-cover"
          ></video>
          <div className="relative flex h-full flex-col text-white">
            <h1 className="text-center text-[]">Super Smash Bros. Melee</h1>
            <h2 className="text-center text-2xl font-bold">
              4 stocks * 8 minutes * items off
            </h2>
            <div className="flex flex-grow">
              <div className="h-full flex-1">
                <div className="flex flex-wrap content-center justify-center gap-4">
                  {stages.map((stage) => {
                    return (
                      <div
                        className={cn(
                          'w-[45%] border border-solid border-teal-400 bg-blue-800',
                          stage.cn || '',
                        )}
                      >
                        <img
                          src={stage.img}
                          className="aspect-video w-full object-cover"
                        ></img>
                        <p>{stage.name}</p>
                      </div>
                    );
                  })}
                </div>
                <p>Counterpick</p>
              </div>
              <div className="flex-1">
                <h2>Regler</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const Melee: GamePage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [
    isFullscreen,
    { enterFullscreen, exitFullscreen, toggleFullscreen, isEnabled },
  ] = useFullscreen(ref);

  return (
    <>
      <p>Melee</p>
      <Button onClick={enterFullscreen}>Fullscreen</Button>
      <Rules ref={ref}></Rules>
    </>
  );
};

Melee.displayName = 'Super Smash Bros. Melee';

export default Melee;
