import CardTrilha from "./components/CardTrilla";

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: 'Santa Catarina',
      duracao: 120,
      trajeto: 4,
      dificuldade: "iniciante",
      tipoTrilha: "caminhada/trekking",
      nomeCriador: "Douglas Panizza Cugliari dos Santos",
      UrlImagem: "../src/assets/imagem-trilha-exemplo.jpg",
    },
  ];

  return (
    <>
      {
        listaTrilhas.map((trilha, index) => (
           <CardTrilha dadosTrilha={trilha} key={index}/>
         ))
      }
    </> 
  );
}

export default App;
