<script>
// import dello store
import {store} from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="../assets/logo-boolflix.png" alt="logo">
            </div>

            <div class="searchbar">
                <form action="#">
                    <input type="text" v-model="store.searchInput" @key.enter="search()">
                    <button @click.prevent="$emit('search')">Search</button>
                </form>
            </div>

        </div>

    </header>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

header {
    background-color: #000000;
    padding: 0 15px;
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            padding-top: 15px;
            width: 180px;
        }

        .searchbar {
            margin-right: 20px;

            input {
                padding: 5px 25px;
                font-family: sans-serif;
                border-radius: 8px;
            }

            button {
                padding: 8px 15px;
                font-family: sans-serif;
                border-radius: 8px;
                border: 0;
                background-color: $red;
                color: #fff;
                font-weight: bold;
            }
        }
    }
}

</style>