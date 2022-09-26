const Saludo = (props) =>{
    return(
        <div>
            <h1>Saludos desde componente Funcional</h1>
            <li>{props.arreglo.join(',')}</li>
            <li>{props.objeto.auto}</li>
            <li>{props.arreglo.map(props.funcion).join(',')}</li>
        </div>
    )
}

export default Saludo