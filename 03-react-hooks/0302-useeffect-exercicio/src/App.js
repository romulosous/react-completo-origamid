import React from "react";
import Produto from "./Produto";

const App = () => {
  // const [preferencia, setPreferencia] = React.useState(() => {
  //   const produto = window.localStorage.getItem("produto");
  //   return produto;
  // });
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  async function handleClick(event) {
    setProduto(event.target.innerText);
  }
  return (
    <div>
      <h2>Preferência: {produto}</h2>
      <button onClick={handleClick} style={{ marginRight: "15px" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
