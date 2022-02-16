import axios from "axios";

const HOST = window.location.protocol + "//" + window.location.hostname;

export let apiMainTopics = function() {
    return axios.get(`${HOST}:8563/api/v0/additional`)
}

export let apiMainTopicsNested = function(topicID) {
    return axios.get(`${HOST}:8563/api/v0/additional/${topicID}`)
}