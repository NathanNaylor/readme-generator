// TODO: import axios module
const axios = require("axios");

const api = {
    getUser(username) {
        const queryUrl = `https://api.github.com/users/${username}`;

        return axios.get(queryUrl).then(response => response.data);
    }
};

module.exports = api;