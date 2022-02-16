<!-- @format -->

<template>
  <div class="helpful">
        <div class="helpful__container">
            <div class="helpful__title">
                Дополнительное
            </div>
            <div class="helpful__content">
                <helpfulItems :helpfulItems="helpfulItems"></helpfulItems>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HelpfulItems from '../components/HelpfulItems.vue';

export default {
    components: { HelpfulItems },
    computed: {
        ...mapState(['helpfulItems'])
    },
    created() {
        this.$store.dispatch('GET_HELPFUL_ITEMS');
    }
}
</script>

<style lang="scss" scoped>
.helpful {
    background: #283046;
    min-height: calc(100vh - 80px);

    &__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 50px;

        @media (max-width: 500px) {
            padding: 10px;
        }
    }

    &__title {
        display: flex;
        align-items: center;
        font-size: 40px;
        color: #C6D3E7;
        font-weight: 700;
        border-bottom: 2px solid #6CE8E4;
        padding-left: 10px;
        margin-bottom: 20px;

        @media (max-width: 500px) {
            font-size: 28px;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 12px;

        @media (max-width: 400px) {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
}
</style>
