const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("<html><p><b>Hello World</b></p></html>")
})

app.get('/cats', (req, res) => {
  res.send("<html><p><b>Lily (usually) is awesome!</b></p></html>")
})
app.listen(port, () => {
  console.log("Example app running on port 3000")
})



