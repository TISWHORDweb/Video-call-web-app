import React from 'react';
import { useRoutes } from 'react-router-dom';
import Meeting from '../Pages/Meeting/Meeting';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Meeting />
        }
    ]);
};
