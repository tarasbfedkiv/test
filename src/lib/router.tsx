import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import ContactScreen from '../components/screens/ContactScreen';
import ChartsAndMapsScreen from '../components/screens/ChartsAndMapsScreen';
import NotFound from '../components/screens/NotFound';
import { ROUTES } from './constants';

const Routes = () => {
  // Define the routes using the useRoutes hook from react-router-dom
  return useRoutes([
    {
      path: '/',
      // Redirect the root path to the ContactScreen
      element: <Navigate to={`/${ROUTES.CONTACT}`} />
    },
    {
      path: `/${ROUTES.CONTACT}`,
      // Render the ContactScreen component for the /contact path
      element: <ContactScreen />
    },
    {
      path: `/${ROUTES.CHARTS_AND_MAPS}`,
      // Render the ChartsAndMapsScreen component for the /charts-and-maps path
      element: <ChartsAndMapsScreen />
    },
    {
      path: '*',
      // Render the NotFound component for any other unmatched paths
      element: <NotFound />
    }
  ]);
};

export default Routes;