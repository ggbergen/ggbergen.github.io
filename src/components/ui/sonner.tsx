import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'flex !shadow/30',
          icon: 'text-2xl w-fit',
          content: 'flex-1 px-5',
          title: '!font-semibold',
          cancelButton: 'p-4 px-6',
        },
      }}
      style={
        {
          '--normal-bg': 'hsl(var(--background))',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--color-red-700)',
          '--width': '500px',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
