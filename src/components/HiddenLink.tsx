import { cn } from '@/lib/utils';
import { ReactNode, useState, type JSX } from 'react';

type HiddenElementProps = {
  text: string;
  className?: string;
  children: JSX.Element;
};

export default function HiddenElement({
  text,
  className = '',
  children,
}: HiddenElementProps) {
  const [mail, setMail] = useState(
    <span
      className={cn(
        'h-4 cursor-pointer font-semibold text-white underline',
        className,
      )}
      onClick={() => {
        setMail(children);
      }}
    >
      {text}
    </span>,
  );
  return mail;
}
