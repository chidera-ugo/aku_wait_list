import Head from 'next/head';

export const DefaultHead = () => {
  return (
    <Head>
      <title>Aku - Simple Banking for Everyone</title>
      <meta
        name="description"
        content="Straight forward banking to save, spend, earn and manage your money - it's that simple."
      />
      <link rel="icon" href="/logos/main.svg" />
    </Head>
  );
};
