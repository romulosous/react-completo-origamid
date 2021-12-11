import React from "react";
const App = () => {
  // const produtos = [<li key="e1">Notebook</li>, <li key="e2">Smartphone</li>];
  const produtos = ["Notebook", "Smartphone", "Item3"];
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];
  return (
    <div>
      {/* {produtos} */}
      {produtos.map((produto, index) => (
        <li key={index}>{produto}</li>
      ))}

      <br />
      <br />
      <h2>Livros</h2>
      {livros
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome + ano}>
            {nome} - {ano}
          </li>
        ))}
    </div>
  );
};

export default App;
