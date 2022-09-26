
import Saludo from './component2/SaludoFuncional'

function App(){
    return(
        <div>
            <h2>Hola</h2>
            <Saludo arreglo={[1,2,3]} objeto={{color:'rojo', auto:'toyota'}} funcion={num => num*num}/>
        </div>
    )
}

export default App