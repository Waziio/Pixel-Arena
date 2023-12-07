import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Signup } from "./pages/Signup";

const router = createBrowserRouter([
  { path: "/signin", element: <Signin></Signin> },
  { path: "/signup", element: <Signup></Signup> },
]);

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#303030",
        color: "white",
      },
    },
  },
  colors: {
    primary: "#EF946C",
    secondary: "#303030",
    third: "#FFFFFF",
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
