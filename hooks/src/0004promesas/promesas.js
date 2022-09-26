/* let x = 10;

const p = new Promise((resolve, reject) => {
    if(x === 10){
        resolve('la variable es igual a 10');
    }else{
        reject('la variable no es igual a 10')
    }
})

p.then(res => {
    console.log('success: ' + res)
})
.catch(error => {
    console.log('error: ' + error)
}) */

/* ======================================================================== */

/* let y = 10;

console.log('1. proceso iniciado...')

setTimeout(() => {
    y = y * 3 + 2;
    console.log('2. proceso terminado...')
},5000);

console.log('3. el resultado es: ' + y) */

/* ========================================================================= */
/* let y = 10;
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = y * 3 + 2;
        console.log('2. proceso terminado...')
        resolve(y)
    },5000);
})

console.log('1. proceso iniciado...')

promesa.then(resultado => {
    console.log('el resultado es: ' + resultado)
}) */

/* ================================================================================ */

let usuarios = [
    {
        id:1,
        nombre:'Osa'
    },
    {
        id:2,
        nombre:'Tom'
    }
]

let telefonos = [
    {
        id:1,
        telefono: 1234567
    },
    {
        id:2,
        telefono:89101112
    }
]

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usua => usua.id === id)){
            console.log('El usuario existe')
            resolve(obtenerTelefono(id))
        }else{
            reject('El usuario no existe')
        }
    })
}

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telf => telf.id === id)){
            resolve('El telefono existe')
        }else{
            reject('El telefono no existe')
        }
    })
}

obtenerUsuario(1)
.then(result => {
    return result
})
.then(messa => {
    console.log(messa)
})
.catch(error => {
    console.log(error)
})

