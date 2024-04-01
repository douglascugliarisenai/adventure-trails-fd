import * as PropTypes from "prop-types";
import "./style.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div className="card_container">
      <img className="card_imagem" src={dadosTrilha.UrlImagem} alt="Imagem Trilha" width={200} />
      <div className="card_detalhes">
          <div className="card_header">
            <h1 className="titulo_card">{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}</h1>
            <button className="curtir"><img width ={20} height={20} src="../src/assets/coracao.png" alt="Curtir a Trilha" /></button>
          </div>
          
          <div className="container_autor">
            <span className="fonte_autor">Por: {dadosTrilha.nomeCriador}</span>
          </div>

          <div className="card_body">
            <span className="fonte_body">Duração: {dadosTrilha.duracao} min</span>
            <span className="fonte_body">Trajeto: {dadosTrilha.trajeto} km</span>
            <span className="dificuldade">{dadosTrilha.dificuldade}</span>
          </div>
      </div> 
    </div>
  );
}

CardTrilha.PropTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipoTrilha: PropTypes.oneOf(["caminhada/trekking", "ciclismo"]), //Enum do PropTypes
    nomeCriador: PropTypes.string.isRequired,
    UrlImagem: PropTypes.string.isRequired,
  }),
};

export default CardTrilha;
