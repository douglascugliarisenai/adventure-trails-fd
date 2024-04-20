/* eslint-disable */

import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CButton from "../../components/atoms/ButtonExplore/CButton";
import { Button } from "@mui/material";

function Home() {
 return (
  <>
   <div className={styles.containerPrincipalHome}>
    <h1>Que tal aproveitar um tempo com a natureza?</h1>
    <span>
     Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
     aventuras e inspire-se com as experiências de outros aventureiros.
     Prepare-se para explorar novos horizontes e se conectar com a natureza
     através do Adventure Trails!
    </span>
    <Link to="/trilhas">
     <CButton>Explorar trilhas</CButton>
    </Link>
   </div>

   <div className={styles.containerExploreTrilhas}>
    <h1>Explore trilhas incríveis</h1>
    <span>
     O "Adventure Trails FD" é seu portal para explorar e compartilhar as
     melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </span>
    <Link to="/trilhas">
     <CButton>Explorar trilhas</CButton>
    </Link>
   </div>
   <div className={styles.containerCadastraTrilhas}>
    <div>
     <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
     <Link style={{ textDecoration: "none" }} to="cadastro">
      <Button className={styles.buttonCadastrar}>Cadastrar nova trilha</Button>
     </Link>
    </div>
    <img src="../../src/assets/trilha-home.jpg" alt="Imagem de Trilha" />
   </div>
  </>
 );
}

export default Home;
