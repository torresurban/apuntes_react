import { Component } from 'react'
import axios from 'axios'
import Pokemon from './componente/Pokemon'

export default class AxiosAsync2 extends Component {
    state = {
        pokemons: [],
        url2: "https://pokeapi.co/api/v2/pokemon/",
      };

      async componentDidMount(){
        try {
            let res = await axios.get(this.state.url2)
            console.log(res.data)

            res.data.results.map(async el => {
                let resp2 = await axios.get(el.url)
                //console.log(resp2)
                let datos = resp2.data
                console.log(datos)

                let pokemon = {
                    id:datos.id,
                    name:datos.name,
                    avatar:datos.sprites.front_default,
                }
                let pokemons2 = [...this.state.pokemons, pokemon];
        this.setState({
          pokemons: pokemons2,
        });
            } )


        } catch (error) {
            console.log(error);
        let mensaje = error.response.statusText || "Ocurrió un error";
        this.setState({
          mensajeError: mensaje,
        });
        }finally{
            console.log("independientemente del error se mostrara");
        }
      }


      render(){
        return(
            <div>
                <h1>Peticion con Axios Async-Await en Componente de Clase</h1>
                {this.state.pokemons.length === 0 ? (
          <h3>Cargando ... </h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
            </div>
        )
      }
}