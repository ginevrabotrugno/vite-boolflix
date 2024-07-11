<script>
// import di axios
import axios from 'axios';

// import dello store
import {store} from './store';

// import flag icons
import "/node_modules/flag-icons/css/flag-icons.min.css";


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
        en: 'us',   // Inglese
        it: 'it',   // Italiano
        fr: 'fr',   // Francese
        es: 'es',   // Spagnolo
        de: 'de',   // Tedesco
        ru: 'ru',   // Russo
        ja: 'jp',   // Giapponese
        ko: 'kr',   // Coreano
        zh: 'cn',   // Cinese
        pt: 'pt',   // Portoghese
        ar: 'sa',   // Arabo
        hi: 'in',   // Hindi
        nl: 'nl',   // Olandese
        sv: 'se',   // Svedese
        da: 'dk',   // Danese
        fi: 'fi',   // Finlandese
        no: 'no',   // Norvegese
        pl: 'pl',   // Polacco
        tr: 'tr',   // Turco
        el: 'gr',   // Greco
        he: 'il',   // Ebraico
        th: 'th',   // Thailandese
        vi: 'vn',   // Vietnamita
        id: 'id',   // Indonesiano
        ms: 'my',   // Malese
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

  <!-- <span class="fi fi-gr"></span>  -->

  <ul v-for="(movie, i) in store.movieList" :key="i">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>
        <span :class="`fi fi-${getFlagClass(movie.original_language)}`"></span>
      </li>
      <li> {{ movie.vote_average }} </li>
    </ul>

  
</template>

<style lang="scss">
@use './style/general.scss';



</style>
