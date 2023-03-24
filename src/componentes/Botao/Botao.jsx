import "./Botao.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

const Botao = () => {
  return (
    <header className="botao">
      <div className="usuario">
        <TextField id="standard-basic" label="Usuario" variant="standard" />
      </div>

      <div className="usuario-1">
        <TextField id="standard-basic" label="Senha" variant="standard" />
      </div>

      <Button>Entrar</Button>
    </header>
  );
};

export default Botao;
