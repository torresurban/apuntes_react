(() => {
    const $axios = document.getElementById('axios'),
          $fragment = document.createDocumentFragment()

    async function getData(){
        try {
            let resp = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await resp.data
                console.log(json)

                json.forEach(el => {
                    const $li = document.createElement('li')
                    $li.innerHTML = `${el.name} -  ${el.username}`
                    $fragment.appendChild($li)
                })
    
                $axios.appendChild($fragment)


        } catch (error) {
            //console.log('Estamos en el catch ', error.response)
            let mensaje = error.response.statusText || 'Ocurrio un error'
            $axios.innerHTML = `Error ${error.response.status}: ${mensaje}`
        }finally{
            console.log('Esto se ejecutara independientement del resultado Axios')
        }
    }

    getData()
})() 