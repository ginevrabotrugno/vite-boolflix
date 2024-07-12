import { reactive } from 'vue'

export const store = reactive ({
    apiURLMovies: 'https://api.themoviedb.org/3/search/movie?api_key=6d80c7fc6fb3c8cde8ea957eacd0ae7c&language=it-IT&query=',
    searchInput: "",
    movieList: [],
    apiURLTvSeries: 'https://api.themoviedb.org/3/search/tv?api_key=6d80c7fc6fb3c8cde8ea957eacd0ae7c&language=it-IT&query=',
    tvSeriesList: [],
    isFirstSearch: true,
});