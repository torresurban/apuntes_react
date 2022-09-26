import React, {useContext} from "react";
import {DataContext} from "../../context/DataContext";

const data = {
    nombre: "Belen",
    edad: 12
}

export const CambiarData = () => {

    const {setData} = useContext(DataContext);

  return (
    <div>
      <button onClick={() => setData(data)}>Cambiar Data</button>
    </div>
  );
}