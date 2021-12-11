import React from "react";
import Produto from "./Produto";

import UserContext from "./UserContext";

const App = () => {
  const [preferido, setPreferido] = React.useState("notebook");
  return (
    <UserContext.Provider value={{ nome: "Romulo", preferido }}>
      <Produto />
      <div>sss</div>
    </UserContext.Provider>
  );
};

export default App;
