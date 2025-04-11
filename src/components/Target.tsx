import type { ReactNode } from 'react';

type TargetProps = {
  children: ReactNode;
  props: string[];
};

export default function Target({ children, ...props }: TargetProps) {
  const id = Object.keys(props)[0] || '';
  return (
    <div className="relative">
      <h2 id={id.toString()} className="absolute bottom-10 opacity-0">
        .
      </h2>
      <h2>{children}</h2>
    </div>
  );
}
