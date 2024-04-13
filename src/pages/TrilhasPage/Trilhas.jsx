/* eslint-disable */

import "../../components/molecules/CardTrilla/style.css";
import CardTrilha from "../../components/molecules/CardTrilla";
import styles from "./Trilhas.module.css";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";

function Trilhas() {
 const { trilhas, isLoading } = useContext(TrilhasContext);

 return (
  <div className={styles.containerTrilhas}>
   <div className={styles.image}>
    <img src="../src/assets/imagem-principal.png" alt="Imagem Header" />
   </div>
   <div className={styles.containerCards}>
    <h1 className={styles.titulo}>Explore trilhas incríveis</h1>
    {isLoading && <h4>Carregando Cards...</h4>}

    {!isLoading &&
     trilhas !== null &&
     trilhas.map((cards, index) => (
      <CardTrilha dadosTrilha={cards} key={index} />
     ))}
   </div>
  </div>
 );
}

export default Trilhas;
