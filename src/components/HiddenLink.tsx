import { cn } from '@/lib/utils';
import { useState, type JSX } from 'react';

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
      className={cn('h-4 cursor-pointer font-semibold underline', className)}
      onClick={() => {
        setMail(children);
      }}
    >
      {text}
    </span>,
  );
  return mail;
}
