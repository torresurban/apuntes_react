(() => {
    
    const $fetch = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment();
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => {
        console.log(res)
        return res.ok ? res.json() : Promise.reject(res)
     })
     .then(resultado => {
        console.log(resultado)
        resultado.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
    
            $fragment.appendChild($li);
          });
    
          $fetch.appendChild($fragment);
     })
     .catch(err => {
        //console.log(err)
        let mensaje = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${mensaje}`;
     })
     .finally(() => {
        console.log('Esto se ejecutara independientemente del resultado de la Promesa Fetch')
     })
})()