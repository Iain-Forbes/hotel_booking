import {useState, useEffect} from "react"
import BookingGrid from "./BookingGrid.js"
import BookingForm from "./BookingForm.js"
import {getBookings} from "./BookingService.js"

import './App.css';

function App() {
  const [guestBooking, setGuestBookings] = useState([])
  useEffect(() => {
    getBookings()
    .then((allBookings) =>{
      setGuestBookings(allBookings)
    })
  }, [])

  const addBooking = (booking) => { 
    const temp = guestBooking.map(booking => booking);
    temp.push(booking);
    setGuestBookings(temp); 
  }

  const delBooking = (id) => {
    const temp = guestBooking.map(booking => booking);
    const bookingToDel = temp.map(booking => booking._id).indexOf(id);
    temp.splice(bookingToDel, 1);
    setGuestBookings(temp);
  }

  const [checkIn, setcheckIn] = useState([])

  return (
    <>
    <BookingGrid bookings={guestBooking} delBooking={delBooking}/>
    <BookingForm addBooking={addBooking}/>

    </>
  );
}

export default App;
