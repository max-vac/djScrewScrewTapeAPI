const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const { mongoConnect } = require('./services/mongo');

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();

  server.listen(port, () => console.log('welcome to the dirty south!!!'));
};

startServer();
