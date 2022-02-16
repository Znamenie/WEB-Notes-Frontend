<template>
    <a :href="helpfulItems.url" target="_blank" class="helpful-item" v-for="helpfulItem in helpfulItems" :key="helpfulItem.id" @click="openLink(helpfulItem.url)">
        <div class="helpful-item__preview" :style="{ background: gradient }" :gradient=generateGradient()>
            <div class="helpful-item__theme" :symbol=symbolUpdate(helpfulItem.urlPreview)>{{ this.takeSybmol }}</div>
        </div>
        <div class="helpful-item__inner">
            <div class="helpful-item__name">
                <h3 class="helpful-item__title">{{ helpfulItem.title }}</h3>
                <div class="helpful-item__source">{{ helpfulItem.urlPreview }}</div>
            </div>
            <div class="helpful-item__caption">
                {{ helpfulItem.description }}
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        helpfulItems: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            colors: [
                { id: 0, hex: "#f12711" },
                { id: 1, hex: "#f5af19" }
            ],
            id: 2,
            takeSybmol: ''
        }
    },
    computed: {
        gradient() {
            let colors = "linear-gradient(45deg";
            this.colors.forEach(function(e) {
                colors += "," + e.hex;
            });
            colors += ")";
            return colors;
        },
        symbol() {
            return this.takeSybmol;
        }
    },
    methods: {
        addColor() {
            this.colors.push({ id: this.id, hex: this.randomHex() });
            this.id++;
        },
        generateGradient() {
            for (let i = 0; i < this.colors.length; i++) {
                this.colors[i].hex = this.randomHex();
            }
        },
        randomHex() {
            return ("#" + Math.random().toString(16).slice(2, 8));
        },
        symbolUpdate(symbol) {
            let currentSymbol = symbol.substr(0, 1);
            this.takeSybmol = currentSymbol.toUpperCase();  
        },
        openLink(itemURL) {
            window.open(itemURL); 
        }
    }
}
</script>

<style lang="scss" scoped>
.helpful-item {
    display: flex;
    cursor: pointer;
    background: rgba(15, 23, 36, 0.5);
    padding: 10px;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    color: rgb(198, 211, 231);
    transition: all .3s;

    &:hover {
        background-color: #111c2e;
    }

    &__preview {
        position: relative;
        min-width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 10px;
    }

    &__theme {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        font-weight: 700;
        width: 100%;
        height: 100px;
        z-index: 10;
        background-color: rgba(216, 196, 196, 0.5);
    }

    &__inner {
        padding-top: 10px;
    }

    &__title {
        overflow: hidden;
        color: rgb(198, 211, 231);
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    &__source {
        font-size: 12px;
        margin: 4px 0px;
        color: rgb(78, 106, 146);
        display: flex;
        flex-direction: row;
        -webkit-box-pack: start;
        place-content: center flex-start;
        -webkit-box-align: center;
        align-items: center;
    }

    &__caption {
        color: rgb(146, 171, 207);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
    }
}
</style>