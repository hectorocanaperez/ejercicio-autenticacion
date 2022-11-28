const express = require('express')
const path = require('path');

const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './web/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})