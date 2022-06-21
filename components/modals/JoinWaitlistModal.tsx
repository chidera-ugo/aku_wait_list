import { JoinQueueForm } from 'components/forms/JoinQueueForm';
import { ListIcon } from 'components/icons/ListIcon';
import { FC } from 'react';

type Props = {
  onSuccess: () => void;
};

export const JoinWaitlistModal: FC<Props> = ({ onSuccess }) => {
  return (
    <div className="y-center px-4 py-16 pt-0 text-center sm:px-16">
      <ListIcon />

      <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] text-neutral-800">
        Join the waitlist
      </h3>
      <p className="mt-2 text-base font-medium tracking-[-0.02em] text-neutral-300 sm:text-lg">
        Aku pre-launch and currently invitation only
      </p>

      <div className="mx-auto w-full pt-[27px] sm:w-[395px] mobile:w-[320px] ">
        <JoinQueueForm onSuccess={onSuccess} source="modal" />
      </div>
    </div>
  );
};
