const { Db } = require("mongodb");
use hotel;
db.dropDatabase()

db.hotel.insertMany([
    {
    name: "Joe Bloggs",
    email: 'joe@bloggs.bloggs',
    checkedIn: true
    },
    {
    name: "Steve Bloggs",
    email: 'steve@bloggs.bloggs',
    checkedIn: false
    },
    {
    name: "Gary Bloggs",
    email: 'gary@bloggs.bloggs',
    checkedIn: false
    }
])