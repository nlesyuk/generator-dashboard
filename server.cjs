const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const router = new express();

const delay = (ms = 1000) => new Promise((res, rej) => {
  setTimeout(res, ms)
})

// routes
const wifi = '/wifi'
router.get(wifi, async (req, res) => {
  await delay(1000)
  res.status(200).send([
    { id: 0, ssid: 'ssid-0' },
    { id: 1, ssid: 'ssid-1' },
    { id: 2, ssid: 'ssid-2' },
    { id: 3, ssid: 'ssid-3' },
  ]);
});

// routes error handler
app.use((req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

// routes registration
app.use('/api/v1', router);


app.use(cors())
// start server
const port = 4000
const server = app.listen(port);
server.setTimeout(5000);

console.log(`Server listening on PORT http://localhost:${port}/api/v1`)