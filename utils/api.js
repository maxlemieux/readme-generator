const axios = require('axios');

/* This module contains the authToken variable holding the OAuth2 key for Github */
const token = require('./token.js');

const config = {
  headers: {
    Authorization: `token ${token.authToken}`,
  },
};

/* Call github api with Axios */
async function asyncGetUser(username) {
  try {
    const data = await axios.get(
      `https://api.github.com/users/${username}`, config
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  };

};

const api = {
  getUser(username) {
    asyncGetUser(username);    
  }
};
// api.getUser('maxlemieux');
module.exports = api;
