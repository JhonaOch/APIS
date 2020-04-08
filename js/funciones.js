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
                <td><img class="ui centered small rounded image raised link green card"  src="${pelicula.Poster}" alt=""></td> 
                <i class="video icon"></i>
                
                <td class="ui placeholder"><i class="file alternate icon"></i><br>${pelicula.Title} </td>
                
                <td class="ui placeholder">${pelicula.Year}</td>
                <td class="ui placeholder">${pelicula.Type}</td>
                <td class="ui placeholder"><a href="">Ver mas</a></td>
            </tr>
          


                `;
                console.log(pelicula.Title)
            });

            document.querySelector('#tablaDatosPelicula').innerHTML = html


        } else {
           
            
  
            document.querySelector('#tablaDatosPelicula').innerHTML = "<h2>    BUSQUEDA NO ENCONTRADA.........</h2>"
            

        }
    };
    xmlhttp.open("GET", url, true)
    xmlhttp.send()

}
