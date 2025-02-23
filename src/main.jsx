import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import { CartProvider } from './provider/CartProvider';
import { CategoryProvider } from './provider/CategoryProvider';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CategoryProvider>
  </StrictMode>,
)
