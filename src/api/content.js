import axios from "axios";

export let apiMainTopics = function() {
    return axios.get('http://localhost:8563/api/v0/additional');
}

export let apiMainTopicsNested = function(topicID) {
    return axios.get('http://localhost:8563/api/v0/additional/${topicID}');
}