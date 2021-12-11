import React from "react";

const Produto = ({ nome, propriedades }) => {
  const estiloProduto = {
    border: "1px solid",
    margin: "1rem 0",
    padding: "1rem",
  };

  return (
    <div style={estiloProduto}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade, index) => (
          <li key={index}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
