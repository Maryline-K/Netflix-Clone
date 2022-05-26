const API_KEY ="1a9e117900005f93fcde9ef9b748f585";

const requests = {

fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
fetchNexflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,

}

export default requests;

