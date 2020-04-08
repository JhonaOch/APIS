var peliculas = null;
document.addEventListener('DOMContentLoaded', () => {
    var btnBuscar = document.getElementById("formulario");
    btnBuscar.addEventListener('submit', datos);
})

function datos(e) {
    e.preventDefault();
    const texto = document.querySelector('#formulario input[type=text]')
    //console.log(texto)
    const url = "http://www.omdbapi.com/?apikey=a5ac401a&s=" + texto.value
    buscar(url)


}

function buscar(url) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            peliculas = response.Search;
            console.log(peliculas);
            let html = ''
            peliculas.forEach(pelicula => {
                html += `
                <tr>
                <td>${pelicula.Title}</td>
                <td>${pelicula.Year}</td>
                <td>${pelicula.Type}</td>
                <td><img src="${pelicula.Poster}" alt=""></td>

                <td><a href="">Ver mas</a></td>
            </tr>
                `;
                console.log(pelicula.Title)
            });

            document.querySelector('#tablaDatosPelicula').innerHTML = html


        } else {
            document.querySelector('#tablaDatosPelicula').innerHTML = "<h2>No existe la pelicula.</h2>"
        }
    };
    xmlhttp.open("GET", url, true)
    xmlhttp.send()

}
