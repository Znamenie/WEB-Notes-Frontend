import { apiMainTopics, apiMainTopicsNested } from '@/api/content'

const actions = {
    GET_TOPICS({ commit }) {
        return apiMainTopics().then(response => {
            commit('SET_TOPICS', response.data);
        });
    },
    GET_TOPICS_NESTED({ commit }, topicID) {
        return apiMainTopicsNested(topicID).then(response => {
            commit('SET_TOPICS_NESTED', response.data);
        });
    },
    TOGGLE_ACTIVE({ commit }, stateLoading) {
        commit('SET_TOGGLE_ACTIVE', stateLoading)
    },
}

export default actions;