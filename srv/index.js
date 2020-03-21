const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
const port = process.env.PORT || 3200

const getInfo = require('./get-info')

app.use(history())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => console.log(`port: ${port}`))

app.post('/api/get-info', async (req, res) => {
  let data = null
  switch (req.body.service) {
    case 'youtube':
      data = await getInfo(`https://www.youtube.com/oembed?format=json&url=${req.body.url}`)
      res.json(data)
      break
    case 'soundcloud':
      data = await getInfo(`https://soundcloud.com/oembed?format=json&url=${req.body.url}`)
      res.json(data)
      break
    case 'spotify':
      data = await getInfo(`https://open.spotify.com/oembed?url=${req.body.url}`)
      res.json(data)
      break
    default:
      res.json(null)
      break
  }
})
