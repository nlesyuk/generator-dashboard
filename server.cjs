const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();  // Use express.Router() instead of 'new express()'

const delay = (ms = 1000) => new Promise((res) => {
  setTimeout(res, ms);
});

// Enable CORS middleware for all routes
app.use(cors());

// Define your routes
const wifi = '/wifi';
router.get(wifi, async (req, res) => {
  await delay(1000);
  res.status(200).send([
    { id: 0, ssid: 'ssid-0' },
    { id: 1, ssid: 'ssid-1' },
    { id: 2, ssid: 'ssid-2' },
    { id: 3, ssid: 'ssid-3' },
  ]);
});

// Register the router with the app
app.use('/api/v1', router);

// Error handler for unmatched routes
app.use((req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

// Start the server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/api/v1`);
});
server.setTimeout(5000);
