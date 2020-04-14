REALIZACION DE USO DE APIS MEDIANTE FUNCIONES JS
----------------
Nombre:Jonnathan Ochoa
-------------------
Carrera:Computacion
---------------------
OBJETIVO ALCANZADO:  
• 	Conocer las arquitecturas y patrones arquitectónicos web para el diseño de aplicaciones web  
• 	Interactuar con servicios web de plataformas en la nube 
---------------------

Arquitectura Realizada
---------------------
Arquitectura REST
--------------------
![1](https://user-images.githubusercontent.com/34308770/79176011-caefda00-7dc4-11ea-92f0-9c8bbb761cf8.png)
--------------
Implementacion de la interfaz grafica y sus funciones a realizar.
-------------
Busqueda
-----------------------------
![22](https://user-images.githubusercontent.com/34308770/79176574-34bcb380-7dc6-11ea-855d-cdb3f1ecb259.png)
![3](https://user-images.githubusercontent.com/34308770/79176608-50c05500-7dc6-11ea-9805-3c28cb4b0001.png)
![4](https://user-images.githubusercontent.com/34308770/79176632-5e75da80-7dc6-11ea-9e26-966d0b8a4a4c.png)
-----------
Descripcion
![5](https://user-images.githubusercontent.com/34308770/79176657-6f265080-7dc6-11ea-84cb-020f57723191.png)
![6](https://user-images.githubusercontent.com/34308770/79176688-82d1b700-7dc6-11ea-8baa-35879ff9d645.png)
--------------
Paginacion
![7](https://user-images.githubusercontent.com/34308770/79176703-90873c80-7dc6-11ea-8c3d-b227831d9d83.png)
----------
Codigo realizado
Implementacion AJAX
------------------
Busqueda
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

----------
Descripcion
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
                                <h3 class="ui placeholder card-text" style="color:blue;">Actores:&nbsp  ${peliculas.Actors != 'N/A' ? peliculas.Actors : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Trama: &nbsp ${peliculas.Plot != 'N/A' ? peliculas.Plot : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Premios:&nbsp  ${peliculas.Awards != 'N/A' ? peliculas.Awards : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Metascore:&nbsp  ${peliculas.Metascore != 'N/A' ? peliculas.Metascore : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Rating:&nbsp  ${peliculas.imdbRating != 'N/A' ? peliculas.imdbRating : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Votes:&nbsp  ${peliculas.imdbVotes != 'N/A' ? peliculas.imdbVotes : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Type:&nbsp  ${peliculas.Type != 'N/A' ? peliculas.Type : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">DVD:&nbsp  ${peliculas.DVD != 'N/A' ? peliculas.DVD : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">BoxOffice:&nbsp  ${peliculas.BoxOffice != 'N/A' ? peliculas.BoxOffice : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Production:&nbsp  ${peliculas.Production != 'N/A' ? peliculas.Production : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Website:&nbsp  ${peliculas.Website != 'N/A' ? peliculas.Website : "Informacion no existente"}</h3>
                                <h3 class="ui placeholder card-text" style="color:blue;">Response:&nbsp  ${peliculas.Response != 'N/A' ? peliculas.Response : "Informacion no existente"}</h3>










                                
                            </div>
                        </div>
                    </div>
                `;

            document.querySelector('#index1').innerHTML = html
        } else {

        }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=a5ac401a&i=" + det + "&plot=full", true)
    xmlhttp.send()
}


--------
Paginacion
--------
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

--------

Coclusiones
------------
•	El uso de Apis en la implementación de paginas web es muy importante ya que para hacer un prototipado rápido y generar conocimiento es muy precisos aquel api.
•	Aprender a manejar o consumir Apis y manipular objetos JSON, además se logra identificar correctamente las diferentes arquitecturas Web. 

Firma

![51245415_2009266502707380_4070506841912639488_n (1)](https://user-images.githubusercontent.com/34308770/79177250-0049f700-7dc8-11ea-9fb1-caa25695a066.jpg)




