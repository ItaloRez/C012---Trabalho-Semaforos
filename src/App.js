import { useState } from "react";

import {
  CardCarro,
  Cruzamento,
  ContainerButtons,
  Container,
  GlobalCSS,
} from "./styles";

import rua from "./assets/rua2.jpg";
import carro1 from "./assets/carrinhos/carro1.png";
import carro2 from "./assets/carrinhos/carro2.png";
import carro3 from "./assets/carrinhos/carro3.png";
import carro4 from "./assets/carrinhos/carro4.png";

import Semaforo from "./classes/Semaforo";

function App() {
  const [carro1Active, setCarro1Active] = useState(false);
  const [carro2Active, setCarro2Active] = useState(false);
  const [carro3Active, setCarro3Active] = useState(false);
  const [carro4Active, setCarro4Active] = useState(false);

  const semaforo = new Semaforo(1);

  function ativarCarro1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setCarro1Active(true)), 1200);
    });
  }

  function ativarCarro2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setCarro2Active(true)), 1200);
    });
  }

  function ativarCarro3() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setCarro3Active(true)), 1200);
    });
  }

  function ativarCarro4() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setCarro4Active(true)), 1200);
    });
  }

  const reset = () => {
    setCarro1Active(false);
    setCarro2Active(false);
    setCarro3Active(false);
    setCarro4Active(false);
  };

  const iniciar = () => {
    semaforo.chamarFuncao(ativarCarro1);
    semaforo.chamarFuncao(ativarCarro2);
    semaforo.chamarFuncao(ativarCarro3);
    semaforo.chamarFuncao(ativarCarro4);
  };

  return (
    <>
      <Container>
        <Cruzamento>
          <img className="fundo" src={rua} alt="rua" />
          <img
            className={carro1Active ? "carro1 active" : "carro1"}
            src={carro1}
            alt="carro"
          />
          <img
            className={carro2Active ? "carro2 active" : "carro2"}
            src={carro2}
            alt="carro"
          />
          <img
            className={carro3Active ? "carro3 active" : "carro3"}
            src={carro3}
            alt="carro"
          />
          <img
            className={carro4Active ? "carro4 active" : "carro4"}
            src={carro4}
            alt="carro"
          />
        </Cruzamento>
        <ContainerButtons>
          <h1>Trabalho Semáforos</h1>
          <CardCarro>
            <div className={carro1Active ? "light active" : "light inactive"} />
            <span className="title">Carro Azul</span>
          </CardCarro>
          <CardCarro>
            <div className={carro2Active ? "light active" : "light inactive"} />
            <span className="title">Carro Preto</span>
          </CardCarro>

          <CardCarro>
            <div className={carro3Active ? "light active" : "light inactive"} />
            <span className="title">Carro Verde</span>
          </CardCarro>

          <CardCarro>
            <div className={carro4Active ? "light active" : "light inactive"} />
            <span className="title">Carro Vermelho</span>
          </CardCarro>
          {/* <button onClick={() => setCarro1Active(!carro1Active)}>Carro1</button>
          <button onClick={() => setCarro2Active(!carro2Active)}>Carro2</button>
          <button onClick={() => setCarro3Active(!carro3Active)}>Carro3</button>
          <button onClick={() => setCarro4Active(!carro4Active)}>Carro4</button> */}
          <button onClick={reset}>Reset</button>
          <button onClick={iniciar}>Iniciar</button>
        </ContainerButtons>
        <GlobalCSS />
      </Container>
    </>
  );
}

export default App;
