import * as PropTypes from "prop-types";

function CardTrilha({dadosTrilha}) {
    return (
        <>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <img src={dadosTrilha.UrlImagem} alt="Imagem Trilha" width={200} />
        </>
    )
}

CardTrilha.PropTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipoTrilha: PropTypes.oneOf(['caminhada/trekking','ciclismo']), //Enum do PropTypes
        nomeCriador: PropTypes.string.isRequired,
        UrlImagem: PropTypes.string.isRequired
    })
}

export default CardTrilha;