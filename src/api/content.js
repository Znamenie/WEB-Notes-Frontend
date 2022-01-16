import axios from "axios";

export let apiMainTopics = function() {
    return axios.get('http://localhost:3000/topics')
}

export let apiMainTopicsNested = function(topicID) {
    return axios.get(`http://localhost:3000/topicsNested/${topicID}`)
}