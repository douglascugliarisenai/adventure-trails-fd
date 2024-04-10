/* eslint-disable */
import "./style.css";
import { Link } from "react-router-dom";

function TrilhasHeader() {
 return (
  <div className="header">
   <div className="navbar">
    <span className="logo">
     <Link className="labelHome" to="/">
      Adventure Trails FD
     </Link>
    </span>

    <ul className="menu">
     <li>
      <Link to="/trilhas">Explorar Trilhas</Link>
     </li>
     <li>
      <Link to="/cadastro">Cadastrar Trilhas</Link>
     </li>
    </ul>
   </div>
   <div className="image">
    <img src="../src/assets/imagem-principal.png" alt="Imagem Header" />
   </div>
  </div>
 );
}

export default TrilhasHeader;
