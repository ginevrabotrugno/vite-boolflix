<script>
export default {
    name: 'AppMovieCard',
    props: ['infoMovie'],
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
        },
        transformDecimalToInt(num) {
            return Math.ceil((num / 10) * 5);
        }, 
        generateStars(vote) {
        const starCount = this.transformDecimalToInt(vote);
        return Array(starCount).fill('fa-star');
        }      

    }
}
</script>

<template>

    <img :src="`https://image.tmdb.org/t/p/w342${infoMovie.poster_path}`" :alt="infoMovie.title">

    <ul class="info">
        <li><strong>Titolo: </strong>{{ infoMovie.title }}</li>
        <li><strong>Titolo Originale: </strong>{{ infoMovie.original_title }}</li>
        <li>
            <span :class="`fi fi-${getFlagClass(infoMovie.original_language)}`"></span>
        </li>
        <li>
            <strong>Voto: </strong> 
            <span v-for="(star, index) in generateStars(infoMovie.vote_average)" :key="index" class="fa-solid" :class="star"></span>
        </li>
        <li> <strong>Overview: </strong>{{ infoMovie.overview }}</li>

    </ul>

</template>

<style scoped lang="scss">

</style>