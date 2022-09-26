(() => {
    const $axios = document.getElementById('axios'),
          $fragment = document.createDocumentFragment()

     

         axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)

            let json = res.data
            json.forEach(el => {
                const $li = document.createElement('li')
                $li.innerHTML = `${el.name} -  ${el.username}`
                $fragment.appendChild($li)
            })

            $axios.appendChild($fragment)
        })
        .catch(err => {
            console.log('Estamos en el catch ', err.response)
            let mensaje = err.response.statusText || 'Ocurrio un error'
            $axios.innerHTML = `Error ${err.response.status}: ${mensaje}`
        })
        .finally(() => {
            console.log('Esto se ejecutara independientement del resultado Axios')
        })
})() 