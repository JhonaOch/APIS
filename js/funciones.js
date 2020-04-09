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
                <td style="background-color:rgb(42, 44, 46)"><img class="ui centered small rounded image raised link green card"  src="${pelicula.Poster}" alt=""></td> 
                <i class="video icon blue"></i>
                
                <td class="ui placeholder centered"><i class="file alternate icon green"></i><br><h2 style="color:green;">${pelicula.Title}</h2> </td>
               
                <td class="ui placeholder centered "><p class="font-size:100%";><h2>${pelicula.Year} </h2></p></td>
                
                <td class="ui placeholder"><h2>${pelicula.Type}</h2></td>
                


                <td class="ui placeholder centered">  

                 <a class="btn btn-primary btn-lg btn purple-gradient" data-toggle="modal" onclick="buscarID('${pelicula.imdbID}')">Descripcion</a>
                 <h2 id="tablaDatosPelicula2"></h2>
  
                 </td>

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




function buscarID(num) {
    console.log(num)

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const peliculas = JSON.parse(this.responseText)
            console.log(peliculas);
            let html = `
                   
            <div>
               
                    <h2 class="modal-title">${peliculas.Title}</h2>
                    <p class="card-text">Año: ${peliculas.Year}</p>
                    <p class="card-text">${peliculas.Rated}</p>
                    <p class="card-text">${peliculas.Released}</p>
                    <p class="card-text">Tiempo:  ${peliculas.Runtime}</p>
                    <p class="card-text">Genero:  ${peliculas.Genre}</p>
                    <p class="card-text">Director:  ${peliculas.Director}</p>
                    <p class="card-text">Escrito:  ${peliculas.Writer}</p>
                    <p class="card-text">Trama:  ${peliculas.Plot}</p>
                    <p class="card-text">Lenguaje:  ${peliculas.Language}</p>
                    <p class="card-text">Pais:  ${peliculas.Country}</p>
                    
               
            
        </div>
    


                `;

                document.querySelector('#tablaDatosPelicula2').innerHTML = html
        } else {
            // document.querySelector('#ventana1').innerHTML = "<h2>No existe la pelicula.</h2>"
        }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=a5ac401a&i=" + num, true)
    xmlhttp.send()
}
