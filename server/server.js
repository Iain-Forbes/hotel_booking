const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
const cors = require('cors');
app.use(cors());
const MongoClient = require('mongodb').MongoClient


const createRouter = MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('bookings');
  const sightingsCollection = db.collection('bookings');
  const sightingsRouter = createRouter(sightingsCollection);
  app.use('/api/bookings', sightingsRouter);
})
.catch(console.err);

app.listen(3000, function () {
console.log(`Listening on port ${ this.address().port }`);
});