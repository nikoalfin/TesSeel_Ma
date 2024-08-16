import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-dom';
import App from './App.jsx'
import './index.css';
import { FilterProvider } from './Context/FilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
