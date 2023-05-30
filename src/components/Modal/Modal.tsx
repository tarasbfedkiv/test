import React, { ReactNode } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, toggle }) => {
  return (
    <>
      {isOpen && (
        <div
          className="flex justify-center items-center fixed h-screen w-screen top-0 left-0 z-100 bg-slate-800/70"
          onClick={toggle}
        >
          <div
            className="relative block bg-white w-1/2 px-4 py-8 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4" onClick={toggle} type="button">
              <XCircleIcon className="h-6 w-6 text-slate-400 hover:text-slate-600" />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
