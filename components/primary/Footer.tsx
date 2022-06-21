export const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-20 md:py-[136px]">
      <div className="container">
        <h1 className="mx-auto max-w-[500px] text-center text-2xl font-medium leading-8 tracking-[-0.03em] text-neutral-0 sm:font-semibold md:max-w-[880px] md:text-5xl md:leading-[64px] xl:text-[64px] xl:leading-[72px] mobile:text-3xl mobile:leading-10">
          Amet minim de ullamco est sit aliqua minim de ullamco
        </h1>

        <div className="flex align-middle">
          <button className="secondary-button mx-auto mt-6">
            Get in touch
          </button>
        </div>

        <div className="mt-[68px] border-t border-neutral-600 pt-[68px]">
          <p className="text-xs leading-5 text-neutral-400 sm:text-[15px]">
            © Aku MFB Ltd 2022
          </p>

          <p className="mt-8 text-xs leading-5 text-neutral-400 sm:text-[15px]">
            All rights reserved. All deposits are insured by the Nigerian
            Deposit Insurance Corporation (NDIC). AKU Microfinance Bank is
            licensed by the Central Bank of Nigeria. “Aku” is a trademark of Aku
            Fintech Services Ltd Lagos: 1A Remi Olowude Street, Lagos Court of
            Arbitration Building, Lekki, Lagos. AKU Current Account is provided
            through AKU Microfinance Bank. All text, graphics, audio files,
            code, downloadable material, and other works on this website are the
            copyrighted works of AKU Microfinance Bank. All Rights Reserved. Any
            unauthorized redistribution or reproduction of any copyrighted
            materials on this website is strictly prohibited. Other product and
            company names are trademarks of their respective owners. This
            website contains simulated images; actual appearance may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};
