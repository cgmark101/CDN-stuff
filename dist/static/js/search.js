const boton = document.getElementById('json_post');
const bodyFormData = new FormData();

boton.addEventListener('click', function () {
  const cedula = document.getElementById('cedula').value;
  bodyFormData.append('cedula', cedula);

  loading.style.display = 'block';
  axios({
    method: "post",
    url: 'https://dsdzxg.deta.dev/busqueda',
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      return response.data;
    })
    .then(data => {
      appendData(data);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    })
    .then(function () {
      loading.style.display = 'none';
    });
  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    if ('mensaje' in data) {
      var div = document.createElement("div");
      div.innerHTML = cedula + ' ' + 'Usuario no encontrado';
      mainContainer.appendChild(div);
    }
    else {
      var div = document.createElement("div");
      div.innerHTML = 'Correo: ' + data['correo'] + ' Clave: ' + data['clave'];
      mainContainer.appendChild(div);
    }
}
});