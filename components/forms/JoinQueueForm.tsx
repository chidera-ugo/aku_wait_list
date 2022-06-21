import { SubmitButton } from 'components/buttons/SubmitButton';

export const JoinQueueForm = () => {
  return (
    <form className="relative">
      <input className="primary-input py-2 px-2.5 pl-4 pr-[132px] font-medium tracking-[0.2px] text-primary-navy sm:pr-[172px] sm:pl-5" />

      <SubmitButton
        submitting={false}
        className="absolute top-2 right-2.5 h-10 w-28 rounded-[15px] px-3 sm:h-12 sm:w-[148px] sm:px-6"
      >
        Join Queue
      </SubmitButton>
    </form>
  );
};
