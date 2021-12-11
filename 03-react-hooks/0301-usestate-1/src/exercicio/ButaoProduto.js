// import React from "react";

// const ButaoProduto = ({ nome, setProduto, setLoading }) => {
//   const url = "https://ranekapi.origamid.dev/json/api/produto/";

//   function fetchProduto() {
//     setLoading(true);
//     setProduto({});
//     setTimeout(async () => {
//       const response = await fetch(url + nome);
//       const json = await response.json();
//       setProduto(json);
//       setLoading(false);
//     }, 1500);
//   }

//   return (
//     <button onClick={fetchProduto} style={{ margin: "1rem" }}>
//       {nome}
//     </button>
//   );
// };

// export default ButaoProduto;

import React from "react";

const ButaoProduto = ({ nome, setProduto, setLoading }) => {
  function fetchProduto() {
    setProduto(null);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${nome}`
        );
        const produto = await response.json();
        setProduto(produto);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500);
  }

  return (
    <button onClick={fetchProduto} style={{ margin: "10px" }}>
      {nome}
    </button>
  );
};

export default ButaoProduto;
