<script>
// import di axios
import axios from 'axios';

// import dello store
import {store} from './store';

// import flag icons
import "/node_modules/flag-icons/css/flag-icons.min.css";

// import components
import AppHeader from './components/AppHeader.vue';


export default {
  name: "App",
  components: {
    AppHeader
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
      };
      return languageMap[language] || 'un'; // 'un' per mostrare un'icona di fallback
    }
  },
  created() {
    this.searchTitle();
  }
}
</script>

<template>

  <AppHeader @search="searchTitle"/>

  <main>

    <div>
      <h2>MOVIES</h2>
      <ul v-for="(movie, i) in store.movieList" :key="i">
        <li class="thumb">
          <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
        </li>
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>
          <span :class="`fi fi-${getFlagClass(movie.original_language)}`"></span>
        </li>
        <li> {{ movie.vote_average }} </li>
      </ul>

    </div>

    <div>
      <h2>TV SERIES</h2>
      <ul v-for="(tvSeries, i) in store.tvSeriesList" :key="i">
        <li class="thumb">
          <img :src="`https://image.tmdb.org/t/p/w342${tvSeries.poster_path}`" :alt="tvSeries.name">
        </li>
        <li>{{ tvSeries.name }}</li>
        <li>{{ tvSeries.original_name }}</li>
        <li>
          <span :class="`fi fi-${getFlagClass(tvSeries.original_language)}`"></span>
        </li>
        <li> {{ tvSeries.vote_average }} </li>
      </ul>

    </div>

  </main>

  
</template>

<style lang="scss">
@use './style/general.scss' as *;

.thumb {
  width: 150px;
}



</style>
