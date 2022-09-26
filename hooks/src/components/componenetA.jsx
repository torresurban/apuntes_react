import React from 'react';
import PropTypes from 'prop-types';
import Contacto from '../models/contacto.class';
import ComponentB from './componentsB';


const ComponenetA = ({contacto}) => {
    return (
        <div>
            <h1>Nombre: {contacto.nombre}</h1>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <ComponentB estado={true}/>
        </div>
    );
};


ComponenetA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenetA;
