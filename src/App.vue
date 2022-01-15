<!-- @format -->

<template>
    <Layout></Layout>
</template>

<script>
import Layout from './Layout.vue'
    export default {
  components: { Layout },
        
    }
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito';
    font-weight: normal;
    font-style: normal;
    color: #ffffff;
}

@font-face {
    font-family: 'Nunito';
    src: local('Nunito Light'),
        url('./assets/fonts/Nunito/Nunito-Light.woff2') format('woff2'),
        url('./assets/fonts/Nunito/Nunito-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Nunito';
    src: local('Nunito Regular'),
        url('./assets/fonts/Nunito/Nunito-Regular.woff2') format('woff2'),
        url('./assets/fonts/Nunito/Nunito-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Nunito';
    src: local('Nunito SemiBold'),
        url('./assets/fonts/Nunito/Nunito-SemiBold.woff2') format('woff2'),
        url('./assets/fonts/Nunito/Nunito-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}


@font-face {
    font-family: 'Nunito';
    src: local('Nunito Bold'),
        url('./assets/fonts/Nunito/Nunito-Bold.woff2') format('woff2'),
        url('./assets/fonts/Nunito/Nunito-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

</style>
