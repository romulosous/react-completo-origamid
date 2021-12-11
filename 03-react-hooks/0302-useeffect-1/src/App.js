import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0);

  // Somente quando montar
  React.useEffect(() => {
    console.log("Executou");
  }, []);

  const titulo = "Total ";
  React.useEffect(() => {
    document.title = titulo + contar;
  }, [contar]);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
