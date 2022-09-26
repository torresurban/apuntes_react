import { Component } from "react";
import Pokemon from "./components/Pokemon";

export default class AjaxApi extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((mostrar) => {
        console.log(mostrar);
        mostrar.results.forEach((el) => {
          fetch(el.url)
            .then((dato) => {
              return dato.json();
            })
            .then((mostrar2) => {
              console.log(mostrar2);
              let pokemon = {
                id: mostrar2.id,
                name: mostrar2.name,
                avatar: mostrar2.sprites.front_default,
              };

              let pokemons2 = [...this.state.pokemons, pokemon];
              this.setState({
                pokemons: pokemons2,
              });
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Peticiones Asincronas en Componentes de Clases</h1>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    );
  }
}
