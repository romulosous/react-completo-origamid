import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto2 = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      Produto: {global.contar}
      <button onClick={() => global.adicionarUm()}>Adicionar1</button>
      <button onClick={() => global.adicionarDois()}>Adicionar2</button>
    </div>
  );
};

export default Produto2;
