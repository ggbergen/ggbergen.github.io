import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { kontingent, vippsnummer } from '#/data.json';

export default function VippsMedlemCard({ className }: any) {
  const [vippsRef, setVippsRef] = useState(
    'https://qr.vipps.no/28/2/05/031/OLm5VUdYM',
  );

  useEffect(() => {
    if (!isMobile) {
      setVippsRef('#vipps');
    }
  }, []);

  return (
    <figure
      className={cn(
        `not-prose text-base) relative max-w-80 rounded bg-orange-500`,
        className,
      )}
    >
      <a href={vippsRef}>
        <p className="absolute top-2 w-full text-center text-[clamp(0rem,4vw,var(--text-base))] font-semibold text-black">
          {vippsnummer}
        </p>
        <div className="flex flex-col gap-2 p-2">
          <img src="vipps-qr.png" />
          <div className="bg-background text-foreground rounded text-center">
            <p className="text-xl font-bold">GG Bergen Medlemskap</p>
            <p className="text-lg font-semibold">{kontingent} kroner</p>
          </div>
        </div>
      </a>
    </figure>
  );
}
