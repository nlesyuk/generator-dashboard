const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const router = new express();

const delay = (ms = 1000) => new Promise((res, rej) => {
  setTimeout(res, ms)
})

app.use(cors())

// routes
const wifi = 'wifi'
router.get(wifi, (req, res) => {
  console.log('req1', req.url)
  // await delay()
  res.status(200).send([
    { id: 0, ssid: 'ssid-0' },
    { id: 1, ssid: 'ssid-1' },
    { id: 2, ssid: 'ssid-2' },
    { id: 3, ssid: 'ssid-3' },
  ]);
});
// routes registration
app.use('/api/v1', router);
// routes error handler
app.use((req, res) => {
  console.log('req', req.url)
  res.status(404).send({ message: 'Not Found' });
});





// start server
const port = 4000
const server = app.listen(port);
server.setTimeout(5000);

console.log(`Server listening on PORT http://localhost:${port}/api/v1`)