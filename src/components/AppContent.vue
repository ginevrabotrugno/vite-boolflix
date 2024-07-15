<script>
// import dello store
import {store} from '../store';

// import componenti
import AppMovieCard from './AppMovieCard.vue';
import AppTvSeriesCard from './AppTvSeriesCard.vue';

export default {
    name: 'Appcontent',
    components: {
        AppMovieCard,
        AppTvSeriesCard,
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        resultMovieNum(){
            return store.movieList.length
        },
        resultTvSeriesNum(){
            return store.tvSeriesList.length
        },
    },
}
</script>

<template>
    <section>
           
        <h2>MOVIES</h2>

        <h3>Found <span class="counter">{{resultMovieNum}}</span> results</h3>

        <div class="container">

            <div class="thumb" v-for="(movie, i) in store.movieList" :key="i">

                <AppMovieCard :infoMovie="movie"/>

            </div>

        </div>

    </section>

    <section>

        <h2>TV SERIES</h2>

        <h3>Found <span class="counter">{{resultTvSeriesNum}}</span> results</h3>

        <div class="container">

            <div class="thumb" v-for="(tvSeries, i) in store.tvSeriesList" :key="i">

                <AppTvSeriesCard :infoTvSeries="tvSeries" /> 

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

h3 {
    margin-left: 50px;
}

.counter {
    color: $red;
}

.container {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
}


</style>