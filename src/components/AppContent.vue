<script>
// import dello store
import {store} from '../store';

export default {
    name: 'Appcontent',
    data() {
        return {
            store
        }
    },
    methods: {
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

    }
}
</script>

<template>
    <section>
           
        <h2>MOVIES</h2>

        <div class="container">

            <div class="thumb" v-for="(movie, i) in store.movieList" :key="i">

                <div>
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
                </div>

                <ul class="info">
                    <li><strong>Titolo: </strong>{{ movie.title }}</li>
                    <li><strong>Titolo Originale: </strong>{{ movie.original_title }}</li>
                    <li>
                        <span :class="`fi fi-${getFlagClass(movie.original_language)}`"></span>
                    </li>
                    <li><strong>Voto: </strong> {{ movie.vote_average }} </li>
                </ul>
            </div>

        </div>

    </section>

    <section>

        <h2>TV SERIES</h2>

        <div class="container">

            <div class="thumb" v-for="(tvSeries, i) in store.tvSeriesList" :key="i">

                <img :src="`https://image.tmdb.org/t/p/w342${tvSeries.poster_path}`" :alt="tvSeries.name">

                <ul class="info">
                    <li><strong>Titolo:</strong>{{ tvSeries.name }}</li>
                    <li><strong>Titolo Originale: </strong>{{ tvSeries.original_name }}</li>
                    <li>
                        <span :class="`fi fi-${getFlagClass(tvSeries.original_language)}`"></span>
                    </li>
                    <li><strong>Voto: </strong> {{ tvSeries.vote_average }} </li>
                </ul>

            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

h2 {
    margin: 25px;
    font-size: 30px;
}

.container {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
}


</style>