const Pokemon = (props) => {
    return(
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default Pokemon;