import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;

  return (
    <section>
      <h2>{dados.nome}</h2>
      <p>R$ {dados.preco}</p>
    </section>
  );
};

export default Produto;
