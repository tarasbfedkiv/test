import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../lib/constants';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoToContactPage = () => navigate(`/${ROUTES.CONTACT}`);

  return (
    <div
      className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
    >
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">Sorry about that!</p>
              <button
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center text-white bg-blue-500 hover:bg-blue-700"
                onClick={handleGoToContactPage}
              >
                Take me from here!
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
