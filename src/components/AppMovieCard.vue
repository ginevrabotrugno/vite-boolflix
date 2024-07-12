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

    <div class="card-container" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${infoMovie.poster_path})` }">
        <div class="info-box">
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
        </div>
     </div>


</template>

<style scoped lang="scss">
    .card-container {
    position: relative;
    width: 100%;  
    aspect-ratio: 2/3;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    
    &:hover .info-box {
        opacity: 1;
    }
}

.info-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    overflow-y: auto;
    opacity: 0;
}

.info {
    
    li {
        margin-bottom: 10px;
        
        strong {
            display: block;
            margin-bottom: 5px;
        }
        
        .fa-star {
            color: gold;
        }
    }
}
</style>