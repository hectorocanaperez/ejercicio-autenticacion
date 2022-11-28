const express = require('express')
const path = require('path');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express()
const port = 3003


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './web/index.html'));

})

app.get('/api/protectedData', (req, res) => {
  res.send('this is important data')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

