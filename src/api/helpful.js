import axios from "axios";

export let apiHelpfulItems = function() {
    return axios.get('http://localhost:8563/api/v0/helpful')
}