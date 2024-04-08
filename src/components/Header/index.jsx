/* eslint-disable */
import "./style.css";

function Header() {
  return (
        <div className="header">
            <div className="navbar">
                <span className="logo">Adventure Trails FD</span>
                <ul className="menu">
                    <li><a href="#trilhas">Explorar Trilhas</a></li>
                    <li><a href="#cadastrar">Cadastrar Trilhas</a></li>
                </ul>
            </div>
            <div className="image">
                <img src="../src/assets/imagem-principal.png" alt="Imagem Header" />
            </div>
        </div>
  )

}

export default Header;
