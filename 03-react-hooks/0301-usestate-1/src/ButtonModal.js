import React from "react";

const ButtonModal = ({ name, setModal }) => {
  return <button onClick={() => setModal(true)}>{name}</button>;
};

export default ButtonModal;
