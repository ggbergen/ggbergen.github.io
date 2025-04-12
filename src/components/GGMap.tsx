import { RefObject, useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';

export default function GGMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { width = 600, height = 400 } = useResizeObserver({
    ref: ref as RefObject<HTMLDivElement>,
    box: 'border-box',
  });

  return (
    <>
      <figure
        className="!m-0 min-h-[8rem] min-w-12 overflow-hidden lg:float-right lg:w-1/2"
        ref={ref}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.0050037389963!2d5.296145576816236!3d60.38228712629638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfbf7b4fe5fb9%3A0xe38bd311a1c617d6!2sGG%20Bergen!5e1!3m2!1sno!2sno!4v1744449410380!5m2!1sno!2sno"
          width={width}
          height={height}
          style={{
            border: 0,
          }}
          loading="lazy"
        ></iframe>
      </figure>
    </>
  );
}
