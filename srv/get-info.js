const axios = require('axios')
const { JSDOM } = require('jsdom')

const OGP = async (url) => {
  const data = {
    title: '',
    thumbnail_url: ''
  }
  await JSDOM.fromURL(url)
    .then(dom => {
      const document = dom.window.document
      if (document.head.querySelector('[property=og\\:title]')) {
        data.title = document.head.querySelector('[property=og\\:title]').content
        data.thumbnail_url = document.head.querySelector('[property=og\\:image]').content
      } else if (document.querySelector('[name=og\\:title]')) {
        data.title = document.querySelector('[name=og\\:title]').content
        data.thumbnail_url = document.querySelector('[name=og\\:image]').content
      }
      // console.log(data)
    })
  return data
}

const oEmbed = async (URI) => {
  return axios.get(URI)
    .then(res => res.data)
    .catch(err => console.error(err))
}

module.exports = { oEmbed, OGP }
