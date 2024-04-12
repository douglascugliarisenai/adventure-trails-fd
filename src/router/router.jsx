import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Trilhas from "../pages/Trilhas";
import Cadastro from "../pages/Cadastro";
import App from "../App";
import Error from "../pages/Error";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
   {
    path: "/",
    element: <Home />
   },
   {
    path: "/trilhas",
    element: <Trilhas />
   },
   {
    path: "/cadastro",
    element: <Cadastro />
   }
  ]
 }
]);

export default routers;
