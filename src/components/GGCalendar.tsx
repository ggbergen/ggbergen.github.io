import { RefObject, useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';

export default function GGCalendar() {
  const ref = useRef<HTMLDivElement>(null);
  const { width = 1200 } = useResizeObserver({
    ref: ref as RefObject<HTMLDivElement>,
    box: 'border-box',
  });

  return (
    <>
      <div ref={ref}>
        <figure className="w-max-[1200px] mx-auto w-fit overflow-clip rounded-md">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FOslo&showPrint=0&showTitle=0&showDate=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&hl=no&src=NDJmMzVjY2EzZDI1ODU3ZjI2N2MxYjNlMGFiMDk0YjhiMTFiOWUwOWMwN2VkMTc1MDgyZDVjMTgyYTk3MjhiZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MjEyNWJmZTNhNDRjNTA5YzkwNjI3ZTEyOTA2NDQ2ZTY0MTYwMjg0NDRmMWQ4MDQ5YzI2NmY2OGIzNTJiZDQzOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=bW8wYjJidjI3NG1ncGNxZGZmajNoZjIzOG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&color=%2333B679&color=%23D50000"
            style={{
              border: 0,
            }}
            width={Math.min(width, 1200)}
            height={600}
          ></iframe>
        </figure>
      </div>
    </>
  );
}
