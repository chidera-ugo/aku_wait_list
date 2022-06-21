import { SubmitButton } from 'components/buttons/SubmitButton';
import { FC, useState } from 'react';

type Props = {
  onSuccess: () => void;
};

export const JoinQueueForm: FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  return (
    <form
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();

        if (!email) {
          setError(true);
          return;
        }

        onSuccess();
        setEmail('');
      }}
    >
      <input
        onChange={(e) => {
          const value = e.target.value;

          setEmail(value);

          if (error && value) {
            setError(false);
          }
        }}
        value={email}
        autoFocus
        inputMode="email"
        type="email"
        className={`primary-input py-2 px-2.5 pl-4 pr-[132px] font-medium tracking-[0.2px] text-primary-navy sm:pr-[172px] sm:pl-5 ${
          !!error
            ? 'border-red-500 focus:border-red-500'
            : 'border-secondary-200 focus:border-primary-700'
        }`}
      />

      <SubmitButton
        submitting={false}
        className="absolute top-2 right-2.5 h-10 w-28 rounded-[15px] px-3 sm:h-12 sm:w-[148px] sm:px-6"
      >
        Join Queue
      </SubmitButton>
    </form>
  );
};
