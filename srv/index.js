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
  const data = await get.OGP(req.body.url)
  res.json(data)
})
