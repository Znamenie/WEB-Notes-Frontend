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
    }
}

export default actions;