import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home, FourOfFour, Play, Profile, Ranks } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/play',
    element: <Play></Play>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },

  {
    path: '/ranks',
    element: <Ranks></Ranks>,
  },
  {
    path: '*',
    element: <FourOfFour></FourOfFour>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
