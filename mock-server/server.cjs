const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const routes1 = require('./routes/index.cjs');
const {
  wifi
} = routes1
console.log(routes1)
app.use(cors())

// routes
const routes = [wifi]
const ROUTE_PREFIX = '/api/v1'
for (const route of routes) {
  // routes registration
  app.use(ROUTE_PREFIX, route);
}

// routes error handler
app.use((req, res) => {
  res.status(404).send({ message: 'Not Found', reqUrl: req.url });
});





// start server
const port = 4000
const server = app.listen(port);
server.setTimeout(5000);
