import { Link } from "react-router-dom";

/* eslint-disable */
function Home() {
 function acessarTrilhas() {
  <Link to="/trilhas">Explorar Trilhas</Link>;
 }

 return (
  <>
   <div className="container-principal-home">
    <h1>Que tal aproveitar um tempo com a natureza?</h1>
    <span>
     Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
     aventuras e inspire-se com as experiências de outros aventureiros.
     Prepare-se para explorar novos horizontes e se conectar com a natureza
     através do Adventure Trails!
    </span>
    <button className="explorarTrilhas">Explorar trilhas</button>
    <img
     src="../../src/assets/imagem-principal.png"
     alt="Imagem de uma trilha no alto do morro"
     height={"1024px"}
    />
   </div>

   <div className="exploreTrilhas">
    <h1>Explore trilhas incríveis</h1>
    <span>
     O "Adventure Trails FD" é seu portal para explorar e compartilhar as
     melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </span>
    <button>Explorar trilhas</button>
   </div>
   <div className="cadastraTrilhas">
    <div className="dicas">
     <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
     <button>Cadastrar nova trilha</button>
    </div>
    <img src="../../src/assets/trilha-home.jpg" alt="Imagem de Trilha" />
   </div>
  </>
 );
}

export default Home;
