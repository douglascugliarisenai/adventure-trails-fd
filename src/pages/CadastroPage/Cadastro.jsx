/* eslint-disable */
import Button from "@mui/material/Button";
import styles from "./Cadastro.module.css";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import { Link } from "react-router-dom";
import { TextField, Select, InputLabel, MenuItem } from "@mui/material";

function Cadastro() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();
 const { addTrail } = useContext(TrilhasContext);

 function sendForm(formValue) {
  console.log(formValue);
  addTrail({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });
 }

 return (
  <div container className={styles.containerCadastro}>
   <Grid className={styles.titulo}>
    <h1>Cadastro de nova trilha</h1>
   </Grid>
   <Grid className={styles.formulario}>
    <form>
     <div className={styles.divNomeTrilha}>
      <InputLabel htmlFor="nomeTrilha">Nome da trilha</InputLabel>
      <TextField
       className={styles.camposGrande}
       type="text"
       error={!!errors.nomeTrilha}
       helperText={errors.nomeTrilha?.message}
       name="nomeTrilha"
       placeholder="Nome da trilha"
       {...register("nomeTrilha", {
        required: "Este campo é obrigatório.",
        maxLength: {
         value: 100,
         message: "Este campo aceita no máximo 100 caracteres."
        }
       })}></TextField>
     </div>

     <Grid className={styles.dadosGerais}>
      <div>
       <InputLabel htmlFor="duracao">Duração estimada (min)</InputLabel>
       <TextField
        type="number"
        name="duracao"
        className={styles.camposPequeno}
        placeholder="Duração estimada"
        {...register("duracao", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 4,
          message: "Este campo aceita no máximo 4 caracteres."
         }
        })}></TextField>
      </div>

      <div>
       <InputLabel htmlFor="trajeto">Trajeto (km)</InputLabel>
       <TextField
        type="number"
        className={styles.camposPequeno}
        name="trajeto"
        placeholder="Trajeto"
        {...register("trajeto", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 5,
          message: "Este campo aceita no máximo 5 caracteres."
         }
        })}></TextField>
      </div>

      <div>
       <InputLabel htmlFor="cidade">Cidade</InputLabel>
       <TextField
        type="text"
        className={styles.camposPequeno}
        name="cidade"
        placeholder="Cidade"
        {...register("cidade", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 60,
          message: "Este campo aceita no máximo 60 caracteres."
         }
        })}></TextField>
      </div>

      <div>
       <InputLabel htmlFor="estado">Estado</InputLabel>
       <TextField
        type="text"
        className={styles.camposPequeno}
        name="estado"
        placeholder="Estado"
        {...register("estado", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 2,
          message: "Este campo aceita no máximo 2 caracteres."
         }
        })}></TextField>
      </div>

      <div>
       <InputLabel htmlFor="usuario">Nome completo usuário</InputLabel>
       <TextField
        type="text"
        className={styles.camposPequeno}
        name="usuario"
        placeholder="Nome completo usuário"
        {...register("usuario", {
         maxLength: {
          value: 60,
          message: "Este campo aceita no máximo 2 caracteres."
         }
        })}></TextField>
      </div>

      <div>
       <InputLabel htmlFor="dificuldade">Dificuldade</InputLabel>
       <Select
        name="dificuldade"
        className={styles.dificuldade}
        {...register("dificuldade", { required: "Este campo é obrigatório." })}>
        <MenuItem value="Iniciante">Iniciante</MenuItem>
        <MenuItem value="Intermediário">Intermediário</MenuItem>
        <MenuItem value="Difícil">Difícil</MenuItem>
       </Select>
      </div>
     </Grid>

     <div className={styles.dadosTrilhas}>
      <InputLabel htmlFor="tipoTrilha">Tipo de trilha</InputLabel>
      <Select
       name="tipoTrilha"
       className={styles.camposGrande}
       {...register("tipoTrilha", {
        required: "Este campo é obrigatório."
       })}>
       <MenuItem value="Caminhada">Caminhada</MenuItem>
       <MenuItem value="Trekking">Trekking</MenuItem>
      </Select>

      <InputLabel htmlFor="urlTrilha">URL imagem da trilha</InputLabel>
      <TextField
       type="text"
       className={styles.camposGrande}
       name="urlTrilha"
       placeholder="URL imagem da trilha"
       {...register("urlTrilha", {
        maxLength: {
         value: 300,
         message: "Este campo aceita no máximo 2 caracteres."
        }
       })}></TextField>
     </div>
    </form>
   </Grid>
   <Grid className={styles.containerButtons}>
    <Grid className={styles.buttons}>
     <Button
      onClick={handleSubmit(sendForm)}
      className={styles.buttonCadastrar}
      variant="contained">
      Cadastrar
     </Button>

     <Link
      style={{ textDecoration: "none" }}
      className="labelHome"
      to="/trilhas">
      <Button className={styles.buttonVoltar} variant="outlined">
       Voltar
      </Button>
     </Link>
    </Grid>
   </Grid>
  </div>
 );
}

export default Cadastro;
