window.addEventListener('load', function(){

    let favoritos = [];
        
    // Recuperar los ids del storage.
    let recuperoStorage = localStorage.getItem('favoritosToString');
    let favoritosToString = JSON.parse(recuperoStorage);


    if (localStorage.getItem('favoritosToString')!=null) {
        
        let favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
        console.log(favoritos);
    
        for(let i = 0; i < favoritos.length; i++){

            console.log(favoritos[i]);

            fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=809187852af3a04706d10c0477580eec`)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                    console.log(datos);                    
                    document.querySelector('section').innerHTML += `
                        <article>
                            <h3>${datos.data.title}</h3>
                            <div><img src="${datos.data.images.original.url}" alt="Imagen del GIF"></div>
                            <a href="detalle.html?idGif=${datos.data.id}">Ver más información</a>
                        </article>
                    `;

                })
                
                .catch(function(error){
                    console.log(`El error fue: ${error}`);
                })

        }
    }
})
    
// else{

//     document.querySelector('section').innerHTML += `
//         <article>
//             <h3>No has agregado contenido a favoritos</h3>
//         </article>
//     `;

// }





// // Modificando querys para películas
// let recuperoStorage = localStorage.getItem('favoritosPeli');
// let favsPeli = JSON.parse(recuperoStorage);
// let listaPeli = document.querySelector('.peliculas-populares');
// let favoritosPeli = []

// // Guardando Películas en local storage

// if (favsPeli !=null){
//     listaPeli.innerHTML = '<h2> No hay películas seleccionadas</h2>'
// }

//     for(let i = 0; i < favsPeli; i++){
//         fetch(`https://api.themoviedb.org/3/movie/${favsPeli[i]}?api_key=809187852af3a04706d10c0477580eec`)
    
    
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(datos){
//         let favoritosPeli = '';
        
//           favoritosPeli += `<article> 
//                                      <p>Name:${data.title}</p>
//                                      <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt=''/>
//                                      <a href="./detailsMovies.html?id=${data.id}"> Ver mas</a>
//                                    </article>`
        
//         listaPeli.innerHTML += favoritosPeli;

//         document.querySelector('section').innerHTML += `
//             <article>
//                 <h3>${datos.data.title}</h3>
//                 <div><img src="${datos.data.images.original.url}" alt="Imagen del GIF"></div>
//                 <a href="detalle.html?idGif=${datos.data.id}">Ver más información</a>
//             </article>
//         `;
//     })

//     .catch(function(error){
//         console.log(`El error fue: ${error}`);
//     })
//     }




// // Modificando querys para series
// let recuperoStorageSerie = localStorage.getItem('favoritos');
// let favsSerie = JSON.parse(recuperoStorageSerie);
// let listaSerie = document.querySelector('.series-populares');
// let favoritos = []
// })