import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithChildren<unknown>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    document.querySelector('body')?.classList.add('overflow-hidden');

    return () => {
      setMounted(false);
      document.querySelector('body')?.classList.remove('overflow-hidden');
    };
  }, []);

  return mounted
    ? createPortal(children, document.getElementById('portal') as HTMLElement)
    : null;
};
