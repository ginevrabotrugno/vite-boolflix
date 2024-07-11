<script>
// import di axios
import axios from 'axios';

// import dello store
import {store} from './store';

// import flag icons
import "/node_modules/flag-icons/css/flag-icons.min.css";

// import components
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchTitle(){
      let moviesEndpoint = store.apiURLMovies;
      let tvSeriesEndpoint= store.apiURLTvSeries;

      if (store.searchInput !== "") {
        moviesEndpoint = `${moviesEndpoint}${store.searchInput}`
        tvSeriesEndpoint = `${tvSeriesEndpoint}${store.searchInput}`
        console.log(moviesEndpoint);
        console.log(tvSeriesEndpoint);
      }

      axios.get(moviesEndpoint)
      .then(res => {
        console.log(res.data.results);
        store.movieList = res.data.results;
        store.searchInput = '';
      })
      .catch(err => {
          console.log(err);
      })

      axios.get(tvSeriesEndpoint)
      .then(res => {
        console.log(res.data.results);
        store.tvSeriesList = res.data.results;
        store.searchInput = '';
      })

    },
  },
  created() {
    this.searchTitle();
  }
}
</script>

<template>

  <AppHeader @search="searchTitle"/>

  <main>

    <AppContent/>

  </main>

  
</template>

<style lang="scss">
@use './style/general.scss' as *;

.thumb {
  width: 200px;
  margin-bottom: 25px;
}



</style>
