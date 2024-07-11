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
        store.results = res.data.results;
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
      <input type="text" v-model="store.searchMovie">
      <button @click.prevent="search()">Search</button>
    </form>
  </div>
  
</template>

<style lang="scss">
@use './style/general.scss'

</style>
