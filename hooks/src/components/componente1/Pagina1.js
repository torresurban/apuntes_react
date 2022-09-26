import React, {useContext} from "react";
import {DataContext} from "../../context/DataContext";
// se borra el prop {data} para usar correctamente el useContext
export const Pagina1 = () => {

    const {data} = useContext(DataContext);

  return (
    <div>
      <h1>Pagina 1</h1>
      <hr />
      <prev>
        {JSON.stringify(data, null, 2)}
      </prev>
    </div>
  );
}