<template>
    <div>
        <div class="content-caption" v-for="topic in topics" :key="topic.id">
            123
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            topicNesteds: {
                type: Object,
                require: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>