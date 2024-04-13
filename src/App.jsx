import { Outlet } from "react-router-dom";
import TrilhasHeader from "./components/organisms/TrilhasHeader";
import TrilhasFooter from "./components/organisms/TrilhasFooter";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import "./App.css";

/* eslint-disable */
function App() {
 return (
  <TrilhasContextProvider>
   <TrilhasHeader />
   <Outlet />
   <TrilhasFooter />
  </TrilhasContextProvider>
 );
}

export default App;
