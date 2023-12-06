import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";

const router = createBrowserRouter([{ path: "/", element: <Signin></Signin> }]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
