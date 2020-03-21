const axios = require('axios');
const config = {
  headers: {
    Authorization: `token ${authToken}`,
  },
};

// Call github api with Axios
/* Endpoint: https://api.github.com/users/user */
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
    console.log(username);
    asyncGetUser(username);    
  }
};
api.getUser('maxlemieux');
module.exports = api;
