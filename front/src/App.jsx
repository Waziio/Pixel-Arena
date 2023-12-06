import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const router = createBrowserRouter([{ path: "/", element: <Signin></Signin> }]);

const theme = extendTheme({
  colors: {
    primary: "#EF946C",
    secondary: "#FFFFFF",
    third: "#303030",
  },
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
