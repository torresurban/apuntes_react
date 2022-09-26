import { Component } from "react";
import Pokemon from "./componente/Pokemon";

export default class AjaxApi extends Component {
  state = {
    pokemons: [],
    url2: "https://pokeapi.co/api/v2/pokemon/",
  };

  async componentDidMount() {
    try {
      let url = await fetch(this.state.url2),
        json = await url.json();

      console.log(json);

      json.results.forEach(async (el) => {
        let dato2 = await fetch(el.url),
          json2 = await dato2.json();

        console.log(json2);

        let pokemon = {
          id: json2.id,
          name: json2.name,
          avatar: json2.sprites.front_default,
        };

        let pokemons2 = [...this.state.pokemons, pokemon];
        this.setState({
          pokemons: pokemons2,
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("independientemente del error se mostrara");
    }
  }

  render() {
    return (
      <div>
        <h1>Peticiones Asincornas en Componenete de Clase Async-Await</h1>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando ... </h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    );
  }
}
 