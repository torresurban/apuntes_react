import { Component } from "react";
import axios from "axios";
import Pokemon from "./component/Pokemon";

export default class AjaxAxios extends Component {
  state = {
    pokemons: [],
    url2: "https://pokeapi.co/api/v2/pokemon/",
    mensajeError: "Se presentó un error",
  };

  componentDidMount() {
    axios
      .get(this.state.url2)
      .then((res) => {
        console.log(res);
        console.log(res.data)
        //let json = res.data;
        console.log(res.data.results)
        res.data.results.forEach(el => {
          axios
          .get(el.url)
          .then(respuesta => {
            console.log(respuesta)
            console.log(respuesta.data)
            let pokemon = {
              id:respuesta.data.id,
              name:respuesta.data.name,
              avatar:respuesta.data.sprites.front_default
            }

            let pokemons2 = [...this.state.pokemons, pokemon]
            this.setState({
              pokemons:pokemons2
            })
          })
          
        });
      })
      .catch((err) => {
        console.log(err);
        let mensaje = err.response.statusText || "Ocurrió un error";
        this.setState({
          mensajeError: mensaje,
        });
      })
      .finally(console.log("Se ejecutara a pesar del error"));
  }

  render() {
    return (
      <div>
        <h1>Peticion con Axios - Promesas en Componente de Clase </h1>{" "}
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando </h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}{" "}
      </div>
    );
  }
}
