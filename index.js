async function recovery() {
    let answer = document.getElementById("research-bar").value;
    const url = `https://www.omdbapi.com/?type=movie&s=${answer}&apikey=7815baba`;

    try {
        const response = await fetch(url);

        const data = await response.json();

        const fetchMoviesContainer = document.getElementById("fetchMovies");
        fetchMoviesContainer.innerHTML = ''; // Clear previous results

        for (let idata of data.Search) {
            let getMovies = `
            <div class="container-fetch">
                <div class="movie-poster">
                    <img src="${idata.Poster}" alt="${idata.Title} Poster">
                </div>
                <div class="info">
                    <h3>${idata.Title}</h3>
                    <p>${idata.Year}</p>
                    <a href="./plus.html?id=${idata.imdbID}">En savoir plus</a>
                </div>
            </div>
            `;

            fetchMoviesContainer.innerHTML += getMovies;
        }
    } catch (error) {
        console.error(error);
    }
}

recovery();


// function choix () {
//     let answer = document.getElementById("research-bar").value
//     return answer
//  };

// console.log(choix())
// const recherche = choix();
// console.log(recherche)
// const url =`http://www.omdbapi.com/?${recherche}&type=movie&s=&apikey=7815baba`;
// console.log(url);

// async function recovery() {
//     await fetch(url)
//     .then(response=>response.json())
//     .then((data)=>{
//         console.log(data)
//         for (let idata of data) {
//             let getMovies =`
//             <div class = "container">
//                 <div class = "poster">
//                     <img src = "${idata.Poster}">
//                 </div>
//                 <div class = "info">
//                     <h3>${idata.Title}</h3>
//                     <p>$i{data[i].Year}</p>
//                     <a href="./exercicedistancielautonome2.html?id=${idata.imdbId}">En savoir plus</a>
//                 </div>
//             </div>
//             `;
//         document.getElementById("fetchMovies").innerHTML += getMovies
//             }
//         }
//     )
//     .catch(error=>console.error(error))
// }
// recovery()