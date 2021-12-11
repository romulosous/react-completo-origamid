import React from "react";

const App = () => {
  // let ativo = true;

  // function handleClick() {
  //   ativo = !ativo;
  //   console.log(ativo);
  // }

  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: "Romim", idade: "30" });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui Faculdade" });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick} className="ativo">
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
};

export default App;
