import "./Menu.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ComputerIcon from "@mui/icons-material/Computer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Menu = () => {
  return (
    <header className="lateral">
      <div className="principal">
        <div class="item">
          <HomeIcon color="disabled" />
          <h1 className="texto">Inicio</h1>
        </div>

        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-3">
              <div class="item">
                <PersonIcon />
                <div className="menu-2">Desenvolvedor</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">Cadastrar</li>
            <li className="botao-2">Listar Desenvolvedores</li>
          </AccordionDetails>
        </Accordion>
        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-3">
              <div class="item">
                <DirectionsRunIcon />
                <div className="menu-2">Suporte</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">Cadastrar</li>
            <li className="botao-2">Listar Suportes</li>
          </AccordionDetails>
        </Accordion>

        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-3">
              <div class="item">
                <ComputerIcon />
                <div className="menu-2">Sistemas</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">Cadastrar Sistemas</li>
            <li className="botao-2">Listar Sistemas</li>
          </AccordionDetails>
        </Accordion>

        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-3">
              <div class="item">
                <AssessmentIcon />
                <div className="menu-2">Relatório</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">Listar Relatório</li>
          </AccordionDetails>
        </Accordion>

        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-3">
              <div class="item">
                <PeopleAltIcon />
                <div className="menu-2">Usuario</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">Cadastrar Usuario</li>
            <li className="botao">Listar Usuario</li>
            <li className="botao">Permissão de Usuario</li>
          </AccordionDetails>
        </Accordion>
      </div>
    </header>
  );
};

export default Menu;
