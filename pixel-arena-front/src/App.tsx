import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup';

const router = createBrowserRouter([
  { path: "/signin", element: <Signin></Signin> },
  { path: "/signup", element: <Signup></Signup> },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
