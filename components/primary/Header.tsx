import Image from 'next/image';
import Link from 'next/link';
import { CentredModalWrapper } from 'components/primary/ModalWrapper';
import { useState } from 'react';
import { JoinWaitlistModal } from 'components/modals/JoinWaitlistModal';
import { JoinedWaitlistModal } from 'components/modals/JoinedWaitlistModal';

export const Header = () => {
  const [showModal, setShowModal] = useState('');

  return (
    <header className="sticky inset-0 z-[800] h-[88px] border-b border-neutral-50 bg-neutral-200 bg-opacity-80 backdrop-blur-lg md:h-[104px]">
      <CentredModalWrapper
        showModal={!!showModal}
        closeModal={() => setShowModal('')}
      >
        {showModal === 'join-waitlist' && (
          <JoinWaitlistModal
            onSuccess={() => setShowModal('joined-waitlist')}
          />
        )}
        {showModal === 'joined-waitlist' && <JoinedWaitlistModal />}
      </CentredModalWrapper>

      <nav className="x-between container h-full">
        <Link href="/">
          <a className="relative my-auto mr-auto block h-[36px] w-[52px] md:h-[48px] md:w-[61px]">
            <Image
              src="/logos/main.svg"
              alt="aku-logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </a>
        </Link>

        <button
          onClick={() => setShowModal('join-waitlist')}
          className="primary-button my-auto"
        >
          Join Waitlist
        </button>
      </nav>
    </header>
  );
};
