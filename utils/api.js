const axios = require('axios');

/* This module contains the authToken variable holding the OAuth2 key for Github. 
   We need to keep it out of this file so that Github won't revoke the token if committed to a public repo. */
const authToken = require('./token.js');

const config = {
  headers: {
    Authorization: `token ${authToken}`,
  },
};

/* Call github api with Axios, and pass the data from Inquirer through to the next promise in the chain in a combined object */
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
