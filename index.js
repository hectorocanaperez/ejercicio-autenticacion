const express = require('express')
const path = require('path');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express()
const port = 3000

const checkJwt = auth({
  audience: 'http://localhost:3000/api',
  issuerBaseURL: `https://dev-z43u1e4o5u1ezaie.us.auth0.com/`,
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './web/index.html'));

})

app.get('/api/protectedData', checkJwt, (req, res) => {
  res.send('this is important data')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

