import React, { ReactNode, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'
import cx from 'classnames';

import Sidebar from '../Sidebar';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-row min-h-screen text-gray-800">
      {/* Render the sidebar */}
      <aside
        className={cx(
          'fixed h-screen sm:relative sidebar md:shadow transform transition-transform duration-150 ease-in bg-gray-700 overflow-hidden z-1001',
          {
            'w-0 -translate-x-full': !isOpen,
            'w-64 p-2 translate-x-0': isOpen
          }
        )}
      >
        <Sidebar />
      </aside>

      {/* Render the main content */}
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in">
        {/* Render the header with toggle button */}
        <div className="flex justify-end sm:justify-start px-4 py-2 border-b">
          <button type="button" className="rounded hover:bg-gray-100 p-2" onClick={handleToggleSidebar}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Render the children components */}
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
