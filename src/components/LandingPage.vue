<script>
// import dello store
import {store} from '../store';

export default {
    name: 'LandingPage',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="landing-container">

        <div class="logo">
            <img src="../assets/logo-boolflix.png" alt="logo">
        </div>

        <form action="#">
            <input class="block" type="text" placeholder="Cerca un Film o una SerieTv" v-model="store.searchInput" @key.enter="search()">
            <button class="block" @click.prevent="$emit('search')">Search</button>
        </form>

    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.landing-container {
    height: 100vh;
    background-color: #000;
    position: relative;

    .logo {
        text-align: center;
        padding-top: 50px;
    }

    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        .block {
            display: block;
            margin: 50px auto;
        }

        input {
            width: 60%;
            padding: 10px 25px;
            font-family: sans-serif;
            border-radius: 8px;
            text-align: center;
            font-size: 20px;
            box-shadow: 0 10px 20px 0 rgba($color: $red, $alpha: 0.3), 0 10px 20px 0 rgba($color: $red, $alpha: 0.3);
        }

        button {
            padding: 8px 15px;
            font-family: sans-serif;
            border-radius: 8px;
            border: 0;
            background-color: $red;
            color: #fff;
            font-weight: bold;
            font-size: 25px;

        }

    }

}

</style>

