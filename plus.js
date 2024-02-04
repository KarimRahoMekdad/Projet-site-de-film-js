async function recovery() {
    const params = new URLSearchParams(window.location.search);
    
    const productId = params.get('id');

    const url =`http://www.omdbapi.com/?&type=movie&i=${productId}&apikey=7815baba`;
    try {
        const response = await fetch(url);

        const data = await response.json();

        const fetchMoviesContainer = document.getElementById("fetchMovies");
        fetchMoviesContainer.innerHTML = ''; // Clear previous results

        // for (let idata of data.Search) {
            let getMovies = `
            <div class = "container-fetch-plus">
                <div class = "movie-poster">
                    <img src = "${data.Poster}" alt = "movie poster">
                </div>
                <div class = "movie-info">
                    <h3 class = "movie-title">${data.Title}</h3>
                    <ul class = "movie-misc-info">
                        <li class = "year">Year: ${data.Year}</li>
                        <li class = "rated">Ratings: ${data.Rated}</li>
                        <li class = "released">Released: ${data.Released}</li>
                    </ul>
                    <p class = "genre"><b>Genre:</b> ${data.Genre}</p>
                    <p class = "writer"><b>Writer:</b> ${data.Writer}</p>
                    <p class = "actors"><b>Actors: </b>${data.Actors}</p>
                    <p class = "plot"><b>Plot:</b> ${data.Plot}</p>
                    <p class = "language"><b>Language:</b> ${data.Language}</p>
                    <p class = "awards"><b><i class = "fas fa-award"></i></b> ${data.Awards}</p>
                </div>
            </div>
            `;
            fetchMoviesContainer.innerHTML += getMovies;
        // }
    } catch (error) {
        console.error(error);
    }
}
recovery();

// async function recovery() {
//     await fetch(url)
//     .then(response=>response.json())
//     .then((data)=>{console.table(data)
//         for (let i = 0; i < data.length; i++) {
//             let getMovies =`
//             <div class = "container">
//                 <div class = "movie-poster">
//                     <img src = "${data[i].Poster}" alt = "movie poster">
//                 </div>
//                 <div class = "movie-info">
//                     <h3 class = "movie-title">${data[i].Title}</h3>
//                     <ul class = "movie-misc-info">
//                         <li class = "year">Year: ${data[i].Year}</li>
//                         <li class = "rated">Ratings: ${data[i].Rated}</li>
//                         <li class = "released">Released: ${data[i].Released}</li>
//                     </ul>
//                     <p class = "genre"><b>Genre:</b> ${data[i].Genre}</p>
//                     <p class = "writer"><b>Writer:</b> ${data[i].Writer}</p>
//                     <p class = "actors"><b>Actors: </b>${data[i].Actors}</p>
//                     <p class = "plot"><b>Plot:</b> ${data[i].Plot}</p>
//                     <p class = "language"><b>Language:</b> ${data[i].Language}</p>
//                     <p class = "awards"><b><i class = "fas fa-award"></i></b> ${data[i].Awards}</p>
//                 </div>
//             </div>
//             `;
//         document.getElementById("fetchMovies").innerHTML += getMovies;
//         }
//     }
//     )
//     .catch(error=>console.error(error))
// };
// recovery();