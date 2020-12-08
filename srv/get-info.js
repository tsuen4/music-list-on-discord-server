const { JSDOM } = require('jsdom')

const OGP = async (url) => {
  const data = {
    title: '',
    description: '',
    thumbnail_url: ''
  }
  try {
    await JSDOM.fromURL(url)
      .then(dom => {
        const document = dom.window.document
        if (document.querySelector('[property=og\\:title]')) {
          data.title = document.querySelector('[property=og\\:title]').content
          data.description = document.querySelector('[property=og\\:description]').content
          data.thumbnail_url = document.querySelector('[property=og\\:image]').content
        } else if (document.querySelector('[name=og\\:title]')) {
          data.title = document.querySelector('[name=og\\:title]').content
          data.description = document.querySelector('[name=og\\:description]').content
          data.thumbnail_url = document.querySelector('[name=og\\:image]').content
        }
      })
  } catch (err) {
    // console.error(err)
  }
  // console.log(data)
  return data
}

module.exports = { OGP }
