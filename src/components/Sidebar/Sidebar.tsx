import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import { SIDEBAR_ROUTES } from '../../lib/constants';

type SidebarRoute = {
  title: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>(pathname);

  useEffect(() => setActiveRoute(pathname), [pathname]);

  return (
    <nav>
      {Object.values(SIDEBAR_ROUTES).map(({ title, route }: SidebarRoute) => (
        <Link
          key={route}
          to={route}
          onClick={() => setActiveRoute(route)}
          className={cx('p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-400 text-white', {
            'bg-indigo-600': (activeRoute || '').split('/').pop() === route
          })}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">{title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
