import React, {useState} from "react";
import PropTypes from "prop-types";

function ComponentB (estado){

    const [conectado, setConectado] = useState(estado);

    const cambiarEstado = () => {
        setConectado(!conectado);
    }

    return(
        <div>
            <h2>{conectado === false ? 'Contacto no disponible' : 'Contacto en linea'}</h2>
            <button onClick={cambiarEstado}>{conectado===false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    )
}

ComponentB.propTypes = {
    estado: PropTypes.bool
}

export default ComponentB;