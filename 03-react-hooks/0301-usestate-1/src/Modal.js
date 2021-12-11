import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        Esse é um modal.
        {/* Alterando usando callback */}
        <button onClick={() => setModal((anterior) => !anterior)}>
          Fechar
        </button>
      </div>
    );
  return null;
};

export default Modal;
