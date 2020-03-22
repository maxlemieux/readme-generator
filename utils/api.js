const axios = require('axios');

/* This module contains the authToken variable holding the OAuth2 key for Github */
const authToken = require('./token.js');

const config = {
  headers: {
    Authorization: `token ${authToken}`,
  },
};

/* Call github api with Axios */
const api = async (data) => {
  try {
    const apiData = await axios.get(
      `https://api.github.com/users/${data.username}`, config
    );
    return {data, apiData};
  } catch (err) {
    console.log(err);
  };
};

module.exports = api;
