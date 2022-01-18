<template>
    <div class="content-module" v-for="topicNested in topicsNested.items" :key="topicNested.id">
        <div class="content-module__title">
            {{topicNested.topicTitle}}
        </div>
        <div class="content-module__container">
            <div class="item" v-for="topicItem in topicNested.topicItems" :key="topicItem.id">
                <div class="item__inner">
                    <div class="item__title">
                        <div class="item__title__border"></div>
                        {{ topicItem.title }}
                    </div>
                    <div class="item__caption">
                        {{ topicItem.description }}
                    </div>
                </div>
                <div class="item__link">
                    <a href="#">
                        <img src="../assets/img/link.svg">
                    </a>
                </div>
            </div>
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
        font-family: 'Nunito-Bold';
        font-size: 28px;
        color: #C6D3E7;
        border-bottom: 1px solid #6CE8E4;
        padding-left: 10px;
        margin-bottom: 18px;
    }

    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
        grid-gap: 12px;
    }

    .item {
        display: flex;
        border-radius: 4px;
        height: 120px;
        background: rgba(15, 23, 36, .5);
        padding: 15px 30px 15px 18px;
        cursor: default;

        &__inner {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__link {
            height: 100%;

            a {
                display: flex;
                align-items: center;
                height: 100%;
            }
        }

        &__title {
            display: flex;
            align-items: center;
            height: 35px;
            margin-bottom: 15px;
            font-size: 20px;
            font-family: 'Nunito-SemiBold';

            &__border {
                width: 4px;
                height: 30px;
                background: #00A3FF;
                margin-right: 10px;
                border-radius: 4px;
            }
        }

        &__caption {
            width: 100%;
            padding-right: 15px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>