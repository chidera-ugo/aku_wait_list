import { JoinQueueForm } from 'components/forms/JoinQueueForm';
import { Layout } from 'components/primary/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="py-24 lg:py-[224px]">
        <h1 className="text-center text-[46px] font-semibold leading-[60px] tracking-[-0.03em] text-neutral-800 sm:text-6xl sm:font-medium sm:leading-[72px] md:text-7xl xl:text-[100px] xl:leading-[113px]">
          Simple Banking
          <br />
          <span>
            for <span className="text-primary-700">Everyone</span>
          </span>
        </h1>

        <div className="mx-auto max-w-[400px] lg:max-w-[525px] xl:max-w-[676px]">
          <p className="mt-[30px] text-center text-base font-medium leading-6 tracking-[-0.03em] text-neutral-400 sm:text-2xl sm:leading-9 xl:text-[32px] xl:leading-[40px] mb:text-lg mb:leading-8">
            {
              "Straight forward banking to save, spend, earn and manage your money - it's that simple."
            }
          </p>

          <div className="mx-auto mt-[30px] w-full lg:w-[488px]">
            <JoinQueueForm />
          </div>
        </div>

        <p className="mt-[14px] text-center text-xs sm:text-[15px]">
          *Aku pre-launch and currently invitation only
        </p>
      </div>
    </Layout>
  );
};

export default Home;
