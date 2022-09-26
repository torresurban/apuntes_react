(() => {
  // 1ro instanciamos el objeto XMLHttpRequest a traves de una variable
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  console.log(xhr);
  // 2do asignamos los eventos que vamos a manipular de la peticion
  // donde la logica de la programacion sera manejado por la callback 'e=> {}'
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;

        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      let mensaje = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${mensaje}`;
    }
    console.log("Este mensaje cargara de cualquier forma");
  });

  // 3ro abrimos  la peticion, establecer el metodo y el recurso o end-point
  // que vamos acceder
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // 4to enviar la peticion
  xhr.send();
})();
