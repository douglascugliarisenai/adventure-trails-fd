import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Trilhas from "../pages/TrilhasPage/Trilhas";
import Cadastro from "../pages/CadastroPage/Cadastro";
import App from "../App";
import Error from "../pages/ErrorPage/Error";

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
