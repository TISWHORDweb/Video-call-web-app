import React from 'react';
import { useRoutes } from 'react-router-dom';
import Meeting from '../Pages/Meeting/Meeting';
import JitsiMeet from '../Components/JitsiMeet';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Meeting />
        },
        {
          path: '/meet', 
          element: < JitsiMeet />
        }
    ]);
};
