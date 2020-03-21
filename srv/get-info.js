const axios = require('axios')

const getInfo = async (URI) => {
  return axios.get(URI)
    .then(res => res.data)
    .catch(err => console.error(err))
}

module.exports = getInfo
