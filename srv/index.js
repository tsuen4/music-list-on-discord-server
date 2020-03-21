const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const getInfo = require('./get-info')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => console.log(`port: ${port}`))

app.get('/api/', (req, res) => res.send('Hello World!!'))
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
      break
  }
})
