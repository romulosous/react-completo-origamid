import React from "react";
import Header from "./Header";
import Home from "./Home";
import ProdutoList from "./ProdutoList";

function App() {
  const { pathname } = window.location;

  let Pagina;

  if (pathname === "/produtos") {
    Pagina = ProdutoList;
  } else {
    Pagina = Home;
  }

  return (
    <div>
      <Header />
      {/* {window.location.pathname === "/" ? <Home /> : <ProdutoList />} */}
      <Pagina />
    </div>
  );
}

export default App;
