<script>
// import di axios
import axios from 'axios';

// import dello store
import {store} from './store';

// import flag icon
// import 'flag-icon-css/css/flag-icon.min.css';


export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  methods: {
    search(){
      let endpoint = store.apiURL;

      if (store.searchMovie !== "") {
        endpoint = `${store.apiURL}${store.searchMovie}`
        console.log(endpoint);
      }

      axios.get(endpoint)
      .then(res => {
        console.log(res.data.results);
        store.movieList = res.data.results;
        store.searchMovie = '';
      })
      .catch(err => {
          console.log(err);
      })

    },
    getFlagClass(language) {
      // Mappa delle lingue alle classi delle bandiere
      const languageMap = {
        en: 'us',
        it: 'it',
        fr: 'fr',
        es: 'es',
        // Aggiungere altre mappature necessarie
      };
      return languageMap[language] || 'un'; // 'un' per mostrare un'icona di fallback
    }
  },
  created() {
    this.search();
  }
}
</script>

<template>

  <div class="searchbar">
    <form action="#">
      <input type="text" v-model="store.searchMovie" @key.enter="search()">
      <button @click.prevent="search()">Search</button>
    </form>
  </div>

  <ul v-for="(movie, i) in store.movieList" :key="i">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li> 
        <span :class="`flag-icon flag-icon-${getFlagClass(movie.original_language)} flag-icon-squared`"></span>
        {{ movie.original_language }}
      </li>
      <li> {{ movie.vote_average }} </li>
    </ul>

  
</template>

<style lang="scss">
@use './style/general.scss'

</style>
