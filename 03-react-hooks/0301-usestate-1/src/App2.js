import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App2 = () => {
  // const [modal, setModal] = React.useState(() => {
  //   const ativo = window.localStorage.getItem("ativo")
  //   return ativo
  // });

  const [modal, setModal] = React.useState(false);
  let [items, setItems] = React.useState("Teste");

  function handleClick() {
    // items = "Outro";
    setItems("Outro");
  }

  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Criar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal name="Abrir" setModal={setModal} />
    </div>
  );
};

export default App2;
