<template>
    <div class="content-module" v-for="topicNested in topicsNested.topicsNested" :key="topicNested.id">
        <div class="content-module__title">
            {{topicNested.nestedTitle}}
        </div>
        <div class="content-module__container">
            <div class="item" v-for="topicItem in topicNested.nestedItems" :key="topicItem.id" @click="openLink(topicItem.url)">
                <div class="item__inner">
                    <div class="item__title">
                        <div class="item__title__border" :style="{ background: borderColor }" :getBorderColor=colorGenerator()></div>
                        {{ topicItem.name }}
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
    data() {
        return {
            borderColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        }
    },
    computed: {
        ...mapState(['topicsNested']),
        getBorderColor() {
            return this.borderColor;
        }
    },
    methods: {
        openLink(itemURL) {
            window.open(itemURL); 
        },
        colorGenerator() {
            this.borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        }
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
        border-bottom: 2px solid #6CE8E4;
        padding-left: 10px;
        margin-bottom: 18px;
        cursor: default;
    }

    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        grid-gap: 12px;

        @media (max-width: 450px) {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}
    }

    .item {
        display: flex;
        border-radius: 4px;
        height: 120px;
        background: rgba(15, 23, 36, .5);
        padding: 15px 30px 15px 18px;
        cursor: pointer ;
        transition: 0.5s;

        @media (max-width: 550px) {
            padding: 10px 20px 10px 10px;
            height: 100px;
        }

        &:hover {
            box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
            background-color: rgb(17, 28, 46);
        }

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

                img {
                    width: 10px;
                }
            }
        }

        &__title {
            display: flex;
            align-items: center;
            height: 35px;
            margin-bottom: 15px;
            font-size: 20px;
            font-family: 'Nunito-SemiBold';

            @media (max-width: 550px) {
                font-size: 17px;
                margin-bottom: 10px;
                height: auto;
            }

            &__border {
                width: 4px;
                height: 30px;
                background: #00A3FF;
                margin-right: 10px;
                border-radius: 4px;

                @media (max-width: 550px) {
                    width: 3px;
                    height: 20px;
                    margin-top: -2px;
                }
            }
        }

        &__caption {
            width: 100%;
            padding-right: 15px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            @media (max-width: 450px) {
                font-size: 13px;
            }
        }
    }
}
</style>