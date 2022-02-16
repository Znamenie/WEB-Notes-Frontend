import { apiMainTopics, apiMainTopicsNested } from '@/api/content'
import { apiHelpfulItems } from '@/api/helpful'

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
    GET_HELPFUL_ITEMS({ commit }) {
        return apiHelpfulItems().then(response => {
            commit('SET_HELPFUL_ITEMS', response.data)
        })
    },
    TOGGLE_ACTIVE({ commit }, stateLoading) {
        commit('SET_TOGGLE_ACTIVE', stateLoading)
    },
}

export default actions;