import React from "react";

const App2 = () => {
  const [comentarios, setComentarios] = React.useState([
    "Comentario 1",
    "Comentario 2",
  ]);

  const [input, setInput] = React.useState("");

  // let inputElement;

  // React.useEffect(() => {
  //   inputElement = document.querySelector(".input");
  // });

  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");

    // inputElement.focus()
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        className="input"
        ref={inputElement}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App2;
