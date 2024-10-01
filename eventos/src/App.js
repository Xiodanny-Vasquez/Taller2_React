import React, { useState } from "react";
import BotonReset from "./BotonReset";

function BotonClick(){
  const [text, setText] = useState("texto inicial");

  const manejarClick = () => {
     setText("el boton ha sido clickeado!")
  };

  const manejarReset = () => {
     setText("texto inicial")
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick = {manejarClick}> HazClick aquí</button>
      <BotonReset onReset={manejarReset} />
      </div> 
  );
};
export default BotonClick;