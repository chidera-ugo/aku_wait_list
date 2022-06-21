import { Header } from 'components/primary/Header';
import { FC, PropsWithChildren } from 'react';
import { DefaultHead } from 'components/primary/DefaultHead';
import { Footer } from 'components/primary/Footer';

export const Layout: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  return (
    <>
      <DefaultHead />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
