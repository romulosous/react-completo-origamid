import React from "react";
import styles from "./Produto.module.css";

const Produto = () => {
  console.log(styles);
  return (
    <div>
      <p className={styles.titulo}>Notebook</p>
      <p className={styles.preco}>R$ 2000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
