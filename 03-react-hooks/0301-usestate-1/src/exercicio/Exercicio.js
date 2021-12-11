// import React from "react";
// import ButaoProduto from "./ButaoProduto";
// import Produto from "./Produto";

// const Exercicio = () => {
//   const [produto, setProduto] = React.useState(null);
//   const [loading, setLoading] = React.useState(false);

//   return (
//     <div>
//       <ButaoProduto
//         nome="notebook"
//         setProduto={setProduto}
//         setLoading={setLoading}
//       />
//       <ButaoProduto
//         nome="smartphone"
//         setProduto={setProduto}
//         setLoading={setLoading}
//       />
//       <ButaoProduto
//         nome="tablet"
//         setProduto={setProduto}
//         setLoading={setLoading}
//       />
//       {loading && <p>Carregando...</p>}
//       {!loading && produto && <Produto loading={loading} {...produto} />}
//     </div>
//   );
// };

// export default Exercicio;

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from "react";
import ButaoProduto from "./ButaoProduto";
import Produto from "./Produto";

const Exercicio = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  return (
    <div>
      <ButaoProduto
        nome="tablet"
        setProduto={setProduto}
        setLoading={setLoading}
      />
      <ButaoProduto
        nome="smartphone"
        setProduto={setProduto}
        setLoading={setLoading}
      />
      <ButaoProduto
        nome="notebook"
        setProduto={setProduto}
        setLoading={setLoading}
      />
      {loading && <p>Carregando...</p>}
      {produto && <Produto {...produto} />}
    </div>
  );
};

export default Exercicio;
