import React from "react";

import { GlobalContext } from "./GlobalContext";

const BotaoLimpar = () => {
  const { limparDados } = React.useContext(GlobalContext);

  return <button onClick={() => limparDados()}>Limpar</button>;
};

export default BotaoLimpar;
