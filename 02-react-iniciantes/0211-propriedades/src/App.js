import React from "react";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}{" "}
    </h1>
  );
};

function App() {
  return (
    <React.Fragment>
      <Titulo cor="red" texto="Meu titulo 1">
        isso é o children
        <p>Teste Children</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu titulo 2" />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default App;
