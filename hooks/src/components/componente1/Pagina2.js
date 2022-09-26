import React, {useContext} from "react";
import {DataContext} from "../../context/DataContext";
import { CambiarData } from "./CambiarData";



// se borra el prop {data} para usar correctamente el useContext

export const Pagina2 = () => {

    const {data} = useContext(DataContext);

    return (
        <div>
        <h1>Pagina 2</h1>
        <hr />
        <prev>
            {JSON.stringify(data, null, 2)}
        </prev>

        <CambiarData />
        </div>
    );
}