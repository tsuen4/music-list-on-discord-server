const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
const port = process.env.PORT || 3200

const get = require('./get-info')

app.use(history())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => console.log(`port: ${port}`))

app.post('/api/get-info', async (req, res) => {
  let data = null
  switch (req.body.service) {
    case 'youtube':
      data = await get.oEmbed(`https://www.youtube.com/oembed?format=json&url=${req.body.url}`)
      res.json(data)
      break
    case 'soundcloud':
      data = await get.oEmbed(`https://soundcloud.com/oembed?format=json&url=${req.body.url}`)
      res.json(data)
      break
    case 'spotify':
      data = await get.oEmbed(`https://open.spotify.com/oembed?url=${req.body.url}`)
      res.json(data)
      break
    case 'bandcamp':
      data = await get.OGP(req.body.url)
      res.json(data)
      break
    case 'applemusic':
      data = await get.OGP(req.body.url)
      res.json(data)
      break
    case 'beatport':
      data = await get.OGP(req.body.url)
      res.json(data)
      break
    default:
      res.json(null)
      break
  }
})
