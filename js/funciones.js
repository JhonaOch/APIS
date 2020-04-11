var peliculas = null;
var nombre = 'batman';
var numSiguiente = 1;


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

                <a href="#index1" class="btn btn-primary btn-lg btn young-passion-gradient" data-toggle="modal" onclick="detalles('${pelicula.imdbID}')">Descripcion</a>
                       
  
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




function detalles(det) {
    //console.log(det)

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
                    <div class="modal-dialog ">
                        <div class="modal-content md">
                            <div class="modal-header" style="background-color:rgb(29, 69, 109)" >
                                <h1 class="modal-title" style="color:white;" >${peliculas.Title != 'N/A' ? peliculas.Title : "Informacion no existente"}</h1>
                            </div>
                            <div class="modal-body" >
                                <h3 class=" ui placeholder card-text" style="color:blue;">
                                    Año: &nbsp ${peliculas.Year != 'N/A' ? peliculas.Year : "Informacion no existente"}
                                </h3>
                                <h3 class= "ui placeholder card-text " style="color:blue;">Rated:&nbsp${peliculas.Rated != 'N/A' ? peliculas.Rated : "Informacion no existente"}</h3>
                                <h3 class=" ui placeholder card-text" style="color:blue;">Released:&nbsp${peliculas.Released != 'N/A' ? peliculas.Released : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Tiempo: &nbsp ${peliculas.Runtime != 'N/A' ? peliculas.Runtime : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Lenguaje: &nbsp ${peliculas.Language != 'N/A' ? peliculas.Language : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Genero: &nbsp ${peliculas.Genre != 'N/A' ? peliculas.Genre : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Director: &nbsp ${peliculas.Director != 'N/A' ? peliculas.Director : "Informacion no existente"}</h3>
                                 <h3 class="ui placeholder card-text" style="color:blue;">Pais: &nbsp ${peliculas.Country != 'N/A' ? peliculas.Country : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Escrito:&nbsp  ${peliculas.Writer != 'N/A' ? peliculas.Writer : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Trama: &nbsp ${peliculas.Plot != 'N/A' ? peliculas.Plot : "Informacion no existente"}</h3>
                                
                            </div>
                        </div>
                    </div>
                `;

            document.querySelector('#index1').innerHTML = html
        } else {
           
        }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=a5ac401a&i=" + det +"&plot=full", true)
    xmlhttp.send()
}





function siguiente(num) {
    numSiguiente = numSiguiente + (num);
    console.log(numSiguiente)


    if (numSiguiente <= 1) {
        numSiguiente = 1
        document.getElementById('atras').classList.add("disabled");

    } else {
        document.getElementById('atras').classList.remove("disabled");
    }


    let html = `
        <div id="numPagina">
               
                    <a class="ui style="color:black ">PAGE${numSiguiente} </a>
               
        </div>
    `;

    document.querySelector('#numPagina').innerHTML = html

    let url = "http://www.omdbapi.com/?apikey=a5ac401a&s=" + nombre + "&page=" + numSiguiente
    console.log(url)
    buscar(url)



}