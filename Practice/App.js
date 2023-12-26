import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Cart from './src/components/Cart';
import RestaurantMenu from './src/components/RestaurantMenu';
import Error from './src/components/Error';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

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
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart />},
      { path: '/restaurant/:resId', element: <RestaurantMenu />}
    ],
    errorElement: <Error />
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRoutes} />);
// root.render(<AppLayout />);
