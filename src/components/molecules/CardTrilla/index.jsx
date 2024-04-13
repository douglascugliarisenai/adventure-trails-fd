/* eslint-disable */
import * as PropTypes from "prop-types";
import "./style.css";
import {
 Box,
 Rating,
 Typography,
 Card,
 CardContent,
 CardMedia,
 CardActions
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

function CardTrilha({ dadosTrilha }) {
 const [value, setValue] = useState(4);

 return (
  <>
   <Card className="card_container">
    <CardMedia
     className="card_imagem"
     component="img"
     height="351"
     sx={{ mr: 2, width: 600 }}
     image={dadosTrilha.urlImagem}
     alt="Imagem Trilha"
    />
    <div className="card_detalhes">
     <div className="card_header">
      <Typography
       className="titulo_card"
       sx={{ fontSize: 20, fontWeight: "bold", fontFamily: "Inter" }}
       gutterBottom
       variant="h5"
       component="div">
       {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}
      </Typography>
      <FavoriteBorderIcon />
     </div>

     <CardContent>
      <div className="container_autor">
       <Typography
        className="fonte_autor"
        sx={{ fontSize: 16, fontWeight: "bold", fontFamily: "Inter" }}
        color="text.secondary"
        gutterBottom>
        Por: {dadosTrilha.nomeCriador}
       </Typography>
      </div>

      <div className="card_body">
       <Typography
        className="fonte_body"
        sx={{ fontSize: 16, fontFamily: "Inter", m: 1 }}
        color="text.secondary"
        gutterBottom>
        Duração: {dadosTrilha.duracao} min
       </Typography>
       <Typography
        className="fonte_body"
        sx={{ fontSize: 16, fontFamily: "Inter", m: 1 }}
        color="text.secondary"
        gutterBottom>
        Trajeto: {dadosTrilha.trajeto} km
       </Typography>
       <Typography
        className="dificuldade"
        sx={{ fontSize: 16, fontFamily: "Inter", m: 1, mt: 3 }}
        color="text.secondary"
        gutterBottom>
        {dadosTrilha.dificuldade}
       </Typography>

       <CardActions className="rating">
        <Box
         sx={{
          "& > legend": { mt: 1 }
         }}>
         <Typography component="legend"></Typography>
         <Rating
          name="simple-controlled"
          sx={{ color: "#950495" }}
          value={value}
          size="large"
          onChange={(event, newValue) => {
           setValue(newValue);
          }}
         />
        </Box>
        <ul>
         <li>Avaliações</li>
        </ul>
       </CardActions>
      </div>
     </CardContent>
    </div>
   </Card>
  </>
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
  urlImagem: PropTypes.string.isRequired
 })
};

export default CardTrilha;
