import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/product-details/:id',
    element: <DetailsPage />
  }
]);


const Router = () => <RouterProvider router={router} />;

export default Router;