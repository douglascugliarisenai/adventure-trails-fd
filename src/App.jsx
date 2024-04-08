/* eslint-disable */

import CardTrilha from "./components/CardTrilla";
import "./App.css";
import getJson from "./hooks/getJson";
import Header from "./components/Header";



function App() {

  // const cards = fetch("../public/data/cards.json").then((res) => res.json());
  
  const [cards, loading] = getJson("../public/data/cards.json");
  
  
  return (
    <>
    <Header />
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>
        {loading && <h4>Carregando Cards...</h4>}

        {!loading &&  cards !== null && (
          cards.map((cards, index) => (
            <CardTrilha dadosTrilha={cards} key={index}/>
          ))
        )}
      
    </div>
    </>
  );
}

export default App
