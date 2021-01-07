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
  const bookingsCollection = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsCollection);
  app.use('/api/bookings', bookingsRouter);
})
.catch(console.err);

app.listen(3000, function () {
console.log(`Listening on port ${ this.address().port }`);
});