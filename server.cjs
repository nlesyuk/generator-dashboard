const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const Router = require('express');
const router = new Router();

const delay = (ms = 1000) => new Promise((res, rej) => {
  setTimeout(res, ms)
})

app.use(cors())
// routes
const wifi = '/wifi'
router.get(wifi, async (req, res) => {
  await delay()
  res.status(200).send(
    {
      status: "done",
      result: [
        {
          ssid: "Programming",
          "rssi": -37,
          "channel": 2,
          "encryption": "wpa2"
        },
        {
          ssid: "TOTOLINK N300RT",
          "rssi": -56,
          "channel": 11,
          "encryption": "wpa2"
        },
        {
          ssid: "Sotona",
          "rssi": -64,
          "channel": 1,
          "encryption": "wpa2"
        },
        {
          ssid: "Numazmat",
          "rssi": -72,
          "channel": 11,
          "encryption": "wpa2"
        },
        {
          ssid: "Number_black",
          "rssi": -74,
          "channel": 8,
          "encryption": "wpa2"
        },
        {
          ssid: "Lanet58",
          "rssi": -76,
          "channel": 3,
          "encryption": "wpa2"
        },
        {
          ssid: "netis_4A88F7",
          "rssi": -79,
          "channel": 6,
          "encryption": "wpa2"
        },
        {
          ssid: "Luigi",
          "rssi": -80,
          "channel": 6,
          "encryption": "wpa2"
        },
        {
          ssid: "TP-LINK_8BEA",
          "rssi": -83,
          "channel": 3,
          "encryption": "wpa2"
        },
      ]
    });
});

router.get('test', (req, res) => {
  res.status(200).send({ test: 1 })
});

// routes registration
app.use('/api/v1', router);
// routes error handler
app.use((req, res) => {
  console.log('req', req.url)
  res.status(404).send({ message: 'Not Found', reqUrl: req.url });
});





// start server
const port = 4000
const server = app.listen(port);
server.setTimeout(5000);

console.log(`Server listening on PORT http://localhost:${port}/api/v1`)