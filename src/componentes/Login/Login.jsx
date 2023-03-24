import "./Login.css";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import Botao from "../Botao/Botao";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Particle from "../Particulas/Particles";

const Login = () => {
  return (
    <>
      <Particle />
      <header className="login">
        <Paper className="login-1">
          <Link to="/menu">
            <Botao></Botao>
          </Link>
        </Paper>
      </header>
    </>
  );
};

export default Login;
