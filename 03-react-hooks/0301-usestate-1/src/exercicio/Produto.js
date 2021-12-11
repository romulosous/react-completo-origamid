// import React from "react";

// const Produto = ({ loading, nome, fotos, preco, descricao }) => {
//   return (
//     <div>
//       <h1>{nome}</h1>
//       <p>R$ {preco}</p>
//       {fotos && fotos.map((foto) => <img src={foto.src} alt={foto.titulo} />)}
//       <p>{descricao}</p>
//     </div>
//   );
// };

// export default Produto;

import React from "react";

const Produto = ({ nome, fotos, preco, descricao }) => {
  return (
    <div>
      <h1>{nome}</h1>
      {fotos.map((foto, index) => (
        <img key={foto.titulo + index} src={foto.src} alt={foto.titulo} />
      ))}
      <p>R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default Produto;
