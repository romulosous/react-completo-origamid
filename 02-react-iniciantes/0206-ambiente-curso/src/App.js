import React from "react";
import Exercicio from "./Exercicio.js";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "Romulo " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {/*<div>
        {titulo}
        <p>
          {true ? "aasas" : "dssaas"} - {10}
          <br />
          {mostrarNome("Carvalho")}
          <br />
          <p>{new Date().getFullYear()}</p>
        </p>

        <p style={estiloP}>{carro.marca}</p>
        <p style={estiloP}>{carro.rodas}</p>

        {// <p>{carro}</p> }

        <a className="ativo" href="https://origamid.com" title="Isso é um site">
          Origamid
        </a>

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <br />
        <p className={ativo ? "ativo" : "inativo"}>{(random * 100) / 50}</p>
      </div>
        */}

      <Exercicio />
    </>
  );
};

export default App;
