<script>
// import di axios
import axios from 'axios';

// import dello store
import {store} from './store';


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

    <ul v-for="(movie, i) in store.movieList" :key="i">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li> {{ movie.original_language }}</li>
      <li> {{ movie.vote_average }} </li>
    </ul>
  </div>
  
</template>

<style lang="scss">
@use './style/general.scss'

</style>
