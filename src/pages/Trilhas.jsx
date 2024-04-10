/* eslint-disable */

import "../components/CardTrilla/style.css";
import getJson from "../hooks/getJson";
import CardTrilha from "../components/CardTrilla";

function Trilhas() {
 const [cards, loading] = getJson("../public/data/cards.json");

 return (
  <>
   <div className="container">
    <h1 className="titulo">Explore trilhas incríveis</h1>
    {loading && <h4>Carregando Cards...</h4>}

    {!loading &&
     cards !== null &&
     cards.map((cards, index) => (
      <CardTrilha dadosTrilha={cards} key={index} />
     ))}
   </div>
  </>
 );
}

export default Trilhas;
