<template>
    <div class="spinner" v-if="state || stateLoading">
        <div class="spinner__loading">Loading...</div>
    </div>
    
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MySpinner',
    props: {
        state: {
            type: Boolean,
            require: true
        }
    },
    computed: {
        ...mapState(['stateLoading'])
    },
}
</script>

<style lang="scss" scoped>
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    margin-left: 120px;
    background: #283046;

    &__loading, &__loading:before, &__loading:after {
        background: #ffffff;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }

    &__loading {
        color: #ffffff;
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;

        &::before, &::after {
            position: absolute;
            top: 0;
            content: '';
        }

        &::before {
            left: -1.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        &::after {
            left: 1.5em;
        }
    }
}

@-webkit-keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>