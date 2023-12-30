import React, {lazy, Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Contact from './src/components/Contact';
import Cart from './src/components/Cart';
import RestaurantMenu from './src/components/RestaurantMenu';
import Error from './src/components/Error';

const About = lazy(() => import('./src/components/About'));
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './src/components/Shimmer';

import UserContext from './src/utils/UserContext';

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

const AppLayout = () => {

  const [userName, setUserName] = useState('Default User');

  useEffect(() => {
    setUserName('Anand Panda');
  });

  return (
    <UserContext.Provider value={{loggedInUser : userName}}>
      <div className="app">
      <UserContext.Provider value={{loggedInUser : 'ABCD EFG'}}>
        <Header />
      </UserContext.Provider>
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      { path: '/',
        element: <Body /> },
      { path: '/about',
        element: <Suspense fallback={<Shimmer/>}>
                  <About />
                </Suspense> },
      { path: '/contact',
        element: <Contact /> },
      { path: '/cart',
        element: <Cart />},
      { path: '/restaurant/:resId',
        element: <RestaurantMenu />}
    ],
    errorElement: <Error />
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRoutes} />);
// root.render(<AppLayout />);
