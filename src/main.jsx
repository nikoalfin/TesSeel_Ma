import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css';
import { FilterProvider } from './Context/FilterContext.jsx';
import HomePage from './Pages/HomePage.jsx';
import DetailNews from './Pages/DetailNews.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/detail',
    element: <DetailNews />,
  },
  {},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  </React.StrictMode>
);
