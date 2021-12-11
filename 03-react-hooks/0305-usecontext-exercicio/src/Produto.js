import React from "react";
// import BotaoLimpar from "./BotaoLimpar";

import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  console.log(dados);
  if (dados === null) return null;
  return (
    <div>
      {dados.map((dado) => {
        return <p key={dado.id}>{dado.nome}</p>;
      })}
      {/* <BotaoLimpar /> */}
    </div>
  );
};

export default Produto;
