const $table = document.querySelector('.crud-table'),
      $form = document.querySelector('.crud-form'),
      $title = document.querySelector('.crud-title'),
      $template = document.getElementById('crud-template').content,
      $fragment = document.createDocumentFragment()

      const ajax = (options) => {
        let { url, method, success, error, data } = options

      const xhr = new XMLHttpRequest()

      xhr.addEventListener('readystatechange', e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText)
            success(json)
        }else{
            let mensaje = xhr.statusText || 'Ocurrió un error'
            error(`Error ${xhr.status}: ${mensaje}`)
        }
      })

      xhr.open(method || 'GET', url)
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
      xhr.send(JSON.stringify(data))
      }

      const getAll = () => {

        //Create--GET
        ajax({
            method:'GET',
            url:'http://localhost:5550/santos',
            success:(res) => {
                console.log(res)
                res.forEach(el => {
                    $template.querySelector(".name").textContent=el.nombre
                    $template.querySelector(".constellation").textContent=el.constelacion
                    $template.querySelector('.edit').dataset.id = el.id
                    $template.querySelector('.edit').dataset.name = el.nombre
                    $template.querySelector('.edit').dataset.constellation = el.constelacion
                    $template.querySelector('.delete').dataset.id = el.id

                    let $clone = document.importNode($template, true)
                    $fragment.appendChild($clone)
                })

                $table.querySelector('tbody').appendChild($fragment)
            },
            error:(err) => {
                console.log(err)
                $table.insertAdjacentHTML('afterend',`<p><b>${err}</b></p>`)
            },
            data:null
        })
      }

      document.addEventListener('DOMContentLoaded', getAll)

      document.addEventListener('submit', e => {
        console.log(e.target)
        if(e.target === $form){
            e.preventDefault()
            console.log(e.target)

            if(!e.target.id.value){
                //Create--POST
                ajax({
                    url:"http://localhost:5550/santos",
                    method:"POST",
                    success:(res) => res.location.reload(),
                    error:(err) => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                    data:{
                        nombre:e.target.nombre.value,
                        constelacion:e.target.constelacion.value
                    }
                })
            }else{
                //Update--PUT
                ajax({
                    url:`http://localhost:5550/santos/${e.target.id.value}`,
                    method:"PUT",
                    success:(res) => res.location.reload(),
                    error:(err) => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                    data:{
                        nombre:e.target.nombre.value,
                        constelacion:e.target.constelacion.value
                    }
                })
            }
        }
      })

      document.addEventListener('click', e => {
        if(e.target.matches('.edit')){
            $title.textContent = "Editar Santo"
            $form.nombre.value = e.target.dataset.name
            $form.constelacion.value = e.target.dataset.constellation
            $form.id.value = e.target.dataset.id
        }

        if(e.target.matches('.delete')){
            // eslint-disable-next-line no-restricted-globals
            let isDelete = confirm(`¿Estas seguro de eliminar el id ${e.target.dataset.id}?`);
            if(isDelete){
                //Delete--DELETE
                ajax({
                    url:`http://localhost:5550/santos/${e.target.dataset.id }`,
                    method:"DELETE",
                    success:(res) => res.location.reload(),
                    error:(err) => alert(err),
                })
            }
        }
      })