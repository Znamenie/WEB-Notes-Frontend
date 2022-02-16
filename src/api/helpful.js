import axios from "axios";

const HOST = window.location.protocol + "//" + window.location.hostname;

export let apiHelpfulItems = function() {
    return axios.get(`${HOST}:8563/api/v0/helpful`)
}