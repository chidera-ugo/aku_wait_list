import React, { FC, PropsWithChildren } from 'react';
import { Portal } from './Portal';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = JSX.IntrinsicElements['div'] & {
  type: 'right' | 'center';
  showModal: boolean;
  closeModal?: () => void;
};

type CentredModalWrapperProps = {
  closeModal?: () => void;
  showModal: boolean;
  title?: string;
  subTitle?: string;
  hideHeader?: boolean;
};

export const CentredModalWrapper: FC<
  PropsWithChildren<CentredModalWrapperProps>
> = ({ children, closeModal, showModal, title, subTitle, hideHeader }) => {
  return (
    <Modal
      type="center"
      showModal={showModal}
      closeModal={closeModal}
      className="relative z-[1000] mx-auto mt-auto h-auto w-full overflow-y-auto rounded-t-[40px] bg-neutral-0 sm:my-auto sm:max-h-[90vh] sm:w-auto sm:rounded-b-[40px]"
    >
      <div>
        {!hideHeader && (
          <div className="sticky inset-0 top-0 z-[910] flex w-full justify-between bg-neutral-0 p-6 align-middle">
            <span className="my-auto">
              <h3 className="my-auto text-xl font-bold capitalize">{title}</h3>
              {subTitle && <p className="mt-1 text-neutral-400">{subTitle}</p>}
            </span>

            {closeModal && (
              <button
                onClick={closeModal}
                type="button"
                className="smooth y-center h-5 w-5 rounded-full bg-neutral-500 hover:text-red-500"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.125 3.875L3.875 10.125"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.875 3.875L10.125 10.125"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {children}
      </div>
    </Modal>
  );
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  type,
  showModal,
  className,
  closeModal,
}) => {
  return (
    <AnimatePresence initial={false}>
      {showModal && (
        <Portal>
          <div
            className={`${
              type === 'center' ? 'y-center' : ''
            } fixed inset-0 z-[910] w-screen`}
          >
            <motion.button
              initial="hide"
              animate="show"
              exit="hide"
              variants={{
                show: {
                  opacity: 1,
                },
                hide: {
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              onClick={closeModal}
              tabIndex={-1}
              className="absolute inset-0 h-full w-full cursor-default bg-neutral-800 bg-opacity-70"
            />

            <motion.div
              initial="hide"
              animate="show"
              exit="hide"
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                },
                hide: {
                  y: 100,
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              className={className}
            >
              {children}
            </motion.div>
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
