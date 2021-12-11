import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  color: tomato;
  font-size: 2rem;
`;

const Paragrafo = styled.p`
  color: green;
  font-size: 1.4rem;
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? "#000" : "#fff")};
  color: ${({ ativo }) => (ativo ? "#fff" : "#000")};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  // Provando que é javascript puro
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 1000;
  template`Isso é ${total} um teste`;

  const [ativo, setAtivo] = React.useState(true);

  return (
    <div>
      <Comprar ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Compre Aqui
      </Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="#53d956">R$ 1500</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
