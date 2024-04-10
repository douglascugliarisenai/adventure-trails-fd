import { Outlet } from "react-router-dom";
import TrilhasHeader from "./components/TrilhasHeader";
import TrilhasFooter from "./components/TrilhasFooter";
import "./App.css";

/* eslint-disable */
function App() {
 return (
  <>
   <TrilhasHeader />
   <Outlet />
   <TrilhasFooter />
  </>
 );
}

export default App;
