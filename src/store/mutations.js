const mutations = {
    SET_TOPICS(state, topics) {
        state.topics = topics;
    },
    SET_TOPICS_NESTED(state, topicsNested) {
        state.topicsNested = topicsNested;
    },
    SET_HELPFUL_ITEMS(state, helpfulItems) {
        state.helpfulItems = helpfulItems;
    },
    SET_TOGGLE_ACTIVE(state, stateLoading) {
        state.stateLoading = stateLoading;
    }
}

export default mutations;