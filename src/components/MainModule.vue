<template>
    <div class="content-module" v-for="topicNested in topicsNested.items" :key="topicNested.id">
        <div class="content-module__title">
            {{topicNested.topicTitle}}
        </div>
        <div class="content-module__container">
            123
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['topicsNested'])
    },
}
</script>

<style lang="scss" scoped>
.content-module {
    margin-bottom: 40px;

    &__title {
        font-weight: 700;
        font-size: 28px;
        color: #C6D3E7;
        border-bottom: 1px solid #6CE8E4;
        margin-bottom: 18px;
    }

    &__container {
        background: red;
    }
}

</style>