(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
          $fragment = document.createDocumentFragment();


    async function getData(){
        try {
            let resp = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await resp.json()
                
                console.log(resp, json)

                let incor = {
                    status:resp.status,
                    statusText:resp.statusText
                }

                if(!resp.ok) throw incor

                json.forEach(el => {
                    const $li = document.createElement('li')
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.username}`
                    console.log(($li.innerHTML))

                    $fragment.appendChild($li)
                    console.log($fragment.appendChild($li))
                })

                $fetchAsync.appendChild($fragment)

        } catch (error) {
            console.log( error )
            let mensaje = error.statusText || 'Ocurrió un error'
            $fetchAsync.innerHTML = `Error ${error.status}: ${mensaje}`
        }finally{
            console.log('Esto se ejecutara independientemente del try--catch')
        }
        
    }

    getData()
     
})()