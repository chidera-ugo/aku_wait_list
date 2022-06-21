import { ListIcon } from 'components/icons/ListIcon';

export const JoinedWaitlistModal = () => {
  return (
    <div className="y-center px-4 py-16 pt-0 text-center sm:px-5 mobile:px-16">
      <ListIcon />

      <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] text-neutral-800">
        You’re on the waitlist
      </h3>

      <p className="mx-auto mt-2 max-w-[340px] text-base font-medium tracking-[-0.02em] text-neutral-300 sm:text-lg">
        We’ll send you an email as soon as Kiwi is ready. See you soon!
      </p>

      <p className="x-center mt-[38px] text-[15px] font-semibold leading-[-0.01em] text-neutral-800">
        <a
          href="https://twitter.com/aku.africa"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Follow @aku.africa on
        </a>
        <a
          href="https://twitter.com/aku.africa"
          target="_blank"
          rel="noreferrer noopenner"
          className="mx-[9px] my-auto"
        >
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4326 0.53725C15.742 1.02437 14.9774 1.39693 14.1682 1.6406C13.7339 1.14122 13.1567 0.787266 12.5146 0.626619C11.8726 0.465973 11.1967 0.506382 10.5784 0.742383C9.96006 0.978383 9.42914 1.39859 9.05741 1.94616C8.68569 2.49374 8.49111 3.14227 8.49998 3.80404V4.52518C7.23267 4.55804 5.97689 4.27697 4.8445 3.70701C3.71211 3.13704 2.73826 2.29586 2.00967 1.2584C2.00967 1.2584 -0.874908 7.7487 5.6154 10.6333C4.13022 11.6414 2.36098 12.1469 0.567383 12.0756C7.05769 15.6813 14.9903 12.0756 14.9903 3.7824C14.9896 3.58153 14.9703 3.38115 14.9326 3.18385C15.6686 2.45802 16.188 1.5416 16.4326 0.53725Z"
              fill="#00C3FF"
            />
          </svg>
        </a>
        <span>for updates</span>
      </p>
    </div>
  );
};
