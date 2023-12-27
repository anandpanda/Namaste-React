import React, {lazy, Suspense} from 'react';
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

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
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
