/* eslint-disable */
import Button from "@mui/material/Button";
import styles from "./Cadastro.module.css";
import Grid from "@mui/material/Grid";

function Cadastro() {
 return (
  <div container className={styles.containerCadastro}>
   <Grid className={styles.titulo}>
    <h1>Cadastro de nova trilha</h1>
   </Grid>
   <Grid className={styles.formulario}>
    <form>
     <div className={styles.nomeTrilha}>
      <label htmlFor="nomeTrilha">Nome da trilha</label>
      <input
       className={styles.camposGrande}
       name="nomeTrilha"
       type="text"
       placeholder="Nome da trilha"
      />
     </div>

     <Grid className={styles.dadosGerais}>
      <div>
       <label htmlFor="duracao">Duração estimada (min)</label>
       <input
        className={styles.camposPequeno}
        name="duracao"
        type="number"
        placeholder="Duração estimada"
       />
      </div>

      <div>
       <label htmlFor="trajeto">Trajeto (km)</label>
       <input
        className={styles.camposPequeno}
        name="trajeto"
        type="number"
        placeholder="Trajeto"
       />
      </div>

      <div>
       <label htmlFor="cidade">Cidade</label>
       <input
        className={styles.camposPequeno}
        name="cidade"
        type="text"
        placeholder="Cidade"
       />
      </div>

      <div>
       <label htmlFor="estado">Estado</label>
       <input
        className={styles.camposPequeno}
        name="estado"
        type="text"
        placeholder="Estado"
       />
      </div>

      <div>
       <label htmlFor="usuario">Nome completo usuário</label>
       <input
        className={styles.camposPequeno}
        name="usuario"
        type="text"
        placeholder="Nome completo usuário"
       />
      </div>

      <div>
       <label htmlFor="dificuldade">Dificuldade</label>
       <select name="dificuldade" className={styles.camposPequeno}>
        <option value="">Selecione a dificuldade</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Difícil">Difícil</option>
       </select>
      </div>
     </Grid>

     <div className={styles.dadosTrilhas}>
      <label htmlFor="tipoTrilha">Tipo de trilha</label>
      <select name="tipoTrilha" className={styles.camposGrande}>
       <option value="">Selecione o tipo</option>
       <option value="Caminhada">Caminhada</option>
       <option value="Trekking">Trekking</option>
      </select>

      <label htmlFor="urlTrilha">URL imagem da trilha</label>
      <input
       className={styles.camposGrande}
       name="urlTrilha"
       type="text"
       placeholder="URL imagem da trilha"
      />
     </div>
    </form>
   </Grid>
   <Grid className={styles.containerButtons}>
    <Grid className={styles.buttons}>
     <Button
      variant="contained"
      sx={{
       backgroundColor: "#504908",
       color: "white",
       fontWeight: "bold"
      }}>
      Cadastrar
     </Button>
     <Button
      variant="outlined"
      sx={{
       color: "#504908",
       borderColor: "#504908",
       marginLeft: "10px",
       fontWeight: "bold"
      }}>
      Voltar
     </Button>
    </Grid>
   </Grid>
  </div>
 );
}

export default Cadastro;
